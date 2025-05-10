---
draft: false
date: 2022-10-13
title: 'LeetCode: 322. Coin Change'
tags: ['leetcode', 'data structures algorithms', 'dynamic programming', 'python']
summary: 'Solving programming problems in multiple languages to master syntax, data structures, and algorithms.'
---

# Description

## Intuition

Utilize bottom up tabulation.

- Set base case of index 0 to 0. It takes 0 coins to sum to 0 amount.
- Iterate from 1 to amount checking if amount - coin is >= 0. If it is then:
  - Update this amount/index to the minimum of current value & amount - coin + 1

## Diagram

```py
-----
Example 1
coins = [1,2,5]
amount = 11
-----
Index:    0   1   2   3   4   5   6   7   8   9  10  11
DP :    [ 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
                          ^
New DP: [ 0,  1                                        ]
              * (1) 1 coin
New DP: [ 0,  1,  1                                    ]
                  * (1) 2 coin
New DP: [ 0,  1,  1,  2                                ]
                      * (1) 1 coin & (1) 2 coin
New DP: [ 0,  1,  1,  2,  2                            ]
                          * (2) 2 coins
New DP: [ 0,  1,  1,  2,  2,  1                        ]
                              * (1) 5 coin
New DP: [ 0,  1,  1,  2,  2,  1,  2                    ]
                                  * (1) 5 coin & (1) 1 coin
New DP: [ 0,  1,  1,  2,  2,  1,  2,  2                ]
                                      * (1) 5 coin & (1) 2 coin
New DP: [ 0,  1,  1,  2,  2,  1,  2,  2,  3            ]
                                          * (1) 5 coin & (1) 2 coin & (1) 1 coin
New DP: [ 0,  1,  1,  2,  2,  1,  2,  2,  3,  3        ]
                                              * (1) 5 coin & (2) 2 coins
New DP: [ 0,  1,  1,  2,  2,  1,  2,  2,  3,  3,  2    ]
                                                  * (2) 5 coins
New DP: [ 0,  1,  1,  2,  2,  1,  2,  2,  3,  3,  2,  3]
                                                      * (2) 5 coins & (1) 1 coin
```

## Code

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">python</button>
  </div>

  <div id="#1" className="tabcontent">
    ```python {} showLineNumbers
    class Solution:
        def coinChange(self, coins: List[int], amount: int) -> int:
            dp = [amount+1] * (amount+1)
            dp[0] = 0
            for a in range(1, amount+1):
                for c in coins:
                    if a - c >= 0:
                        dp[a] = min(dp[a], dp[a-c]+1)
            return dp[amount] if dp[amount] != amount+1 else -1
    ```
  </div>
</div>

# Conclusion
