class Solution:
    def searchMatrix(self, mat: List[List[int]], target: int) -> bool:
        m, n = len(mat), len(mat[0])
        for i in range(m):
            # Find the row which may contain the value.
            candidate_row = mat[i][0] <= target and mat[i][-1] >= target
            if candidate_row:
                l, r = 0, n
                while l < r:
                    m = (l + r) // 2
                    if mat[i][m] == target:
                        return True
                    elif mat[i][m] < target:
                        l = m + 1
                    else:
                        r = m
        return False

class Solution:
    def searchMatrix(self, mat: List[List[int]], target: int) -> bool:
        rows, cols = len(mat), len(mat[0])
        
        # Start search in top right
        r, c = 0, cols - 1

        while r < rows and c >= 0:
            cur = mat[r][c]

            if cur == target:
                return True
            elif cur > target:
                # eliminate column c
                c -= 1
            else:
                # eliminate row r
                r += 1

        return False
