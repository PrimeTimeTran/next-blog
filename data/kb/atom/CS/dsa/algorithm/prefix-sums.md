## 🧠 Prefix Sums (Core Pattern)

**Definition**
A prefix sum array stores cumulative totals so you can answer range-sum queries in O(1).

```python
prefix[i] = nums[0] + nums[1] + ... + nums[i-1]
```

> Note: `prefix[0] = 0` (important for clean math)

---

## ⚡ Why it matters

Turns repeated summation (O(n)) into constant time (O(1)).

---

## 🔧 Build Prefix Sum

```python
prefix = [0]
for x in nums:
    prefix.append(prefix[-1] + x)
```

---

## 📌 Range Sum Query

Sum of `nums[l..r]`:

```python
sum = prefix[r + 1] - prefix[l]
```

---

## 🧩 Pattern Recognition

Use prefix sums when you see:

- “sum of a subarray”
- repeated range queries
- need to avoid nested loops over ranges

---

## 🔁 Advanced Pattern: Distance / Contribution Trick

When summing distances like:

```python
(i - a) + (i - b) + (i - c)
```

Rewrite as:

```python
i * count - sum_of_values
```

Using prefix sums:

```python
left  = i * k - prefix[k]
right = (prefix[n] - prefix[k+1]) - i * (n - k - 1)
```

---

## 🧠 Key Insight

Prefix sums let you:

> Replace loops over ranges with arithmetic on precomputed totals

---

## ⛔ Common Pitfalls

- Off-by-one errors (`prefix[r+1] - prefix[l]`)
- Forgetting `prefix[0] = 0`
- Mixing inclusive vs exclusive indices

---

## 💡 Mental Model

> “Store the past so the future is O(1).”

## Problems

- [2615. Sum of Distances](https://leetcode.com/problems/sum-of-distances)
- [2574. Left and Right Sum Differences](https://leetcode.com/problems/left-and-right-sum-differences/description)
- [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/description/?envType=problem-list-v2&envId=prefix-sum)
- [2391. Minimum Amount of Time to Collect Garbage](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/description/?envType=problem-list-v2&envId=prefix-sum)
- [1442. Count Triplets That Can Form Two Arrays of Equal XOR](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/?envType=problem-list-v2&envId=prefix-sum)
- [1588. Sum of All Odd Length Subarrays](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/?envType=problem-list-v2&envId=prefix-sum)
- [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/description/?envType=problem-list-v2&envId=prefix-sum)
- [2485. Find the Pivot Integer](https://leetcode.com/problems/find-the-pivot-integer/description/?envType=problem-list-v2&envId=prefix-sum)
- []()
- []()
