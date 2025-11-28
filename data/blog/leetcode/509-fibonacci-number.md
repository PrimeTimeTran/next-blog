---
draft: false
date: 2016-01-01
title: 'LeetCode: 509. Fibonacci Number'
tags: ['data-structures-algorithms', 'dynamic programming', 'python']
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

<SnippetTabs
snippets={[
{
label: "Brute Force",
code: `
class Solution:
def fib(self, n: int) -> int:
if n <= 1:
return n
return self.fib(n-1) + self.fib(n-2)

# Time: O(2^n) (exponential)

# Space: O(n) (recursion stack)

      `
    },
    {
      label: "Top Down Memo",
      code: `

class Solution:
def fib(self, n: int) -> int:
memo = {}
def dp(k):
if k <= 1:
return k
if k not in memo:
memo[k] = dp(k-1) + dp(k-2)
return memo[k]
return dp(n)

# Time: O(n) (each state computed once)

# Space: O(n) (recursion stack + memo dictionary)

      `
    },
    {
      label: "Bottom Up Tab",
      code: `

class Solution:
def fib(self, n: int) -> int:
if n <= 1:
return n
dp = [0] \* (n + 1)
dp[1] = 1
for i in range(2, n + 1):
dp[i] = dp[i-1] + dp[i-2]
return dp[n]

# Time: O(n)

# Space: O(n)

      `
    },
    {
      label: "Bottom Up Tab O(1) Optimized",
      code: `

class Solution:
def fib(self, n: int) -> int:
if n <= 1:
return n
a, b = 0, 1
for \_ in range(2, n + 1):
a, b = b, a + b
return b

# Time: O(n)

# Space: O(1)

      `
    },

]}
/>
