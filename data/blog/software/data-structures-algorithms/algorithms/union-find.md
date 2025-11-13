---
draft: true
date: 2025-05-17
title: 'Algorithms: Union Find'
summary: 'Canonical Union Find problems on LeetCode'
tags: ['algorithms', 'data structures algorithms']
---

# Introduction

- [Disjoint Sets]()
- [Representative]()

## Problems

https://leetcode.com/problems/find-if-path-exists-in-graph - Use pure Union Find to check connectivity.
Implement Union Find then check if the source and destination nodes share a parent. If so they're inside the same component and thus a path must exist.

https://leetcode.com/problems/number-of-provinces - Count number of connected components in a graph.
Implement Union Find using the isConnected list. Afterwards create a set using find() & a loop up until `n`. The number of items in the set is the number of provinces.

https://leetcode.com/problems/redundant-connection - Find an edge creating a cycle (classic Union Find).

https://leetcode.com/problems/number-of-operations-to-make-network-connected - Union Find to count components and extra edges.
https://leetcode.com/problems/accounts-merge/description -

https://leetcode.com/problems/satisfiability-of-equality-equations -

# Conclusion
