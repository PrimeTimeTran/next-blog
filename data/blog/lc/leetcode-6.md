---
draft: false
date: '2022-10-17'
title: '70. Climbing Stairs'
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

Each time you can either climb `1` or `2` steps. In how many _distinct_ ways can
you climb to the top?

### Solution

Keep a running total of number of _distinct_ jumps it took us to get to our
previous two stairs.

On each loop, sum the values of the two previous stairs as the latest stair's
value, our running total.

## Setup base cases

Setup base cases of one and two whose values are 1 and 2.

We figure this out from the problem explanation.

Return two at the end of the function where we'll keep our summed total.

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
    // Initialize our base cases, one and two. Return two at the end

    var climbStairs = function (n) {
      if (n == 1) return 1
      var one = 1
      var two = 2

      return two
    };

    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    // We guard for n being 1 as well

    function climbStairs(n: number): number {
      if (n == 1) return 1
      var one = 1
      var two = 2

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

        return two;
      }
    }

    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    // Explicit typing of Java with int

    class Solution {
      public int climbStairs(int n) {
        if (n == 1) {
          return 1;
        }
        int one = 1;
        int two = 2;

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

        return two

    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    // Type inference with :=

    func climbStairs(n int) int {
      if n == 1 {
        return n
      }

      one := 1
      two := 2

      return two
    }
    ```

  </div>
</div>

## Iterate until n + 1

We loop up til `n + 1` because when we "land" on `n + 1` then `two`
will have the return value we want, the number of distinct ways
to get to that stair.

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
    ```js {8-12} showLineNumbers
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
    ```typescript {8-12} showLineNumbers
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
    ```dart {11-15} showLineNumbers
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
    ```java {11-15} showLineNumbers
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
    ```python {10-13} showLineNumbers
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
    ```go {11-15} showLineNumbers
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
