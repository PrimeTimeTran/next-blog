from collections import Counter

class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        count, max_val = Counter(nums), max(nums)
        points = [count[i] * i for i in range(max_val+1)]

        def dfs(i):
            if i > max_val: return 0
            take = points[i] + dfs(i+2)
            skip = dfs(i+1)
            return max(take, skip)
        return dfs(0)

class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        memo, max_val, count = {}, max(nums), Counter(nums)
        points = [count[i] * i for i in range(max_val + 1)]
        def dfs(i):
            if i > max_val: return 0
            elif i not in memo:
                skip = dfs(i+1)
                take = points[i] + dfs(i+2)
                memo[i] = max(skip, take)
            return memo[i]
        return dfs(0)

class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        max_val, count = max(nums), Counter(nums)
        points = [count[i] * i for i in range(max_val + 1)]
        @lru_cache(None)
        def dfs(i):
            if i > max_val: return 0
            skip = dfs(i+1)
            take = points[i] + dfs(i+2)
            return max(skip, take)
        return dfs(0)

class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        dp = [0] * (max(nums)+1)
        for num in nums:
            dp[num] += num
        for i in range(2, len(dp)):
            dp[i] = max(dp[i-1],  dp[i]+dp[i-2])
        return dp[-1]

class Solution:
    def deleteAndEarn(self, nums):
        count, max_val = Counter(nums), max(nums)
        points = [count[i] * i for i in range(max_val + 1)]
        prior = prev = 0
        for p in points:
            prior, prev = prev, max(prior + p, prev)
        return prev
