'''
Backtrack starting at row 0. If the R == N then append a copy of the board to the result.
Use sets to track the columns & diagonals(pos & neg) which already have queens placed.
Otherwise iterate columns up until N and recursively backtrack each index continuing if this diagonal/column has been used.

Before backtracking add the current pos & neg diagonal to our sets & update the board
After backtracking reset the board and remove the diagonal from the sets.

Positive: R + C
    0  1  2  3
  ------------
0|  0  1  2  3
1|  1  2  3  4
2|  2  3  4  5
3|  3  4  5  6

Negative: R - C
    0   1   2   3
  ------------
0|  0  -1  -2  -3
1|  1   0  -1  -2
2|  2   1   0  -1
3|  3   2   1   0

backtrack(0)
    try(0,0)
    Q . . . 
    . . . .
    . . . .
    . . . . 
        backtrack(1)
            try(1,0) -> column taken by Q in (0,0)
            try(1,1) -> dNeg taken by Q in (0,0)
            try(1,2) -> safe
            Q . . . 
            . . Q .
            . . . .
            . . . .
                backtrack(2)
                    Deadends:
                    Q . . . 
                    . . Q .
                    x x x x
                    . . . .
                    try(2,0) -> column taken by Q in (0,0)
                    try(2,1) -> dPos taken by Q in (1,2)
                    try(2,2) -> column taken by Q in (1,2)
                    try(2,3) -> dNeg taken by Q in (1,2)

            try(1,3) -> safe
            Q . . . 
            . . . Q
            . . . .
            . . . .
                backtrack(2)
                    try(2,0) -> column taken by Q in (0,0)
                    try(2,1) -> safe
                    Q . . . 
                    . . . Q
                    . Q . .
                    . . . .
                        backtrack(3)
                            Deadends:
                            Q . . . 
                            . . . Q
                            . Q . .
                            x x x x

                            try(3,0) -> column taken by Q in (0,0)
                            try(3,1) -> column taken by Q in (2,1)
                            try(3,2) -> dNeg taken by Q in (2,1)
                            try(3,3) -> column taken by Q in (1,3)
                    try(2,2) -> dPos taken by Q in (1,3)
                    try(2,3) -> column taken by Q in (1,3)
    try(0,1)
        backtrack(1)
            try(1,0)
            try(1,1)
            try(1,2)
            try(1,3)
    try(0,2)
    try(0,3)
    
Time:   
    O(n! · n²)
Space:  
    O(n! · n²)
'''
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        res, board = [], [['.']*n for _ in range(n)]
        C, pDiag, nDiag = set(), set(), set()
        def back(r):
            if r == n:
                res.append([''.join(r) for r in board])
            for c in range(n):
                clear = not (c in C or r+c in pDiag or r-c in nDiag)
                if clear: 
                    pDiag.add((r+c))
                    nDiag.add((r-c))
                    C.add(c)
                    board[r][c] = 'Q'
                    back(r+1)
                    pDiag.remove((r+c))
                    nDiag.remove((r-c))
                    C.remove(c)
                    board[r][c] = '.'
            return res
        return back(0)
