---
draft: false
date: '2022-10-26'
title: '200. Number of Islands'
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

## 200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and
'0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

### Solution

Identify islands using nested loops. When an island
is found mark it as seen and increment the count.

## Setup function

We'll reference the rows and cols length multiple times so we initialize `m` and
`n` to make it easier to use them later.

We also define a set, `seen`, to allow us to track which _nodes/land_ we've seen.

Lastly we define a var `count` set to 0 which we return at the end of the function.
This will be what holds the number of islands

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
    //

    var numIslands = function (grid) {
      var m = grid.length
      var n = grid[0].length
      var seen = new Set()

      var count = 0

      return count
    }
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    function numIslands(grid: string[][]): number {
      var m = grid.length
      var n = grid[0].length
      var seen = new Set()

      var count = 0

      return count
    }
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    class Solution {
      int numIslands(List<List<String>> grid) {
        var m = grid.length;
        var n = grid[0].length;
        var seen = new Set();

        var count = 0;

        return count;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    class Solution {
      public int numIslands(char[][] grid) {
        int count = 0;
        int m = grid.length;
        int n = grid[0].length;
        Set<String> seen = new HashSet<String>();

        return count;
      }

      public boolean dfs(int r, int c, Set<String> seen, char[][] grid) {
      }

}

````

</div>

<div id="python" className="tabcontent">
  ```python {} showLineNumbers
  #

  class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
      seen = set()
      m = len(grid)
      n = len(grid[0])

      res = 0

      return res

  ```

</div>

<div id="ruby" className="tabcontent">
  ```ruby {} showLineNumbers
  #

  def num_islands(grid)
    m, n = grid.length, grid[0].length
    seen = Set.new
    count = 0
    return count
  end
  ```

</div>
<div id="go" className="tabcontent">
  ```go {} showLineNumbers
  //

  import "fmt"
  func numIslands(grid [][]byte) int {
    count := 0
    m := len(grid)
    n := len(grid[0])

    seen := make(map[string]bool)

    return count
  }
  ```

</div>
</div>

## Iterate matrix nodes

Loop over the rows and cols of the matrix.

On each node call `dfs()` and pass in the coordinates of the node.

If `dfs()` returns true increment `count`.

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
  //

  var numIslands = function (grid) {
    var m = grid.length
    var n = grid[0].length
    var seen = new Set()
    function dfs(r, c) {

    }

    var count = 0

    for (var r = 0; r < m; r++) {
      for (var c = 0; c < n; c++) {
        if (dfs(r, c)) {
          count += 1
        }
      }
    }

    return count
  }

  ```

</div>

<div id="ts" className="tabcontent">
  ```typescript {} showLineNumbers
  //

  function numIslands(grid: string[][]): number {
    var m = grid.length
    var n = grid[0].length
    var seen = new Set()
    function dfs(r,c) {
    }

    var count = 0

    for (var r = 0; r < m; r++) {
      for (var c = 0; c < n; c++) {
        if (dfs(r, c)) {
          count += 1
        }
      }
    }

    return count;
  };
  ```

</div>

<div id="dart" className="tabcontent">
  ```dart {} showLineNumbers
  //

  class Solution {
    int numIslands(List<List<String>> grid) {
      var m = grid.length;
      var n = grid[0].length;
      var seen = new Set();
      dfs(r,c) {
      }

      var count = 0;

      for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
          if (dfs(r, c)) {
            count += 1;
          }
        }
      }

      return count;
    }
  }
  ```

</div>

<div id="java" className="tabcontent">
  ```java {} showLineNumbers
  //

  class Solution {
    public int numIslands(char[][] grid) {
      int count = 0;
      int m = grid.length;
      int n = grid[0].length;
      Set<String> seen = new HashSet<String>();

      for (int r = 0; r < m; r++) {
        for (int c = 0; c < n; c++) {
          if (dfs(r, c, seen, grid)) {
            count += 1;
          }
        }
      }

      return count;
    }

    public boolean dfs(int r, int c, Set<String> seen, char[][] grid) {
    }
}
````

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #

    class Solution:
      def numIslands(self, grid: List[List[str]]) -> int:
        seen = set()
        m = len(grid)
        n = len(grid[0])

        def dfs(r, c):
          pass

        res = 0
        for r in range(m):
          for c in range(n):
            if dfs(r, c):
              res += 1

        return res

    ```

  </div>

  <div id="ruby" className="tabcontent">
    ```ruby {} showLineNumbers
    #

    def num_islands(grid)
      m, n = grid.length, grid[0].length
      seen = Set.new

      dfs = lambda do |r,c|
      end

      count = 0
      m.times do |r|
        n.times do |c|
          if dfs.call(r,c)
            count+=1
          end
        end
      end
      return count
    end
    ```

  </div>
  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    import "fmt"
    func numIslands(grid [][]byte) int {
      count := 0
      m := len(grid)
      n := len(grid[0])

      seen := make(map[string]bool)

      for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
          if dfs(r, c, seen, grid) {
            count += 1
          }
        }
      }

      return count
    }

    func dfs(r int, c int, seen map[string]bool,  grid [][]byte) bool {
    }
    ```

  </div>
