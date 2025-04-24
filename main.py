# [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11]
# ├── Left: [20, 13, 3, 3, 4, 5]
# │   ├── Left: [20, 13, 3]
# │   │   ├── Left: [20]
# │   │   └── Right: [13, 3]
# │   │       ├── [13]
# │   │       └── [3]
# │   └── Right: [3, 4, 5]
# │       ├── Left: [3]
# │       └── Right: [4, 5]
# │           ├── [4]
# │           └── [5]
# └── Right: [1, 2, 8, 7, 9, 0, 11]
#     ├── Left: [1, 2, 8]
#     │   ├── [1]
#     │   └── [2, 8]
#     │       ├── [2]
#     │       └── [8]
#     └── Right: [7, 9, 0, 11]
#         ├── Left: [7, 9]
#         │   ├── [7]
#         │   └── [9]
#         └── Right: [0, 11]
#             ├── [0]
#             └── [11]

# [20, 13, 3, 3, 4, 5]            [1, 2, 8, 7, 9, 0, 11]
#   [20, 13, 3]   [3, 4, 5]      [1, 2, 8]    [7, 9, 0, 11]
#     [20] [13, 3] [3] [4, 5]   [1] [2, 8]    [7] [9, 0, 11]
#          [13] [3]            [2] [8]        [9, 0, 11]


nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11]

def merge_sort(arr):
  if len(arr) < 2:
    return arr
  m = len(arr) // 2
  return merge(merge_sort(arr[:m]), merge_sort(arr[m:]))

def merge(left, right):
  res = []
  l = r = 0
  while l < len(left) and r < len(right):
    if left[l] < right[r]:
      res.append(left[l])
      l+=1
    else:
      res.append(right[r])
      r+=1
  res.extend(left[l:])
  res.extend(right[r:])
  return res

print('Merge Sort:')
print(merge_sort(nums))
