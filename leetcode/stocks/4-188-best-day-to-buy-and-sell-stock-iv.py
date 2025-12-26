class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        @lru_cache(None)
        def dp(i, is_holding, transactions):
            if i == n or transactions == k: return 0
            i, price = i+1, prices[i]
            skip = dp(i, is_holding, transactions)
            transactions += 1 if is_holding else 0
            cashflow_realized_from_acting = price if is_holding else -price
            take = cashflow_realized_from_acting + dp(i, not is_holding, transactions)
            return max(skip, take)
        return dp(0, False, 0)


class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        NEG_INF = -10**15

        dp = [[NEG_INF] * (2*k + 1) for _ in range(n+1)]

        # Base cases
        for count in range(2*k + 1):
            dp[n][count] = 0 if count % 2 == 0 else NEG_INF

        for i in range(n):
            dp[i][0] = 0

        # Fill bottom-up
        for i in range(n-1, -1, -1):
            for count in range(1, 2*k + 1):
                opened = count % 2 == 0
                sign = -1 if opened else 1

                take = dp[i+1][count-1] + sign * prices[i]
                skip = dp[i+1][count]

                dp[i][count] = max(take, skip)

        return dp[0][2*k]
