from functools import lru_cache
from math import inf
from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        @lru_cache(None)
        # i         = price in prices
        # position  = position is held
        # cooldown  = cooldown is active
        def dp(i: int, position: bool, cooldown: bool):
            if i == len(prices):
                return -inf if position else 0
            price = prices[i]
            i+=1

            if cooldown:
                return dp(i, position, False)

            if position:
                # Close so credit price
                pnl_today_included = price + dp(i, False, True)
                pnl_today_skipped = dp(i, position, False)
            else:
                # Open so debit price
                pnl_today_included  = -price + dp(i, True, False)
                pnl_today_skipped = dp(i, False, False)
            return max(pnl_today_included, pnl_today_skipped)
        return dp(0, False, False)
