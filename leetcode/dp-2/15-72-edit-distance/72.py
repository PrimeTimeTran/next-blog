'''
1. Understand
Dangerous solution.

2. Diagram
3. Pseudocode
4. Code
5. Big O
'''
class Solution:
    def minDistance(self, w1: str, w2: str, cache = {}) -> int:
        if not w1 or not w2:
            return len(w1) or len(w2)
        if w1[0] == w2[0]:
            return self.minDistance(w1[1:], w2[1:])
        if (w1, w2) not in cache:
            insert = 1 + self.minDistance(w1, w2[1:])
            delete = 1 + self.minDistance(w1[1:], w2)
            replace = 1 + self.minDistance(w1[1:], w2[1:])
            cache[(w1, w2)] = min(insert, delete, replace)
        return cache[(w1, w2)]
'''
Safer. 

sol = Solution()
print(sol.minDistance("abc", "def"))  # fills cache
print(sol.minDistance("xyz", "uvw"))  # still using old cache!

- Python evaluates {} once, at function definition time.
- That single dictionary object becomes the default for any call where you don’t pass cache explicitly.
- All calls that rely on the default share this same dictionary, regardless of recursion or even separate top-level calls.
'''
class Solution:
    def minDistance(self, w1: str, w2: str, cache = None) -> int:
        if cache is None:
            cache = {}
        if not w1 or not w2:
            return len(w1) or len(w2)
        if w1[0] == w2[0]:
            return self.minDistance(w1[1:], w2[1:], cache)
        if (w1, w2) not in cache:
            insert = 1 + self.minDistance(w1, w2[1:], cache)
            delete = 1 + self.minDistance(w1[1:], w2, cache)
            replace = 1 + self.minDistance(w1[1:], w2[1:], cache)
            cache[(w1, w2)] = min(insert, delete, replace)
        return cache[(w1, w2)]
    
class Solution:
    def minDistance(self, s1: str, s2: str) -> int:
        m, n, memo = len(s1), len(s2), {}
        def dp(i, j):
            if i == 0: return j
            if j == 0: return i
            if (i, j) in memo:
                return memo[(i, j)]
            if s1[i-1] == s2[j-1]:
                memo[(i, j)] = dp(i-1, j-1)
            else:
                insert = dp(i, j-1) + 1
                delete = dp(i-1, j) + 1
                replace = dp(i-1, j-1) + 1
                memo[(i, j)] = min(insert, delete, replace)
            return memo[(i, j)]
        return dp(m, n)
'''
1. Understand
dp[i][j] = "What’s the min edit distance up to here, using prefixes of both strings?"

2. Diagram
Input: word1 = "horse", word2 = "ros"

Final DP Table:

        ""  r   o   s
      ------------------
""  |   0   1   2   3
h   |   1   1   2   3
o   |   2   2   1   2
r   |   3   2   2   2
s   |   4   3   3   2
e   |   5   4   4   3

3. Pseudocode
4. Code
5. Big O
'''
class Solution:
    def minDistance(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)
        dp = [[-1] * (n+1) for _ in range(m+1)]
        for i in range(m+1):
            for j in range(n+1):
                if i == 0:
                    dp[i][j] = j
                elif j == 0:
                    dp[i][j] = i
                elif s1[i-1] == s2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                else:
                    dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
        return dp[m][n]


'''
Fastest so far because we're not string slicing on each recursive call.
'''
class Solution:
    def minDistance(self, w1: str, w2: str) -> int:
        n1, n2 = len(w1), len(w2)
        @lru_cache(None)
        def dp(i, j):
            if i == n1: return n2 - j
            if j == n2: return n1 - i
            if w1[i] == w2[j]:
                return dp(i+1, j+1)
            return 1 + min(dp(i, j+1), dp(i+1, j), dp(i+1, j+1))
        return dp(0, 0)
