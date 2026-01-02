# Binary Search — Mental Model & Families

Binary search problems are not about “midpoints”.

It's not a single algorithm — it’s a **family of decision strategies** unified by monotonicity and invariants.

All binary search problems fall into a small number of families,
distinguished by _what question binary search is answering_.

## High-Level Summary (Very Important)

| Family | What’s Being Searched | Core Idea             |
| ------ | --------------------- | --------------------- |
| A      | Exact value / index   | Equality-based        |
| B      | Structural boundary   | Directional discard   |
| C      | Partition position    | Balance left/right    |
| D      | Answer value          | Monotonic feasibility |

# Concepts

- Key Concepts:
  - Concerned with ordered decisions
  - Binary search is a method for finding a boundary in a monotonic search space by
    maintaining invariants and discarding half the candidates at each step.
- Preconditions:
  - Search space must be ordered
    - Sorted array or
    - Implicitly ordered answer space (values, capacities, thresholds)
  - Discrete search space
    - Indices, integers, or values that can be totally ordered
- Invariants:
  - Define what is always true about l and r
  - Tell us which half can be discarded safely
  - l = last known invalid
  - r = first known valid
  - Binary search is fundamentally about maintaining invariants, not about “cutting arrays in half”.
- Midpoint Choice
  - Left Lean
    - m = (l + r) // 2
  - Right Lean
    - m = (l + r + 1) // 2
  - Used to:
    - Avoid infinite loops
    - Ensure progress when l or r moves to m
- Update Rules
  - Use m ± 1 only when m itself is known to be invalid or valid
  - Use r = m or l = m when:
    - You are preserving a boundary
    - m could still be the answer
- Dont return a specific index, but a in
- Monotonic structure
  - Can be used to ensure we...
- Termination Patterns (very important)
  - Find a specific value
    - while l <= r
    - Return index or -1
  - Find a boundary / minimum feasible value
    - while l < r
    - Return l or r (they converge)
  - Two-sided invariant boundary
    - while l + 1 < r
    - Return r (or l, depending on invariant)
  - The loop condition is determined by what you want to return.
- Binary Search on Answer (Big one)
  - Binary search does not require an array
    - Search space can be:
      - Maximum allowed value
      - Minimum capacity
      - Time, speed, cost, sum, distance
    - Requires:
      - A check / predicate function
      - Monotonicity of that predicate
- Monotonic Structure (This is the keystone)
  - Once a condition becomes true, it never becomes false again
  - Benefits:
    - 1️⃣ Enables logarithmic search
      - ✅ O(log n)
      - ⛔️ O(n)
    - 2️⃣ Makes “checking” cheaper than “solving”
    - 3️⃣ Separates logic cleanly
      - Outer loop → search
      - Inner function → correctness check
    - 4️⃣ Guarantees correctness via invariants
      - When you discard half the space,
      - You never discard the answer

# Problems

## **Family A — Find a Value / Index in a Structured Space**

> Binary search is used to **locate an exact value, range, or position** directly.

**Core idea:**
Search for _where_ something is.

1. [Binary Search](https://leetcode.com/problems/binary-search)
2. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
3. [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii)
4. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)
5. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)
6. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii)
7. [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii)
8. [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower)
9. [First Bad Version](https://leetcode.com/problems/first-bad-version)
10. [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target)

---

## **Family B — Shrink the Search Window (Discard Half Each Time)**

> Binary search is used to **discard partitions** by comparing neighbors or feasibility.

**Core idea:**
You don’t know the answer directly, but you know **which half cannot contain it**.

1. [Find Peak Element](https://leetcode.com/problems/find-peak-element)
2. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)
3. [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements)
4. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance)
5. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix)
6. [Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table)
7. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number)
8. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
9. [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array)
10. [Find Right Interval](https://leetcode.com/problems/find-right-interval)
11. [H-Index II](https://leetcode.com/problems/h-index-ii)

---

## **Family C — Partition-Based Binary Search**

> Binary search over **cuts / partitions**, not values.

**Core idea:**
Pick a partition and check if it satisfies ordering constraints.

1. **[Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)**
   _The gold standard partition problem._

2. **[K-th Smallest Element in Two Sorted Arrays](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays)**
   _(Generalized form of median)_

3. **[Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream)**
   _(Implicit dynamic partition)_

4. **[Split Two Sorted Arrays to Minimize Absolute Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference)**
   _(Partition + balance constraints)_

> ⚠️ This family is **small but deep** — mastery matters more than volume.

---

## **Family D — Binary Search on the Answer (Monotonic Predicate)**

> Binary search is performed over the **answer space**, not the array.

**Core idea:**
If a value `x` works, then all values `> x` (or `< x`) also work.

1. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas)
2. [Capacity to Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days)
3. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum)
4. [Find the Kth Smallest Product of Two Sorted Arrays](https://leetcode.com/problems/find-the-kth-smallest-product-of-two-sorted-arrays)
5. [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets)
6. [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls)
7. [Aggressive Cows](https://leetcode.com/problems/magnetic-force-between-two-balls) _(classic variant)_
8. [Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station)
9. [Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers)
10. [Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time)
11. [Allocate Books](https://leetcode.com/problems/split-array-largest-sum) _(classic variant)_

---

## **Mental Model Summary**

| Family | Binary Search Over | Key Insight             |
| ------ | ------------------ | ----------------------- |
| A      | Index / value      | Direct location         |
| B      | Window halves      | Eliminate impossibility |
| C      | Partitions         | Balance left vs right   |
| D      | Answer space       | Monotonic feasibility   |
