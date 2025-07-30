---
draft: false
date: '2025-07-30'
title: 'System Design: GraphQL Crash Course'
summary: 'An introduction to GraphQL as a API communication protocol.'
tags:
  - graphql
  - system design
---

# Introduction

GraphQL is a modern API query language and runtime developed by Facebook, designed to give clients more control over the data they receive from a server. Unlike traditional REST APIs that expose fixed endpoints tied to specific data structures, GraphQL allows clients to request exactly the fields they need—nothing more, nothing less—through a single flexible endpoint. This helps reduce over-fetching and under-fetching of data, particularly in complex or data-rich applications like mobile apps. GraphQL also supports nested queries, strong typing via its schema system, and real-time updates with subscriptions, making it a powerful alternative to REST for building efficient and expressive APIs.

[Github](https://github.com/PrimeTimeTran/graphql-crud)

| Feature                     | GraphQL                                      | REST                                          |
| --------------------------- | -------------------------------------------- | --------------------------------------------- |
| **Endpoint Structure**      | Single endpoint (`/graphql`)                 | Multiple endpoints (e.g., `/users`, `/posts`) |
| **Data Fetching**           | Client specifies exact fields needed         | Server defines response; may over/under-fetch |
| **Nested Resources**        | Supports nested queries in one request       | Requires multiple round-trips                 |
| **Versioning**              | Versionless (schema evolves gracefully)      | Often requires versioning (e.g., `/v1/`)      |
| **Transport Protocol**      | Typically HTTP                               | HTTP                                          |
| **Response Format**         | JSON                                         | JSON, XML, etc.                               |
| **Typing**                  | Strongly typed via schema                    | Typically untyped or loosely documented       |
| **Real-time Support**       | Built-in support with subscriptions          | Not natively supported                        |
| **Tooling & Introspection** | Strong (e.g., GraphiQL, introspection query) | Limited, usually via external docs            |
