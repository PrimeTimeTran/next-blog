class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        n = len(piles)
        prefix = [0]*(n+1)
        for i in range(n):
            prefix[i+1] = prefix[i] + piles[i]
        @lru_cache(None)
        def dp(i, M):
            if i >= n:
                return 0
            max_stones = 0
            for X in range(1, min(2*M, n-i)+1):
                take = prefix[i+X] - prefix[i]
                max_stones = max(max_stones, take + (prefix[n] - prefix[i+X] - dp(i+X, max(M, X))))
            return max_stones
        return dp(0, 1)
