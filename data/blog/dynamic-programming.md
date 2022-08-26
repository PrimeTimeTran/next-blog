---
title: Dynamic Programming
date: '2022-08-23'
tags: ['Dynamic Programming']
draft: true
summary: A collection of Dynamic Coding problems and their solutions with Big O time complexity. Solutions include not only brute force but optimized solutions as well.
---

Dynamic Programming is a technique in computer programming that helps to efficiently solve a class of
problems that have overlapping sub problems and optimal substructure property.

## Fibonacci

Write a function that takes in a number as an argument.

The function should return the n-th number of the fibonacci sequence.

```js
const fib = (n) => {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(50)) // 12586269025
```

Time = O(2^n)

Space = O(n)

```js
// Memoized
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(50)) // 12586369025
```

Time = O(n)

Space = O(n)

## Grid Traveler

Write a function that returns the number of ways to travel from top left to bottom right corner of grid.

```js
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(8, 8)) // 3432
console.log(gridTraveler(18, 18)) // 2333606220
```

```js
// Memoized
const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n

  if (key in memo) return memo[key]

  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(8, 8)) // 3432
console.log(gridTraveler(18, 18)) // 2333606220
```

Time = O(m \* n)

Space = O(n + m)

### Strategy

1. Make it work

- Visualize the problem as a tree
- Implement the tree using recursion
- Test it

2. Make it efficient

- Add a memo object
- Add a base case to return memo values
- Store return values into memo

## Can Sum

Write a function `canSum(k, nums)` that takes in a target sum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all inputs are non negative.

```js
const canSum = (targetSum, nums) => {
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  for (let n of nums) {
    let remainder = targetSum - n
    if (canSum(remainder, nums) === true) {
      return true
    }
  }
  return false
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true

console.log(canSum(7, [2, 4])) // false
console.log(canSum(300, [7, 14])) // false
```

Time = O(n ^ m)

Space = O(m)

```js
// Memoized

const canSum = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let n of nums) {
    const remainder = targetSum - n
    if (canSum(remainder, nums, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true

console.log(canSum(7, [2, 4])) // false
console.log(canSum(300, [7, 14])) // false
```

Time = O(m \* n)

Space = O(m)

## How Sum

Write a function `howSum(targetSum, nums)` that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

If there are multiple combinations possible you may return any single one.

```js
const howSum = (targetSum, nums) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  for (let n of nums) {
    const remainder = targetSum - n
    const remainderResult = howSum(remainder, nums)
    if (remainderResult !== null) {
      return [...remainderResult, n]
    }
  }
  return null
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // []
```

m = targetSum

n = array length

Time = O(n ^ m \* m)

Space = O(m)

```js
// Memoized

const howSum = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  for (let n of nums) {
    const remainder = targetSum - n
    const remainderResult = howSum(remainder, nums, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, n]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // []
```

Time = O(n \* m^2)

Space = O(m^2)

## Best Sum

Write a function `bestSum(targetSum, nums)` that takes in a targetSum and an array of numbers as arguments

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

```js
const bestSum = (targetSum, nums) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let n of nums) {
    const remainder = targetSum - n
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
```

Time = O(m \* n^m)

Space = O(m^2)

```js
// Memoized

const bestSum = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let smallest = null

  for (let n of nums) {
    const remainder = targetSum - n
    const remainderCombination = bestSum(remainder, nums, memo)
    if (remainderCombination !== null) {
      const comb = [...remainderCombination, n]
      if (smallest === null || comb.length < smallest.length) {
        smallest = comb
      }
    }
  }
  memo[targetSum] = smallest
  return smallest
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
```

Time = O(n \* m ^ 2)

Space = O(m^2)

### Summary

canSum -> "Can you do it? yes/no" -> Decision Problem

howSum -> "How can you do it?" -> Combinatoric Problem

bestSum -> "What is the 'best' way to do it?" -> Optimization Problem

## Can Construct

Write a function that takes

```js
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

m = target length
n = word bank length

Time = O(n^m \* m)

Space = O(m^2)

```js
// Memoized

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

m = target length
n = word bank length

Time = O(n \* m^2)

Space = O(m^2)

## Count Construct

```js
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

m = target length
n = word bank length

Time = O(n \* m^2)

Space = O(m^2)

```js
// Memoized

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

m = target length
n = word bank length

Time = O(n \* m^2)

Space = O(m^2)

## All Construct

Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

```js
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

m = target length
n = word bank length

Time = O(n \* m^2)

Space = O(m^2)

```js
// Memoized

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

f## Tabulation

Tabaulation is another technique used to solve dynamic programming problems.

Visualize as a table
Size the based on inputs
Initialize the table with default values
Seed the trivial answer into the table
Iterate through the table
Fill further positions based on the current problem

## Fib Tabulation

Write a function `fib(n)` that takes in a number as an argument. The function should return the n-th number of the Fibonacci sequence.

The 0th number of the sequence is 0.
The 1st number of the sequence is 1.

To generate the next number of the sequence, we sum the previous two.

```js
const fib = (n) => {
  const table = Array(n + 1).fill(0)
  table[1] = 1
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }

  return table[n]
}

console.log(fib(6))
```

Time = O(n)

Space = O(n)

## Grid Traveler

Write a function `gridTraveler(m, n)` that calculates how many ways from top left to bottom right of a grid which is m x n spaces large.

```js
// m rows, n columns

const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0))
  table[1][1] = 1

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j]
      if (j + 1 <= n) table[i][j + 1] += current
      if (i + 1 <= m) table[i + 1][j] += current
    }
  }
  return table[m][n]
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220
```

Time = O(mn)

Space = O(mn)

## Can Sum

Write a function `canSum(targetSum, numbers)` that takes in a target sum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all inputs are nonnegative.

```js
const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (const n of numbers) {
        table[i + n] = true
      }
    }
  }
  return table[targetSum]
}

// m = targetSum
// n = numbers.length

// t = o(mn)
// s = (m)

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false
```

## How Sum

Write a function `howSum(targetSum, nums)` that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements that add up to exactly the targetSum.

If there is no combination that adds up to the targetSum, then return null.

If there are multiple combinations possible you may return any single one.

```js
const howSum = (targetSum, nums) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      for (const n of nums) {
        table[i + n] = [...table[i], n]
      }
    }
  }
  return table[targetSum]
}

// t = o(nm ^ 2)
// s = o(m ^ 2)

console.log(howSum(7, [2, 3])) //  [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null
```

## Best Sum

Write a function `bestSum(targetSum, nums)` that takes in a targetSum and an array of numbers as arguments

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

```js
const bestSum = (targetSum, nums) => {
  const table = Array(targetSum + 1).fill(null)
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
```

Time = O(m \* n^m)

Space = O(m^2)
