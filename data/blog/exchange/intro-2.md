---
draft: false
title: 'Designing an Exchange from First Principles — Part II: Understanding the Architecture'
date: 2026-02-05
author: 'Loi Tran'
description: 'A walkthrough of our trading platform architecture, explaining how the web client, services, and data layers interact using Protobuf, Redis, and Postgres.'
series: 'Designing an Exchange from First Principles'
part: 2
tags:
  [
    'architecture',
    'trading platform',
    'protobuf',
    'redis',
    'postgres',
    'matching engine',
    'marketplace',
  ]
---

# Overview

<img src="/static/images/exchange-architecture-1.png" alt="Completed" />

Our trading platform consists of several core components that work together to provide fast, reliable, and consistent trading experiences. This diagram illustrates the relationships between the **Web Client**, **Marketplace**, **Matching Engine**, **Ledger**, **Redis**, **Postgres**, and **Protobuf**.

Each component serves a distinct role, and the arrows in the diagram represent how data flows between them. The diamond boxes highlight the **key interactions** and responsibilities.

---

# Components and Their Interactions

### **Web Client**

- Handles **authentication**, displays **marketplace listings**, and allows users to **place or cancel orders**.
- Queries Ledger for **account balances and trade history**.
- Interacts with services for real-time updates and ensures the UI reflects the latest market state.

### **Marketplace Service**

- Provides **real-time and historical price data** across asset classes.
- Supplies data at configurable **time intervals** (1 minute → 1 day) for specific symbols/assets.
- Serves as the **authoritative source for market catalog and pricing**.

### **Matching Service**

- Matches **buy and sell orders** according to rules and priorities.
- Publishes **executed trades** to the Ledger and updates relevant accounts.
- Queries Marketplace for **current prices or limits** when executing market or special order types.

### **Ledger Service**

- Records all **trades and transactions** to maintain accurate account balances.
- Ensures **consistency, durability, and auditability** of the system.
- Provides historical transaction data to services and clients.

### **Protobuf**

- Defines **structured messages and contracts** used for communication between all services.
- Ensures **consistency and compatibility** across Marketplace, Matching, Ledger, and Web Client.
- Serves as the **single source of truth for data formats**.

### **Redis**

- Provides **low-latency access** to hot/recent assets, session data, and transient results.
- Services check Redis first for speed, falling back to Postgres for authoritative data.
- Reduces load on Postgres while maintaining performance for frequent queries.

### **Postgres**

- Acts as the **authoritative store** for trades, orders, listings, and account balances.
- Services persist and query data here to ensure **accuracy and durability**.
- Maintains **data integrity, transactional consistency, and historical records**.

---

# Key Diamond Box Relationships

- **Web Client → Marketplace**: Requests real-time pricing and catalog data for display and trading.
- **Web Client → Matching**: Places/cancels orders and queries order status.
- **Web Client → Ledger**: Fetches balances and trade history to reflect account state.
- **Marketplace ↔ Matching**: Marketplace provides live prices; Matching queries for price validation and special order execution.
- **Matching ↔ Ledger**: Executed trades are recorded, updating balances and ensuring durability.
- **Protobuf → All Services**: Standardizes communication and data structures across the platform.
- **Redis → All Services**: Caches hot/recent assets and sessions for low-latency access.
- **Postgres → All Services**: Stores authoritative, persistent records for all transactions and state.

---

# Conclusion

This architecture ensures **speed, consistency, and reliability** by combining real-time services, caching, and persistent storage. The diamond boxes in the diagram make it easy to see **how services communicate** and what each component is responsible for.

By structuring the platform this way, we can **scale efficiently**, support **multiple asset classes**, and provide users with an **accurate, responsive trading experience**.
