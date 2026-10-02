---
title: Emotion Tracking with Computer Vision
summary: A real-time emotion analysis application that reads facial expression from live video, separate from and complementary to the audio-based model.
track: ml
role: Solo project
period: "2026"
repoUrl: https://github.com/nadee2k/track-emotions
stack:
  - Python
  - Computer Vision
  - Deep Learning
  - Face Detection
  - Real-time Inference
  - Flask
metrics:
  - value: Real-time
    label: Video inference
  - value: Multi-class
    label: Emotion output
problem: >
  Audio-based emotion recognition depends on the speaker cooperating — it fails entirely
  in silence, on a muted call, or when there is no speech to analyse. Visual signals
  carry the same information independently, so pairing the two gives coverage that
  neither can provide alone.
solution: >
  I built a computer vision pipeline that detects faces in a live video stream and
  classifies their expression in real time. Where the speech model reads vocal tone,
  this one reads facial geometry, which makes it the only one of the two that functions
  when audio is unavailable.
highlights:
  - Real-time frame-by-frame emotion classification from a live video source.
  - Face detection and tracking as the front stage before classification.
  - Serves predictions through a lightweight Flask web interface.
  - "Complements the audio pipeline: works in silence, where speech analysis cannot."
featured: true
order: 30
---

## Why build a second modality

These two projects answer different situations rather than competing with each other.
The speech model is more accurate when a person is speaking, because vocal tone carries
emotional signal that facial expression does not. The vision model is the one that keeps
working when someone is not speaking — no tone of voice, no audio features at all.

Treating them as one system with two input paths gives continuous coverage, which is
the more useful engineering outcome than either model in isolation.