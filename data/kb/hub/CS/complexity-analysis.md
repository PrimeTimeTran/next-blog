# Complexity Analysis

## Purpose

This hub organizes how to reason about algorithm efficiency in terms of time and space. It focuses on comparing approaches, understanding growth rates, and choosing efficient solutions.

---

## Core Idea

Complexity describes how runtime and memory usage grow as input size increases.

- Notation: [[big-o|Big O]], [[big-omega|Big Ω]], [[big-theta|Big Θ]]
- Focus: worst-case growth behavior (most common in practice)

---

## Foundational Concepts

- [[big-o|Big O Notation]] — upper bound on growth rate
- [[big-omega|Big Omega Notation Ω]] — lower bound behavior
- [[big-theta|Big Theta Notation θ]] — tight bound (exact growth class)
- [[Time Complexity]] — runtime growth with input size
- [[Space Complexity]] — memory usage growth

---

## Common Complexity Classes

### Constant

- [[O(1)]]
- Access does not depend on input size

### Logarithmic

- [[O(log n)]]
- Growth reduces problem size each step (e.g. binary search)

### Linear

- [[O(n)]]
- Processes each element once

### Linearithmic

- [[O(n log n)]]
- Common in efficient sorting algorithms

### Quadratic

- [[O(n²)]]
- Nested iteration over input

### Exponential

- [[O(2ⁿ)]]
- Rapid growth; often brute force recursion

### Factorial

- [[O(!n)]]
- Rapid growth; often brute force recursion

---

## How to Think About Complexity

When analyzing an algorithm:

1. Identify dominant operations
2. Count how many times they execute
3. Ignore constants and lower-order terms
4. Focus on growth as input increases

---

## Patterns That Affect Complexity

### Loops

- Single loop → usually O(n)
- Nested loops → often O(n²)

### Recursion

- Depends on branching factor and depth
- Often analyzed with recursion trees or Master Theorem

### Divide & Conquer

- Splits problem into subproblems (often O(log n) depth)

### Data Structure Choice

- Array vs HashMap vs Tree affects lookup/insert complexity

---

## Common Algorithm Examples

- Binary Search → O(log n)
- Merge Sort → O(n log n)
- Quick Sort (average) → O(n log n)
- HashMap lookup → O(1) average
- Tree traversal → O(n)
- BFS / DFS → O(V + E)

---

# Related

- [[big-o|Big O]]
- [[dsa|Data Structures & Algorithms]]
- [[algorithms|Algorithms]]
- [[graph-theory|Graph Theory]]

---

## Common Mistakes

- Confusing average vs worst-case
- Ignoring hidden nested loops in helper functions
- Treating constants as meaningful growth
- Forgetting space complexity

---

## Entry Strategy

---

If you're learning:

1. Start with [[big-o|Big O Notation]]
2. Then learn each class (O(1), O(n), O(log n))
3. Then apply it to algorithms (sorting, searching, graphs)
4. Then refine with recursion + advanced analysis

---
