---
title: Comparison Data Pipeline
summary: A pipeline addressing the reliability and cost problems that emerge as data volume grows, using incremental loading and data quality checks.
track: data
role: Solo project
period: "2026"
stack:
  - Python
  - SQL
  - Incremental Loading
  - Data Quality Checks
  - ETL
problem: >
  A pipeline that is quick on ten thousand rows becomes the bottleneck at ten million.
  Full reloads grow slower than the data, cost more to run each cycle, and restart from
  zero whenever something fails partway through — so the pipeline becomes less reliable
  exactly as it becomes more important.
solution: >
  I designed a pipeline that only processes what has actually changed, with data quality
  checks positioned to catch corruption before it propagates downstream. That keeps both
  runtime and cost proportional to new data rather than total data.
highlights:
  - Implemented incremental loading so cost scales with new data, not total data.
  - Added data quality checks that fail the run rather than propagating bad rows.
  - Reduced recovery cost by allowing a failed cycle to resume instead of restarting.
  - Documented the scaling behaviour that motivated the incremental design.
featured: false
order: 140
repoUrl: https://github.com/nadee2k/comparison-data-pipeline
---

## The scaling argument

The cost profile is the whole design. A full reload does constant expensive work on
every run regardless of how much has changed, and worse, any failure discards all of it.
Incremental loading converts a cost that grows with total volume into one that grows with
the delta — which is the difference between a pipeline that stays maintainable and one
that becomes the thing people work around.