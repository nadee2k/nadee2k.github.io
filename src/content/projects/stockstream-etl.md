---
title: StockStream ETL — Market Data Pipeline
summary: An automated daily pipeline that collects, cleans and stores stock market data into a structured database designed for time-series analysis.
track: data
role: Solo project
period: "2026"
stack:
  - Python
  - SQL
  - ETL
  - Scheduled Jobs
  - Time-Series Storage
problem: >
  Historical price data is easy to obtain retrospectively and awkward to maintain
  prospectively. Anything collected ad hoc goes stale, and a dataset that has to be
  re-downloaded and re-cleaned every time it is needed is a dataset that quietly drifts
  out of date.
solution: >
  I automated daily collection so the dataset grows on its own, with cleaning applied on
  the way in and a schema designed around the queries the data is actually for —
  time-series analysis over price and volume rather than generic row storage.
highlights:
  - Automated daily collection so the dataset grows without manual intervention.
  - Built a cleaning stage that runs before data is stored.
  - Designed a structured schema optimised for time-series analysis.
  - Stored the result in a relational database for downstream querying.
featured: false
order: 120
repoUrl: https://github.com/nadee2k/StockStream-ETL
---

## Schema as a decision

Storing market data in a generic table and hoping queries will be fast enough stops
working as the history grows. Designing the schema around the access pattern — indexed
by instrument and date, with OHLCV in typed columns — is what keeps multi-year queries
responsive. The collection automation and the schema design are really one decision:
you cannot collect on a schedule into a layout that cannot serve the questions.