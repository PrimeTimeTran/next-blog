'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
class Solution:
    def solve(self, b: List[List[str]]) -> None:
        R, C, seen = len(b), len(b[0]), set()
        def explore(r,c):
            explored = (r,c) in seen
            inbounds = 0 <= r < R and 0 <= c < C
            if not inbounds or explored or b[r][c] == 'X': return
            seen.add((r,c))
            b[r][c] = 'T'
            for dr,dc in [[r+1,c],[r-1,c],[r,c+1],[r,c-1]]:
                explore(dr,dc)
        for r in range(R):
            for c in range(C):
                if b[r][c] == 'O' and (r in [0, R-1] or c in [0, C-1]):
                    explore(r,c)
        for r in range(R):
            for c in range(C):
                if b[r][c] == 'O':
                    b[r][c] = 'X'
        for r in range(R):
            for c in range(C):
                if b[r][c] == 'T':
                    b[r][c] = 'O'
'''
1. Understand
Union Find
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        if not board: return
        parent, R, C = {}, len(board), len(board[0])
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            parent[find(x)] = find(y)
        
        # Helper to encode (r,c) as a unique ID
        def node(r, c):
            return r * C + c
        
        dummy = R * C  # Dummy node ID for border 'O's
        
        # Initialize parent for all positions + dummy
        for r in range(R):
            for c in range(C):
                parent[node(r,c)] = node(r,c)
        parent[dummy] = dummy
        
        # Union border 'O's with dummy
        for r in range(R):
            for c in range(C):
                if board[r][c] == 'O' and (r in [0, R-1] or c in [0, C-1]):
                    union(node(r,c), dummy)
        
        # Union internal 'O's with neighbors
        for r in range(R):
            for c in range(C):
                if board[r][c] == 'O':
                    for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                        nr, nc = r + dr, c + dc
                        if 0 <= nr < R and 0 <= nc < C and board[nr][nc] == 'O':
                            union(node(r,c), node(nr,nc))
        
        # Replace all 'O's not connected to dummy with 'X'
        for r in range(R):
            for c in range(C):
                if board[r][c] == 'O' and find(node(r,c)) != find(dummy):
                    board[r][c] = 'X'
