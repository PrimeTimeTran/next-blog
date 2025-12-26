'''
1. Understand
Return the best profit you can make given a list of prices of stocks on a range of days.
You can make at most one transaction and can only profit when you buy & then sell a stock.

State Machine:
- Day purchased and remaining.
- Whether or not holding a stock(previously purchased).

Pseudocode:
From the first day skip and take the day until you've reached the end of the list.
Inside of recursion, compare which was more profitable. Taking or selling.
When moving forward track whether or not you bought/sold so you can know when you need to do on subsequent days.
'''
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = l = 0
        for r, p in enumerate(prices):
            res = max(res, p - prices[l])
            if p < prices[l]: 
                l = r
        return res

# class Solution:
#     def maxProfit(self, prices: List[int]) -> int:
#         n = len(prices)

#         @lru_cache(None)
#         def dp(i: int, holding: bool) -> int:
#             if i == n:
#                 return -inf if holding else 0

#             price = prices[i]

#             if holding:
#                 skip = dp(i + 1, True)
#                 sell = price
#                 return max(skip, sell)
#             else:
#                 skip = dp(i + 1, False)
#                 buy  = -price + dp(i + 1, True)
#                 return max(skip, buy)

#         return dp(0, False)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        @lru_cache(None)
        def dp(i, holding):
            if i == n: return 0
            i, price = i+1, prices[i]
            skip = dp(i, holding)
            # If I'm holding then I receive the price of today from selling.
            # Otherwise I pay the price and then find the best day to sell.
            act = price if holding else -price + dp(i, True)
            return max(skip, act)
        return dp(0, False)


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # dp[h] will hold the best profit **up to today**
        # h = 0 → not holding stock
        # h = 1 → holding stock
        dp = [0, -prices[0]]  # Day 0 initialization
        #   dp[0] = 0: haven't bought yet, profit 0
        #   dp[1] = -prices[0]: bought today, profit negative price

        for price in prices[1:]:  # iterate over remaining days
            # Create a new array for the next day
            # We can't update dp in-place yet, because we still need yesterday's values
            new_dp = [-float('inf'), -float('inf')]

            # Skip today: carry forward yesterday's profit
            # If we do nothing, our profit stays the same
            new_dp[0], new_dp[1] = dp[0], dp[1]

            # Option to buy today (only if we haven't bought yet)
            # Compare: 
            # 1. Doing nothing (already copied to new_dp[1])
            # 2. Buying today (-price)
            new_dp[1] = max(new_dp[1], -price)

            # Option to sell today (only if we are holding)
            # Compare:
            # 1. Doing nothing (new_dp[0] = dp[0])
            # 2. Selling today (dp[1] + price)
            new_dp[0] = max(new_dp[0], dp[1] + price)

            # Move to the next day
            dp = new_dp

        # At the end, max profit is when we are **not holding** (we must sell to realize profit)
        return dp[0]

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = -prices[0]   # best profit after buying once
        sell = 0           # best profit after selling once

        for price in prices[1:]:
            buy = max(buy, -price)        # buy ONCE
            sell = max(sell, buy + price) # sell ONCE

        return sell
