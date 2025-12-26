from functools import lru_cache
from typing import List

class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n = len(prices)
        @lru_cache(None)
        def dp(i: int, is_holding: bool) -> int:
            if i == n: return 0
            i, price = i+1, prices[i]
            skip = dp(i, is_holding)
            realized = -price if not is_holding else price - fee
            act = dp(i, not is_holding)
            return max(skip, realized + act)
        return dp(0, False)

class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        sell = 0
        buy = float('-inf')
        for price in prices:
            buy = max(buy, sell - price)
            sell = max(sell, buy + price - fee)
        return sell
