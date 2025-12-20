from functools import lru_cache
'''
Recursion:
dfs(i=0, j=0): s="babgbag", t="bag"
   /match?\
  b==b → YES → take + skip
   |
   +-- dfs(1,1)   (take 'b')
   |
   +-- dfs(1,0)   (skip 'b')

dfs(1,1): s[1]='a', t[1]='a'
   /match?\
  a==a → YES → take + skip

dfs(2,2): s[2]='b', t[2]='g'
  b!=g → skip only → dfs(3,2)

... branches continue ...

Eventually all leaves where j==len(t) count as +1.

Table:
Let dp[i][j] = ways to form t[j:] from s[i:].

      t →   b   a   g   ""
s ↓
b      [ ?,  ?,  ?,   1 ]
a      [ ?,  ?,  ?,   1 ]
b      [ ?,  ?,  ?,   1 ]
g      [ ?,  ?,  ?,   1 ]
b      [ ?,  ?,  ?,   1 ]
a      [ ?,  ?,  ?,   1 ]
g      [ ?,  ?,  ?,   1 ]
""     [ 0,  0,  0,   1 ]

'''

class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        def dfs(i, j):
            if j == len(t): return 1
            if i == len(s): return 0

            ans = 0
            if s[i] == t[j]:
                ans += dfs(i + 1, j + 1)
            ans += dfs(i + 1, j)
            return ans

        return dfs(0, 0)

class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        

        @lru_cache(None)
        def dfs(i, j):
            if j == len(t): return 1
            if i == len(s): return 0

            ans = dfs(i + 1, j)
            if s[i] == t[j]:
                ans += dfs(i + 1, j + 1)

            return ans

        return dfs(0, 0)

class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(m + 1):
            dp[i][n] = 1

        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                dp[i][j] = dp[i + 1][j]
                if s[i] == t[j]:
                    dp[i][j] += dp[i + 1][j + 1]

        return dp[0][0]

class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        dp = [0] * (n + 1)
        dp[n] = 1

        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if s[i] == t[j]:
                    dp[j] += dp[j + 1]

        return dp[0]
