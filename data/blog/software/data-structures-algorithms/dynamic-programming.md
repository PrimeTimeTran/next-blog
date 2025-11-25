---
draft: false
date: '2022-08-23'
title: 'Algorithms: Dynamic Programming'
tags: ['data structures algorithms', 'dynamic programming']
summary: A review of dynamic programming and the techniques used to implement it including Brute Force, Top Down Memoization, & Bottom Up Tabulation.
---

# Introduction

Dynamic Programming(DP) is a problem-solving approach in computer science that optimizes solutions by storing the results of subproblems to avoid performing the same calculation repeatedly.

Here's a list of canonical problems used to study DP.

- [1. Fibonacci](#1-fibonacci)
- [2. Grid Traveler](#2-grid-traveler)
- [3. Can Sum](#3-can-sum)
- [4. How Sum](#4-how-sum)
- [5. Best Sum](#5-best-sum)
- [6. Can Construct](#6-can-construct)
- [7. Count Construct](#7-count-construct)
- [8. All Construct](#8-all-construct)

We'll implement solutions with **Brute Force**, **Top-Down Memoization**, & **Bottom-Up Tabulation** to develop our understanding of DP.

| Approach               | Recursion | Cache/Table | Time  | Space        | Description                                     |
| :--------------------- | :-------- | :---------- | :---- | :----------- | :---------------------------------------------- |
| Brute Force (No DP)    | ❌        | ❌          | O(2ⁿ) | O(n)         | Tries all possibilities without storing results |
| Top-Down (Memoization) | ✅        | ✅          | O(n)  | O(n) or more | Recursively solves subproblems, caching results |
| Bottom-Up (Tabulation) | ❌        | ✅          | O(n)  | O(n)         | Iteratively builds solution from base cases     |

## 1. Fibonacci

Write a function `fib(n)` that takes in a number as an argument.

The function should return the n-th number of the fibonacci sequence.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force/No DP</button>
    <button id="#2" className="tablinks">Top Down Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>
  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    // Brute force solution works but is slow due to
    // repetitive computations made.

    const fib = (n) => {
      if (n <= 2) return 1
      return fib(n - 1) + fib(n - 2)
    }

    console.log(fib(50)) // 12586269025

    // time = O(2ⁿ)
    // space = O(n)
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    // Saving results of computations in `memo` improves the performance.

    // Memo starts empty dictionary but populates values
    // from the first branch of our recursive
    // calls(meaning that subsequent branches don't recompute
    // the same value but fetch it from the dict).

    const fib = (n, memo = {}) => {
      if (n in memo) return memo[n]
      if (n <= 2) return 1
      memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
      return memo[n]
    }

    console.log(fib(50))

    // time = O(n)
    // space = O(n)
    ```

  </div>

  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    // In this case we don't utilize recursion but tabulation to store values.
    // We loop until we reach `n` at which point the `n` index contains our answer.

    const fib = (n) => {
      if (n <= 2) return 1
      const dp = [0, 1, 1]
      for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
      }
      return dp[n]
    }

    console.log(fib(50))

    // time = O(n)
    // space = O(n)
    ```

  </div>
</div>

## 2. Grid Traveler

Write a function `gridTraveler(m, n)` that returns the number of ways to travel from top left to bottom right corner of grid.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force/No DP</button>
    <button id="#2" className="tablinks">Top Down Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>
  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    // We start from the end and work back by subtracting from `m` & `n`.
    // When we reach our base case of being in the top left(m == 1 && n == 1) 
    // we increment the count of how many unique ways we can traverse the grid.

    const gridTraveler = (m, n) => {
      if (m === 1 && n === 1) return 1
      if (m === 0 || n === 0) return 0
      return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
    }

    console.log(gridTraveler(18, 18)) // 2333606220

    // time = O(2ᵐ⁺ⁿ)
    // space = O(m+n)
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    // By storing each cell's number of unique paths to reach the
    // beginning we don't repeat computations and thus improve the performance of our algorithm a lot.

    const gridTraveler = (m, n, memo = {}) => {
      const key = m + ',' + n

      if (key in memo) return memo[key]

      if (m === 1 && n === 1) return 1
      if (m === 0 || n === 0) return 0

      memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
      return memo[key]
    }

    console.log(gridTraveler(18, 18)) // 2333606220

    // time = O(m * n)
    // space = O(m * n)
    ```

  </div>

  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    // Using a 2d array we start each cell as 0 and then carry the values right 
    // & down(up) toward the bottom right. In each cell we sum the cell from which we just came and the cell in which we land.
    // Thus by the end we have our solution.

    const gridTraveler = (m, n) => {
      const dp = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))

      dp[1][1] = 1

      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          if (i + 1 <= m) dp[i + 1][j] += dp[i][j]
          if (j + 1 <= n) dp[i][j + 1] += dp[i][j]
        }
      }
      return dp[m][n]
    }

    console.log(gridTraveler(18, 18))

    // time = O(m × n)
    // space = O(m × n)
    ```

  </div>
</div>

## 3. Can Sum

Write a function `canSum(target, nums)` that takes in a target sum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the `target` using `numbers` from the array.

You may use an element of the array as many times as needed.

You may assume that all inputs are non negative.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force/No DP</button>
    <button id="#2" className="tablinks">Top Down Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>
  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    const canSum = (target, nums) => {
      if (target === 0) return true
      if (target < 0) return false
      for (const n of nums) {
        const remainder = target - n
        if (canSum(remainder, nums) === true) {
          return true
        }
      }
      return false
    }
    console.log(canSum(7, [2, 3]))          // true
    console.log(canSum(8, [2, 3, 5]))       // true
    console.log(canSum(7, [5, 3, 4, 7]))    // true
    console.log(canSum(7, [5, 3, 4, 7]))    // true
    console.log(canSum(7, [2, 4]))          // false
    console.log(canSum(300, [7, 14]))       // false

    // time = O(nᵐ)
    // space = O(m)
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    const canSum = (target, nums, memo = {}) => {
      if (target in memo) return memo[target]
      if (target === 0) return true
      if (target < 0) return false

      for (let n of nums) {
        const remainder = target - n
        if (canSum(remainder, nums, memo) === true) {
          memo[target] = true
          return true
        }
      }

      memo[target] = false
      return false
    }

    console.log(canSum(7, [2, 3]))        // true
    console.log(canSum(8, [2, 3, 5]))     // true
    console.log(canSum(7, [5, 3, 4, 7]))  // true
    console.log(canSum(7, [5, 3, 4, 7]))  // true
    console.log(canSum(7, [2, 4]))        // false
    console.log(canSum(300, [7, 14]))     // false

    // time = O(n * m)
    // space = O(m)
    ```

  </div>

  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    const canSum = (target, nums) => {
      const dp = Array(target + 1).fill(false)
      dp[0] = true

      for (let i = 0; i <= target; i++) {
        if (dp[i]) {
          for (let n of nums) {
            if (i + n <= target) {
              dp[i + n] = true
            }
          }
        }
      }

      return dp[target]
    }

    console.log(canSum(7, [2, 3]))        // true
    console.log(canSum(8, [2, 3, 5]))     // true
    console.log(canSum(7, [5, 3, 4, 7]))  // true
    console.log(canSum(7, [5, 3, 4, 7]))  // true
    console.log(canSum(7, [2, 4]))        // false
    console.log(canSum(300, [7, 14]))     // false

    // time = O(n * m) where n is the target & m the length of nums.
    // space = O(m) where m is the length of nums.
    ```

  </div>
</div>

## 4. How Sum

Write a function `howSum(target, nums)` that takes in a `target` and an array of numbers as arguments.

The function should return an array containing any combination of elements that add up to exactly `target`. If there is no combination that adds up to the target, then return `null`.

If there are multiple combinations possible you may return any single one.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force/No DP</button>
    <button id="#2" className="tablinks">Top Down Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>
  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    const howSum = (target, nums) => {
      if (target === 0) return []
      if (target < 0) return null
      for (const n of nums) {
        const remainder = target - n
        const result = howSum(remainder, nums)
        if (result !== null) {
          return [...result, n]
        }
      }
      return null
    }

    console.log(howSum(7, [2, 3]))        // [3, 2, 2]
    console.log(howSum(7, [5, 3, 4, 7]))  // [4, 3]
    console.log(howSum(7, [2, 4]))        // null
    console.log(howSum(8, [2, 3, 5]))     // [2, 2, 2, 2]
    console.log(howSum(300, [7, 14]))     // null

    // time = O(nᵐ⁺ⁿ) where n is the length of the array & m is target
    // space = O(m) where m is target
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    const howSum = (target, nums, memo = {}) => {
      if (target in memo) return memo[target]
      if (target === 0) return []
      if (target < 0) return null
      for (const n of nums) {
        const remainder = target - n
        const result = howSum(remainder, nums, memo)
        if (result !== null) {
          memo[target] = [...result, n]
          return memo[target]
        }
      }
      memo[target] = null
      return null
    }

    console.log(howSum(7, [2, 3]))        // [3, 2, 2]
    console.log(howSum(7, [5, 3, 4, 7]))  // [4, 3]
    console.log(howSum(7, [2, 4]))        // null
    console.log(howSum(8, [2, 3, 5]))     // [2, 2, 2, 2]
    console.log(howSum(300, [7, 14]))     // null

    // time = O(m * n) where n is the length of the array & m is target
    // space = O(m) where m is target
    ```

  </div>

  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    const howSum = (target, nums) => {
      const dp = Array(target + 1).fill(null)
      dp[0] = []

      for (let i = 0; i < target; i++) {
        if (dp[i] !== null) {
          for (const n of nums) {
            dp[i + n] = [...dp[i], n]
          }
        }
      }

      return dp[target]
    }

    console.log(howSum(7, [2, 3]))        // [3, 2, 2]
    console.log(howSum(7, [5, 3, 4, 7]))  // [4, 3]
    console.log(howSum(7, [2, 4]))        // null
    console.log(howSum(8, [2, 3, 5]))     // [2, 2, 2, 2]
    console.log(howSum(300, [7, 14]))     // null

    // time = O(m * n) where n is the length of the array & m is target
    // space = O(m) where m is target
    ```

  </div>
</div>

## 5. Best Sum

Write a function `bestSum(target, nums)` that takes in a `target` and an array of numbers as arguments

The function should return an array containing the shortest combination of numbers that add up to exactly the `target`.

If there is a tie for the shortest combination, you may return any one of the shortest.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force/No DP</button>
    <button id="#2" className="tablinks">Top Down Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>
  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    const bestSum = (target, nums) => {
      if (target === 0) return []
      if (target < 0) return null

      let shortestCombination = null

      for (let n of nums) {
        const remainder = target - n
        const remainderCombination = bestSum(remainder, nums)
        if (remainderCombination !== null) {
          const comb = [...remainderCombination, n]
          if (shortestCombination === null || comb.length < shortestCombination.length) {
            shortestCombination = comb
          }
        }
      }
      return shortestCombination
    }

    console.log(bestSum(7, [5, 3, 4, 7])) // [7]
    console.log(bestSum(8, [2, 3, 5])) // [3, 5]
    console.log(bestSum(8, [1, 4, 5])) // [4, 4]
    console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]

    // time = O(nᵗ) where n is the number of elements in nums and t is the target
    // space = O(t) where t is the target
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    const bestSum = (target, nums, memo = {}) => {
      if (target in memo) return memo[target]
      if (target === 0) return []
      if (target < 0) return null

      let smallest = null

      for (let n of nums) {
        const remainder = target - n
        const remainderCombination = bestSum(remainder, nums, memo)
        if (remainderCombination !== null) {
          const comb = [...remainderCombination, n]
          if (smallest === null || comb.length < smallest.length) {
            smallest = comb
          }
        }
      }
      memo[target] = smallest
      return smallest
    }

    console.log(bestSum(7, [5, 3, 4, 7])) // [7]
    console.log(bestSum(8, [2, 3, 5])) // [3, 5]
    console.log(bestSum(8, [1, 4, 5])) // [4, 4]
    console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
    ```

  </div>

  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    const bestSum = (targetSum, nums) => {
      const table = Array(targetSum + 1).fill(null)
      table[0] = []
      for (let i = 0; i < targetSum; i++) {
        if (table[i] != null) {
          for (let n of nums) {
            const newComb = [...table[i], n]
            if (!table[i + n] || table[i + n].length > newComb.length) {
              table[i + n] = newComb
            }
          }
        }
      }
      return table[targetSum]
    }

    console.log(bestSum(7, [5, 3, 4, 7])) // [7]
    console.log(bestSum(8, [2, 3, 5])) // [3, 5]
    console.log(bestSum(8, [1, 4, 5])) // [4, 4]
    console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
    ```

  </div>
</div>

## 6. Can Construct

Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force - No DP</button>
    <button id="#2" className="tablinks">Top Down - Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>

  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    const canConstruct = (target, wordBank) => {
      if (target === '') return true

      for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
          const suffix = target.slice(word.length)
          if (canConstruct(suffix, wordBank) === true) {
            return true
          }
        }
      }
      return false
    }

    console.log(canConstruct('abcdef', ['ab', 'cd', 'ef', 'abc', 'def', 'abcd', 'ef']))
    console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
    console.log(canConstruct('potato', ['p', 'ot', 'eo', 'g', 'a', 't']))
    console.log(
      canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
        'eeeeee',
      ])
    )
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    const canConstruct = (target, wordBank, memo = {}) => {
      if (target in memo) return memo[target]
      if (target === '') return true

      for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
          const suffix = target.slice(word.length)
          if (canConstruct(suffix, wordBank, memo) === true) {
            memo[target] = true
            return true
          }
        }
      }
      memo[target] = false
      return false
    }

    console.log(canConstruct('abcdef', ['ab', 'cd', 'ef', 'abc', 'def', 'abcd', 'ef']))
    console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
    console.log(canConstruct('potato', ['p', 'ot', 'eo', 'g', 'a', 't']))
    console.log(
      canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
        'eeeeee',
      ])
    )
    ```

  </div>
  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    const canConstruct = (target, wordBank) => {
      const table = Array(target.length + 1).fill(false)
      table[0] = true

      for (let i = 0; i < target.length; i++) {
        if (table[i]) {
          for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
              table[i + word.length] = true
            }
          }
        }
      }
      return table[target.length]
    }

    console.log(canConstruct('abcdef', ['ab', 'cd', 'ef', 'abc', 'def', 'abcd', 'ef'])) // true
    console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
    console.log(canConstruct('potato', ['p', 'ot', 'eo', 'g', 'a', 't', 'o'])) // true
    console.log(
      canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
        'eeeeee',
      ])
    ) // false

    // time = o(nm ^ 2)
    // space = o(m)
    ```

  </div>