</div>

## Define dfs

DFS takes in the coordinates and ensures the node is inbounds,
hasn't been seen, and is land.

If it isn't, then we exit the function, not incrementing the count.

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
    //

    var numIslands = function (grid) {
      var m = grid.length
      var n = grid[0].length
      var seen = new Set()
      function dfs(r, c) {
        var out = r < 0 || c < 0 || r > m - 1 || c > n - 1
        if (out) return false
        if (seen.has(`${r},${c}`)) return false
        if (grid[r][c] == 0) return false
      }

      var count = 0

      for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
          if (dfs(r, c)) {
            count += 1
          }
        }
      }

      return count
    }

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //
    function numIslands(grid: string[][]): number {
      var m = grid.length
      var n = grid[0].length
      var seen = new Set()
      function dfs(r,c) {
        var out = r < 0 || c < 0 || r == m || c == n
        if (out) return false
        if (seen.has(`${r},${c}`)) return false
        if (grid[r][c] == '0') return false
      }

      var count = 0

      for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
          if (dfs(r, c)) {
            count += 1
          }
        }
      }

      return count
    }

````

</div>

<div id="dart" className="tabcontent">
  ```dart {} showLineNumbers
  //

  class Solution {
    int numIslands(List<List<String>> grid) {
      var m = grid.length;
      var n = grid[0].length;
      var seen = new Set();
      dfs(r,c) {
        if (r < 0 || c < 0 || r == m || c == n) {
          return false;
        }
        if (seen.contains('$r,$c')) {
          return false;
        }

        if (grid[r][c] == '0') {
          return false;
        }
      }

      var count = 0;

      for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
          if (dfs(r, c)) {
            count += 1;
          }
        }
      }

      return count;
    }
  }
  ```

</div>

