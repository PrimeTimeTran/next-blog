# Pattern: Cache-First Architecture

## Intent

Use caching as the primary read path optimization strategy, where the system checks a cache layer before falling back to the source of truth (database or service).

---

## When this pattern applies

Use this pattern when:

- Read traffic significantly exceeds write traffic
- Latency is critical (sub-millisecond to low millisecond targets)
- Data can tolerate eventual consistency
- Repeated reads of the same or similar data are expected

Typical systems:

- Feed timelines
- Product listings
- Profile pages
- API response aggregation

---

## Core idea

> Serve requests from cache whenever possible; treat the database as a fallback, not the first stop.

---

## High-level flow

1. Client requests data
2. Check cache

   - If **hit** → return cached value
   - If **miss** → query source of truth

3. Store result in cache
4. Return response

---

## Variants

### 1. Cache-aside (lazy loading)

- Application manages cache manually
- Most common approach

### 2. Read-through cache

- Cache layer automatically loads missing data
- Application unaware of cache misses

### 3. Write-through cache

- Writes go through cache and database simultaneously

---

## Decision signals

Use cache-first when:

- Read-heavy workload (R >> W)
- Data is expensive to compute or fetch
- Slight staleness is acceptable
- You need to reduce database load

Avoid or limit when:

- Strong consistency is required
- Write-heavy workloads dominate
- Data changes frequently and unpredictably

---

## Tradeoffs

| Dimension   | Benefit                      | Cost                          |
| ----------- | ---------------------------- | ----------------------------- |
| Latency     | Much lower read latency      | Cache management overhead     |
| Scalability | Reduces DB load              | Cache invalidation complexity |
| Consistency | Accepts eventual consistency | Risk of stale reads           |
| Complexity  | Simple read path             | Harder debugging              |

---

## Key mental model

> Cache-first systems optimize for read speed by shifting work away from the database and into an in-memory layer.

---

## Common failure modes

- Stale cache data due to poor invalidation strategy
- Cache stampede (many requests on cache miss)
- Over-caching rarely used data
- Treating cache as source of truth

---

# Related patterns

- Write-back vs write-through caching
- Cache invalidation strategies
- Event-driven cache updates
- Sharding + distributed cache systems
