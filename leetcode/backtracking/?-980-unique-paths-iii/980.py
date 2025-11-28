'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        start, count = None, 0
        m, n = len(grid), len(grid[0])

        for r in range(m):
            for c in range(n):
                count += grid[r][c] == 0
                if grid[r][c] == 1:
                    start = (r, c)
        
        def back(i: int, j: int) -> int:
            nonlocal count
            result = 0
            for dr, dc in [(i-1, j), (i+1, j), (i, j-1), (i, j+1)]:
                inbounds = 0 <= dr < m and 0 <= dc < n
                if inbounds:
                    if grid[dr][dc] == 0:
                        grid[dr][dc] = -1
                        count -= 1
                        result += back(dr, dc)
                        grid[dr][dc] = 0
                        count += 1
                    elif grid[dr][dc] == 2:
                        result += count == 0
            return result
        
        return back(start[0], start[1])
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
