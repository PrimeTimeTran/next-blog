---
draft: true
date: 2022-10-17
title: 'LeetCode: 463. Island Perimeter'
tags: ['leetcode', 'data structures algorithms', 'graph', 'python']
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

# Description

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

## Intuition

## Diagram

## Code

<div className="tab-group">
  <div className="tab">
    <button id="python" className="tablinks">python</button>
  </div>
  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    class Solution:
      def islandPerimeter(self, grid: List[List[int]]) -> int:
        seen = set()
        m,n=len(grid),len(grid[0])

        def dfs(r,c):
          out = r < 0 or c < 0 or r == m or c == n
          if out or grid[r][c] == 0:
            return 1
          if (r,c) in seen:
            return 0
          seen.add((r,c))
          return dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)

        for r in range(m):
          for c in range(n):
            if grid[r][c]:
              return dfs(r,c)
    ```

  </div>
</div>

# Conclusion