<div id="java" className="tabcontent">
  ```java {} showLineNumbers
  //

  class Solution {
    public int numIslands(char[][] grid) {
      int count = 0;
      int m = grid.length;
      int n = grid[0].length;
      Set<String> seen = new HashSet<String>();

      for (int r = 0; r < m; r++) {
        for (int c = 0; c < n; c++) {
          if (dfs(r, c, seen, grid)) {
            count += 1;
          }
        }
      }

      return count;
    }

    public boolean dfs(int r, int c, Set<String> seen, char[][] grid) {
      boolean out = r < 0 || c < 0 || r == grid.length || c == grid[0].length;
      if (out) return false;
      if (Character.toString(grid[r][c]).equals("0")) return false;
      String coords = String.format("%s,%s", r, c);
      if (seen.contains(coords)) return false;
    }
}
````

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #

    class Solution:
      def numIslands(self, grid: List[List[str]]) -> int:
        seen = set()
        m = len(grid)
        n = len(grid[0])

        def dfs(r, c):
          out = r<0 or c<0 or r==m or c==n
          if out or (r, c) in seen or grid[r][c] == '0':
            return False

        res = 0
        for r in range(m):
          for c in range(n):
            if dfs(r, c):
              res += 1

        return res

    ```

  </div>

  <div id="ruby" className="tabcontent">
    ```ruby {} showLineNumbers
    #

    def num_islands(grid)
      m, n = grid.length, grid[0].length
      seen = Set.new

      dfs = lambda do |r,c|
        out = r < 0 || c < 0 || r == m || c == n
        return false if out
        return false if grid[r][c] == '0'
        return false if seen.include?("#{r},#{c}")
      end

      count = 0
      m.times do |r|
        n.times do |c|
          if dfs.call(r,c)
            count+=1
          end
        end
      end
      return count
    end
    ```

  </div>
  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    import "fmt"
    func numIslands(grid [][]byte) int {
      count := 0
      m := len(grid)
      n := len(grid[0])

      seen := make(map[string]bool)

      for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
          if dfs(r, c, seen, grid) {
            count += 1
          }
        }
      }

      return count
    }

    func dfs(r int, c int, seen map[string]bool,  grid [][]byte) bool {
      m := len(grid)
      n := len(grid[0])
      out := r < 0 || c < 0 || r == m || c == n
      if out || grid[r][c] == '0' {
        return false
      }

      coords := fmt.Sprintf("%d,%d", r, c)

      if _, ok := seen[coords]; ok {
        return false
      }
    }
    ```

  </div>
</div>

## Recursively call DFS()

Within dfs we now recursively call dfs updating r & c.

We increment and decrement both values to check left, top, right, and below the
current node.

Return true at the end of the function so that the
outer nested loop knows to increment the count.

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
    //

    var numIslands = function (grid) {
      var m = grid.length
      var n = grid[0].length
      var seen = new Set()
      function dfs(r, c) {
        var out = r < 0 || c < 0 || r > m - 1 || c > n - 1
        if (out) return false
        if (seen.has(`${r},${c}`)) return false
        if (grid[r][c] == 0) return false

        seen.add(`${r},${c}`)

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

        return true
      }

      var count = 0

      for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
          if (dfs(r, c)) {
            count += 1
          }
        }
      }

      return count
    }
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //
    function numIslands(grid: string[][]): number {
      var m = grid.length
      var n = grid[0].length
      var seen = new Set()
      function dfs(r,c) {
        var out = r < 0 || c < 0 || r == m || c == n
        if (out) return false
        if (seen.has(`${r},${c}`)) return false
        if (grid[r][c] == '0') return false
        seen.add(`${r},${c}`)
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
        return true
      }

      var count = 0

      for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
          if (dfs(r, c)) {
            count += 1
          }
        }
      }

      return count
    }
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    class Solution {
      int numIslands(List<List<String>> grid) {
        var m = grid.length;
        var n = grid[0].length;
        var seen = new Set();
        dfs(r,c) {
          if (r < 0 || c < 0 || r == m || c == n) {
            return false;
          }
          if (seen.contains('$r,$c')) {
            return false;
          }

          if (grid[r][c] == '0') {
            return false;
          }

          seen.add('$r,$c');

          dfs(r + 1, c);
          dfs(r - 1, c);
          dfs(r, c + 1);
          dfs(r, c - 1);

          return true;
        }

        var count = 0;

        for (var r = 0; r < m; r++) {
          for (var c = 0; c < n; c++) {
            if (dfs(r, c)) {
              count += 1;
            }
          }
        }

        return count;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    class Solution {
      public int numIslands(char[][] grid) {
        int count = 0;
        int m = grid.length;
        int n = grid[0].length;
        Set<String> seen = new HashSet<String>();

        for (int r = 0; r < m; r++) {
          for (int c = 0; c < n; c++) {
            if (dfs(r, c, seen, grid)) {
              count += 1;
            }
          }
        }

        return count;
      }

      public boolean dfs(int r, int c, Set<String> seen, char[][] grid) {
        boolean out = r < 0 || c < 0 || r == grid.length || c == grid[0].length;
        if (out) return false;
        if (Character.toString(grid[r][c]).equals("0")) return false;
        String coords = String.format("%s,%s", r, c);
        if (seen.contains(coords)) return false;
        seen.add(coords);

        dfs(r + 1, c, seen, grid);
        dfs(r - 1, c, seen, grid);
        dfs(r, c + 1, seen, grid);
        dfs(r, c - 1, seen, grid);

        return true;
      }
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #

    class Solution:
      def numIslands(self, grid: List[List[str]]) -> int:
        seen = set()
        m = len(grid)
        n = len(grid[0])

        def dfs(r, c):
          out = r<0 or c<0 or r==m or c==n
          if out or (r, c) in seen or grid[r][c] == '0':
            return False
          seen.add((r, c))
          dfs(r + 1, c)
          dfs(r - 1, c)
          dfs(r, c + 1)
          dfs(r, c - 1)
          return True

        res = 0
        for r in range(m):
          for c in range(n):
            if dfs(r, c):
              res += 1

        return res

    ```

  </div>

  <div id="ruby" className="tabcontent">
    ```ruby {} showLineNumbers
    #

    def num_islands(grid)
      m, n = grid.length, grid[0].length
      seen = Set.new

      dfs = lambda do |r,c|
        out = r < 0 || c < 0 || r == m || c == n
        return false if out
        return false if grid[r][c] == '0'
        return false if seen.include?("#{r},#{c}")

        seen.add("#{r},#{c}")

        dfs.call(r+1,c)
        dfs.call(r-1,c)
        dfs.call(r,c+1)
        dfs.call(r,c-1)
        return true
      end

      count = 0
      m.times do |r|
        n.times do |c|
          if dfs.call(r,c)
            count+=1
          end
        end
      end
      return count
    end
    ```

  </div>
  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    import "fmt"
    func numIslands(grid [][]byte) int {
      count := 0
      m := len(grid)
      n := len(grid[0])

      seen := make(map[string]bool)

      for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
          if dfs(r, c, seen, grid) {
            count += 1
          }
        }
      }

      return count
    }

    func dfs(r int, c int, seen map[string]bool,  grid [][]byte) bool {
      m := len(grid)
      n := len(grid[0])
      out := r < 0 || c < 0 || r == m || c == n
      if out || grid[r][c] == '0' {
        return false
      }

      coords := fmt.Sprintf("%d,%d", r, c)

      if _, ok := seen[coords]; ok {
        return false
      }

      seen[coords] = true

      dfs(r + 1, c, seen, grid)
      dfs(r - 1, c, seen, grid)
      dfs(r, c + 1, seen, grid)
      dfs(r, c - 1, seen, grid)

      return true
    }
    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
