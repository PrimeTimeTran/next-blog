# Backtracking roadmap — improved, easy → hard

This file is a guided study plan for backtracking.
Each tier begins with a one-line intro describing what you'll learn.
For every problem I link the LeetCode statement and include a short note about the pattern or pruning idea to practice.

## ✅ Phase 1: Pure Recursion (base cases & shrinking)

Learn to think recursively — base cases, shrinking the input, and visualizing stack frames.

- 1. Factorial (exercise) — classic recursion base-case practice.
- 344. Reverse String — in-place recursion vs iterative two-pointer approach.
       [https://leetcode.com/problems/reverse-string](https://leetcode.com/problems/reverse-string)
- 1281. Subtract the Product and Sum of Digits of an Integer — digit processing and simple recursive/iterative reduction.
        [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer)

- 1. Print all numbers from 1 → n (custom) — practice preorder vs postorder recursion and output ordering.

What you'll learn: base cases, recursion depth, order of operations, and how small changes to recursion produce different traversals.

## ✅ Phase 2: Subsets / Subsequences (include/exclude pattern)

Master include/exclude branching and the power-set mindset; this is the backbone of many backtracking and DP problems.

### Subset generation

- 78. Subsets — build the power set via include/exclude.
      [https://leetcode.com/problems/subsets](https://leetcode.com/problems/subsets)
- 90. Subsets II — handle duplicates using sorting and skip logic.
      [https://leetcode.com/problems/subsets-ii](https://leetcode.com/problems/subsets-ii)

### Subsequences and related targets

- 491. Non-decreasing Subsequences
       [https://leetcode.com/problems/non-decreasing-subsequences](https://leetcode.com/problems/non-decreasing-subsequences)
- 494. Target Sum — subset-sum framing; shows relation to DP.
       [https://leetcode.com/problems/target-sum](https://leetcode.com/problems/target-sum)
- 115. Distinct Subsequences — counting subsequences; a bridge to memoized DP.
       [https://leetcode.com/problems/distinct-subsequences](https://leetcode.com/problems/distinct-subsequences)

What you'll learn: building recursion trees for selection problems, dedup techniques, and recognizing overlapping subproblems that lead to DP.

## ✅ Phase 3: Combinations (constrained subsets & pruning)

Add constraints (size, sum, uniqueness) and learn start-index pruning to avoid repeats and reduce branching.

- 77. Combinations — fixed-size k-combinations using start index.
      [https://leetcode.com/problems/combinations](https://leetcode.com/problems/combinations)
- 39. Combination Sum — allow reuse of elements; prune when sum exceeds target.
      [https://leetcode.com/problems/combination-sum](https://leetcode.com/problems/combination-sum)
- 40. Combination Sum II — no reuse, handle duplicates.
      [https://leetcode.com/problems/combination-sum-ii](https://leetcode.com/problems/combination-sum-ii)
- 216. Combination Sum III — fixed-size + target pruning.
       [https://leetcode.com/problems/combination-sum-iii](https://leetcode.com/problems/combination-sum-iii)
- 254. Factor Combinations — multiplicative combinations and deeper pruning.
       [https://leetcode.com/problems/factor-combinations](https://leetcode.com/problems/factor-combinations)

What you'll learn: index-driven choices, early pruning by bounds, and how constraint ordering affects pruning efficiency.

## ✅ Phase 4: Permutations (order matters)

Practice generating orderings; manage visited state, swaps, and symmetry pruning for duplicates.

- 46. Permutations — backtracking with visited array or swapping.
      [https://leetcode.com/problems/permutations](https://leetcode.com/problems/permutations)
- 47. Permutations II — avoid duplicate permutations with sorting + seen-set per depth.
      [https://leetcode.com/problems/permutations-ii](https://leetcode.com/problems/permutations-ii)
- 31. Next Permutation — in-place reordering; understand lexicographic neighbors.
      [https://leetcode.com/problems/next-permutation](https://leetcode.com/problems/next-permutation)

- All string permutations (custom) — large branching; learn complexity limits and streaming outputs when needed.

What you'll learn: visited vs swap techniques, resetting state cleanly, and dedup strategies for ordered outputs.

## ✅ Phase 5: Decision Trees (multi-choice branching)

Solve problems where each position has multiple choices that branch independently — practice building partial solutions with invariants.

- 17. Letter Combinations of a Phone Number — cartesian-product style branching.
      [https://leetcode.com/problems/letter-combinations-of-a-phone-number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)
- 22. Generate Parentheses — constrained branching with open/close invariants.
      [https://leetcode.com/problems/generate-parentheses](https://leetcode.com/problems/generate-parentheses)
- 320. Generalized Abbreviation — choose compress or expand at each position.
       [https://leetcode.com/problems/generalized-abbreviation](https://leetcode.com/problems/generalized-abbreviation)
- 784. Letter Case Permutation — binary choice per character; bitmask thought helps.
       [https://leetcode.com/problems/letter-case-permutation](https://leetcode.com/problems/letter-case-permutation)
- 401. Binary Watch — combinatorial counting with constraints.
       [https://leetcode.com/problems/binary-watch](https://leetcode.com/problems/binary-watch)

What you'll learn: controlling branching with invariants, building partial solutions, and mapping choices to combinatorial counts.

## ✅ Phase 6: Constraint Satisfaction Problems (CSPs)

Train heavy pruning, constraint propagation, and global consistency checks on stateful search problems.

- 36. Valid Sudoku — fast validity checks using row/col/box sets.
      [https://leetcode.com/problems/valid-sudoku](https://leetcode.com/problems/valid-sudoku)
- 37. Sudoku Solver — backtracking with constraint propagation and ordering heuristics.
      [https://leetcode.com/problems/sudoku-solver](https://leetcode.com/problems/sudoku-solver)
- 51. N-Queens — row/col/diagonal constraints and boolean arrays for O(1) checks.
      [https://leetcode.com/problems/n-queens](https://leetcode.com/problems/n-queens)
- 52. N-Queens II — counting solutions; learn bitmask optimizations.
      [https://leetcode.com/problems/n-queens-ii](https://leetcode.com/problems/n-queens-ii)

What you'll learn: global constraint tracking, ordering heuristics (choose variable with fewest options), and bitmask speedups.

## ✅ Phase 7: Hard Backtracking (DP relatives / memoizable)

These problems are exponential without caching; add memoization to transform them into tractable DP-style solutions.

- 131. Palindrome Partitioning — overlapping partitions; memoize suffix results.
       [https://leetcode.com/problems/palindrome-partitioning](https://leetcode.com/problems/palindrome-partitioning)
- 93. Restore IP Addresses — constrained splits + validation pruning.
      [https://leetcode.com/problems/restore-ip-addresses](https://leetcode.com/problems/restore-ip-addresses)
- 140. Word Break II — exponential decomposition that becomes linear-ish with caching of remainders.
       [https://leetcode.com/problems/word-break-ii](https://leetcode.com/problems/word-break-ii)
- 472. Concatenated Words — combine trie/DP with backtracking for large dictionaries.
       [https://leetcode.com/problems/concatenated-words](https://leetcode.com/problems/concatenated-words)

What you'll learn: how to identify overlapping subproblems, where to insert memoization, and how tries or DP tables complement search.

---

## Small contract for this roadmap

- Inputs: arrays/strings/integers depending on the problem.
- Outputs: lists of combinations/permutations/subsets or boolean/count results as specified.
- Success criteria: correct outputs for provided examples and edge cases; reasonably pruned recursion for medium inputs.

## Common edge cases to practice

- Empty input ([], "", n = 0).
- All elements identical (duplicates) — forces dedup logic.
- Minimum/maximum sizes (k = 0, k = n or very large n).
- Deep recursion / combinatorial explosion — learn to bail out or memoize.
- Invalid values where applicable (e.g., negative numbers, invalid IP segments).

## Study suggestions

- Solve pattern-first: pick a pattern (include/exclude, index-based combos, permutations) and do 2–3 problems from different tiers that use it.
- After solving, draw the recursion tree and annotate pruning decisions.
- When exponential, add memoization and compare runtime.

## Next steps I can take for you

- Generate canonical solutions (JavaScript / Python) for chosen problems and add them to `leetcode/backtracking/`.
- Add unit tests (happy path + selected edge cases) and a short README summarizing patterns.

If you want that, tell me which problems and which language and I will add the files and tests.

?-51-n-queens

?-131. Palindrome Partitioning
?-131-palindrome-partitioning
