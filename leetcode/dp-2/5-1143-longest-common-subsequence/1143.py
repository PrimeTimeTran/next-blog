'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
'''
class Solution:
    def longestCommonSubsequence(self, text1, text2):
        @lru_cache(None)
        def dp(i, j):
            if i == len(text1) or j == len(text2):
                return 0
            if text1[i] == text2[j]:
                return 1 + dp(i+1, j+1)
            return max(dp(1+i, j), dp(i, j+1))
        return dp(0, 0)

'''
1. Understand
dp[i][j] = "What’s the LCS length up to here, using prefixes of both strings?"

2. Diagram
      ""  a  c  e
   ----------------
"" |  0  0  0  0
a  |  0  1  1  1
b  |  0  1  1  1
c  |  0  1  2  2
d  |  0  1  2  2
e  |  0  1  2  3


3. Pseudocode
4. Code
5. Big O
'''
class Solution:
    def longestCommonSubsequence(self, text1, text2):
        m, n = len(text1), len(text2)
        dp = [[0] * (n+1) for _ in range(m+1)]
        for i in range(1, m+1):
            for j in range(1, n+1):
                if text1[i-1] == text2[j-1]:
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        return dp[-1][-1]
