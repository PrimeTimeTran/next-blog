"""
1. Understand
Union Find
2. Diagram
isConnected = [[1,1,0],[1,1,0],[0,0,1]]

    0 1 2
0 [ 1 1 0 ]
1 [ 1 1 1 ]
2 [ 0 1 1 ]


Note:
We do range(i+1, n) in the nested loop to avoid duplicate unions.
That’s unnecessary because union is commutative (union(0,1) is the same as union(1,0)).

Skip Diagonal:
    - The diagonal isConnected[i][i] is always 1 (a city is always connected to itself).
    - We don’t need to union a node with itself.
    - Starting from i+1 skips the diagonal automatically.

3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
"""

from ast import List


class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        parent = list(range(n))
        def union(x, y):
            parent[find(x)] = find(y)
        def find(x):
            if x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]
        for i in range(n):
            for j in range(i+1, n):
                if isConnected[i][j]:
                    union(i, j)
        return len({find(i) for i in range(n)})
        