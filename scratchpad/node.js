String.prototype.replaceBetween = function (start, end, what) {
  return this.substring(0, start) + what + this.substring(end)
}

function containsMoney(str) {
  const pattern = /(\$|USD|usd)?\s?[\d,.]+(\.[\d][\d])?/
  return pattern.exec(str)
}

function getMatchingIndex(str) {
  let match = containsMoney(str)
  if (match) {
    return [match.index, match.index + match[0].length]
  }
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function getDiscountedPrice(value, discount) {
  let dollars = Number(value.replace(/[$|USD|,]+/g, ''))
  let decimals = parseInt(value.split('.')[1])
  let price = parseInt(dollars)
  price = parseFloat(dollars + '.' + decimals)
  price = price * (1 - discount)
  return price
}

function discountPrice(str, discount) {
  if (containsMoney(str)) {
    let [start, end] = getMatchingIndex(str)
    let value = str.slice(start, end)
    let price = getDiscountedPrice(value, discount)
    str = str.replaceBetween(start, end, formatter.format(price.toFixed(2)))
    return str
  }
}

const string = 'the price is $5.46 on books'
const string2 = 'the price is $ 125.46 on books'
const string3 = 'the price is $ 1025.46 on books'
const string4 = 'the price is $ 1,025.46 on books'
const string5 = 'the price is $ 100,100,100.50 on books'
const string6 = 'the price is USD 100.00 on books'
const string7 = 'the price is USD 10 on books'
const string8 = 'the price is $10 on books'

console.log(discountPrice(string, 0.15))
console.log(discountPrice(string2, 0.15))
console.log(discountPrice(string3, 0.15))
console.log(discountPrice(string4, 0.15))
console.log(discountPrice(string5, 0.15))
console.log(discountPrice(string6, 0.15))
console.log(discountPrice(string7, 0.15))
console.log(discountPrice(string8, 0.15))

// var isPalindrome = function (s) {
//   const regex = /[^A-Za-z0-9]/g

//   s = s.replace(regex, '').toLowerCase()
//   var l = 0
//   var r = s.length - 1

//   console.log(s)

//   while (l < r) {
//     if (s[l] != s[r]) {
//       return false
//     }
//     l += 1
//     r -= 1
//   }

//   return true
// }

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('amanaplanacanalpanama'))
// console.log(isPalindrome('A man, a plan, a canal: Panama'))

// const isPrime = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false
//   return num > 1
// }

// console.log(isPrime(2))

var numIslands = function (grid) {
  var m = grid.length
  var n = grid[0].length
  var seen = new Set()
  function dfs(r, c) {
    if (r < 0 || c < 0 || r > m - 1 || c > n - 1) return false
    if (seen.has(`${r},${c}`)) return false
    if (grid[r][c] == 0) return false

    seen.add(`${r},${c}`)

    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)

    return true
  }

  var count = 0

  for (var r = 0; r < m; r++) {
    for (var c = 0; c < n; c++) {
      if (dfs(r, c)) {
        count += 1
      }
    }
  }

  return count
}
