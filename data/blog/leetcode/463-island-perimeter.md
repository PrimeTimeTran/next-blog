---
draft: true
date: '2022-11-06'
title: '463. Island Perimeter'
tags:
  [
    'Leetcode',
    'Algorithms',
    'Data structures',
    'Javascript',
    'Typescript',
    'Dart',
    'Java',
    'Python',
    'Ruby',
    'Go',
  ]
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

## 463. Island Perimeter

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

### Solution

Short description

## Declare Hashmap

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="ts" className="tablinks">typescript</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
    <button id="python" className="tablinks">python</button>
    <button id="ruby" className="tablinks">ruby</button>
    <button id="go" className="tablinks">go</button>
  </div>

  <div id="js" className="tabcontent">
    ```js {} showLineNumbers
    ```
  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    ```
  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    ```
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

  <div id="ruby" className="tabcontent">
    ```ruby {} showLineNumbers
    #
    ```
  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //
    ```
  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
