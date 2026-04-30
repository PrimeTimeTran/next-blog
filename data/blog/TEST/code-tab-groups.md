---
draft: false
date: '2030-01-01'
title: 'TEST: Code Tab Groups'
summary: 'TESTING of Code Tab Groups rendering'
tags: ['test']
---

## Tab Group

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
    var twoSum = function (nums, target) {
      var map = {}
    }
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    function twoSum(nums: number[], target: number): number[] {
      var map = {}
    }
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    class Solution {
      List<int> twoSum(List<int> nums, int target) {
        var hm = {};
        return [0, 0]
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    class Solution {
      public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        return result;
      }
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    func twoSum(nums []int, target int) []int {
      dict := make(map[int]int)
      return make([]int, 0, 0)
    }
    ```

  </div>
</div>
