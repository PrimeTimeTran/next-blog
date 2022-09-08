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
    // console.log(visited)
    console.log(node)
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
