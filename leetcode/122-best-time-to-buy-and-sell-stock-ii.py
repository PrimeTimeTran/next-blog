class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        for i in range(len(prices)-1):
            if prices[i] < prices[i+1]:
                res += prices[i+1] - prices[i]
        return res

class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        n = len(prices)

        @lru_cache(None)
        def dp(i: int, holding: int) -> int:
            if i == n:
                return 0

            if holding:
                # Option 1: sell today, Option 2: hold
                return max(prices[i] + dp(i+1, 0), dp(i+1, 1))
            else:
                # Option 1: buy today, Option 2: skip
                return max(-prices[i] + dp(i+1, 1), dp(i+1, 0))

        return dp(0, 0)


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = [0, -prices[0]]
        for price in prices[1:]:
            new_dp = [-inf, -inf]
            new_dp[0] = max(new_dp[0], dp[0])
            new_dp[1] = max(new_dp[1], dp[1])
            new_dp[1] = max(new_dp[1], dp[0] - price)
            new_dp[0] = max(new_dp[0], dp[1] + price)
            dp = new_dp
        return dp[0]

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        cash, hold = 0, -prices[0]

        for price in prices[1:]:
            cash = max(cash, hold + price)
            hold = max(hold, cash - price)

        return cash
