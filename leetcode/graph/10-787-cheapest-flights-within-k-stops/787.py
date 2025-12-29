"""
1. Understand

"""

from collections import defaultdict
from heapq import heappop, heappush


class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        g, q, min_stops = defaultdict(list), [[0, src, 0]], {}
        for u,v,w in flights: g[u].append([v,w])
        while q:
            accum_cost, u, accum_stops = heappop(q)
            if u == dst: return accum_cost
            if accum_stops > k: continue
            if u in min_stops and min_stops[u] <= accum_stops: continue
            min_stops[u] = accum_stops + 1
            for des, cost in g[u]:
                heappush(q, [accum_cost + cost, des, min_stops[u]])
        return -1
