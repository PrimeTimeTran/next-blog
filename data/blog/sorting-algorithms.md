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

### Bubble Sort

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="ts" className="tablinks">typescript</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
    <button id="python" className="tablinks">python</button>
    <button id="go" className="tablinks">go</button>
  </div>

  <div id="js" className="tabcontent">
    ```js {} showLineNumbers
    //

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #
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
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    ```

  </div>
</div>

### Quick Sort

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="ts" className="tablinks">typescript</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
    <button id="python" className="tablinks">python</button>
    <button id="go" className="tablinks">go</button>
  </div>

  <div id="js" className="tabcontent">
    ```js {} showLineNumbers
    //

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #
    nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11 ]

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
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    ```

  </div>
</div>

### Selection Sort

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="ts" className="tablinks">typescript</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
    <button id="python" className="tablinks">python</button>
    <button id="go" className="tablinks">go</button>
  </div>

  <div id="js" className="tabcontent">
    ```js {} showLineNumbers
    //

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #
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
    print('Selection Sort:', selection_sort(nums))

    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    ```

  </div>
</div>

### Merge Sort

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="ts" className="tablinks">typescript</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
    <button id="python" className="tablinks">python</button>
    <button id="go" className="tablinks">go</button>
  </div>

  <div id="js" className="tabcontent">
    ```js {} showLineNumbers
    //

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #
    nums = [20, 13, 3, 3, 4, 5, 1, 2, 8, 7, 9, 0, 11 ]

    def merge_sort(arr):
      if len(arr) < 2:
        return arr

      midIdx = len(arr) // 2
      leftArr = arr[:midIdx]
      rightArr = arr[midIdx:]
      return merge(merge_sort(leftArr), merge_sort(rightArr))

    def merge(left, right):
      res = []
      leftIdx = 0
      rightIdx =  0
      while leftIdx < len(left) and rightIdx < len(right):
        if left[leftIdx] < right[rightIdx]
          res.push(left[leftIdx])
          leftIdx += 1
        else:
          res.push(right[rightIdx])
          rightIdx += 1
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    ```

  </div>
</div>
