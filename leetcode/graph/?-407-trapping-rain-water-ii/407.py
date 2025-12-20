'''
1. Understand
2. Diagram
[[1,0,1],[1,0,1],[1,1,1]]
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
class Solution:
    def trapRainWater(self, g: List[List[int]]) -> int:
        if not g or not g[0]: return 0
        q, m, n, level, res = [], len(g), len(g[0]), 0, 0
        if m < 3 or n < 3: return 0
        for i in range(m):
            for j in range(n):
                if i == 0 or i == m - 1 or j == 0 or j == n - 1:
                    heappush(q, (g[i][j], i, j))
                    g[i][j] = -1
        while q:
            # Because we use a min heap, we process the border with the smallest height first...
            # This ensure that level is not yet "set" to something higher, preventing 
            height, r, c = heappop(q)
            level = max(height, level)

            for dr, dc in [(r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)]:
                inbounds = 0 <= dr < m and 0 <= dc < n
                if inbounds and g[dr][dc] != -1:
                    heappush(q, (g[dr][dc], dr, dc))
					
					# If this inner cell's height less than current level, 
                    # then it traps the rain water
                    if g[dr][dc] < level:
                        res += level - g[dr][dc]
						
					# Set the height to -1 if the cell is visited
                    g[dr][dc] = -1
        return res


'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:  O()
Space: O()
'''
