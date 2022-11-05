---
title: 'Useful Heap Methods'
date: '2022-11-05'
tags: ['Data structures', 'Heaps']
draft: false
summary: 'Two sum'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Heapq

We often need to find the largest and smallest values in a list. We can use [heapq](https://docs.python.org/3/library/heapq.html)
to accomplish this easily.

### How to get the five largest numbers from this list?

```python
nums = [99, 54, 12, 47, 41, 23, 45, 43, 37, 98, 100, 101]
```

### Using `heapq.nlargest(k, nums)` we can easily find the values we're looking for.

```python
import heapq

nums = [99, 54, 12, 47, 41, 23, 45, 43, 37, 98, 100, 101]
a, b, c, d, e = heapq.nlargest(5, nums)
print(a, b, c, d, e)
# 101 100 99 98 54
```

### We can use `heapq.nsmallest(k, nums)` as well

```python
import heapq

nums = [99, 54, 12, 47, 41, 23, 45, 43, 37, 98, 100, 101]
a, b, c, d, e = heapq.nsmallest(5, nums)
print(a, b, c, d, e)
# 12 23 37 41 43
```
