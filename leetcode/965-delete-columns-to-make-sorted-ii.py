'''
1. Understand
Check if the columns are sorted.
If they aren't we know we have to delete this entire column.

But we also have to check remaining columns.
'''
# Returns 0 when it expects 1
# ["xga","xfb","yfa"]
# class Solution:
#     def minDeletionSize(self, strs: List[str]) -> int:
#         count = 0
#         for chars in zip(*strs):
#             if list(chars) != sorted(chars):
#                 count += 1
#             else:
#                 return count
#         return count

class Solution:
    def minDeletionSize(self, A):
        m, n = len(A), len(A[0])
        ans = 0
        cur = [""] * m
        for j in range(n):
            cur2 = cur[:]
            for i in range(m):
                cur2[i] += A[i][j]
            if all(cur2[i] <= cur2[i+1] for i in range(m-1)):
                cur = cur2
            else:
                ans+=1
        return ans

class Solution:
    def minDeletionSize(self, A):
        res, m, n = 0, len(A), len(A[0])
        # Tracks True/False between whether or not a row and 
        # it's next neighbor have been proven lexicographically sorted or not previously.
        # 0: Undecided
        # The order between row i and row i+1 is still undecided, so the current column can still break it.
        # 1: Decided
        # The order between row i and row i+1 has already been permanently decided by an earlier column.
        is_sorted = [0] * (m - 1)
        
        # Compare columns/indexes
        for j in range(n):
            # What the decided-state will become if we keep this column(after compared all pairs of rows)
            is_sorted2 = is_sorted[:]
            
            # Compare rows/strs
            for i in range(m - 1):
                # If this column causes a violation for 
                # a pair whose order is still undecided, then the column must be deleted.
                if A[i][j] > A[i + 1][j] and is_sorted[i] == 0:
                    res += 1
                    break
                # At this column, if this row is proven 
                # smaller than the next row, save that info.
                # In this way we prevent column deletions if later columns 
                # have unordered characters for a pair whose lexicographic order was already decided.
                is_sorted2[i] |= A[i][j] < A[i + 1][j]
            else:
                # If & only if there was no break run this else condition.
                # We may have identified pairs that are sorted so we'll want to keep 
                # that now that we know we're not removing this column entirely.
                is_sorted = is_sorted2
        return res

# from functools import lru_cache

# class Solution:
#     def minDeletionSize(self, A):
#         n, m = len(A), len(A[0])

#         @lru_cache(None)
#         def dp(col, is_sorted):
#             # Base case
#             if col == m:
#                 return 0

#             # Option 1: delete this column
#             best = 1 + dp(col + 1, is_sorted)

#             # Option 2: keep this column (if valid)
#             new_is_sorted = list(is_sorted)
#             for i in range(n - 1):
#                 if A[i][col] > A[i + 1][col] and is_sorted[i] == 0:
#                     break  # invalid column
#                 if A[i][col] < A[i + 1][col]:
#                     new_is_sorted[i] = 1
#             else:
#                 # no break → valid
#                 best = min(best, dp(col + 1, tuple(new_is_sorted)))

#             return best

#         return dp(0, tuple([0] * (n - 1)))


# from functools import lru_cache

# class Solution:
#     def minDeletionSize(self, A):
#         n, m = len(A), len(A[0])

#         @lru_cache(None)
#         def dfs(col, mask):
#             if col == m:
#                 return 0

#             # Option 1: delete column
#             res = 1 + dfs(col + 1, mask)

#             # Option 2: keep column if valid
#             new_mask = mask
#             for i in range(n - 1):
#                 bit = (mask >> i) & 1
#                 if A[i][col] > A[i + 1][col] and bit == 0:
#                     break
#                 if A[i][col] < A[i + 1][col]:
#                     new_mask |= (1 << i)
#             else:
#                 res = min(res, dfs(col + 1, new_mask))

#             return res

#         return dfs(0, 0)
