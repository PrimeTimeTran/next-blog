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
