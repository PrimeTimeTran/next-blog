---
title: 'Common Python'
date: '2022-08-18'
tags: ['Python']
draft: true
summary: 'Common Python'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Common Python

### Intro

```python
foods = ['apple', 'banana', 'carrot']

vals = iter(foods)

print(next(vals))
print(next(vals))
print(next(vals))
# apple, banana, carrot
```

Quick sort.

```python
def quick_sort(nums):
  length = len(nums)

  if length <= 1:
    return nums
  pivot = nums.pop()

  left = []
  right = []

  for n in nums:
    if n > pivot:
      right.append(n)
    else:
      left.append(n)

  return quick_sort(left) + [pivot] + quick_sort(right)

print(quick_sort([13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11 ]))
```
