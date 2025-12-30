'''
1. Understand
Use a PQ to track the lowest inbound cells.
Do not revisit cells previously seen. For each cell calculate the contribution it makes to 
the final result by calculating the difference between this cells height and the max level we've seen so far.

The priority queue ensures we always expand from the lowest enclosing boundary, 
and level represents the maximum water height that can be sustained without leaking—determined by the lowest boundary wall seen so far.

- Water can only rise as high as the lowest surrounding boundary
- The priority queue guarantees we process boundary cells in increasing height order
- Once a cell is reached, the water level for that cell is fully determined

5. Big O
Time:   O(mn log(mn))   # each cell is pushed/popped once from the heap
Space:  O(mn)           # heap + visited marking (grid reused as visited)
'''
class Solution:
    def trapRainWater(self, g: List[List[int]]) -> int:
        if not g or not g[0]: return 0
        q, level, res, m, n = [], 0, 0, len(g), len(g[0])
        if m < 3 or n < 3: return 0

        # Gather border cells and mark them as visited
        for r in range(m):
            for c in range(n):
                if r == 0 or r == m-1 or c == 0 or c == n-1:
                    heappush(q, [g[r][c], r, c])
                    g[r][c] = -1
        
        while q:
            # Because of PQ property, always start/favor lowest height cell.
            height, r, c = heappop(q)
            level = max(level, height)
            for dr, dc in [[r+1,c],[r-1,c],[r,c+1],[r,c-1]]:
                inbounds = 0 <= dr < m and 0 <= dc < n
                # Append inbound neighbors who are unvisited
                if inbounds and g[dr][dc] != -1:
                    heappush(q, [g[dr][dc], dr, dc])
                    # If the neighbor is inbounds, and it's lower than the maximum level we've
                    # found so far, then deduct it's height from the maximum level
                    # to calculate how much water this cell will hold and add it to the result.
                    if g[dr][dc] < level:
                        res += level - g[dr][dc]
                    g[dr][dc] = -1
        return res

