class Solution:
    def kthSmallest(self, g: List[List[int]], k: int) -> int:
        n = len(g)

        # Counts how many elements in the matrix are <= m.
        # Exploits the fact that each row and each column is sorted.
        # We start from the bottom-left corner and move only upward or rightward,
        # ensuring O(n) time for each count.
        def count_leq(m):
            c = count = 0
            r = n - 1
            while r >= 0 and c < n:
                if g[r][c] <= m:
                    # All elements above g[r][c] in this column
                    # (i.e., g[0..r][c]) are also <= m.
                    count += r + 1
                    c += 1  # move right to the next column
                else:
                    # g[r][c] > m, so everything below it in this column
                    # is also > m; move up to smaller values.
                    r -= 1
            return count

        # Binary search on the value range, not on indices.
        # l is the smallest possible value, r is the largest.
        l, r = g[0][0], g[n-1][n-1]

        # We search for the smallest value x such that
        # there are at least k elements <= x.
        while l < r:
            m = (l + r) // 2

            # If fewer than k elements are <= m,
            # then the kth smallest element must be larger than m.
            if count_leq(m) < k:
                l = m + 1
            else:
                # Otherwise, m is large enough to include the kth element,
                # so we try to find a smaller valid value.
                r = m

        # l is the smallest value for which at least k elements are <= l,
        # which is exactly the kth smallest element.
        return l
