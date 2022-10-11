---
draft: false
date: '2022-10-08'
title: '16. 3Sum Closest | Leetcode | Data Structures & Algorithms'
tags:
  [
    'Leetcode',
    'Algorithms',
    'Data Structures',
    'Javascript',
    'Typescript',
    'Dart',
    'Java',
    'Python',
    'Go',
  ]
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

## 16. 3Sum Closest

Given an integer array nums of length `n` and an integer `target`, find three integers
in nums such that the sum is _closest_ to target.

Return the _sum_ of the three integers.

You may assume that each input would have exactly _one_ solution.

### Solution

Solve this problem by using three _pointers_.

Sort input `nums`.

Define `res` and initialize it's values to any 3 combination of nums. It'll hold
our sought value.

Iterate the nums var. This loop's index, `i`, is the first pointer.

Within that loop, we initialize the next two _pointers_, `left` and `right`.

Loop while `l` is smaller than `r`.

Sum the values of nums[i] + nums[l] + nums[r] and compare it to `target`.

If the sum larger than `target`, decrement `r`. Otherwise increment `l`.

Check if the diff absolute value of `cur` minus `target` is less than diff of
absolute value of `res` minus `target`.

If so, reassign `res` to `cur`.

## Define response var, sort nums, iterate, return res

Initialize var which holds sought value, `res`, which we update while iterating
through input `nums`.

Iterate the `nums` input. This loops incrementor `i` will be the first pointer.

Return `res`.

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
    // JS syntax is simple relative to TS

    var threeSumClosest = function(nums, target) {
      var res = nums[0] + nums[1] + nums[2];
      nums = nums.sort((a, b) => a - b);

      for (var i = 0; i < nums.length - 2; i ++) {
      }
      return res
    };
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript
    // "nums: number[]" means input param is 'nums', it's type is number[]

    function threeSumClosest(nums: number[], target: number): number {
      var res = nums[0] + nums[1] + nums[2];
      nums = nums.sort((a, b) => a - b);

      for (var i = 0; i < nums.length - 2; i ++) {
      }
      return res
    };
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    // Dart requires typing on return value, the 'int' before threeSumClosest
    // It's parameters are also typed. The 'int' before target

    class Solution {
      int threeSumClosest(List<int> nums, int target) {
        var res = nums[0] + nums[1] + nums[2];
        nums.sort();

        for (var i = 0; i < nums.length - 2; i ++) {
        }
        return res;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java
    // Java requires typing for variable initializations in conjunction with
    // function signature typing.

    class Solution {
        public int threeSumClosest(int[] nums, int target) {
            int res = nums[0] + nums[1] + nums[2];
            Arrays.sort(nums);

            for (int i = 0; i < nums.length - 2; i++) {
            }

            return res;
        }
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python
    # In python3 there is typing for the function's signature and return value

    class Solution:
      def threeSumClosest(self, nums: List[int], target: int) -> int:
          nums.sort()
          res = nums[0] + nums[len(nums) - 1] + nums[len(nums) - 2]

          for i, n in enumerate(nums):

          return res
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go
    // := allows Go to infer type of 'res'
    // from the type of the expression on the right.

    func threeSumClosest(nums []int, target int) int {
        res := nums[0] + nums[1] + nums[2]
        sort.Ints(nums[:])

        for i := 0; i < len(nums) - 2; i++ {
        }

        return res
    }
    ```

  </div>
</div>

## Use i pointer to initialize next pointer and nest loop

Set `l` pointer to `i + 1` and `r` to the length of `nums - 1`
In this way we can work our farthest left pointer from left to right
and then have the next 2 pointers behave as a sliding window.

Loop while left is smaller than right.

In the loop, sum the values of `nums[i] + nums[l] + nums[r]`.

Check this sum, if it matches `target` return `cur` as we can't get any closer
to target.

Otherwise compare is it's greater than target of less and increment/decrement
l and r as appropriate.

Remember, the idea here is we want the sum to be `0`.

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
    //

    var threeSumClosest = function(nums, target) {
      var res = nums[0] + nums[1] + nums[2];
      nums = nums.sort((a, b) => a - b);

      for(var i = 0; i < nums.length - 2; i ++) {
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
          }
      }
      return res
    };
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
                int l = i + 1;
                int r = nums.length - 1;

                while (l < r) {
                    int cur = nums[i] + nums[l] + nums[r];

                    if (cur > target) {
                        r -= 1;
                    } else {
                        l += 1;
                    }
                }
            }

            return res;
        }
    }
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

          return res
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go
    //

    func threeSumClosest(nums []int, target int) int {
        res := nums[0] + nums[1] + nums[2]
        sort.Ints(nums[:])

        for i := 0; i < len(nums) - 2; i++ {

            l := i + 1
            r := len(nums) - 1

            for l < r {
                cur := nums[i] + nums[l] + nums[r]
                if cur > target {
                    r -= 1
                } else {
                    l += 1
                }
            }
        }

        return res
    }
    ```

  </div>
</div>

## Check the difference between cur and res

Compare the absolute different of `cur - target`
and `res - target` to find which is closet to zero.
If `cur` is smaller then reassign `res` to `cur`.

Use math's absolute in case the value becomes negative.

And finally optimize the outer loop comparing if the previous `i` is the same as this `i`.
If so, continue to the next iteration.

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
    // Math.abs is helpful here.

    var threeSumClosest = function(nums, target) {
      var res = nums[0] + nums[1] + nums[2];
      nums = nums.sort((a, b) => a - b);

      for (var i = 0; i < nums.length - 2; i ++) {
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

      for (var i = 0; i < nums.length - 2; i ++) {
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

  <div id="dart" className="tabcontent">
    ```dart
    //

    class Solution {
      int threeSumClosest(List<int> nums, int target) {
        var res = nums[0] + nums[1] + nums[2];
        nums.sort();

        for (var i = 0; i < nums.length - 2; i ++) {
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

  <div id="python" className="tabcontent">
    ```python
    # Python has abs as well.

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

  <div id="go" className="tabcontent">
    ```go
    // Go doesn't have built in support for mathematical abs
    // so we have to implement it ourselves.

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
