'''
1. Understand
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
