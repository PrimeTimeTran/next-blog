"""Edmonds-Karp implementation (BFS-based Max Flow)

This file is a reusable implementation to experiment with max-flow/min-cut problems.
"""
from collections import deque, defaultdict


def edmonds_karp(capacity, source, sink):
    # capacity: dict of dict, capacity[u][v] = cap
    flow = 0
    # residual capacities
    residual = defaultdict(lambda: defaultdict(int))
    for u in capacity:
        for v in capacity[u]:
            residual[u][v] = capacity[u][v]
            residual[v][u] = residual[v].get(u, 0)

    while True:
        # BFS to find augmenting path
        parent = {source: None}
        q = deque([source])
        while q and sink not in parent:
            u = q.popleft()
            for v, cap in residual[u].items():
                if v not in parent and cap > 0:
                    parent[v] = u
                    q.append(v)
        if sink not in parent:
            break
        # find bottleneck
        v = sink
        bottleneck = float('inf')
        while v != source:
            u = parent[v]
            bottleneck = min(bottleneck, residual[u][v])
            v = u
        # apply flow
        v = sink
        while v != source:
            u = parent[v]
            residual[u][v] -= bottleneck
            residual[v][u] += bottleneck
            v = u
        flow += bottleneck
    return flow


if __name__ == '__main__':
    # simple example
    cap = {
        's': {'a': 3, 'b': 2},
        'a': {'b': 1, 't': 2},
        'b': {'t': 3},
        't': {}
    }
    print('Max flow:', edmonds_karp(cap, 's', 't'))
