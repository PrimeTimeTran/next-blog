class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        @lru_cache(None)
        def dp(i, rem):
            if i == len(prices) or rem == 0:
                return 0
            # Odd remaining actions means we previously bought so now sell.
            sign = -1 if rem % 2 == 0 else 1
            pnl_today = sign * prices[i]

            pnl_unrealized = dp(i+1, rem - 1)                       # Reduces remaining because this includes buy/sell
            pnl_with_today = pnl_today + pnl_unrealized

            pnl_without_today = dp(i + 1, rem)                      # No transaction today means remaining unchanged
            return max(pnl_with_today, pnl_without_today)
        return dp(0, k * 2)
