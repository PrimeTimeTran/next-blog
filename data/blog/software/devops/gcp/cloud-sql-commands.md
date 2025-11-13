---
draft: true
date: '2025-09-11'
title: ''
summary: ''
tags: ['']
---

- Start an instance

```sh
gcloud sql instances patch stockvibes-pg-dev \
  --project=stockvibes-dev \
  --activation-policy ALWAYS
```

- Delete deletion protection

```sh
gcloud sql instances patch stockvibes-pg-dev \
  --project=stockvibes-dev \
  --no-deletion-protection
```
