from functools import lru_cache

class Solution:
    def minDeletionSize(self, A):
        m, n = len(A), len(A[0])

        def valid(i, j):
            # Check whether column i can come before column j
            # i.e., for every row r: A[r][i] <= A[r][j]
            for r in range(m):
                if A[r][i] > A[r][j]:
                    # A single violating row is enough to break the ordering
                    return False
            return True
          # return all(strs[r][i] <= strs[r][j] for r in range(m))

        @lru_cache(None)
        def dp(j):
            # dp(j): length of the longest valid column sequence
            # that ends at column j
            best = 1  # column j alone
            for i in range(j):
                # If column i can precede column j in ALL rows,
                # we can extend the sequence ending at i
                if valid(i, j):
                    best = max(best, dp(i) + 1)
            return best

        # Find the longest valid subsequence of columns
        longest = max(dp(j) for j in range(n))

        # Minimum deletions = total columns - longest valid sequence
        return n - longest



# class Solution:
#     def minDeletionSize(self, A):
#         n = len(A[0])
#         dp = [1] * n
#         for j in range(1, n):
#             for i in range(j):
#                 if all(a[i] <= a[j] for a in A):
#                     dp[j] = max(dp[j], dp[i] + 1)
#         return n - max(dp)
