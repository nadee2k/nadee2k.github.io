---
title: DataFlow Warehouse — Car Sales Analytics
summary: A three-layer ETL data warehouse (ODS → Staging → DW) with a dimensional star schema, automated data quality validation and visual dashboards.
track: data
role: Solo project
period: "2025 — 2026"
repoUrl: https://github.com/nadee2k/DataFlow-Warehouse
stack:
  - Python
  - pandas
  - SQLAlchemy
  - SQL
  - Dimensional Modelling
  - Star Schema
  - Data Quality Validation
metrics:
  - value: "3"
    label: Warehouse layers
  - value: "100%"
    label: Automated DQ checks
problem: >
  Car sales reporting usually lives in flat tables assembled by ad-hoc scripts. There is
  no separation between raw and transformed data, no enforced schema, and no guarantee
  that a report built this morning is describing the same logic as one built last month.
  Anyone who has to answer "why did revenue change" ends up re-deriving the numbers.
solution: >
  I designed a layered warehouse where each stage has one job: ODS holds a faithful copy
  of the source, Staging cleans and conforms it, and the data warehouse layer holds
  analytics-ready dimensional models. Validation runs between stages so a bad load
  fails loudly instead of quietly corrupting a report.
highlights:
  - "Implemented a 3-layer architecture: ODS → Staging → Data Warehouse."
  - Designed a dimensional star schema with fact and dimension tables around the sales grain.
  - Built automated data quality validation enforcing type, null and referential rules.
  - Kept raw source data isolated from transformed logic so any figure can be traced back.
  - Produced visual dashboards on top of the warehouse for sales performance review.
featured: true
order: 50
---

## Why layer the pipeline

The single most valuable decision in this project was refusing to transform data in
place. Keeping three distinct layers means:

- **ODS** is a faithful landing copy. When a transform is wrong you can always rebuild
  from it without going back to the source system.
- **Staging** is where cleaning, typing and deduplication happen. Logic here is
  disposable — it can be rewritten without any downstream impact.
- **Data Warehouse** is the stable contract. Report definitions and the star schema
  live here, so a metric means the same thing to everyone who queries it.

## Star schema

Modelling around the sales grain keeps joins predictable and avoids the fan-out traps
that appear when a flat table tries to serve both sales and product analysis at once.
Conformed dimensions mean a single date or product definition applies across every fact
table built on top of them.