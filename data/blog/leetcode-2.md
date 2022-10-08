---
draft: false
date: '2022-10-08'
title: 'Data structures & Algorithms | 16. 3Sum Closest Leetcode'
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
    
    var threeSumClosest = function(nums, target) {
      var res = nums[0] + nums[1] + nums[2];
      nums = nums.sort((a, b) => a - b);
      
      for(var i = 0; i < nums.length - 2; i ++) {
          if (i > 0 && nums[i] == nums[i - 1]) {
              continue
          }
          var l = i + 1
          var r = nums.length - 1
          
          while (l < r) {
              var cur = nums[i] + nums[l] + nums[r]
              if (cur == target) return cur
              if (cur > target) {
                  r -= 1
              } else if (cur < target) {
                  l += 1
              }
              
              if (Math.abs(cur - target) < Math.abs(res - target)) {
                  res = cur
              }
          }
      }
      return res
    };
    ```
  </div>

  <div id="ts" className="tabcontent">
    ```typescript
    //

    function threeSumClosest(nums: number[], target: number): number {
      var res = nums[0] + nums[1] + nums[2];
      nums = nums.sort((a, b) => a - b);

      for(var i = 0; i < nums.length - 2; i ++) {
          if (i > 0 && nums[i] == nums[i - 1]) {
              continue
          }
          var l = i + 1
          var r = nums.length - 1

          while (l < r) {
              var cur = nums[i] + nums[l] + nums[r]
              if (cur == target) return cur
              if (cur > target) {
                  r -= 1
              } else if (cur < target) {
                  l += 1
              }

              if (Math.abs(cur - target) < Math.abs(res - target)) {
                  res = cur
              }
          }
      }
      return res
    };


    ```

  </div>

  <div id="python" className="tabcontent">
    ```python
    #

    class Solution:
      def threeSumClosest(self, nums: List[int], target: int) -> int:
          nums.sort()
          res = nums[0] + nums[len(nums) - 1] + nums[len(nums) - 2]


          for i, n in enumerate(nums):
              if (i > 0) and nums[i - 1] == nums[i]:
                  continue
              l = i + 1
              r = len(nums) - 1

              while l < r:
                  curSum = nums[i] + nums[l] + nums[r]

                  if curSum == target:
                      return curSum
                  if curSum > target:
                      r -= 1
                  else:
                      l += 1

                  if abs(curSum - target) < abs(res - target):
                      res = curSum

          return res
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    //

    class Solution {
      int threeSumClosest(List<int> nums, int target) {
        var res = nums[0] + nums[1] + nums[2];
        nums.sort();

        for(var i = 0; i < nums.length - 2; i ++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            var l = i + 1;
            var r = nums.length - 1;

            while (l < r) {
                var cur = nums[i] + nums[l] + nums[r];
                if (cur == target) return cur;
                if (cur > target) {
                    r -= 1;
                } else if (cur < target) {
                    l += 1;
                }

                if ((cur - target).abs() < (res - target).abs()) {
                    res = cur;
                }
            }
        }
        return res;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java
    //

    class Solution {
        public int threeSumClosest(int[] nums, int target) {
            int res = nums[0] + nums[1] + nums[2];
            Arrays.sort(nums);

            for (int i = 0; i < nums.length - 2; i++) {
                if (i > 0 && nums[i] == nums[i - 1]) {
                    continue;
                }

                int l = i + 1;
                int r = nums.length - 1;

                while (l < r) {
                    int cur = nums[i] + nums[l] + nums[r];

                    if (cur > target) {
                        r -= 1;
                    } else {
                        l += 1;
                    }

                    if (Math.abs(cur - target) < Math.abs(res - target)) {
                        res = cur;
                    }
                }
            }

            return res;
        }
    }
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go
    //

    func absInt(x int) int {
      return absDiffInt(x, 0)
    }

    func absDiffInt(x, y int) int {
      if x < y {
          return y - x
      }
      return x - y
    }

    func threeSumClosest(nums []int, target int) int {
        res := nums[0] + nums[1] + nums[2]
        sort.Ints(nums[:])

        for i := 0; i < len(nums) - 2; i++ {
            if i > 0 && nums[i] == nums[i - 1] {
                continue
            }

            l := i + 1
            r := len(nums) - 1

            for l < r {
                cur := nums[i] + nums[l] + nums[r]
                if cur > target {
                    r -= 1
                } else {
                    l += 1
                }

                if absInt(cur - target) < absInt(res - target) {
                    res = cur
                }
            }
        }

        return res
    }
    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
