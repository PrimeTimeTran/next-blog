---
draft: false
date: 2016-01-01
title: 'LeetCode: 756. Min Climbing Stairs'
tags: ['data-structures-algorithms', 'dynamic programming', 'python']
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

https://leetcode.com/problems/min-cost-climbing-stairs/

<SnippetTabs
snippets={[
{
label: "Brute Force",
code: `

# Time: O(2ⁿ)

# Space: O(n)

class Solution:
def minCostClimbingStairs(self, cost: List[int]) -> int:
def dp(i):
if i <= 1:
return cost[i]
return cost[i] + min(dp(i-1), dp(i-2))

        n = len(cost) - 1
        return min(dp(n), dp(n-1))
      `
    },
    {
      label: "Top Down Memo",
      code: `

# Time: O(n)

# Space: O(n) (for memo + recursion stack)

class Solution:
def minCostClimbingStairs(self, cost: List[int]) -> int:
n, memo = len(cost) - 1, {0: cost[0], 1: cost[1]}
def dp(i):
if i not in memo:
memo[i] = cost[i] + min(dp(i-1), dp(i-2))
return memo[i]
return min(dp(n), dp(n-1))
` }, { label: "Bottom Up Tab", code:`

# Time: O(n)

# Space: O(n)

class Solution:
def minCostClimbingStairs(self, cost: List[int]) -> int:
n = len(cost)
dp = [0] \* n

        dp[0] = cost[0]
        dp[1] = cost[1]

        for i in range(2, n):
            dp[i] = cost[i] + min(dp[i-1], dp[i-2])

        return min(dp[n-1], dp[n-2])
      `
    },
    {
      label: "Bottom Up Tab O(1) Optimized",
      code: `

# Time: O(n)

# Space: O(1)

class Solution:
def minCostClimbingStairs(self, cost: List[int]) -> int:
prev2, prev1 = cost[0], cost[1]

        for i in range(2, len(cost)):
            curr = cost[i] + min(prev1, prev2)
            prev2, prev1 = prev1, curr

        return min(prev1, prev2)
      `
    },

]}
/>