</div>

## 7. Count Construct

Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of the word bank as many times as you want.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force - No DP</button>
    <button id="#2" className="tablinks">Top Down - Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>

  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    const countConstruct = (target, wordBank) => {
      if (target === '') return 1

      let totalCount = 0

      for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
          const numWaysForRest = countConstruct(target.slice(word.length), wordBank)
          totalCount += numWaysForRest
        }
      }
      return totalCount
    }

    console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
    console.log(countConstruct('abcdef', ['ab', 'cd', 'ef', 'abc', 'def', 'abcd', 'ef']))
    console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
    console.log(countConstruct('potato', ['p', 'ot', 'eo', 'g', 'a', 't']))
    console.log(
      countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
        'eeeeee',
      ])
    )
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    const countConstruct = (target, wordBank, memo = {}) => {
      if (target in memo) return memo[target]
      if (target === '') return 1

      let totalCount = 0

      for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
          const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo)
          totalCount += numWaysForRest
        }
      }
      memo[target] = totalCount
      return totalCount
    }

    console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
    console.log(countConstruct('abcdef', ['ab', 'cd', 'ef', 'abc', 'def', 'abcd', 'ef']))
    console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
    console.log(countConstruct('potato', ['p', 'ot', 'eo', 'g', 'a', 't']))
    console.log(
      countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
        'eeeeee',
      ])
    )
    ```

  </div>
  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    const countConstruct = (target, wordBank) => {
      const table = Array(target.length + 1).fill(0)
      table[0] = 1

      for (let i = 0; i < target.length; i++) {
        for (const word of wordBank) {
          if (target.slice(i, i + word.length) === word) {
            table[i + word.length] += table[i]
          }
        }
      }

      return table[target.length]
    }

    console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
    console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
    console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
    console.log(countConstruct('potato', ['p', 'ot', 'eo', 'g', 'a', 't']))
    console.log(
      countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
        'eeeeee',
      ])
    )
    ```

  </div>
