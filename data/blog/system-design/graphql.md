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

## Overview

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

## 1. Operation Names & Variables

Variables let you pass dynamic values into queries and mutations, keeping them reusable and secure.
Operation names label your query or mutation, making it easier to debug, log, or run multiple operations in the same request.

```
query GetUser($id: ID!) {
  user(id: $id) {
    name
  }
}
```

## 2. Input Types: Instead of passing multiple arguments, use a structured input type — especially helpful for mutation payloads.

```
input CreateUserInput {
  firstName: String!
  lastName: String!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
}
```

## 3. Enums: GraphQL supports enum types to restrict fields to a limited set of values.

```
enum Role {
  USER
  ADMIN
}

type User {
  role: Role!
}
```

## 4. Fragments

Useful for reusing field selections across queries.

## 5. Directives (like @include / @skip)

```
query GetUser($withEmail: Boolean!) {
  user(id: "123") {
    id
    name
    email @include(if: $withEmail)
  }
}
```

## 6. Aliases

Rename fields in your response (useful when calling the same field multiple times).

```
{
  currentUser: user(id: "1") {
    name
  }
  otherUser: user(id: "2") {
    name
  }
}
```

## 7. Pagination

Two main styles:

- Offset-based (limit, offset)
- Cursor-based (with edges, pageInfo)

Cursor-based is more scalable for large datasets.

## 8. Nested Resolvers

You might already be doing this, but:

- Parent → child relationships
- Example: user.posts where posts is resolved per user

## 9. Subscriptions (Advanced)

```
subscription OnMessageSent {
  messageSent {
    content
    sender
  }
}
```
