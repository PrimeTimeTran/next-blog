---
draft: false
date: '2022-04-28'
title: "Algorithms: Dijkstra's Algorithm"
summary: 'One of the most famous algorithms in the field of graph theory. Useful when finding the shortest paths between nodes in a weighted graph.'
tags: ['algorithms', 'data-structures-algorithms', 'python']
---

# Introduction

[Dijkstra]()'s algorithm involves using a queue.
We use to the queue to maintain a list of nodes which we need to process.
As with other graph problems the algorithm will involve short circuiting if we encounter a node which we've seen before.

We will have seen a node before under two conditions.

- We haven't processed this before.
- We've processed this before successfully

Sounds confusing right?

`1` reason this condition exists is we haven't processed a node when we haven't processed all it's neighbors/children. `2` is when you've traversed this node recursively successfully(including its neighbors/children).

## Practice Problems

- [743. Network Delay Time](https://leetcode.com/problems/network-delay-time)
- [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops)
- [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- [332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary)
- [1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/description)
- [2492. Minimum Score of a Path Between Two Cities](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/description)

# Conclusion
