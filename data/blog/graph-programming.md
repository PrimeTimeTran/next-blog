---
title: Graph Programming
date: '2022-08-23'
tags: ['Graph Programming']
draft: false
summary: A collection of Graph Coding problems and their solutions with Big O time complexity. Solutions include not only brute force but optimized solutions as well.
---

## Graph programming

## Iterative

### DFS vs BFS

```js
// DFS Iterative
let depthFirstPrint = (graph, source) => {
  const stack = [source]

  while (stack.length > 0) {
    const cur = stack.pop()
    console.log(cur)
    for (let nei of graph[cur]) {
      stack.push(nei)
    }
  }
}

// DFS Recursive
depthFirstPrint = (graph, source) => {
  console.log(source)
  for (let nei of graph[source]) {
    depthFirstPrint(graph, nei)
  }
}

// BFS
const breadthFirstPrint = (graph, source) => {
  const q = [source]
  while (q.length > 0) {
    const cur = q.shift()
    console.log(cur)
    for (const nei of graph[cur]) {
      q.push(nei)
    }
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

breadthFirstPrint(graph, 'a')
```

### Has Path

```js
// BFS
let hasPath = (graph, src, dst) => {
  const q = [src]
  while (q.length > 0) {
    const cur = q.shift()
    if (cur === dst) return true
    for (const nei of graph[cur]) {
      q.push(nei)
    }
  }
  return false
}

// DFS
hasPath = (graph, src, dst) => {
  if (src == dst) return true

  for (const nei of graph[src]) {
    if (hasPath(graph, nei, dst)) {
      return true
    }
  }
  return false
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

console.log(hasPath(graph, 'f', 'k')) // true
```

### Undirected Path

![Can we go from a to b](https://i.imgur.com/UgGlfI9.png)

```js
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

const buildGraph = (edges) => {
  const graph = {}
  for (const edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const hasPath = (graph, src, dst, visited) => {
  if (visited.has(src)) return false
  if (src === dst) return true

  visited.add(src)

  for (const nei of graph[src]) {
    if (hasPath(graph, nei, dst, visited) === true) {
      return true
    }
  }
  return false
}

const unDirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
}

console.log(unDirectedPath(edges, 'i', 'o'))
console.log(unDirectedPath(edges, 'i', 'j'))

// time = O(e)
// space = O(n)
```

### Connected Components

![Number of connected](https://i.imgur.com/YmO5nme.png)

```js
const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
}

const connectedComponentsCount = (graph) => {
  const visited = new Set()
  let count = 0
  for (const node in graph) {
    console.log(visited)
    if (explore(graph, node, visited) === true) {
      count += 1
    }
  }
  return count
}

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false

  visited.add(String(current))

  for (const nei of graph[current]) {
    explore(graph, nei, visited)
  }
  return true
}

console.log(connectedComponentsCount(graph)) // 3

// time = o(e)
// space = o(n)
```

### Largest Component

![Shortest](https://i.imgur.com/8cgn2Rl.png)

```js
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}

const largestComponent = (graph) => {
  const visited = new Set()
  let longest = 0
  for (const node in graph) {
    const size = exploreSize(graph, node, visited)
    if (size > longest) longest = size
  }

  return longest
}

const exploreSize = (graph, cur, visited) => {
  if (visited.has(String(cur)) === true) return 0

  visited.add(String(cur))

  let size = 1

  for (const nei of graph[cur]) {
    size += exploreSize(graph, nei, visited)
  }

  return size
}

console.log(largestComponent(graph))

// t = o(e)
// s = o(n)
```

### Shortest Path

![Shortest](https://i.imgur.com/4qnm7pK.png)

```js
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

const buildGraph = (edges) => {
  const graph = {}
  for (const edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const visited = new Set([nodeA])
  const queue = [[nodeA, 0]]

  while (queue.length > 0) {
    const [cur, distance] = queue.shift()
    if (cur === nodeB) return distance
    for (const nei of graph[cur]) {
      if (!visited.has(nei)) {
        visited.add(nei)
        queue.push([nei, distance + 1])
      }
    }
  }
  return -1
}

console.log(shortestPath(edges, 'w', 'z'))
```

### Island Count

![Four islands](https://i.imgur.com/CjvWcib.png)

```js
const grid = [
  ['W', 'L', 'W', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'L', 'W'],
  ['W', 'L', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L', 'W'],
  ['W', 'L', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W'],
]

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length

  if (!rowInbounds || !colInbounds) return false

  if (grid[r][c] === 'W') return false

  const post = String(`${r},${c}`)
  if (visited.has(post)) return false
  visited.add(post)

  explore(grid, r - 1, c, visited)
  explore(grid, r + 1, c, visited)
  explore(grid, r, c - 1, visited)
  explore(grid, r, c + 1, visited)
  return true
}

const islandCount = (grid) => {
  const visited = new Set()
  let count = 0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1
      }
    }
  }
  return count
}
// t = o(rc)
// s = o(rc)
console.log(islandCount(grid)) // -> 4
```

### Min Island

```js
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length

  if (!rowInbounds || !colInbounds) return 0

  if (grid[r][c] === 'W') return 0

  const post = String(`${r},${c}`)
  if (visited.has(post)) return 0
  visited.add(post)

  let sum = 1
  sum += explore(grid, r - 1, c, visited)
  sum += explore(grid, r + 1, c, visited)
  sum += explore(grid, r, c - 1, visited)
  sum += explore(grid, r, c + 1, visited)
  return sum
}

const minimumIsland = (grid) => {
  const visited = new Set()
  let minSize = Infinity

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = explore(grid, r, c, visited)
      if (size > 0 && size < minSize) {
        minSize = size
      }
    }
  }
  return minSize
}
console.log(minimumIsland(grid)) // -> 2
```
