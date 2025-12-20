from functools import lru_cache
from math import inf
from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        @lru_cache(None)
        def dp(i: int, completed_count: int, open_position: bool) -> int:
            if i == len(prices) or completed_count == 2:
                return -inf if open_position else 0
            price = prices[i]
            i+=1
            pnl_today_skipped = dp(i, completed_count, open_position)
            if open_position:
                sell = price + dp(i, completed_count + 1, False)
                return max(pnl_today_skipped, sell)
            else:
                buy = -price + dp(i, completed_count, True)
                return max(pnl_today_skipped, buy)

        return dp(0, 0, False)
