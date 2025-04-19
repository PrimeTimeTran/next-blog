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
