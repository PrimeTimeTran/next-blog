class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i - 1]:
                profit += prices[i] - prices[i - 1]
        return profit

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
        def dp(i, holding):
            if i == n: return 0
            i, price = i+1, prices[i]
            skip = dp(i, holding)
            realized_cashflow = price if holding else -price
            pnl = realized_cashflow + dp(i, not holding)
            return max(skip, pnl)
        return dp(0, False)


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
        cash = 0                 # max balance when NOT holding
        hold = -prices[0]        # max balance when holding
        for price in prices[1:]:
            cash = max(cash, hold + price)
            hold = max(hold, cash - price)
        return cash
