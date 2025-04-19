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

console.log(canSum(7, [2, 3])) // true
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(300, [7, 14])) // false
