# Recursion

## Definition

Recursion is a technique where a function calls itself to solve a problem by breaking it into smaller subproblems of the same form.

---

## Core idea

> Solve a problem by reducing it to simpler instances of itself until reaching a base case.

---

## Components

### 1. Base case

The stopping condition:

- prevents infinite recursion
- returns a direct answer

---

### 2. Recursive case

The rule that reduces the problem:

- calls the same function on a smaller input

---

## Example

Factorial:

$$
n! = n \cdot (n-1)!
$$

Base case:

$$
0! = 1
$$

---

## Call stack behavior

Each recursive call:

- creates a new stack frame
- waits for deeper calls to return

> Recursion builds up work on the stack, then resolves it in reverse order.

---

## Types of recursion

### Linear recursion

- one recursive call per step
  Example: factorial

---

### Tree recursion

- multiple recursive calls
  Example: Fibonacci

---

### Tail recursion

- recursive call is the last operation
  (can be optimized in some languages)

---

## Key intuition

> Recursion = “trust the smaller problem is solved correctly”

You define:

- how to reduce the problem
- when to stop

---

## When to use

- problems with natural substructure
- trees and graphs (DFS)
- divide and conquer algorithms
- backtracking (combinations, permutations)

---

## Common patterns

- divide problem into subproblems
- combine results of recursive calls
- explore all possibilities (backtracking)

---

## Time complexity

Depends on:

- number of recursive calls
- work per call

Examples:

- linear recursion → $O(n)$
- tree recursion → often exponential

---

## Space complexity

- determined by recursion depth
- worst case: $O(n)$ stack space

---

## Common pitfalls

- missing base case → infinite recursion
- redundant recomputation → exponential time
- stack overflow for deep recursion

---

## Optimization

- memoization (cache results)
- convert to iteration if needed
- use tail recursion (when supported)

---

## Mental model

> Recursion builds a chain of deferred work, then resolves it backward.

---

## Summary

> Recursion is a way to express solutions in terms of smaller instances of the same problem, relying on a base case to terminate.
