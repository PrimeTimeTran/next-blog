---
draft: false
date: 2016-01-01
title: 'LeetCode: 198. House Robber'
tags: ['data-structures-algorithms', 'dynamic programming', 'python']
summary: 'Solving House Robber I with Dynamic Programming and multiple algorithms to dial in on the techniques.'
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
def dp(i):
if i >= n:
return 0
return max(dp(i+1), dp(i+2) + nums[i])
return dp(0)
` }, { label: "Top Down Memo", code:`

# Time: O(n)

# Space: O(n) (memo + recursion stack)

class Solution:
def rob(self, nums: List[int]) -> int:
memo = {}
n = len(nums)
def dp(i):
if i >= n:
return 0
if i in memo:
return memo[i]
memo[i] = max(
dp(i+1),
dp(i+2) + nums[i]
)
return memo[i]

        return dp(0)
      `
    },
    {
      label: "Bottom Up Tab",
      code: `

# Time: O(n)

# Space: O(n)

class Solution:
def rob(self, nums: List[int]) -> int:
if not nums:
return 0
if len(nums) == 1:
return nums[0]

        n = len(nums)
        dp = [0] * n

        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, n):
            dp[i] = max(
                dp[i - 1],
                nums[i] + dp[i - 2]
            )

        return dp[n - 1]
      `
    },
    {
      label: "Bottom Up Tab O(1) Optimized",
      code: `

# Time: O(n)

# Space: O(1)

class Solution:
def rob(self, nums: List[int]) -> int:
prev = cur = 0
for n in nums:
prev, cur = max(prev, cur+n), prev
return prev
`
},
]}
/>
