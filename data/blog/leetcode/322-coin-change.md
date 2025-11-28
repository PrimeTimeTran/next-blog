---
draft: false
date: 2016-01-01
title: 'LeetCode: 322. Coin Change'
tags: ['leetcode', 'data structures algorithms', 'dynamic programming', 'python']
summary: 'Solving Coin Change with Dynamic Programming and multiple algorithms to dial in on the techniques.'
---

<SnippetTabs
snippets={[
{
label: "Brute Force",
code: `
class Solution:
def coinChange(self, coins, amount):
def dfs(rem):
if rem == 0:
return 0
if rem < 0:
return float('inf')

            ans = float('inf')
            for c in coins:
                ans = min(ans, 1 + dfs(rem - c))

            return ans

        res = dfs(amount)
        return res if res != float('inf') else -1

      `
    },
    {
      label: "Top Down Memo",
      code: `

class Solution:
def coinChange(self, coins, amount):
memo = {}

        def dfs(rem):
            if rem == 0:
                return 0
            if rem < 0:
                return float('inf')
            if rem in memo:
                return memo[rem]

            best = float('inf')
            for c in coins:
                best = min(best, 1 + dfs(rem - c))

            memo[rem] = best
            return best

        res = dfs(amount)
        return res if res != float('inf') else -1

      `
    },
    {
      label: "Bottom Up Tab",
      code: `

class Solution:
def coinChange(self, coins: List[int], amount: int) -> int:
n = amount+1
dp = [n] \* n
dp[0] = 0
for a in range(1, n):
for c in coins:
if a - c >= 0:
dp[a] = min(dp[a], dp[a-c] + 1)
return dp[amount] if dp[amount] != amount + 1 else -1
` }, { label: "Bottom Up Tab O(1) Optimized", code:`
`
},
]}
/>
