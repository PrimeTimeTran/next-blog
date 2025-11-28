"""LeetCode 332 - Reconstruct Itinerary

Hierholzer's algorithm (Eulerian path) adapted to return lexical order.

Approach:
- Build adjacency lists and use a min-heap per node to always take the smallest next edge.
- Use an explicit stack to perform the Hierholzer traversal: iterate from the current node
  following edges until stuck, then backtrack adding nodes to the itinerary.

Time: O(E log E) due to heap operations (E = number of tickets)
Space: O(E)
"""

from collections import defaultdict
import heapq


class Solution:
    def findItinerary(self, tickets):
        # build graph: min-heaps so we always pop the smallest lexical destination
        graph = defaultdict(list)
        for a, b in tickets:
            heapq.heappush(graph[a], b)

        route = []
        stack = ['JFK']

        while stack:
            # if current node has outgoing edges, follow the smallest one
            while graph[stack[-1]]:
                nxt = heapq.heappop(graph[stack[-1]])
                stack.append(nxt)
            # dead end, add to route and backtrack
            route.append(stack.pop())

        return route[::-1]
