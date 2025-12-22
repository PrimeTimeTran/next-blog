from functools import lru_cache

class Solution:
    def stoneGameIII(self, stoneValue: List[int]) -> str:
        n = len(stoneValue)
        @lru_cache(None)
        def dp(i):
            if i >= n:
                return 0
            max_diff = float('-inf')
            total = 0
            for k in range(1, 4):
                if i + k - 1 >= n:
                    break
                total += stoneValue[i + k - 1]
                max_diff = max(max_diff, total - dp(i + k))
            return max_diff
        result = dp(0)
        if result > 0:
            return "Alice"
        elif result < 0:
            return "Bob"
        else:
            return "Tie"
