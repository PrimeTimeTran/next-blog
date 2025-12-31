# **Tier 1 — Linear DP (You already did these)**

### Concepts learned:

- f(n) = f(n-1) + f(n-2)
- Rolling arrays
- Take / skip decisions
- Subproblem reuse

You've done:

- 509. Fibonacci Number
       [https://leetcode.com/problems/fibonacci-number](https://leetcode.com/problems/fibonacci-number)
- 70. Climbing Stairs
      [https://leetcode.com/problems/climbing-stairs](https://leetcode.com/problems/climbing-stairs)
- 746.  Min Cost Climbing Stairs
        [https://leetcode.com/problems/min-cost-climbing-stairs](https://leetcode.com/problems/min-cost-climbing-stairs)
- 198. House Robber I
       [https://leetcode.com/problems/house-robber](https://leetcode.com/problems/house-robber)
- 213. House Robber II
       [https://leetcode.com/problems/house-robber-ii](https://leetcode.com/problems/house-robber-ii)
- 377. Combination Sum IV
       [https://leetcode.com/problems/combination-sum-iv](https://leetcode.com/problems/combination-sum-iv)

**Next natural linear problems:**

- 740. Delete and Earn → literally “House Robber on values instead of indices.”
       [https://leetcode.com/problems/delete-and-earn](https://leetcode.com/problems/delete-and-earn)
- 53. Maximum Subarray (Kadane) → first intro to “best ending here.”
      [https://leetcode.com/problems/maximum-subarray](https://leetcode.com/problems/maximum-subarray)
- 0.  Painting Fence → similar recurrence but with mod constraints.
      [https://leetcode.com/problems/paint-fence](https://leetcode.com/problems/paint-fence)

---

# **Tier 2 — String DP (Building from linear → 2D subproblems)**

These introduce **2D DP tables**, palindrome tricks, and transitions based on two indices.
Since you already understand “robber on a circle,” string DP will feel like the next level.

- 5. Longest Palindromic Substring
     [https://leetcode.com/problems/longest-palindromic-substring](https://leetcode.com/problems/longest-palindromic-substring)
- 516. Longest Palindromic Subsequence
       [https://leetcode.com/problems/longest-palindromic-subsequence](https://leetcode.com/problems/longest-palindromic-subsequence)
- 97. Interleaving String
      [https://leetcode.com/problems/interleaving-string](https://leetcode.com/problems/interleaving-string)
- 72. Edit Distance
      [https://leetcode.com/problems/edit-distance](https://leetcode.com/problems/edit-distance)
- 1143. Longest Common Subsequence
        [https://leetcode.com/problems/longest-common-subsequence](https://leetcode.com/problems/longest-common-subsequence)
- 131. Palindrome Partitioning
       [https://leetcode.com/problems/palindrome-partitioning](https://leetcode.com/problems/palindrome-partitioning)
- 132. Palindrome Partitioning II
       [https://leetcode.com/problems/palindrome-partitioning-ii](https://leetcode.com/problems/palindrome-partitioning-ii)
- 115. Distinct Subsequences
       [https://leetcode.com/problems/distinct-subsequences](https://leetcode.com/problems/distinct-subsequences)

These teach:

- DP over intervals
- DP[i][j] meaning something
- Expanding around center
- Top-down memo vs bottom-up table

**Natural difficulty curve:**
LPS → LCS → Edit distance → Distinct subsequences → Interleaving string.

---

# **Tier 3 — Partition / Knapsack DP (Expands “choose or skip”)**

Since you understand House Robber, knapsack is the natural extension:

- Instead of pick/skip **one value**, you pick among **weights**.
- Instead of robber’s circular array, knapsack has constraints.

Start with:

- 416. Partition Equal Subset Sum
       [https://leetcode.com/problems/partition-equal-subset-sum](https://leetcode.com/problems/partition-equal-subset-sum)
- 494. Target Sum
       [https://leetcode.com/problems/target-sum](https://leetcode.com/problems/target-sum)
- 0/1 Knapsack
- 322. Coin Change (minimum coins)
       [https://leetcode.com/problems/coin-change](https://leetcode.com/problems/coin-change)
- 518. Coin Change II
       [https://leetcode.com/problems/coin-change-ii](https://leetcode.com/problems/coin-change-ii)

Good: teaches you subset-building, rolling arrays, and 1D optimization.

---

# **Tier 4 — Interval DP (builds directly from palindromes and circular robber)**

Interval DP is basically:
**dp[l][r] = best for substring/interval l…r**

These are the next level:

- **Burst Balloons** (hard)
- **Stone Game** series
- **Palindrome Removal**
- **Minimum Score Triangulation of Polygon**

These feel like the “big sibling” of palindrome DP.

---

# **Tier 5 — Grid DP (bigger state spaces but easy transitions)**

These rely on linear DP fundamentals but in 2D.

Start with:

1. **Unique Paths**
2. **Unique Paths II**
3. **Minimum Path Sum**
4. **Dungeon Game** (nice challenge)
5. **Cherry Pickup** (hard, but pinnacle of this category)

---

# 🚀 **Suggested Learning Order (Recommended Path)**

Here’s the most natural **skill-building progression** after what you’ve done:

### **LEVEL 1: Linear**

1. Delete and Earn
2. Kadane’s
3. Painting Fence

### **LEVEL 2: Strings & Palindromes**

4. Longest Palindromic Substring
5. Palindrome Partitioning I
6. Palindrome Partitioning II (you’re doing this)
7. Longest Palindromic SEQUENCE (LPS)
8. Edit Distance
9. Distinct Subsequences

### **LEVEL 3: Knapsack / Subset**

10. Partition Equal Subset Sum
11. Target Sum
12. 0/1 Knapsack
13. Coin Change I
14. Coin Change II

### **LEVEL 4: Interval DP**

15. Stone Game
16. Burst Balloons
17. Minimum Triangulation

### **LEVEL 5: Grids**

18. Unique Paths
19. Minimum Path Sum
20. Dungeon Game
21. Cherry Pickup

By the end of this progression, you’ll understand nearly all core DP patterns.

https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock
