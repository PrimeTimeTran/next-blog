'''
1. Understand
Find the longest common subsequence (LCS) between two strings. 
The minimum number of deletions required to make the two strings equal is equal to 
the sum of the lengths of both strings minus twice the length of their LCS.

2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n) where m = len(word1), n = len(word2) (each pair (i,j) computed once with memo)
Space: O(m * n) for the memoization cache; recursion call stack up to O(m + n)
'''
from functools import lru_cache

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        @lru_cache(None)
        def lcs(i, j):
            if i == len(word1) or j == len(word2):
                return 0

            if word1[i] == word2[j]:
                return 1 + lcs(i + 1, j + 1)
            else:
                return max(lcs(i + 1, j), lcs(i, j + 1))

        common = lcs(0, 0)
        return (len(word1) - common) + (len(word2) - common)
'''
1. Understand
dp[r][c] = "What’s the LCS length up to here, using prefixes of both strings?"

2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n) — we fill an (m+1) x (n+1) table
Space: O(m * n) — dp table; can be optimized to O(min(m, n))
'''
class Solution:
    def minDistance(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * (n+1) for _ in range(m+1)]
        for i in range(1, m+1):
            for j in range(1, n+1):
                if text1[i-1] == text2[j-1]:
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])

        common =  dp[-1][-1]

        return (len(text1) - common) + (len(text2) - common)
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time: O(m * n)
Space: O(min(m, n)) — only two rows (or one rolling row) are stored
'''
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        if len(word1) < len(word2):
            word1, word2 = word2, word1

        prev = [0] * (len(word2) + 1)

        for c1 in word1:
            curr = [0]
            for j, c2 in enumerate(word2):
                if c1 == c2:
                    curr.append(1 + prev[j])
                else:
                    curr.append(max(prev[j + 1], curr[-1]))
            prev = curr

        lcs = prev[-1]
        return len(word1) + len(word2) - 2 * lcs

