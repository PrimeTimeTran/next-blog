---
draft: false
date: '2022-11-05'
title: 'Python: Useful Heap Methods'
tags: ['Data-Structures-Algorithms', 'Heaps', 'python']
summary: 'A few methods on the heap data structure'
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

The return of both these methods are unpacked/destructured values.

### Use `heapq.heapify(nums)` will create a heap for us

```python
nums = [99, 54, 12, 47, 41, 23, 45, 43, 37, 98, 100, 101]
heapq.heapify(nums)
print(nums)

# [12, 37, 23, 43, 41, 99, 45, 54, 47, 98, 100, 101]
```

### Create a heap

By default python creates a min heap, a heap with the smallest values first(at the root).

```python
heap = [10, 1, 2, 3, 4, 5]

heapq.heapify(heap)

print(heap[0]) # 1
heapq.heappop(heap)
print(heap[0]) # 2
```

### Max Heap

The root has the largest values

```python
import heapq

heap = [10, 1, 2, 3, 4, 5]

heapq._heapify_max(heap)

print(heap[0]) # 10
heapq._heappop_max(heap)
print(heap[0]) # 5

```

### Print heap as a tree

```python
def show_tree(tree, total_width=60, fill=' '):
    """Pretty-print a tree.
    total_width depends on your input size"""
    output = StringIO()
    last_row = -1
    for i, n in enumerate(tree):
        if i:
            row = int(math.floor(math.log(i+1, 2)))
        else:
            row = 0
        if row != last_row:
            output.write('\n')
        columns = 2**row
        col_width = int(math.floor((total_width * 1.0) / columns))
        output.write(str(n).center(col_width, fill))
        last_row = row
    print(output.getvalue())
    print('-' * total_width)
    return

```
