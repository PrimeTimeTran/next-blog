---
draft: false
date: 2016-10-14
title: 'LeetCode: 743. Network Delay Time'
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
tags: ['leetcode', 'data structures algorithms', 'graph', 'priority queue', 'python']
---

# Description

You are given a network of `n` nodes, labeled from `1` to `n`. You are also given times, a list of travel times as directed edges `times[i] = (uᵢ, vᵢ, wᵢ)`, where `uᵢ` is the source node, `vᵢ` is the target node, and `wᵢ` is the time it takes for a signal to travel from source to target.

We will send a signal from a given node `k`. Return the minimum time it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.

## Intuition

We build an adjacency list using input `times` which stores as key's the `origin` node and as values a list which contains `destination` node & `time` taken to arrive at that node.

Use a priority queue(PQ) to BFS out from `k`. The priority queue will hold the accumulated time to get to this node & the current node. Initialize it with `0` time and `k` as the current node.

Also maintain a `dict`, `seen`, which tracks numbers of node's visited. When the length of `seen` equals `n` then we know the signal has reached all node's so we can return the accumulated time thus far.

1. Setup Variables:
   - `pq` is our PQ.
   - `g` is our adjacency list.
   - `seen` is watches for previously visited nodes & our exit case.
2. Build Adjacency List:
   - We're just looping over the edges of our graph provided inside of `times`.
3. Utilize Priority Queue:
   - While we have items in our PQ we'll pop from it.
   - Prevent backtracking with `seen`. If we've seen this node before we'll `continue` to the next iteration of the loop.
   - If we haven't continued we know it's the first time we've encountered this node so we can add it to `seen`.
   - Check for success condition, when `seen`'s length matches `n` then we know we've traversed all nodes and can return `time_accumulated`.
4. Append Neighbors to PQ:
   - Utilize the adjacency list we built in step 2 to identify which edges/nodes we still need to process.
   - When pushing to the PQ add `time_accumulated` to the current `time` which is the time it takes to get from `source` node to `destination` node.

## Code

<div className="tab-group">
  <div className="tab">
    <button id="1" className="tablinks">1. Setup Variables</button>
    <button id="2" className="tablinks">2. Build Adjacency List</button>
    <button id="3" className="tablinks">3. Utilize Priority Queue</button>
    <button id="4" className="tablinks">4. Append To Priority Queue Neighbor Nodes</button>
  </div>

  <div id="1" className="tabcontent">
    ```python {} showLineNumbers {3}
    class Solution:
      def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        pq, seen, g = [[0, k]], set(), defaultdict(list)
        
    ```
  </div>
  <div id="2" className="tabcontent">
    ```python {} showLineNumbers {4}
    class Solution:
      def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        pq, seen, g = [[0, k]], set(), defaultdict(list)
        for u,v,w in times: g[u].append([w,v])
    ```
  </div>
  <div id="3" className="tabcontent">
    ```python {} showLineNumbers {5-9}
    class Solution:
      def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        pq, seen, g = [[0, k]], set(), defaultdict(list)
        for u,v,w in times: g[u].append([w,v])
        while pq:
          time_accumulated, origin = heappop(pq)
          if origin in seen: continue
          seen.add(origin)
          if len(seen) == n: return time_accumulated
        return -1
    ```
  </div>
  <div id="4" className="tabcontent">
    ```python {} showLineNumbers {10-11}
    class Solution:
      def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        pq, seen, g = [[0, k]], set(), defaultdict(list)
        for u,v,w in times: g[u].append([w,v])
        while pq:
          time_accumulated, origin = heappop(pq)
          if origin in seen: continue
          seen.add(origin)
          if len(seen) == n: return time_accumulated
          for time, destination in g[origin]:
            heappush(pq, [time+time_accumulated, destination])
        return -1
    ```
  </div>
</div>

<br/>
# Conclusion

This solution uses [Dijkstra’s algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) to find the minimum time for a signal to reach all nodes.
It builds a graph `g` where each node maps to its outgoing edges.
A priority queue (`pq`) always selects the next node with the smallest accumulated time.
As nodes are visited (tracked in `seen`), the total travel time is updated.
If all nodes are visited, it returns the maximum time taken; if not, it returns -1 indicating not all nodes are reachable.

[Check out other Dijkstra Algorithm problems](/blog/data-structures-algorithms/algorithms/dijkstras)
