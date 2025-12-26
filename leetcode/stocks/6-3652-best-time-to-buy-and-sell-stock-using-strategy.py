from functools import lru_cache
from typing import List

class Solution:
    def maxProfit(self, prices: List[int], strategy: List[int], k: int) -> int:
        n = len(prices)
        # Compute base profit
        base = sum(p * s for p, s in zip(prices, strategy))
        # Precompute prefix sums for price*strategy and prices
        pref_strat = [0]*(n+1)
        pref_price = [0]*(n+1)
        for i in range(n):
            pref_strat[i+1] = pref_strat[i] + prices[i]*strategy[i]
            pref_price[i+1] = pref_price[i] + prices[i]
        
        # dp(i) = best delta if the modification starts at or after index i
        @lru_cache(None)
        def dp(i: int) -> int:
            if i > n - k:
                return 0  # no room for a k-window, no more benefit
            # Skip using window starting here
            best = dp(i+1)
            
            # Use window [i, i+k)
            # Original contribution of this window:
            orig = pref_strat[i+k] - pref_strat[i]
            # After modification:
            # first (k/2) become 0 -> lose original profit there
            # last (k/2) become sell (1) -> gain price sum
            mod = pref_price[i+k] - pref_price[i + k//2]
            delta = -orig + mod
            best = max(best, delta)
            return best
        return base + dp(0)

class Solution:
    def maxProfit(self, prices: List[int], strategy: List[int], k: int) -> int:
        sp = [s * p for s, p in zip(strategy, prices)]
        n = len(prices)

        baseline = sum(sp)
        h = k // 2
        old = sum(sp[:k])
        new = sum(prices[h:k])

        maxdiff = max(0, new - old)

        for r in range(k, n):
            l = r - k + 1  
            old += sp[r] - sp[l - 1]
            new += prices[r]
            new -= prices[l - 1 + h]
            maxdiff = max(maxdiff, new - old)

        return baseline + maxdiff