</div>

## 8. All Construct

Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Brute Force - No DP</button>
    <button id="#2" className="tablinks">Top Down - Memo</button>
    <button id="#3" className="tablinks">Bottom Up - Tab</button>
  </div>

  <div id="#1" className="tabcontent">
    ```js {} showLineNumbers
    const allConstruct = (target, wordBank) => {
      if (target === '') return [[]]

      const result = []

      for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
          const suf = target.slice(word.length)
          const suffixWays = allConstruct(suf, wordBank)
          const targetWays = suffixWays.map((way) => [word, ...way])
          result.push(...targetWays)
        }
      }
      return result
    }

    console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
    // [
    //   ['purp', 'le'],
    //   ['p', 'ur', 'p', 'le'],
    // ]
    console.log(allConstruct('hello', ['dog', 'cat', 'mouse']))
    // []
    console.log(allConstruct('', ['dog', 'cat', 'mouse']))
    // [[]]
    ```

  </div>

  <div id="#2" className="tabcontent">
    ```js {} showLineNumbers
    const allConstruct = (target, wordBank, memo = {}) => {
      if (target in memo) return memo[target]
      if (target === '') return [[]]

      const result = []

      for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
          const suf = target.slice(word.length)
          const suffixWays = allConstruct(suf, wordBank, memo)
          const targetWays = suffixWays.map((way) => [word, ...way])
          result.push(...targetWays)
        }
      }
      memo[target] = result
      return result
    }

    console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
    // [
    //   ['purp', 'le'],
    //   ['p', 'ur', 'p', 'le'],
    // ]
    console.log(allConstruct('hello', ['dog', 'cat', 'mouse']))
    // []
    console.log(allConstruct('', ['dog', 'cat', 'mouse']))
    // [[]]
    ```

  </div>
  <div id="#3" className="tabcontent">
    ```js {} showLineNumbers
    const allConstruct = (target, wordBank) => {
      const table = Array(target.length + 1)
        .fill()
        .map(() => [])
      table[0] = [[]]

      for (let i = 0; i < target.length; i++) {
        for (const word of wordBank) {
          if (target.slice(i, i + word.length) === word) {
            const newComb = table[i].map((arr) => [...arr, word])
            table[i + word.length].push(...newComb)
          }
        }
      }
      return table[target.length]
    }

    console.log(allConstruct('fish', ['dog', 'cat', 'mouse'])) // [[]]
    console.log(allConstruct('bird', ['bi', 'rd', 'do', 'g'])) // [ [ 'bi', 'rd' ] ]
    console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
    // [
    //   ['purp', 'le'],
    //   ['p', 'ur', 'p', 'le'],
    // ]
    console.log(allConstruct('ape', ['a', 'p', 'e', 'ap', 'pe']))
    // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
    // []
    // [ [] ]
    // [ [ 'a', 'pe' ], [ 'ap', 'e' ], [ 'a', 'p', 'e' ] ]
    ```

  </div>
</div>
<br/>
# Conclusion

The covered DP patterns & a few more advanced ones.

| Approach                       | Recursion | Table/Cache   | Space        | Time     |
| :----------------------------- | :-------- | :------------ | :----------- | :------- |
| Top-Down (Memoization)         | ✅        | ✅            | O(n) or more | O(n)     |
| Bottom-Up (Tabulation)         | ❌        | ✅            | O(n)         | O(n)     |
| Bottom-Up + Space Optimization | ❌        | ✅ (partial)  | O(1)         | O(n)     |
| Matrix Exponentiation          | ❌        | ✅ (implicit) | O(1)         | O(log n) |
| Bitmask DP                     | ✅/❌     | ✅            | O(2ⁿ·n)      | O(2ⁿ·n)  |
| Recursive DP + Pruning         | ✅        | ✅/❌         | varies       | varies   |
