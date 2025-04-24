nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11]

def bubble_sort(nums):
  sorted = False
  while not sorted:
    sorted = True
    for i in range(len(nums)-1):
      if nums[i] > nums[i+1]:
        sorted = False
        nums[i], nums[i+1] = nums[i+1], nums[i]
  return nums

def selection_sort(nums):
  for i in range(len(nums)):
    min = i
    for j in range(len(nums)):
      if nums[i] > nums[j]:
        min = j
    if min != i:
      nums[i], nums[min] = nums[min], nums[i]
    return nums

def insertion_sort(nums):
	for i in range(1, len(nums)):
		val = nums[i]
		while nums[i-1] > val and i > 0:
			nums[i], nums[i-1] = nums[i-1], val
			i -= 1
	return nums

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

print('Bubble Sort:')  
print(bubble_sort(nums))

print('Selection Sort:')
print(selection_sort(nums))

print('Insertion Sort:')
print(insertion_sort(nums))

print('Merge Sort:')
print(merge_sort(nums))
