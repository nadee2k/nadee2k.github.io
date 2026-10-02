---
title: Log Ingestion & Analytics Pipeline
summary: An ETL pipeline that turns raw application logs into structured analytics tables and exposes the resulting metrics over a REST API.
track: data
role: Solo project
period: "2026"
repoUrl: https://github.com/nadee2k/log-ingestion-pipeline
stack:
  - Python
  - SQL
  - ETL
  - Log Parsing
  - REST API
metrics:
  - value: Raw → queryable
    label: Log transformation
problem: >
  Application logs are written for humans debugging a live incident — unstructured,
  inconsistently formatted, and far too large to query directly. The operational
  questions that actually get asked, like error rates by endpoint over time, cannot be
  answered against that format without rebuilding the answer by hand every time.
solution: >
  I built a pipeline that treats logs as a genuine data source: parse them into
  structured records, load them into queryable tables, and publish the aggregates that
  teams actually ask for through a REST API instead of a database connection.
highlights:
  - Built the ingestion path that takes raw application logs as its input.
  - Parsed and normalised unstructured log lines into structured records.
  - Transformed and loaded the results into analytics-ready tables.
  - Exposed the derived metrics through a documented REST API.
featured: true
order: 70
---

## Logs as a first-class source

The interesting part of this project is that nothing about the log format is guaranteed.
Entries arrive with inconsistent structure, mixed severity levels and intermittent
malformed records. The transform stage therefore treats parsing as a failure-prone
operation rather than assuming well-formed input, because a parser that throws on one
bad line takes down the entire batch.

## Why serve metrics over tables

Publishing aggregates through an API rather than handing out table access means the
consumer contract stays stable when the underlying schema is refactored, and it keeps
expensive aggregation logic in one place instead of duplicating it into every dashboard
that queries it.