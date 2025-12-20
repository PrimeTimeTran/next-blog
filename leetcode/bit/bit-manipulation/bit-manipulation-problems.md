# Bit Manipulation

If the problem involves sets of booleans, powers of two, fast arithmetic, or unique number
cancellations, bit manipulation is likely relevant. Otherwise, it’s usually optional and mainly a performance trick.

https://www.geeksforgeeks.org/python/python-bitwise-operators

## LeetCode List

https://leetcode.com/problem-list/bit-manipulation

## Operations

| Operator | Name        | What it does                                                             | Example (binary)    | Example (decimal) |
| -------- | ----------- | ------------------------------------------------------------------------ | ------------------- | ----------------- |
| &        | Bitwise AND | Sets each bit to 1 if **both** bits are 1                                | 1010 & 1100 → 1000  | 10 & 12 = 8       |
| \|       | Bitwise OR  | Sets each bit to 1 if **either** bit is 1                                | 1010 \| 1100 → 1110 | 10 \| 12 = 14     |
| ^        | Bitwise XOR | Sets each bit to 1 if **exactly one** bit is 1                           | 1010 ^ 1100 → 0110  | 10 ^ 12 = 6       |
| ~        | Bitwise NOT | Flips all bits (two’s complement for signed ints)                        | ~1010 → …0101       | ~10 = -11         |
| <<       | Left Shift  | Shifts bits left, filling with 0s (multiplies by powers of 2)            | 0011 << 2 → 1100    | 3 << 2 = 12       |
| >>       | Right Shift | Shifts bits right, sign-extending for negatives (divides by powers of 2) | 1100 >> 2 → 0011    | 12 >> 2 = 3       |

## Problems Easy

| Num |                                          | Problem                           | Link                                                                                                                                   | URL                                           | Trick                                                         |
| --- | ---------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------- |
| 1   | 231. Power of Two                        | Check bit                         | [https://leetcode.com/problems/power-of-two](https://leetcode.com/problems/power-of-two)                                               | Only one bit is set → `n & (n-1) == 0`        | n & (n - 1) clears the lowest set bit (the rightmost 1) in n. |
| 2   | 263. Ugly Number                         | Bit manipulation for divisibility | [https://leetcode.com/problems/ugly-number](https://leetcode.com/problems/ugly-number)                                                 | Keep dividing by 2, 3, 5; check remaining     |
| 3   | 191. Number of 1 Bits                    | x & (x-1)                         | [https://leetcode.com/problems/number-of-1-bits](https://leetcode.com/problems/number-of-1-bits)                                       | Flip lowest 1                                 |
| 4   | 136. Single Number                       | XOR cancellation                  | [https://leetcode.com/problems/single-number](https://leetcode.com/problems/single-number)                                             | Pairs cancel out                              |
| 5   | 190. Reverse Bits                        | Shifting                          | [https://leetcode.com/problems/reverse-bits](https://leetcode.com/problems/reverse-bits)                                               | Shift left and accumulate LSB                 |
| 6   | 268. Missing Number                      | XOR / sum                         | [https://leetcode.com/problems/missing-number](https://leetcode.com/problems/missing-number)                                           | XOR all numbers with index                    |
| 7   | 338. Counting Bits                       | DP + bits                         | [https://leetcode.com/problems/counting-bits](https://leetcode.com/problems/counting-bits)                                             | `dp[i] = dp[i>>1] + i&1`                      |
| 8   | 461. Hamming Distance                    | XOR                               | [https://leetcode.com/problems/hamming-distance](https://leetcode.com/problems/hamming-distance)                                       | XOR then count 1s                             |
| -   | -                                        | -                                 | -                                                                                                                                      | -                                             |
| 9   | 342. Power of Four                       | Bit & mask                        | [https://leetcode.com/problems/power-of-four](https://leetcode.com/problems/power-of-four)                                             | `(n & (n-1) == 0)` and position of 1 is even  |
| 10  | 371. Sum of Two Integers                 | Bitwise addition                  | [https://leetcode.com/problems/sum-of-two-integers](https://leetcode.com/problems/sum-of-two-integers)                                 | Use XOR for sum, AND+shift for carry          |
| -   | 476. Number Complement                   | Bitwise addition                  | [https://leetcode.com/problems/number-complement](https://leetcode.com/problems/number-complement)                                     | Use XOR for sum, AND+shift for carry          |
| 11  | 1009. Complement of Base 10 Integer      | Bit flipping                      | [https://leetcode.com/problems/complement-of-base-10-integer](https://leetcode.com/problems/complement-of-base-10-integer)             | Flip all bits up to highest 1                 |
| 12  | 477. Total Hamming Distance              | XOR / bit counting                | [https://leetcode.com/problems/total-hamming-distance](https://leetcode.com/problems/total-hamming-distance)                           | Count bits column-wise                        |
| -   | -                                        | -                                 | -                                                                                                                                      | -                                             |
| 13  | 693. Binary Number with Alternating Bits | Shift & XOR                       | [https://leetcode.com/problems/binary-number-with-alternating-bits](https://leetcode.com/problems/binary-number-with-alternating-bits) | `(n ^ (n>>1))` should be all 1s               | Trick: all 1s satisfy (x & (x + 1)) == 0                      |
| 14  | 201. Bitwise AND of Numbers Range        | Bit shifting                      | [https://leetcode.com/problems/bitwise-and-of-numbers-range](https://leetcode.com/problems/bitwise-and-of-numbers-range)               | Shift until left == right                     |
| 15  | 260. Single Number III                   | XOR                               | [https://leetcode.com/problems/single-number-iii](https://leetcode.com/problems/single-number-iii)                                     | XOR gives difference, split by bit            |
| 16  | 1486. XOR Operation in an Array          | XOR formula                       | [https://leetcode.com/problems/xor-operation-in-an-array](https://leetcode.com/problems/xor-operation-in-an-array)                     | Pattern in XOR sequence                       |
| 17  | 137. Single Number II                    | XOR + masks                       | [https://leetcode.com/problems/single-number-ii](https://leetcode.com/problems/single-number-ii)                                       | Use bit counting modulo 3                     |
| 18  | 318. Maximum Product of Word Lengths     | Bitmasking                        | [https://leetcode.com/problems/maximum-product-of-word-lengths](https://leetcode.com/problems/maximum-product-of-word-lengths)         | Encode chars as bitmask, AND to check overlap |
| 20  | 400. Nth Digit                           | Bit manipulation (optional)       | [https://leetcode.com/problems/nth-digit](https://leetcode.com/problems/nth-digit)                                                     | Can encode powers of 10 in bits               |
| 21  | 201. Bitwise AND of Numbers Range        | Mask & shift                      | [https://leetcode.com/problems/bitwise-and-of-numbers-range](https://leetcode.com/problems/bitwise-and-of-numbers-range)               | Shift until left == right                     |

To Review
https://leetcode.com/problems/complement-of-base-10-integer
