from functools import lru_cache
from typing import List

class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n = len(prices)
        @lru_cache(None)
        def dp(i: int, holding: bool) -> int:
            if i == n: return 0
            price = prices[i]
            i+=1
            # Forgoing today means the state of holding remains unchanged
            skip = dp(i, holding)
            # If not holding must buy resulting in price debit.
            # If holding must sell resulting in price credit and fee deduction.
            realized = -price if not holding else price - fee
            # If bought/holding then sell(can no longer sell). Otherwise buy(can then sell).
            act = dp(i, not holding)
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
