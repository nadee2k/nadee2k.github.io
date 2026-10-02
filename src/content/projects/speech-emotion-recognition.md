---
title: Real-Time Speech Emotion Recognition
summary: A deep learning classifier for 8 emotional classes, comparing CNN, LSTM and Transformer architectures with augmentation for noisy audio.
track: ml
role: Solo project
period: "2025 — 2026"
stack:
  - Python
  - TensorFlow
  - PyTorch
  - CNN
  - LSTM
  - Transformers
  - REST API
metrics:
  - value: "~88%"
    label: Accuracy
  - value: "8"
    label: Emotion classes
  - value: "4"
    label: Architectures compared
problem: >
  Speech emotion recognition has to work on recordings that are noisy, short and
  inconsistent in volume. Models that score well on clean curated datasets tend to
  collapse on real microphone input, so robustness to recording conditions matters as
  much as raw accuracy.
solution: >
  I trained and compared four model families on the same audio features — CNN, LSTM,
  a Transformer encoder and a hybrid of the three — then hardened the winner against
  recording noise by augmenting the training set. The trained model is served behind a
  REST API so predictions can be requested from a live audio stream.
highlights:
  - Trained and compared CNN, LSTM, Transformer and hybrid architectures on a shared pipeline.
  - Classified 8 emotional categories at roughly 88% accuracy.
  - "Applied signal-level data augmentation: noise injection, pitch shifting and time stretching."
  - Built a REST API and web interface for live audio prediction.
  - Optimised batch inference and the real-time processing path.
featured: true
order: 20
---

TODO(owner): the public repository for this project has not been located yet — the
`repoUrl` field is intentionally omitted so this card renders without a dead link.
Supply the correct URL and it will appear automatically.

## Model comparison

Rather than committing to one architecture, I trained four families against the same
feature pipeline and compared them on held-out data:

- **CNN** — strong local-pattern capture on spectrogram features.
- **LSTM** — models the temporal evolution of a spoken utterance.
- **Transformer** — self-attention over the full sequence without recurrence.
- **Hybrid** — convolutional feature extraction feeding recurrent or attention layers.

## Robustness to recording conditions

The gap between benchmark accuracy and real-world accuracy is usually a data problem,
not a model problem. Augmenting with additive noise, pitch shifting and time stretching
exposes the model to the kind of variation a real microphone introduces — clipped audio,
varying distance from the mic, background hum — which is what closed the gap between the
validation score and live performance.