---
title: 'Useful Heap Methods'
date: '2022-11-05'
tags: ['Data structures', 'Heaps', 'Python']
draft: false
summary: 'A few methods on the heap datastructure'
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

### Use `heapq.nlargest(k, nums)` to find largest values

```python
import heapq

nums = [99, 54, 12, 47, 41, 23, 45, 43, 37, 98, 100, 101]
a, b, c, d, e = heapq.nlargest(5, nums)
print(a, b, c, d, e)
# 101 100 99 98 54
```

### Use `heapq.nsmallest(k, nums)` to find smallest values

```python
nums = [99, 54, 12, 47, 41, 23, 45, 43, 37, 98, 100, 101]
a, b, c, d, e = heapq.nsmallest(5, nums)
print(a, b, c, d, e)
# 12 23 37 41 43
```

The return of both these methods are not unlike destructuring.

### Use `heapq.heapify(nums)` will create a heap for us

```python
nums = [99, 54, 12, 47, 41, 23, 45, 43, 37, 98, 100, 101]
heapq.heapify(nums)
print(nums)

# [12, 37, 23, 43, 41, 99, 45, 54, 47, 98, 100, 101]
```
