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

// t = o(nm ^ 2)
// s = o(m ^ 2)
