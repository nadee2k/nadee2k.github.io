---
title: Real-Time E-Commerce Analytics Platform
summary: A production-style platform that ingests live user activity alongside historical orders, validates quality, and serves analytics through a warehouse, dashboards and an API.
track: data
role: Solo project
period: "2026"
repoUrl: https://github.com/nadee2k/Real-Time-E-Commerce-Analytics-Platform
stack:
  - Python
  - SQL
  - Apache Kafka
  - Apache Airflow
  - PostgreSQL
  - Docker
  - FastAPI
  - Analytics Engineering
architecture: /assets/architecture/ecommerce-architecture.svg
metrics:
  - value: "2"
    label: Ingestion modes
  - value: "1"
    label: Unified analytics model
problem: >
  Retail teams cannot answer basic questions in time. Behavioural signals — what a
  customer is doing on the site right now — and transactional history live in different
  systems, arrive on different schedules, and are reconciled by hand. By the time a
  manual report reflects the morning, the conversion drop that caused it is over.
solution: >
  I built a platform that treats both streams as first-class inputs: live events arrive
  through Kafka and are processed continuously, while historical orders are loaded in
  batch through Airflow. Both land in the same validated warehouse model so a single
  query can answer both "what is happening now" and "how does this compare to March".
highlights:
  - Built real-time event ingestion alongside a batch path for historical order data.
  - Orchestrated the batch pipeline with Apache Airflow and containerised it with Docker.
  - Implemented data quality validation before data reaches the reporting layer.
  - Designed a warehouse-style analytical model serving both streaming and batch sources.
  - Exposed processed data and metrics through a FastAPI service for downstream consumers.
featured: true
order: 60
---

## The core problem: two clocks

Most retail analytics fails not because the data is missing but because the data arrives
at different speeds and nobody has decided which one wins. Streaming tells you what is
happening; batch tells you what is true. Treating them as competing sources produces
dashboards that contradict each other.

![Real-Time E-Commerce Analytics Platform architecture](/assets/architecture/ecommerce-architecture.svg)

The approach here is to give each source the mechanism it actually needs — Kafka for
events that must be processed as they occur, Airflow for scheduled historical loads —
and then converge them into one validated model, so downstream consumers never have to
know which path a given row arrived on.

## Serving layer

FastAPI exposes the processed metrics rather than exposing the database directly. That
keeps the analytical schema free to change as requirements evolve, because consumers
depend on the endpoint contract rather than on table layouts.