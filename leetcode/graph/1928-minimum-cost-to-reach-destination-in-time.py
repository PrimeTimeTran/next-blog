class Solution:
    def minCost(self, limit: int, edges: List[List[int]], fees: List[int]) -> int:
        g, n, q = defaultdict(list), len(fees)-1, [(fees[0], 0, 0)]
        min_time = [float('inf')] * len(edges)
        for u, v, t in edges:
            g[u].append((v, t))
            g[v].append((u, t))
        while q:
            accum_fee, origin, accum_time = heappop(q)
            if accum_time > limit: continue
            if accum_time >= min_time[origin]: continue
            if origin == n: return accum_fee
            min_time[origin] = accum_time
            for des, t in g[origin]:
                heapq.heappush(q, (accum_fee + fees[des], des, accum_time + t))
        return -1
