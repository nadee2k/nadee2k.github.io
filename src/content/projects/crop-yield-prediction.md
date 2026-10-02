---
title: Crop Yield Prediction App
summary: A Streamlit web application that predicts crop yield from environmental inputs like rainfall, temperature and soil composition.
track: ml
role: Solo project
period: "2025 — 2026"
repoUrl: https://github.com/nadee2k/crop_yield_prediction
stack:
  - Python
  - Scikit-learn
  - Pandas
  - Streamlit
metrics:
  - value: Streamlit
    label: Deployed UI
  - value: Multi-input
    label: Environmental features
problem: >
  Yield planning happens months before harvest, but the available signals are scattered
  across weather records and soil surveys that a farmer has to reconcile manually.
  Getting an answer requires someone who can build a model and interpret it, which is
  not a realistic ask at the point of decision.
solution: >
  I packaged a trained yield model as a Streamlit application that takes the
  environmental factors a farmer actually has — rainfall, temperature, soil composition
  and crop type — and returns an estimated yield through an interactive interface.
highlights:
  - Built a Streamlit front end so predictions need no command line or coding.
  - Trained the underlying model on environmental and soil features.
  - Handled categorical soil and crop inputs alongside continuous weather variables.
  - Kept the inference path in a served application rather than a notebook.
featured: true
order: 40
---

## Designing for a non-technical user

The model is the easy part; the interface is the actual deliverable. A Streamlit app
constrains the input surface to a handful of meaningful fields, which means the person
using it never has to know what a feature vector is. Everything the model consumes has
to be collectable from a phone and a weather report, or the prediction is unusable in
practice no matter how good it is.