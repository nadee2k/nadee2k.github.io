---
title: End-to-End Customer Churn Prediction
summary: A churn classifier built for imbalance and interpretability, reaching 75%+ precision with SHAP explanations and a served Streamlit dashboard.
track: ml
role: Solo project
period: "2025"
repoUrl: https://github.com/nadee2k/End-to-End-Guide-Customer-Churn-Prediction-Project
stack:
  - Python
  - Scikit-learn
  - XGBoost
  - LightGBM
  - imbalanced-learn
  - SHAP
  - Streamlit
metrics:
  - value: "75%+"
    label: Precision
  - value: "30+"
    label: Engineered features
  - value: "4"
    label: Models benchmarked
problem: >
  Churn datasets are dominated by retained customers, so a model can score well on
  accuracy while being useless to the business. Retention teams also refuse to act on
  a black-box score — they need to know which feature drove a given prediction before
  they will spend outreach budget against it.
solution: >
  I built the full pipeline from ingestion through to a served model, treating class
  imbalance and explainability as first-class requirements rather than afterthoughts.
  Imbalance was handled with SMOTE resampling alongside class weights, and every model
  was evaluated on ROC-AUC and PR-AUC in addition to F1 so that the rare positive
  class was actually being measured.
highlights:
  - "Built the complete pipeline: ingestion, preprocessing, feature engineering, training, evaluation and deployment."
  - Engineered 30+ behavioural and financial features from raw account and transaction records.
  - Addressed severe class imbalance using SMOTE oversampling combined with class-weight tuning.
  - Benchmarked Logistic Regression, Random Forest, XGBoost and LightGBM on a common evaluation harness.
  - Evaluated with ROC-AUC, PR-AUC and F1-score so the minority class was measured properly.
  - Added SHAP value explanations so any individual prediction can be traced back to the features behind it.
  - Deployed an interactive Streamlit dashboard for real-time scoring and visual exploration.
featured: true
order: 10
---

## Approach

The pipeline is deliberately linear so each stage can be inspected and swapped
independently:

1. **Ingestion** — load the raw account, contract and billing records.
2. **Preprocessing** — impute missing values, encode categoricals, scale where required.
3. **Feature engineering** — derive 30+ behavioural and financial features, including
   tenure bands, spend velocity, support-contact frequency and payment-reliability signals.
4. **Imbalance handling** — SMOTE oversampling of the minority class combined with class
   weights, so the model is not simply optimising for the majority.
5. **Training and comparison** — four model families trained on the same folds.
6. **Evaluation** — ROC-AUC and PR-AUC alongside F1, because accuracy is misleading here.
7. **Deployment** — the selected model is exposed through a Streamlit dashboard.

## Why PR-AUC matters here

With a heavily imbalanced target, a model can look excellent on accuracy while
detecting almost none of the churners. The precision-recall curve isolates performance
on the positive class, so model selection was driven by that curve rather than by the
headline accuracy number.

## Explainability

SHAP values give a per-prediction attribution for every feature, which turns the model
from an opaque score into something a retention team can act on: the dashboard shows not
just *that* a customer is at risk, but which behaviours contributed to that risk.