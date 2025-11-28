---
draft: false
date: 2016-01-01
title: 'LeetCode: 213. House Robber II'
tags: ['data-structures-algorithms', 'dynamic programming', 'python']
summary: 'Solving House Robber II with Dynamic Programming and multiple algorithms to dial in on the techniques.'
---

<SnippetTabs
snippets={[
{
label: "Brute Force",
code: `

# Time: O(2ⁿ)

# Space: O(n) (recursion stack)

class Solution:
def rob(self, nums: List[int]) -> int:
n = len(nums)
if n == 1:
return nums[0]
def dfs(i, end):
if i > end:
return 0
rob = nums[i] + dfs(i+2, end)
skip = dfs(i+1, end)
return max(rob, skip)
case1 = dfs(0, n-2)
case2 = dfs(1, n-1)

        return max(case1, case2)
      `
    },
    {
      label: "Top Down Memo",
      code: `

# Time: O(n)

# Space: O(n) (memo + recursion stack)

class Solution:
def rob(self, nums: List[int]) -> int:
if len(nums) == 1:
return nums[0]

        def dp(start, end):
            memo = {}

            def helper(i):
                if i > end:
                    return 0
                if i not in memo:
                    memo[i] = max(
                        nums[i] + helper(i + 2),
                        helper(i + 1)
                    )
                return memo[i]

            return helper(start)

        case1 = dp(0, len(nums) - 2)
        case2 = dp(1, len(nums) - 1)

        return max(case1, case2)
      `
    },
    {
      label: "Bottom Up Tab",
      code: `

# Time: O(n)

# Space: O(n)

class Solution:
def rob(self, nums: List[int]) -> int:
if len(nums) == 1:
return nums[0]

        def rob_linear(arr):
            if len(arr) == 1:
                return arr[0]

            dp = [0] * len(arr)
            dp[0] = arr[0]
            dp[1] = max(arr[0], arr[1])

            for i in range(2, len(arr)):
                dp[i] = max(dp[i - 1], arr[i] + dp[i - 2])

            return dp[-1]

        case1 = rob_linear(nums[:-1])
        case2 = rob_linear(nums[1:])

        return max(case1, case2)
      `
    },
    {
      label: "Bottom Up Tab O(1) Optimized",
      code: `

# Time: O(n)

# Space: O(1)

class Solution:
def rob(self, nums: List[int]) -> int:
def dp(vals):
prior = prev = 0
for v in vals:
prior, prev = prev, max(prior + v, prev)
return prev

        return max(dp(nums[1:]), dp(nums[:-1]), nums[0])
      `
    },

]}
/>
