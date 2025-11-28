'''
1. Understand
Two Pointers
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m + n) where m = len(s), n = len(t)
Space: O(1)
'''
from functools import lru_cache

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0
        for c in t:
            if i < len(s) and s[i] == c:
                i += 1
        return i == len(s)
'''
1. Understand
Top Down Recursion (no memoization)
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n) due to slicing (m = len(s), n = len(t))
Space: O(m + n) recursion depth + slicing overhead
'''
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s)==0:
            return True
        elif len(s)>len(t):
            return False
        elif s[0]==t[0]:
            return self.isSubsequence(s[1:], t[1:])
        return self.isSubsequence(s, t[1:])
'''
1. Understand
Top Down Recursive with Memoization
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n)
Space: O(m * n)
'''
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        @lru_cache(None)
        def dp(i, j):
            if i == len(s) or j == len(t):
                return 0
            if s[i] == t[j]:
                return 1 + dp(i+1,j+1)
            return max(dp(i+1,j), dp(i, j+1))
        return len(s) == dp(0,0)
'''
1. Understand
Bottom Up 2D Dynamic Programming
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n) where m = len(s), n = len(t)
Space: O(m * n)
'''
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        m, n = len(s), len(t)
        dp = [[0] * (n+1) for _ in range(m+1)]
        for i in range(1, m+1):
            for j in range(1, n+1):
                if s[i-1] == t[j-1]:
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        common = dp[-1][-1]
        return len(s) == common

'''
1. Understand
Bottom Up 2D Dynamic Programming
2. Diagram

start = [
  [False, False, False, False, False, False, False], 
  [False, False, False, False, False, False, False], 
  [False, False, False, False, False, False, False], 
  [True, True, True, True, True, True, True]
]

end = [
  [True, False, False, False, False, False, False], 
  [True, True, True, False, False, False, False], 
  [True, True, True, True, True, True, False], 
  [True, True, True, True, True, True, True]
  ]
3. Pseudocode
4. Code
5. Big O
Time: O(m * n)
Space: O(m * n)
'''
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        m, n = len(s), len(t)
        dp = [[False] * (n+1) for _ in range(m+1)]

        for j in range(n+1):
            dp[m][j] = True

        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                if s[i] == t[j]:
                    dp[i][j] = dp[i+1][j+1]
                else:
                    dp[i][j] = dp[i][j+1]

        return dp[0][0]
