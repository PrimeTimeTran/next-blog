class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        n = len(cost)
        def dp(i):
            if i <= 1:
                return cost[i]
            return cost[i] + min(dp(i-2), dp(i-1))
        return min(dp(n-2), dp(n-1))

class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        n = len(cost)
        memo = {}
        def dp(i):
            if i <= 1:
                return cost[i]
            if i not in memo:
                memo[i] = cost[i] + min(dp(i-2), dp(i-1))
            return memo[i]
        return min(dp(n-2), dp(n-1))

class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        n = len(cost)
        dp = [0] * n
        dp[0] = cost[0]
        dp[1] = cost[1]
        for i in range(2, n):
            dp[i] = min(dp[i-2], dp[i-1]) + cost[i]
        return min(dp[-2], dp[-1])

class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        prior, prev = cost[0], cost[1]

        for i in range(2, len(cost)):
            prior, prev = prev, min(prev, prior) + cost[i]

        return min(prior, prev)
