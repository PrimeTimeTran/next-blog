---
title: 'Sorting Algorithms'
date: '2022-08-18'
tags: ['Python']
draft: true
summary: 'Sorting Algorithms'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Sorting Algorithms

```python
nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11 ]

def bubble_sort(nums):
  sorted = False

  while not sorted:
    sorted = True
    for i in range(0, len(nums) - 1):
      if nums[i] > nums[i + 1]:
        sorted = False
        nums[i], nums[i + 1] = nums[i + 1], nums[i]

  return nums

print('Bubble Sort:', bubble_sort(nums))


def quick_sort(nums):
  if len(nums) <= 1:
    return nums

  pivot = nums.pop()
  left = []
  right = []

  for n in nums:
    if n < pivot:
      left.append(n)
    else:
      right.append(n)

  return quick_sort(left) + [pivot] + quick_sort(right)


print('Quick Sort:', quick_sort(nums))


def selection_sort(nums):
  idx_length = len(nums) - 1
  for i in range(0, idx_length):
    min_value = i
    for j in range(i + 1, len(nums)):
      if nums[j] < nums[min_value]:
        min_value = j
    if min_value != i:
      nums[min_value], nums[i]  = nums[i], nums[min_value]

  return nums


print('Selection Sort:', selection_sort(nums))



def merge_sort(arr):
  if len(arr) < 2:
    return arr

  midIdx = len(arr) // 2
  leftArr = arr[:midIdx]
  rightArr = arr[midIdx:]
  return merge(merge_sort(leftArr), merge_sort(rightArr))
```
