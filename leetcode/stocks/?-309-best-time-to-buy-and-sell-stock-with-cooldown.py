class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        @lru_cache(None)
        def dp(i: int, open: bool, cooldown: bool) -> int:
            if i == len(prices): return 0
            price = prices[i]
            i += 1
            skip = dp(i, open, False)
            if cooldown:
                return skip
            # Open is sell/credit
            # Not open is buy/debit
            realized = price if open else -price
            cooldown = open
            pnl = realized + dp(i, not open, cooldown)
            return max(skip, pnl)
        return dp(0, False, False)
