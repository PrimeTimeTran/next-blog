---
draft: true
date: '2022-10-08'
title: 'Data structures & Algorithms'
tags:
  [
    'Leetcode',
    'Algorithms',
    'Data structures',
    'Javascript',
    'Typescript',
    'Python',
    'Dart',
    'Java',
    'Go',
  ]
summary: 'Solving Leetcode problems to syntax of multiple languages and data structures & algorithms.'
---

## 16. 3Sum Closest

Given an integer array nums of length `n` and an integer `target`, find three integers
in nums such that the sum is _closest_ to target.

Return the _sum_ of the three integers.

You may assume that each input would have exactly _one_ solution.

### Solution

Solve this problem by using three _pointers_.

First sort input `nums`.

Define default `res` and initialize it's values to any 3 combination of nums.

Loop from 0 to the end of nums. This loops index, `i`, is the first pointer.

Within that loop, we initialize the next two _pointers_, `left` and `right`

Loop while `l` is smaller than `r`

Sum the values of nums[i] + nums[l] + nums[r] and compare it to target

If the sum larger than `target`, decrement `r`. Otherwise increment `l`

Check if the value of `cur` minus `target` is less than `res` minus `target`.

If so, reassign `res` to `cur`

## Declare Hashmap

We'll add keys to this hashmap as we loop over the items in our numbers array.
Each key will be a number which we're looking for and it's value will be it's index.

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="ts" className="tablinks">typescript</button>
    <button id="python" className="tablinks">python</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
    <button id="go" className="tablinks">go</button>
  </div>

  <div id="js" className="tabcontent">
    ```js
    // 
    
    ```
  </div>

  <div id="ts" className="tabcontent">
    ```typescript
    //

    ```

  </div>

  <div id="python" className="tabcontent">
    ```python
    #

    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    //

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java
    //

    ```

  </div>

  <div id="go" className="tabcontent">
    ```go
    //

    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
