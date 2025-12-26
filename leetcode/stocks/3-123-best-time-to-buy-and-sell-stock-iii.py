class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        @lru_cache(None)
        def dp(i, holding, count_completed):
            if i == n or count_completed == 2:
                return 0
            price = prices[i]
            i+=1
            skip = dp(i, holding, count_completed)
            realized_cashflow = price if holding else -price
            # If holding, you're selling to close, completing one transaction
            count_completed += 1 if holding else 0
            pnl = realized_cashflow + dp(i, not holding, count_completed)
            return max(skip, pnl)
        return dp(0, False, 0)
    
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        @lru_cache(None)
        def dp(i: int, holding: bool) -> int:
            if i == n:
                return 0
            skip = dp(i + 1, holding)
            sign = 1 if holding else -1
            price = prices[i]
            pnl = sign * price
            if not holding:
                pnl = pnl + dp(i + 1, True)
            return max(skip, pnl)

        return dp(0, False)

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        @lru_cache(None)
        def dp(i, is_holding, transactions):
            if i == n or transactions == 2: return 0
            price = prices[i]
            i+=1
            skip = dp(i, is_holding, transactions)
            realized_cashflow = price if is_holding else -price
            transactions += 1 if is_holding else 0
            pnl = realized_cashflow + dp(i, not is_holding, transactions)
            return max(skip, pnl)
        return dp(0, False, 0)
