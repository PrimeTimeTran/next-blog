from functools import lru_cache

'''
dfs(0,0) -> text1[0:] = "abc", text2[0:] = "ac"

text1[0] = 'a', text2[0] = 'a' -> match
1 + dfs(1,1)
         |
         v
       dfs(1,1) -> text1[1:] = "bc", text2[1:] = "c"
       text1[1]='b', text2[1]='c' -> no match
       max(dfs(2,1), dfs(1,2))
       
       dfs(2,1) -> text1[2:] = "c", text2[1:] = "c"
       match -> 1 + dfs(3,2) = 1 + 0 = 1
       
       dfs(1,2) -> text1[1:] = "bc", text2[2:]="" -> base case = 0
       
       max(1,0) = 1
       
dfs(0,0) = 1 + 1 = 2
'''

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        def dp(i, j):
            if i == len(text1) or j == len(text2):
                return 0

            if text1[i] == text2[j]:
                return 1 + dp(i+1, j+1)
            else:
                return max(dp(i+1, j), dp(i, j+1))

        return dp(0, 0)

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        @lru_cache(None)
        def dp(i, j):
            if i == len(text1) or j == len(text2):
                return 0
            match = text1[i] == text2[j]
            if match:
                return 1 + dp(i+1, j+1)
            return max(dp(i+1, j), dp(i, j+1))

        return dp(0, 0)

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0]*(n+1) for _ in range(m+1)]

        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                if text1[i] == text2[j]:
                    dp[i][j] = 1 + dp[i+1][j+1]
                else:
                    dp[i][j] = max(dp[i+1][j], dp[i][j+1])

        return dp[0][0]

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        if len(text1) < len(text2):
            text1, text2 = text2, text1

        m, n = len(text1), len(text2)
        prev = [0]*(n+1)
        curr = [0]*(n+1)

        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                if text1[i] == text2[j]:
                    curr[j] = 1 + prev[j+1]
                else:
                    curr[j] = max(prev[j], curr[j+1])
            prev, curr = curr, [0]*(n+1)

        return prev[0]
