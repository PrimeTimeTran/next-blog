---
draft: false
date: 2016-01-01
title: 'LeetCode: 121. Best Time to Buy and Sell Stock'
tags:
  [
    'leetcode',
    'data structures algorithms',
    'sliding window',
    'python',
    'javascript',
    'typescript',
    'dart',
    'java',
    'go',
  ]
summary: 'Solving Leetcode problems to syntax of multiple languages and data structures & algorithms.'
---

# Description

You are given an array prices where prices[i] is the price of a given stock on
the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return 0.

### Solution

Use a sliding window moving from left to right.

In the event that a value on the right is larger than the left, compute the profit
and compare to current max profit. If it's larger
reassign the max profit to the current max profit

If the left value of the window is larger than the right, update left to the
current value of right. This has the effect of "closing" the window and starting
over from the current value of right.

In this way we guarantee we always make a profit.

## Initialize variables

Declare the variables we need to create our window. Also
declare profit defaulted to 0 and return it at the end of the function.

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
    ```js {} showLineNumbers
    //

    var maxProfit = function (prices) {
      var l = 0
      var r = 1
      var profit = 0

      return profit
    }
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    // Typescript requires type annotation on function parameters.

    function maxProfit(prices: number[]): number {
      var l = 0
      var r = 1
      var profit = 0

      return profit
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    # Python isn't a curly brace language.
    # It also has multi variable assignment.

    class Solution:
      def maxProfit(self, prices: List[int]) -> int:
        profit, l, r = 0, 0, 1

        return profit
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    // Dart requires semicolons at the end of line and type annotation for function
    // parameters.

    // For variable declarations dart can infer type

    class Solution {
      int maxProfit(List<int> prices) {
        var l = 0;
        var r = 1;
        var profit = 0;

        return profit;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    // Java requires semicolons at the end of line and type annotation for function
    // parameters.

    // There isn't inferred type in Java, we must explicitly type variables.

    class Solution {
      public int maxProfit(int[] prices) {
        int l = 0;
        int r = 1;
        int profit = 0;

        return profit;
      }
    }
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    // Go has multi variable assignment and inferred type using the ':='

    func maxProfit(prices []int) int {
      profit, l, r := 0, 0, 1

      return profit
    }
    ```

  </div>
</div>

## Loop prices from left to right

Loop prices using our right pointer, `r`. On each iteration we increase r, growing
our "window" into the input array.

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
    ```js {} showLineNumbers
    //

    var maxProfit = function (prices) {
      var l = 0
      var r = 1
      var profit = 0
      while (r < prices.length) {
        r += 1
      }
      return profit
    }
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    //

    function maxProfit(prices: number[]): number {
      var l = 0
      var r = 1
      var profit = 0
      while (r < prices.length) {
        r += 1
      }
      return profit
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    # To find the length of a list in Python we use len()

    class Solution:
      def maxProfit(self, prices: List[int]) -> int:
        profit, l, r = 0, 0, 1
        while r < len(prices):
          r += 1
        return profit
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    //
    class Solution {
      int maxProfit(List<int> prices) {
        var l = 0;
        var r = 1;
        var profit = 0;
        while (r < prices.length) {
          r += 1;
        }
        return profit;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    //

    class Solution {
      public int maxProfit(int[] prices) {
        int l = 0;
        int r = 1;
        int profit = 0;
        while (r < prices.length) {
          r += 1;
        }
        return profit;
      }
    }
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    // Go has no 'while' loop. To mimic a while loop use a for loop
    // with an explicitly declared iterator r, incrementing in the loop's body.

    func maxProfit(prices []int) int {
      profit, l, r := 0, 0, 1

      for r < len(prices) {
        r += 1
      }
      return profit
    }
    ```

  </div>
</div>

## Check difference of future price and current price

Use the right pointer, `r`, to grab that future price and compare it using
the left pointer, `l`, to the previous price.

Compare the current difference to previous differences. The difference _is_
our profit.

On each iteration we use a built in `Math.max` function(or custom one) to reassign
`profit`.

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
    ```js {} showLineNumbers
    // Math.max is built into javascript and can be used to find
    // the largest value between multiple values.

    var maxProfit = function (prices) {
      var l = 0
      var r = 1
      var profit = 0
      while (r < prices.length) {
        if (prices[r] > prices[l]) {
          var cur = prices[r] - prices[l]
          profit = Math.max(cur, profit)
        } else {
          l = r
        }
        r += 1
      }
      return profit
    }
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript {} showLineNumbers
    // Typescript also has a Math.max builtin function.

    function maxProfit(prices: number[]): number {
      var l = 0
      var r = 1
      var profit = 0
      while (r < prices.length) {
        if (prices[r] > prices[l]) {
          var cur = prices[r] - prices[l]
          profit = Math.max(cur, profit)
        } else {
          l = r
        }
        r += 1
      }
      return profit
    }
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python {} showLineNumbers
    # Python has max().

    class Solution:
      def maxProfit(self, prices: List[int]) -> int:
        profit, l, r = 0, 0, 1
        while r < len(prices):
          if prices[r] > prices[l]:
            cur = prices[r] - prices[l]
            profit = max(profit, cur)
          else:
            l = r
          r += 1
        return profit
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart {} showLineNumbers
    // Dart has max() as well.

    class Solution {
      int maxProfit(List<int> prices) {
        var l = 0;
        var r = 1;
        var profit = 0;
        while (r < prices.length) {
          if (prices[l] < prices[r]) {
            var cur = prices[r] - prices[l];
            profit = max(cur, profit);
          } else {
            l = r;
          }
          r += 1;
        }
        return profit;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java {} showLineNumbers
    // Java also has a builtin Math.max

    class Solution {
      public int maxProfit(int[] prices) {
        int l = 0;
        int r = 1;
        int profit = 0;
        while (r < prices.length) {
          if (prices[r] > prices[l]) {
            int cur = prices[r] - prices[l];
            profit = Math.max(cur, profit);
          } else {
            l = r;
          }
          r += 1;
        }
        return profit;
      }
    }
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go {} showLineNumbers
    // Go doesn't have a built in function for identifying max of two ints
    // So we have to implement it ourselves

    func Max(x, y int) int {
      if x < y {
        return y
      }
      return x
    }

    func maxProfit(prices []int) int {
      profit, l, r := 0, 0, 1

      for r < len(prices) {
        if prices[l] < prices[r] {
          cur := prices[r] - prices[l]
          profit = Max(profit, cur)
        } else {
          l = r
        }
        r += 1
      }
      return profit
    }
    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
