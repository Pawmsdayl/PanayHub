from parrot import Parrot
import torch
import random

parrot = Parrot(model_tag="prithivida/parrot_paraphraser_on_T5", use_gpu=False)
parrot.model = parrot.model.to("cpu")

phrases = parrot.augment(input_phrase="Who are the characters of Juan Tamad?", adequacy_threshold=0.0, fluency_threshold=0.0, max_return_phrases=100)

print(phrases[0])