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
console.log(allConstruct('bird', ['bi', 'rd', 'do', 'g'])) // []
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
