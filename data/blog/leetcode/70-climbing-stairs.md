---
draft: false
date: 2016-01-01
title: 'LeetCode: 70. Climbing Stairs'
tags:
  [
    'leetcode',
    'data structures algorithms',
    'dynamic programming',
    'python',
    'javascript',
    'typescript',
    'dart',
    'java',
    'go',
  ]
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

<SnippetTabs
snippets={[
{
label: "Brute Force",
code: `

# Time: O(2ⁿ)

# Space: O(n) (recursion stack)

class Solution:
def climbStairs(self, n: int) -> int:
def dfs(i):
if i <= 2:
return i
return dfs(i-1) + dfs(i-2)

        return dfs(n)
      `
    },
    {
      label: "Top Down Memo",
      code: `

# Time: O(n)

# Space: O(n) (memo + recursion stack)

class Solution:
def climbStairs(self, n: int) -> int:
memo = {1: 1, 2: 2}

        def dp(i):
            if i not in memo:
                memo[i] = dp(i-1) + dp(i-2)
            return memo[i]

        return dp(n)

      `
    },
    {
      label: "Bottom Up Tab",
      code: `

# Time: O(n)

# Space: O(n)

class Solution:
def climbStairs(self, n: int) -> int:
if n <= 2:
return n

        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2

        for i in range(3, n + 1):
            dp[i] = dp[i-1] + dp[i-2]

        return dp[n]
      `
    },
    {
      label: "Bottom Up Tab O(1) Optimized",
      code: `

# Time: O(n)

# Space: O(1)

class Solution:
def climbStairs(self, n: int) -> int:
if n <= 2:
return n

        prev2, prev1 = 1, 2

        for _ in range(3, n + 1):
            prev2, prev1 = prev1, prev1 + prev2

        return prev1
      `
    },

]}
/>
