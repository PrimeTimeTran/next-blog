class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        def dp(i):
            if i >= n: return 0
            take = nums[i] + dp(i+2)
            skip = dp(i+1)
            return max(take, skip)
        return dp(0)

class Solution:
    def rob(self, nums: List[int]) -> int:
        n, memo = len(nums), {}
        def dp(i):
            if i >= n: return 0
            if i not in memo:
                take = nums[i] + dp(i+2)
                skip = dp(i+1)
                memo[i] = max(take, skip)
            return memo[i]
        return dp(0)

class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        dp = [0] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        for i in range(2, n):
            dp[i] = max(
                dp[i-2] + nums[i],
                dp[i-1]
            )
        return dp[n-1]

class Solution:
    def rob(self, nums: List[int]) -> int:
        prior = prev = 0
        for n in nums:
            prior, prev = prev, max(prior+n, prev)
        return prev
