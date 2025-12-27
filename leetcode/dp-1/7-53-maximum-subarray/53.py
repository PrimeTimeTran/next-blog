'''
1. Understand
Kadane's Algorthim.
DP

## Greedy perspective
Greedy choice: drop the current sum if it’s negative, because it can’t help any future subarray.
Make a local decision at each element (continue or restart)

## DP perspective
Recurrence. Use a recurrence relation (dp[i] = max(dp[i-1] + nums[i], nums[i])) and track global max
'''

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur, ans = 0, nums[0]
        for n in nums:
            if cur < 0:
                cur = 0
            cur += n
            ans = max(cur, ans)
        return ans
