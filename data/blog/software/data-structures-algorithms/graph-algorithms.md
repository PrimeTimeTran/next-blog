---
draft: true
date: '2022-08-23'
title: 'Data Structures & Algorithms: Graph Theory 101'
summary: 'A collection of graph coding problems and their solutions with Big O time complexity. Solutions include not only brute force but optimized solutions as well.'
tags: ['data structures algorithms', 'graph theory']
---

# Introduction

By solving several coding challenges we'll familiarize ourselves with the following concepts in [graph theory](https://en.wikipedia.org/wiki/Graph_theory#:~:text=In%20mathematics%2C%20graph%20theory%20is,also%20called%20links%20or%20lines).

- Nodes / Vertexes
- Edges
  - Directed vs Undirected
  - Weighted
- DFS
- BFS
- Adjacency List
- Stack
- Queue
- Algorithms
  - Dijkstra's
  - Union Find

## BFS

### Queue

[733. Flood Fill](https://leetcode.com/problems/flood-fill/)

```py
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        Q, R, C, seen = [[sr,sc]], len(image), len(image[0]), set()

        while Q:
            r, c = heappop(Q)
            tmp = image[r][c]
            image[r][c] = color
            for dr, dc in [r+1,c], [r-1,c], [r,c+1], [r,c-1]:
                inbounds = 0 <= dr < R and 0 <= dc < C
                if inbounds and (dr,dc) not in seen and image[dr][dc] == tmp:
                    seen.add((dr,dc))
                    heappush(Q, [dr,dc])
        return image
```

## DFS
