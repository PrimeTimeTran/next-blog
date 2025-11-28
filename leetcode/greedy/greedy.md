# Introduction

Greedy algorithms build a solution by repeatedly making a locally optimal choice with the hope it
leads to a globally optimal solution. They're lightweight, fast, and often the right tool for
scheduling/coverage/packing problems, one-pass selection problems, and cases where sorting plus a local rule produces an optimal result.

When to reach for greedy:

- You need to maximize or minimize a simple metric (count, coverage, number of groups, earliest finish, etc.).
- You can express a local choice (pick earliest finishing interval, take the largest remaining, place smallest-first) and
  implement it with a single pass, a sort, a heap, or a monotonic structure.

Greedy is useful for problems like interval scheduling, resource allocation, simple
scheduling with deadlines, selecting disjoint segments, and constructive rearrangement problems.

## Indicators

These are signals that a greedy solution might work (or at least that it's worth trying):

- Sortability: you can sort items by a key (end-time, size, ratio) and then scan — many greedy proofs start here.
- "Pick one and remove": the problem can be solved by repeatedly selecting an element and removing/adjusting
  the rest (e.g., pick earliest finish, remove overlapping intervals).
- Local optimality looks promising: picking the locally best option doesn't obviously block better global outcomes in small examples.
- Exchange argument seems plausible: you can show any non-greedy optimal solution can be transformed into the greedy one by swapping choices.
- One-pass / streaming: a single left→right scan with a small auxiliary DS (counter, heap, deque, stack) can maintain the current best state.
- Objective is simple and monotonic: maximize count, minimize number of groups, minimize uncovered length, minimize number of jumps, etc.
- Feels like a packing/coverage/selection problem (intervals, people/items, coins/bills).

Common data-structure clues you need for greedy:

- Sort + linear scan, two-pointers
- Min/max heap (priority queue)
- Monotonic stack / deque
- Frequency counters or buckets

If none of these indicators appear, greedy is less likely; try DP/backtracking or transform the problem first.

## ✅ Phase 1: Core Greedy Patterns (must do)

These problems teach the bread-and-butter greedy choices: sort-by-key, interval scheduling, two-pointers, and simple counter-based greedy.

- 455. Assign Cookies
       [https://leetcode.com/problems/assign-cookies](https://leetcode.com/problems/assign-cookies)

- 860. Lemonade Change (simple counters)
       [https://leetcode.com/problems/lemonade-change](https://leetcode.com/problems/lemonade-change)

- 435. Non-overlapping Intervals
       [https://leetcode.com/problems/non-overlapping-intervals](https://leetcode.com/problems/non-overlapping-intervals)

- 452. Minimum Number of Arrows to Burst Balloons
       [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons)

- 881. Boats to Save People (two pointers)
       [https://leetcode.com/problems/boats-to-save-people](https://leetcode.com/problems/boats-to-save-people)

- 646. Maximum Length of Pair Chain (sort + greedy)
       [https://leetcode.com/problems/maximum-length-of-pair-chain](https://leetcode.com/problems/maximum-length-of-pair-chain)

---

## ✅ Phase 2: Heaps / Priority-Queue Greedy

Use heaps to make local greedy choices when you need the largest/smallest processed so far.

- 253. Meeting Rooms II (min-heap for end times)
       [https://leetcode.com/problems/meeting-rooms-ii](https://leetcode.com/problems/meeting-rooms-ii)

- 871. Minimum Number of Refueling Stops (max-heap)
       [https://leetcode.com/problems/minimum-number-of-refueling-stops](https://leetcode.com/problems/minimum-number-of-refueling-stops)

- 630. Course Schedule III (max-heap to drop longest course)
       [https://leetcode.com/problems/course-schedule-iii](https://leetcode.com/problems/course-schedule-iii)

- 215. Kth Largest Element in an Array (heap approaches)
       [https://leetcode.com/problems/kth-largest-element-in-an-array](https://leetcode.com/problems/kth-largest-element-in-an-array)

- 767. Reorganize String (max-heap for frequencies)
       [https://leetcode.com/problems/reorganize-string](https://leetcode.com/problems/reorganize-string)

---

## ✅ Phase 3: Sorting + Insertion / Reconstruction

Greedy by sorting then placing elements (often stable or with careful tie-breakers).

- 406. Queue Reconstruction by Height
       [https://leetcode.com/problems/queue-reconstruction-by-height](https://leetcode.com/problems/queue-reconstruction-by-height)

- 452. (again) Minimum Number of Arrows to Burst Balloons — shows sort-by-end-time

- 406 and 452 together illustrate sorting with custom keys and local placement.

---

## ✅ Phase 4: Monotonic Stack / Greedy for Next Greater / Window Extremes

Monotonic stacks/queues are greedy in maintaining an invariant as you scan.

- 402. Remove K Digits (monotonic stack)
       [https://leetcode.com/problems/remove-k-digits](https://leetcode.com/problems/remove-k-digits)

- 84. Largest Rectangle in Histogram (monotonic stack)
      [https://leetcode.com/problems/largest-rectangle-in-histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)

- 496. Next Greater Element I / 503. Next Greater Element II
       [https://leetcode.com/problems/next-greater-element-i](https://leetcode.com/problems/next-greater-element-i)
       [https://leetcode.com/problems/next-greater-element-ii](https://leetcode.com/problems/next-greater-element-ii)

- 239. Sliding Window Maximum (monotonic deque)
       [https://leetcode.com/problems/sliding-window-maximum](https://leetcode.com/problems/sliding-window-maximum)

---

## ✅ Phase 5: Greedy for Jumps, Coverage, and Summaries

Problems that use greedy to advance a frontier or pick local maxima to minimize steps.

- 55. Jump Game (reachability via greedy)
      [https://leetcode.com/problems/jump-game](https://leetcode.com/problems/jump-game)

- 45. Jump Game II (min jumps — greedy farthest reach)
      [https://leetcode.com/problems/jump-game-ii](https://leetcode.com/problems/jump-game-ii)

- 435. Non-overlapping Intervals (again) — coverage / schedule selection

- 406. (again) — reconstruction via greedy

---

## ✅ Phase 6: Greedy + DP / Greedy with Proofs (advanced intuition)

These problems blend greedy insights with DP or require a proof by exchange argument.

- 135. Candy (local passes / greedy)
       [https://leetcode.com/problems/candy](https://leetcode.com/problems/candy)

- 376. Wiggle Subsequence (simple greedy)
       [https://leetcode.com/problems/wiggle-subsequence](https://leetcode.com/problems/wiggle-subsequence)

- 402. Remove K Digits (monotonic stack / greedy)

---

## ✅ Phase 7: Miscellaneous useful greedy problems

- 451. Sort Characters By Frequency (frequency-based greedy)
       [https://leetcode.com/problems/sort-characters-by-frequency](https://leetcode.com/problems/sort-characters-by-frequency)

- 871. (again) Minimum Number of Refueling Stops — heap greedy

- 452. (again) Balloons

---

## 🔑 How to study greedy problems (this matters more than the list)

For each problem, force yourself to answer before coding:

1. What is the local greedy choice? (sort by X, pick earliest finish, take largest available, extend farthest)
2. Why is that choice safe? Try an exchange argument or find a counterexample to a different choice.
3. Can the greedy choice be implemented with a simple scan, heap, or monotonic structure?
4. Identify edge cases that break naive greedy attempts.

Study tips:

- Start with easy problems from Phase 1 and make sure you can verbally justify the greedy step.
- Practice converting greedy ideas to code: sorting keys, two-pointer scans, heaps, or monotonic stacks.
- When a greedy solution isn't obvious, try small examples and look for patterns where local choices don't hurt global optimality.
- Timed practice: once comfortable, do mixed greedy problem sets under a timer.

Recommended progression: Phase 1 → Phase 2 → Phase 4 → Phase 5 → Phase 6.

If you want, I can:

- Add direct links to exemplar solutions in this repo where available.
- Create a 4-week study plan mapping specific problems to days.

## NeetCode

- 134. Gas Station
       [https://leetcode.com/problems/gas-station/](https://leetcode.com/problems/gas-station/)
- 846. Hand of Straights
       [https://leetcode.com/problems/hand-of-straights/](https://leetcode.com/problems/hand-of-straights/)
- 55. Jump Game
      [https://leetcode.com/problems/jump-game/](https://leetcode.com/problems/jump-game/)
- 45. Jump Game II
      [https://leetcode.com/problems/jump-game-ii/](https://leetcode.com/problems/jump-game-ii/)
- 53. Maximum Subarray
      [https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)
- 1899. Merge Triplets to Form Target Triplet
        [https://leetcode.com/problems/merge-triplets-to-form-target-triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet)
- 763. Partition Labels
       [https://leetcode.com/problems/partition-labels](https://leetcode.com/problems/partition-labels)
- 678. Valid Parenthesis String
       [https://leetcode.com/problems/valid-parenthesis-string](https://leetcode.com/problems/valid-parenthesis-string)

## Leetcode List

https://leetcode.com/problem-list/xyehq5j6
https://leetcode.com/problem-list/greedy
