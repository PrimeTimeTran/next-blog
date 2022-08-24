---
title: Graph Programming
date: '2022-08-23'
tags: ['Graph Programming']
draft: true
summary: A collection of Graph Coding problems and their solutions with Big O time complexity. Solutions include not only brute force but optimized solutions as well.
---

# Graph programming

## Iterative

#### Depth First Iterative

```js
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
