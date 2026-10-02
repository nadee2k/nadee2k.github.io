---
title: Production-Ready RAG Pipeline
summary: A modular Retrieval-Augmented Generation system built with FAISS and OpenAI, structured for testability, clear separation of concerns and containerised deployment.
track: data
role: Solo project
period: "2026"
repoUrl: https://github.com/nadee2k/rag-ai-pipeline
stack:
  - Python
  - FAISS
  - OpenAI
  - Docker
  - FastAPI
  - Pytest
metrics:
  - value: "8"
    label: Modules
  - value: "2"
    label: Test suites
problem: >
  RAG demos tend to live in one notebook where ingestion, retrieval, prompting and
  generation are interleaved. That works until the corpus changes, a retrieval miss needs
  debugging, or the thing has to run on a schedule — at which point the prototype cannot
  be tested, extended or deployed without a rewrite.
solution: >
  I built the system as separate modules with one responsibility each: loading and
  preprocessing raw documents, building the vector index, retrieving context, and
  generating the answer. Each stage is independently testable, and the whole service is
  containerised so it runs the same way locally and in production.
highlights:
  - Split ingestion, embedding, retrieval, generation and logging into discrete modules.
  - Built the FAISS vector index with dedicated scripts for preprocessing and querying.
  - Exposed the pipeline through a FastAPI service backed by Docker.
  - Added unit tests covering the retrieval and pipeline layers.
  - Used environment-based configuration with a committed `.env.example` and `.gitignore`.
featured: true
order: 80
---

## Why the module split matters

The reason this project is structured this way is testability. Retrieval quality is the
component most likely to break silently — a bad chunking strategy still returns results,
just worse ones — so isolating it behind a clean interface means it can be asserted
against directly instead of being inferred from generated text.

## Configuration and secrets

API keys are read from the environment with a committed `.env.example` documenting every
required variable, and a `.gitignore` that keeps the real `.env` out of version control.
Configuration is resolved in one module so nothing else in the codebase reaches into
`os.environ`.