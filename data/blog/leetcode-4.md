---
draft: false
date: '2022-10-13'
title: 'Data structures & Algorithms'
tags:
  [
    'Leetcode',
    'Algorithms',
    'Data structures',
    'Javascript',
    'Typescript',
    'Dart',
    'Java',
    'Python',
    'Go',
  ]
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

## 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in
the array, and return false if every element is distinct.

### Solution

Iterate input nums. Use the target and current num to identify sought value. Add
sought value and index to hash map if not found. If found return indices.

## Declare Hashmap

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
    ```js
    // The for of loop in javascript allows us to loop over items
    // in an array easily.

    var containsDuplicate = function(nums) {
      var hashMap = {}

      for (let n of nums) {
        if (hashMap[n]) {
          return true;
        }
        hashMap[n] = true;
      }
      return false
    }

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript
    //
    function containsDuplicate(nums: number[]): boolean {
      var hashMap = {}

      for(let n of nums) {
        if (hashMap[n]) {
          return true
        }
        hashMap[n] = true
      }
      return false
    }
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    //
    class Solution {
      bool containsDuplicate(List<int> nums) {
        var hashMap = {};
        for(var i = 0; i < nums.length; i++) {
          var num = nums[i];
          if (hashMap[num] != null) {
            return true;
          } else {
            hashMap[num] = true;
          }
        }
        return false;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java
    //
    class Solution {
      public boolean containsDuplicate(int[] nums) {
        int idx = 0;
        Map hashMap = new HashMap<>();

        while(idx < nums.length) {
          if (hashMap.containsKey(nums[idx])) {
            return true;
          } else {
            hashMap.put(nums[idx], true);
          }

          idx++;
        }

        return false;
      }
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python
    #

    class Solution:
      def containsDuplicate(self, nums: List[int]) -> bool:
        res = {}

        for n in nums:
          if n in res:
            return True
          else:
            res[n] = True
        return False

    ```

  </div>

  <div id="go" className="tabcontent">
    ```go
    //

    func containsDuplicate(nums []int) bool {
      hashMap := make(map[int]bool)
      for i := 0; i < len(nums); i++ {
        if _, ok := hashMap[nums[i]]; ok {
          return true
        } else {
          hashMap[nums[i]] = true
        }
      }
      return false
    }
    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
