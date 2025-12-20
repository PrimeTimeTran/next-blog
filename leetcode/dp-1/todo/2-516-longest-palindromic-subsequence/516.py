# time: O(n²)
# space: O(n²) due to memoization
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        @lru_cache(None)
        def dp(l, r):
            if l > r: return 0
            if l == r: return 1
            if s[l] == s[r]:
                return 2 + dp(l+1, r-1)
            return max(dp(l+1, r), dp(l, r-1))
        return dp(0, len(s)-1)

# time: O(n²)
# space: O(n²) due to memoization
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        dp = [[0]*n for _ in range(n)]

        for i in range(n):
            dp[i][i] = 1

        for length in range(2, n+1):
            for l in range(0, n - length + 1):
                r = l + length - 1

                if s[l] == s[r]:
                    dp[l][r] = 2 + (dp[l+1][r-1] if l+1 <= r-1 else 0)
                else:
                    dp[l][r] = max(dp[l+1][r], dp[l][r-1])

        return dp[0][n-1]
