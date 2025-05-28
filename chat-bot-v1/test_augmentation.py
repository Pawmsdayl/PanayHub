import pandas as pd
from sklearn.model_selection import KFold
from collections import defaultdict
import os
import random
import yaml


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



