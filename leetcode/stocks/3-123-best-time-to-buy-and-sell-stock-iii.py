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

        # 2. Bottom Up
        # dp[k][h]: max profit with k transactions, holding h
        # dp = [[-inf, -inf] for _ in range(3)]
        # dp[0][0] = 0
        # dp[0][1] = -prices[0]

        # for price in prices[1:]:
        #     new_dp = [[-inf, -inf] for _ in range(3)]
        #     for k in range(3):
        #         # skip
        #         new_dp[k][0] = max(new_dp[k][0], dp[k][0])
        #         new_dp[k][1] = max(new_dp[k][1], dp[k][1])

        #         # buy
        #         if dp[k][0] != -inf:
        #             new_dp[k][1] = max(new_dp[k][1], dp[k][0] - price)

        #         # sell
        #         if k > 0 and dp[k-1][1] != -inf:
        #             new_dp[k][0] = max(new_dp[k][0], dp[k-1][1] + price)

        #     dp = new_dp

        # return max(dp[k][0] for k in range(3))
