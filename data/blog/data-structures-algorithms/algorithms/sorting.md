---
draft: false
date: '2019-08-20'
title: 'Algorithms: Bubble Sort, Selection Sort, Insertion Sort, & Merge Sort'
tags: ['algorithms', 'data-structures-algorithms', 'python']
summary: 'Commonly used sorting algorithms & their corresponding Big Os. Develop a better intuition on DSAs by examining canonical sorting algorithms in Python.'
---

# Introduction

We'll cover the following sorting algorithms.

- [Bubble Sort](#bubble-sort)
- [Selection Sort](#selection-sort)
- [Insertion Sort](#insertion-sort)
- [Merge Sort](#merge-sort)

For our examples imagine `nums` represents the heights of players on a team.

We want them in ascending order from **shortest** to **tallest**.

## Bubble Sort

From left moving right compare two players at a time swapping if the left player is taller than the right.
Repeat this process until you reach the end. If you reach the end and you made any swaps then repeat as you can't be certain the **entire** list is sorted.

In other words repeat looking at the entire list and swapping until you can go from the start to end without any swaps.

- Start at index 0 of list.
- If left is larger than right swap them and flag as unsorted

```python
nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11]

def bubble_sort(nums):
  sorted = False

  while not sorted:
    sorted = True
    for i in range(len(nums) - 1):
      if nums[i] > nums[i + 1]:
        sorted = False
        nums[i], nums[i + 1] = nums[i + 1], nums[i]

  return nums


print('Bubble Sort:')
print(bubble_sort(nums))

# time:
# O(n²) where n is the length of nums.
# This is because, in the worst-case scenario (e.g., the list is in reverse order),
# the algorithm may require up to n - 1 passes, and during each pass, the inner loop may run up to n - 1 times.
# This results in approximately n * (n - 1) / 2 comparisons and potential swaps, which simplifies to O(n²).

# space:
# O(1)
# The sorting is done in-place. No extra data structures are used, just a few variables.
```

## Selection Sort

Beginning from the start of the list and moving right mark the position of the shortest player.
Once you reach the end, if the marked player isn't the one you started with(the beginning of the list) swap them their positions(indexes).

Repeat this process moving from left to right until you've gone through the entire list of players.

```python
nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11]

def selection_sort(nums):
  for i in range(len(nums)):
    min = i
    for j in range(i + 1, len(nums)):
      if nums[j] < nums[min]:
        min = j
    if min != i:
      nums[min], nums[i] = nums[i], nums[min]

  return nums

print('Selection Sort:')
print(selection_sort(nums))

# time:
# O(n²) where n is the length of nums.
# For each iteration of the outer loop, the inner loop runs up to n - i - 1 times to find the minimum.
# So the total number of comparisons is approximately:
# n + (n-1) + (n-2) + ... + 1 = n(n-1)/2, which simplifies to O(n²).

# space:
# O(1)
# The sorting is done in-place, using only a few variables for tracking indices (i, j, min).
# There is no additional memory allocation based on input size.
```

## Insertion Sort

Starting from the left moving right take two players at a time.
If the player on the right is taller than the one on the left then swap them.

Then move left(toward the start of the list) & repeat the evaluation of left & right players swapping if necessary.

Repeat this process until you reach the end of the list and the list should then be sorted.

```python
nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11]

def insertion_sort(nums):
	for i in range(1, len(nums)):
		while nums[i-1] > nums[i] and i > 0:
			nums[i], nums[i-1] = nums[i-1], nums[i]
			i -= 1
	return nums

print('Insertion Sort:')
print(insertion_sort(nums))

# time:
# O(n²) where n is the length of nums.
# Happens when the input list is in reverse order.
# Each new element needs to be compared and shifted past all previous elements.

# space:
# O(1)
# Sorting is done in-place using constant extra space (val and loop variables).
```

## Merge Sort

Create two functions, one to merge and the other to merge & sort.
Merge sort will return an list if it's less than 2 items long. If it's longer, it'll split the list in the middle and then
recursively call itself on both half's. Lastly it merges both halves. It indexes both halves and takes the smaller of each index while there are any items left in both halves. Before returning the merged halves it takes whats left of both left and right halves in the list.

```python
nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11]

def merge_sort(arr):
  if len(arr) < 2:
    return arr

  m = len(arr) // 2
  l = arr[:m]
  r = arr[m:]
  return merge(merge_sort(l), merge_sort(r))

def merge(left, right):
  res = []
  l = r = 0
  while l < len(left) and r < len(right):
    if left[l] < right[r]:
      res.append(left[l])
      l += 1
    else:
      res.append(right[r])
      r += 1

  res.extend(left[l:])
  res.extend(right[r:])

  return res

print('Merge Sort:')
print(merge_sort(nums))
# time:
# O(n log n)
# The list is recursively split in half each time — this takes log n levels of recursion.
# At each level, the merge() function processes all n elements to combine the sorted halves.
# So, you have log n levels × n work per level ⇒ O(n log n)

# space:
# O(n)
# At each level of merging, new lists (res) are created to store sorted results.
# Since you're not sorting in place and you're combining sublists,
# the extra space used overall is proportional to the number of elements — O(n).
```

# Conclusion

Although modern programming languages have helpers which can sort lists for us knowing how to implement these ourselves
gives us a deep understanding of DSAs.

Specifically, a deeper understanding of Big O can be attained by understanding how our algorithms behave given inputs of larger lengths.

| Algorithm      | Best Case Time | Worst Case Time | Average Case Time | Space Complexity | Stable? | Notes                                      |
| -------------- | -------------- | --------------- | ----------------- | ---------------- | ------- | ------------------------------------------ |
| Bubble Sort    | O(n)           | O(n²)           | O(n²)             | O(1)             | ✅ Yes  | Efficient only if nearly sorted            |
| Selection Sort | O(n²)          | O(n²)           | O(n²)             | O(1)             | ❌ No   | Always scans the full list, even if sorted |
| Insertion Sort | O(n)           | O(n²)           | O(n²)             | O(1)             | ✅ Yes  | Great for small or mostly-sorted lists     |
| Merge Sort     | O(n log n)     | O(n log n)      | O(n log n)        | O(n)             | ✅ Yes  | Consistent performance, uses extra space   |
