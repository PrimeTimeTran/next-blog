---
draft: true
date: '2022-04-28'
title: 'Algorithms: Dynamic Programming'
summary: ''
tags: ['dsa']
---

# Dynamic Programming (DP)

## Definition

Dynamic Programming is a technique for solving problems by breaking them into smaller subproblems, solving each once, and storing their results to avoid recomputation.

---

## Core idea

> DP trades computation for memory by caching results of overlapping subproblems.

---

## When to use DP

DP applies when a problem has:

### 1. Overlapping subproblems

- same subproblems are solved multiple times

### 2. Optimal substructure

- the optimal solution can be built from optimal solutions of smaller subproblems

---

## Two main approaches

### 1. Top-down (memoization)

- recursive solution
- cache results

```id="1zq3ld"
def dp(x):
    if x in memo:
        return memo[x]
    memo[x] = ...
    return memo[x]
```

---

### 2. Bottom-up (tabulation)

- iterative solution
- build from smallest subproblems

```id="o7k2qp"
dp[0] = base
for i in range(1, n):
    dp[i] = ...
```

---

## State definition

The most important step:

> Define what each subproblem represents

Examples:

- `dp[i]` → answer using first $i$ elements
- `dp[i][j]` → answer for state $(i, j)$

---

## Transition (recurrence relation)

Defines how to compute a state:

$$
dp[i] = \text{function of previous states}
$$

Example (Fibonacci):

$$
dp[i] = dp[i-1] + dp[i-2]
$$

---

## Base cases

Initial known values:

- anchor the recursion / iteration

---

## Example: Coin Change (min coins)

$$
dp[x] = \min(dp[x - c_1], dp[x - c_2], \dots) + 1
$$

---

## Time complexity

Typically:

$$
O(\text{number of states} \times \text{work per state})
$$

---

## Space complexity

- depends on number of stored states
- can often be optimized

---

## Common patterns

- 1D DP (arrays)
- 2D DP (grids, strings)
- knapsack-type problems
- interval DP
- bitmask DP

---

## Key intuition

> DP is about solving a problem once per state, instead of recomputing it many times.

---

## When NOT to use DP

- no overlapping subproblems
- greedy solution exists
- problem is simple iteration or direct formula

---

## Common pitfalls

- incorrect state definition
- missing base cases
- wrong transition relation
- unnecessary dimensions

---

## Mental model

> DP = caching the results of a recursive search over a state space.

---

## Summary

> Dynamic Programming systematically explores a problem’s state space while storing intermediate results to achieve efficient computation.
