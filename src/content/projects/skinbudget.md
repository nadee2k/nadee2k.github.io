---
title: SkinBudget — Skincare Decision Engine
summary: A recommendation engine that helps users choose skincare products within their actual budget, filtered by skin type and ingredient profile.
track: product
role: Solo project
period: "2026"
stack:
  - Python
  - Recommendation Logic
  - Ingredient Matching
  - Data Filtering
problem: >
  Skincare advice online optimises for the most expensive option in every category,
  because that is what affiliate revenue rewards. Users with a fixed budget are left to
  work out on their own which products actually suit their skin type and which
  ingredients matter for their concern — advice that is scattered, inconsistent and
  usually aimed at a different market.
solution: >
  I built a decision engine that treats budget as a hard constraint rather than an
  afterthought. Users state their budget, skin type and concern, and the engine scores
  and returns products that match the ingredient profile their skin needs while
  respecting the spending limit they actually set.
highlights:
  - Built a product recommendation engine with budget as a primary filter.
  - Matched products against skin type and relevant ingredient profiles.
  - Encoded domain reasoning as explicit scoring logic rather than opaque scoring.
  - Tailored the product catalogue and assumptions to the Sri Lankan market.
featured: false
order: 110
repoUrl: https://github.com/nadee2k/SkinBudget-Smart-Skincare-Decision-Engine-Sri-Lanka-
---

## Why budget belongs in the model

Most recommendation systems optimise for relevance and treat price as a display
attribute. That assumption fails badly for a consumer purchase where the working
envelope is a monthly amount rather than an open-ended budget — a technically superior
product the user cannot afford is not a useful recommendation.

Encoding budget as a constraint at scoring time, rather than filtering it out at the
end, changes the result set meaningfully: the engine has to find genuinely better
options within the limit instead of just deleting the expensive ones.