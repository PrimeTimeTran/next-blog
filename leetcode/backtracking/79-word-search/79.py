'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:    O(m * n * 4ᴷ) where m and n are the dimensions of the board and k is the length of word.
Space:   O(k) where k is the length of word. Because the call stack can grow to size k
'''
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n = len(board), len(board[0])
        def dfs(r, c, i):
            if i == len(word):
                return True
            inbounds = 0 <= r < m and 0 <= c < n
            if inbounds and word[i] == board[r][c]:
                tmp = board[r][c]
                board[r][c] = '.'
                i+=1
                res = (
                    dfs(r+1,c, i) or 
                    dfs(r-1,c, i) or
                    dfs(r,c+1, i) or 
                    dfs(r,c-1, i)
                )
                board[r][c] = tmp
                return res
        for r in range(m):
            for c in range(n):
                if dfs(r, c, 0):
                    return True
        return False


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n = len(board), len(board[0])
        def dfs(r, c, idx):
            if idx == len(word): return True
            inbounds = 0 <= r < m and 0 <= c < n
            if inbounds and word[idx] == board[r][c]:
                tmp, board[r][c] = board[r][c], '.'
                idx+=1
                res = dfs(r+1, c, idx) or dfs(r-1, c, idx) or dfs(r, c+1, idx) or dfs(r, c-1, idx)
                board[r][c] = tmp
                return res
        return any(dfs(r, c, 0) for r in range(m) for c in range(n))
