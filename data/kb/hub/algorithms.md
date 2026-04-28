---
draft: true
date: 2026-04-12
title: ''
summary: ''
tags: ['']
---

# Algorithms Hub

## Purpose

This hub organizes core algorithmic techniques and problem-solving patterns used in data structures and algorithms. It focuses on _how to solve problems_, not how data is stored.

---

## Core Idea

An algorithm is a step-by-step procedure for solving a problem efficiently.

This hub is about:

- strategy selection
- pattern recognition
- optimization techniques
- problem-solving frameworks

---

## Algorithmic Thinking Framework

When approaching a problem:

1. Identify the problem type (search, optimization, traversal, etc.)
2. Recognize patterns (window, recursion, graph, DP, etc.)
3. Choose a strategy
4. Analyze complexity
5. Implement cleanly

See: [[whiteboarding-solution-delivery-framework|Whiteboarding Solution Structure]]

---

## Core Algorithm Categories

### Search Algorithms

- [[Binary Search]] — efficient search in sorted space
- Linear Search — brute-force scanning

---

### Sorting Algorithms

- [[Merge Sort]] — divide and conquer sorting
- Quick Sort — partition-based sorting
- Heap Sort — heap-based selection sorting

---

### Two-Pointer

- [[Two Pointers]]
- [[Sliding Window]]

Used for:

- arrays
- strings
- subarray problems

---

### Backtracking

- Explore all possibilities with pruning
- Used in:
  - permutations
  - combinations
  - constraint satisfaction

---

### Graph Algorithms

- [[BFS]] — level-order traversal
- [[DFS]] — depth-first traversal
- [[dijkstra|Dijkstra's Algorithm]] — shortest path
- [[Topological Sort]] — dependency ordering

See: [[Graph Theory Hub]]

---

### Greedy Algorithms

- Make locally optimal choices
- May lead to global optimum in structured problems

Common examples:

- interval scheduling
- minimum spanning tree (Kruskal, Prim)

---

### Dynamic Programming

- [[Dynamic Programming (DP)]]
- [[2D DP]]
- Memoization vs Tabulation

Key idea: reuse overlapping subproblems

---

## Problem-Solving Patterns

- Divide and Conquer
- Sliding Window Optimization
- Prefix/Suffix Processing
- Graph Traversal Patterns
- State Exploration (DP / Backtracking)

---

## Complexity Awareness

Every algorithm should be evaluated for:

- Time complexity (runtime growth)
- Space complexity (memory usage)

See: [[Complexity Analysis Hub]]

---

## Algorithm Design Principles

- Prefer clarity before optimization
- Reduce problem to known patterns
- Eliminate unnecessary state
- Trade space for time when useful
- Avoid recomputation

---

## Common Mistakes

- Overengineering simple problems
- Not recognizing known patterns
- Ignoring edge cases early
- Mixing brute force with partial optimization incorrectly
- Forgetting complexity analysis step

---

## Entry Path (Learning Order)

1. [[Binary Search]]
2. [[Two Pointers]]
3. [[Sliding Window]]
4. [[Backtracking]]
5. [[DFS]] / [[BFS]]
6. [[Greedy]]
7. [[Dynamic Programming (DP)]]
8. [[Shortest Path Algorithms]]

---

# Related

- [[complexity-analysis|Complexity Analysis Hub]]
- [[big-o|Big O]]
- [[Data Structures Hub]]
- [[Graph Theory Hub]]

---
