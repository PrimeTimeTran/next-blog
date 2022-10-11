---
draft: false
date: '2022-10-11'
title: '121. Best Time to Buy and Sell Stock'
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

## 121. Best Time to Buy and Sell Stock

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
reassign the max profit

In the event the value on the left of the window is larger,
reassign the left edge of the window to the current value of right.

## Initialize variables

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
    var maxProfit = function (prices) {
      var maxProfit = 0
      var l = 0
      var r = 1

      while (r < prices.length) {
        if (prices[r] > prices[l]) {
          var max
          var curProfit = prices[r] - prices[l]
          maxProfit = Math.max(curProfit, maxProfit)
        } else {
          l = r
        }
        r += 1
      }
      return maxProfit
    }
    ```

  </div>

  <div id="ts" className="tabcontent">
    ```typescript
    //
    function maxProfit(prices: number[]): number {
      let res = 0
      let l = 0
      let r = 1
      
      while (r < prices.length) {
        if (prices[l] < prices[r]) {
          let profit = prices[r] - prices[l]
          
          res = Math.max(res, profit)
        } else {
          l = r
        }
        r += 1
      }
      return res
    };
    ```

  </div>

  <div id="python" className="tabcontent">
    ```python
    #
    class Solution:
      def maxProfit(self, prices: List[int]) -> int:
        res = 0
        l, r = 0, 1
        
        while r < len(prices):
          if prices[r] > prices[l]:
            profit = prices[r] - prices[l]
            res = max(res, profit)
            
          else:
            l = r
          r += 1
        return res
    ```

  </div>

  <div id="dart" className="tabcontent">
    ```dart
    //
    class Solution {
      int maxProfit(List<int> prices) {
        var l = 0;
        var r = 1;
        var curMax = 0;
          
        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                var profit = prices[r] - prices[l];
                curMax = max(curMax, profit);
            } else {
                l = r;
            }
            r += 1;
        }
          
        return curMax;
      }
    }
    ```

  </div>

  <div id="java" className="tabcontent">
    ```java
    //
    import java.util.Collections;

    class Solution {
      public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int l = 0;
        int r = 1;

        while (r < prices.length) {
          if (prices[r] > prices[l]) {
            int curProfit = prices[r] - prices[l];
            int max;
            if (curProfit > maxProfit) {
              max = curProfit;
            } else {
              max = maxProfit;
            }

            maxProfit = max;
          } else {
            l = r;
          }
          r += 1;
        }
        return maxProfit;
      }
    }
    ```

  </div>

  <div id="go" className="tabcontent">
    ```go
    //
    func Max(x, y int) int {
      if x < y {
        return y
      }
      return x
    }

    func maxProfit(prices []int) int {
      l, r := 0, 1
      maxProfit := 0

      for r < len(prices) {
        if prices[l] < prices[r] {
          profit := prices[r] - prices[l]
          maxProfit = Max(maxProfit, profit)
        } else {
          l = r
        }

        r += 1
      }
      return maxProfit
    }
    ```

  </div>
</div>

### Questions? Concerns?

Please comment a better solution if you have one.
