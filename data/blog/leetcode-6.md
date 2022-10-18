---
draft: true
date: '2022-10-17'
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

## 70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?

### Solution

Keep a running total of number of distinct jumps it took us to get to our
previous two stairs. Add them

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
    ```js {} showLineNumbers
    //

    var climbStairs = function (n) {
      if (n == 1) return 1
      var one = 1
      var two = 2

      for (var i = 3; i < n + 1; i++) {
        var tmp = one + two
        one = two
        two = tmp
      }

      return two
    };

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    function climbStairs(n: number): number {
      if (n == 1) return 1
      var one = 1
      var two = 2

      for (var i = 3; i < n + 1; i++) {
        var tmp = one + two
        one = two
        two = tmp
      }

      return two
    };

    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //

    class Solution {
      int climbStairs(int n) {
        if (n == 1) {
          return 1;
        }
        int one = 1;
        int two = 2;

        for(var i = 3; i < n + 1; i++) {
            var tmp = one + two;
            one = two;
            two = tmp;
        }
        return two;
      }
    }

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    class Solution {
      public int climbStairs(int n) {
        if (n == 1) {
          return 1;
        }
        int one = 1;
        int two = 2;

        for (var i = 3; i < n + 1; i++) {
          int tmp = one + two;
          one = two;
          two = tmp;
        }

        return two;
      }
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    #

    class Solution:
      def climbStairs(self, n: int) -> int:
        if n == 1:
          return 1
        one = 1
        two = 2

        for i in range(3, n + 1):
          tmp = two
          two = one + two
          one = tmp

        return two

    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    //

    func climbStairs(n int) int {
      if n == 1 {
        return n
      }

      one := 1
      two := 2

      for i := 3; i < n + 1; i++ {
        tmp := one + two
        one = two
        two = tmp
      }
      return two
    }
    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
