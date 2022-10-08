---
draft: false
date: '2022-10-07'
title: '1. Two Sum | Leetcode | Data Structures & Algorithms'
tags:
  [
    'Leetcode',
    'Algorithms',
    'Data Structures',
    'Javascript',
    'Typescript',
    'Python',
    'Dart',
    'Java',
    'Go',
  ]
summary: 'Solving Leetcode problems to syntax of multiple languages and data structures & algorithms.'
---

## 1. Two Sum

Given an array of numbers and a target, return the indices of two numbers such
that they sum to **target**.

### Solution

Use a hashmap to store the values we're _looking_ for. We can
identify which numbers we're looking for by subtracting target - num
iteratively as we loop over the numbers we're given.

## Declare Hashmap

We'll add keys to this hashmap as we loop over the items in our numbers array.
Each key will be a number which we're looking for and it's value will be it's index.

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="python" className="tablinks">python</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
  </div>

  <div id="js" className="tabcontent">
    ```js
    var twoSum = function (nums, target) {
      let map = new Map()
    }
    ```
  </div>

  <div id="python" className="tabcontent">
    ```python
    # Python depends on indentation.
    # Python doesn't use curly braces for it's codeblocks like all the other languages.

    class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    // Despite the fact we're guaranteed to have at least one pair
    // which sums to target, we must hardcode a return type in Dart.

    // The Dart compiler will complain if we don't.
    // "A non-null value must be returned since the return type 'List<int>'
    // doesn't allow null"

    class Solution {
      List<int> twoSum(List<int> nums, int target) {
        var hm = {};
        return [0, 0]
      }
    }
    ```

  </div>
  <div id="java" className="tabcontent">
    ```java
    // In Java we must declare and return a Array, result in this case.
    // This is because of Java being strongly typed.

    class Solution {
      public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        return result;
      }
    }
    ```

  </div>
</div>

## Loop over numbers

We loop over the input nums and use the current item to calculate sought numbers,
the difference between target and current number.

The formula `target - num` determines which number we need next,
the pair to this number which would sum to `target`.

Store this number, `diff` in the hashmap and the current index as it's value.

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="python" className="tablinks">python</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
  </div>

  <div id="js" className="tabcontent">
    ```js
    var twoSum = function (nums, target) {
      let map = new Map()
      for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let diff = target - num

        map.set(num, i)
      }
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python
    class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}

        for i, num in enumerate(nums):
          diff = target - num

          hashMap[num] = i
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    class Solution {
      List<int> twoSum(List<int> nums, int target) {
        var hm = {};

        for (var i = 0; i < nums.length; i++) {
            var num = nums[i];
            var diff = target - num;

            hm[num] = i;
        }
        return [];
      }
    }
    ```

  </div>
  <div id="java" className="tabcontent">
    ```java
    class Solution {
      public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {

          map.put(nums[i], i);
        }
        return result;
      }
    }
    ```

  </div>
</div>

## Check for diff in hashmap

To complete the algorithm we check if the difference exists in the
hashmap. If it does, we return the current index, and the value of that key in
the hashmap.

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="python" className="tablinks">python</button>
    <button id="dart" className="tablinks">dart</button>
    <button id="java" className="tablinks">java</button>
  </div>

  <div id="js" className="tabcontent">
    ```js
    var twoSum = function (nums, target) {
      let map = new Map()
      for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let diff = target - num
        if (map.has(diff)) {
          return [i, map.get(diff)]
        }
        map.set(num, i)
      }
    }
    ```
  </div>

  <div id="python" className="tabcontent">
    ```python
    class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}

        for i, num in enumerate(nums):
          diff = target - num

          if diff in hashMap:
            return [hashMap[diff], i]

          hashMap[num] = i
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    class Solution {
      List<int> twoSum(List<int> nums, int target) {
        var hm = {};

        for (var i = 0; i < nums.length; i++) {
            var num = nums[i];
            var diff = target - num;
            if (hm[diff] != null) return [i, hm[diff]];
            hm[num] = i;
        }
        return [];
      }
    }
    ```

  </div>
  <div id="java" className="tabcontent">
    ```java
    class Solution {
      public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
          if (map.containsKey(target - nums[i])) {
            result[0] = map.get(target - nums[i]);
            result[1] = i;
            return result;
          }
          map.put(nums[i], i);
        }
        return result;
      }
    }
    ```
  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
