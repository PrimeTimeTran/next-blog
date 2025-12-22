class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        # dfs(l, r) = the **maximum score difference Alice can achieve over Bob** if the remaining piles are piles[l..r].
        @lru_cache(None)
        def dfs(l, r):
            if l == r:
                return piles[l]
            return max(piles[l] - dfs(l+1, r), piles[r] - dfs(l, r-1))

        return dfs(0, len(piles)-1) > 0

# class Solution:
#     def stoneGame(self, p):
#         n = len(p)
#         dp = [[0] * n for i in range(n)]
#         for i in range(n): dp[i][i] = p[i]
#         for d in range(1, n):
#             for i in range(n - d):
#                 dp[i][i + d] = max(p[i] - dp[i + 1][i + d], p[i + d] - dp[i][i + d - 1])
#         return dp[0][-1] > 0
