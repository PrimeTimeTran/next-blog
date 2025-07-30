---
draft: false
date: 2025-07-30
title: 'System Design: Key Numbers'
summary: 'A list of the most common numbers to know for system design interviews & back of the envelope calculations.'
tags:
  - system design
---

# Introduction

System Design by the Numbers: A Mental Model for Latency, Load, and Storage follows.

## ✅ Basic Computer Science Constants

| Concept | Value                       |
| ------- | --------------------------- |
| 1 Byte  | 8 bits                      |
| 1 KB    | 1024 Bytes                  |
| 1 MB    | 1024 KB (\~1 million bytes) |
| 1 GB    | 1024 MB (\~1 billion bytes) |
| 1 TB    | 1024 GB                     |

## ✅ Time Units

| Unit   | Symbol          | Meaning                              |
| ------ | --------------- | ------------------------------------ |
| ns     | nanosecond      | 1 billionth of a second (10⁻⁹ s)     |
| **µs** | **microsecond** | **1 millionth of a second (10⁻⁶ s)** |
| ms     | millisecond     | 1 thousandth of a second (10⁻³ s)    |
| s      | second          | 1 second (10⁰ s)                     |

## ✅ Latency Benchmarks (Rule of Thumb)

These help you reason about how long certain operations take.

| Operation                        | Approx Time |
| -------------------------------- | ----------- |
| L1 cache reference               | \~0.5 ns    |
| L2 cache reference               | \~7 ns      |
| Main memory (RAM) access         | \~100 ns    |
| SSD read (local)                 | \~100 µs    |
| HDD read (seek+read)             | \~10 ms     |
| Roundtrip within same datacenter | \~0.5 ms    |
| Roundtrip between datacenters    | \~100 ms    |

## ✅ Bandwidth Estimates

| Operation           | Speed (ballpark) |
| ------------------- | ---------------- |
| 1 Gbps network      | \~125 MB/s       |
| 10 Gbps network     | \~1.25 GB/s      |
| SATA SSD read/write | \~500 MB/s       |
| NVMe SSD read/write | \~3–5 GB/s       |
| RAM bandwidth       | \~10–30 GB/s     |

## ✅ Common Design Numbers

| Context                     | Estimate                          |
| --------------------------- | --------------------------------- |
| Disk seek time              | 5–10 ms                           |
| DB write latency (local)    | \~1–10 ms                         |
| Kafka throughput per broker | \~100 MB/s (varies)               |
| Redis GET latency           | \~0.5–1 ms                        |
| Web request latency target  | < 100 ms (good), <1s (acceptable) |

## ✅ User Behavior Numbers

| Context                         | Estimate                     |
| ------------------------------- | ---------------------------- |
| Tweets per second               | \~6,000 TPS (2023 avg)       |
| Facebook photo uploads          | \~300 million/day (\~3.5k/s) |
| 1 million users: 1% concurrency | \~10,000 concurrent users    |

## ✅ Storage Size Approximations

| Item                    | Size (approximate)       |
| ----------------------- | ------------------------ |
| Text message            | \~1 KB                   |
| Tweet                   | \~1–2 KB (with metadata) |
| Web page HTML           | \~50–200 KB              |
| Image (compressed JPG)  | \~100 KB – 2 MB          |
| Video (HD 1080p, 1 min) | \~60–100 MB              |
