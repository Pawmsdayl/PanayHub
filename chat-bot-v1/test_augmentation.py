import pandas as pd
from sklearn.model_selection import KFold
from collections import defaultdict
import os
import random
import yaml
import subprocess

df = pd.read_excel("dataset.xlsx")  

# Group queries by intent
grouped = defaultdict(lambda: {"human": [], "augmented": []})

for _, row in df.iterrows():
    grouped[row["Intent"]][row["Source"]].append(row["Query"])

# K-Fold settings
k = 5
folds = []

# Create k folds
for fold_id in range(k):
    train_data = []
    test_data = []

    for intent, sources in grouped.items():
        human_queries = sources["human"]
        augmented_queries = sources["augmented"]

        # Shuffle to randomize
        random.shuffle(human_queries)

        n_test = max(1, int(0.2 * len(human_queries)))
        fold_start = fold_id * n_test
        fold_end = fold_start + n_test

        # Rotate through human queries for each fold
        test_human = human_queries[fold_start:fold_end]
        train_human = human_queries[:fold_start] + human_queries[fold_end:]

        # Augmented goes only to training
        train_data.extend([(q, intent) for q in train_human + augmented_queries])
        test_data.extend([(q, intent) for q in test_human])

    folds.append((train_data, test_data))

import json
import os

def rasa_format_yaml(examples):
    data = {"version": "3.1", "nlu": []}
    intents = {}

    for query, intent in examples:
        if intent not in intents:
            intents[intent] = []
        intents[intent].append(query)

    for intent, queries in intents.items():
        data["nlu"].append({
            "intent": intent,
            "examples": "\n".join([f"- {q}" for q in queries])
        })

    return data


for i, (train, test) in enumerate(folds):
    fold_dir = f"fold_{i}"
    os.makedirs(fold_dir, exist_ok=True)

    # Save training data
    with open(os.path.join(fold_dir, "nlu_train.yml"), "w", encoding="utf-8") as f:
        yaml.dump(rasa_format_yaml(train), f, allow_unicode=True, sort_keys=False)

    # Save test data
    with open(os.path.join(fold_dir, "nlu_test.yml"), "w", encoding="utf-8") as f:
        yaml.dump(rasa_format_yaml(test), f, allow_unicode=True, sort_keys=False)

all_results = {}

for i in range(5):
    print(f"Testing Fold {i}")
    # Ensure output directory exists
    os.makedirs(f"results/fold_{i}", exist_ok=True)

    subprocess.run([
    "rasa", "train", "nlu",
    "--config", "config.yml",
    "--nlu", f"fold_{i}/nlu_train.yml",
    "--out", f"models/fold_{i}"
    ])

    # Run test and store logs
    result = subprocess.run([
        "rasa", "test", "nlu",
        "--nlu", f"fold_{i}/nlu_test.yml",
        "--model", f"models/fold_{i}"
    ], capture_output=True, text=True)

    # Load intent classification metrics from Rasa's auto-generated file
    report_path = "results/intent_report.json"
    if os.path.exists(report_path):
        with open(report_path, "r", encoding="utf-8") as f:
            metrics = json.load(f)
        all_results[f"fold_{i}"] = metrics
        # Move the result file into fold-specific directory
        os.replace(report_path, f"results/fold_{i}/intent_report.json")
    else:
        all_results[f"fold_{i}"] = {
            "error": "intent_report.json not found",
            "stdout": result.stdout,
            "stderr": result.stderr,
            "returncode": result.returncode
        }

# Save all test results into a JSON file
os.makedirs("results", exist_ok=True)
with open("results/all_test_results.json", "w", encoding="utf-8") as f:
    json.dump(all_results, f, indent=4)