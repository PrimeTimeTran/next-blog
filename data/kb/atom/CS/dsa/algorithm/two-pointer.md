# Two Pointer Algorithm — Atom

## Definition

The Two Pointer Algorithm is a problem-solving technique that uses two indices (pointers) to traverse a data structure—typically arrays or linked lists—in a coordinated way to reduce time complexity, often from $O(n^2)$ to $O(n)$.

---

## Core Idea

> Instead of checking all pairs or combinations, maintain two pointers that move through the structure in a controlled pattern to efficiently explore relationships.

---

## When to use it

Two pointers are useful when:

- working with sorted arrays
- searching for pairs or ranges
- partitioning or rearranging elements
- detecting patterns in sequences

---

## Basic Types

## 1. Opposite Direction (Left–Right)

Pointers start at both ends and move inward.

Example pattern:

- find pair with target sum in sorted array

---

## 2. Same Direction (Sliding Window variant)

Both pointers move forward.

Example pattern:

- longest substring problems
- subarray sum constraints

---

## Core Mechanism

### Opposite direction:

1. Initialize:

   - `left = 0`
   - `right = n - 1`

2. While `left < right`:

   - evaluate condition
   - move one pointer depending on result

---

### Same direction:

1. Initialize:

   - `left = 0`
   - `right = 0`

2. Expand or shrink window based on condition

---

## Key Idea

> Two pointers exploit ordering or structure to avoid redundant comparisons by maintaining a moving relationship between indices.

---

## Why it works

It reduces complexity by:

- avoiding nested loops
- reusing previous computations
- maintaining invariant relationships between pointers

---

## Common Patterns

### 1. Pair finding (sorted arrays)

- sum equals target
- closest pair problems

---

### 2. Partitioning

- move zeros to end
- segregating values

---

### 3. Sliding window

- longest substring without repetition
- maximum subarray constraints

---

### 4. Palindrome checking

- compare characters from both ends

---

## Example Intuition

Sorted array:

```
[1, 2, 4, 7, 11]
```

To find target sum:

- start left at smallest
- right at largest
- adjust inward based on sum comparison

---

## Strengths

- reduces time complexity significantly
- simple and intuitive once pattern is recognized
- widely applicable in array/string problems

---

## Limitations

- often requires sorted input or specific structure
- not always applicable to arbitrary data
- can be tricky to identify pointer movement strategy

---

## Relationship to Other Patterns

- Sliding Window → specialized two-pointer case
- Binary Search → directional pointer narrowing
- Greedy → local decision + pointer movement
- Prefix sums → sometimes combined for constraints

---

## Intuition

> Two pointers simulate a controlled traversal of a search space by maintaining two positions that converge or expand to efficiently capture valid relationships.

---

## Summary

The Two Pointer Algorithm is a technique that uses two indices moving through a structure in coordinated ways to efficiently solve problems involving pairs, ranges, or partitions, reducing computational complexity by avoiding redundant comparisons and leveraging structure such as ordering or continuity.
