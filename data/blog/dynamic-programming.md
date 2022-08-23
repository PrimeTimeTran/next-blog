---
title: Dynamic Programming
date: '2022-08-23'
tags: ['Dynamic Programming']
draft: true
summary:
images: []
---

### How to do fibonacci with memoization?

Recursive

```js
const fib = (n) => {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}
```

Time = O(2^n)

Space = O(n)

Recursive with memoization

```js
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = fib(n - 1, memo) + (fib - 2, memo)
  return memo[n]
}

console.log(fib(9))
```

Time = O(n)

Space = O(n)

### How to determine number of ways to get from top left to bottom right

```js
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1)) 1
console.log(gridTraveler(2, 3)) 3
console.log(gridTraveler(3, 2)) 3
console.log(gridTraveler(3, 3)) 6
console.log(gridTraveler(18, 18)) 2333606220
```

Memoized

```js
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

### Can we sum to k from nums

```js
const canSum = (k, nums) => {
  if (k === 0) return true
  if (k < 0) return false
  for (let n of nums) {
    let remainder = k - n
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

O(n^m)

Cansum memoized

```js

```
