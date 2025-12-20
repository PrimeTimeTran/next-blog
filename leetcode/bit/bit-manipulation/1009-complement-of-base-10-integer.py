'''
1009-complement-of-base-10-integer
Good — thanks for naming the exact problem.
Let’s reset and lock this down **precisely for LeetCode 1009**. No hand-waving.

---

## 🔹 Problem 1009 — Key Rule (this is the gotcha)

> The complement is taken **only over the bits actually used to represent `n` in binary**, **not** 32 bits.

Examples:

```text
n = 5  → 101  → complement = 010 → 2
n = 1  → 1    → complement = 0
n = 0  → 0    → complement = 1   ← special case
```

---

## ❌ Why your loop-based attempts keep failing

All versions you tried have **one of these issues**:

1. Looping a fixed number of times (32) ❌
2. Reversing bits instead of complementing ❌
3. Forgetting the `n == 0` edge case ❌

For **1009**, a loop solution is *possible* but awkward and easy to mess up.

---

## ✅ The CORRECT and ACCEPTED solution

This is the **intended solution** for this problem.

```python
class Solution:
    def bitwiseComplement(self, n: int) -> int:
        if n == 0:
            return 1

        mask = (1 << n.bit_length()) - 1
        return n ^ mask
```

### This passes **all test cases** on LeetCode 1009.

---

## 🧠 Why this works (no magic)

### Step 1: `n.bit_length()`

```python
n = 5        # 101
n.bit_length() = 3
```

---

### Step 2: Build a mask of all 1s

```python
mask = (1 << 3) - 1
     = 1000 - 1
     = 0111
```

---

### Step 3: XOR flips bits

```text
  n    = 101
  mask = 111
-----------
result = 010 = 2
```

XOR flips bits **only where mask has 1s**, which is exactly the bits of `n`.

---

## 🧪 Verify all edge cases

```python
n = 5 → 2
n = 1 → 0
n = 0 → 1
n = 7 → 0
n = 10 (1010) → 0101 → 5
```

✔️ All correct.
'''
class Solution:
    def bitwiseComplement(self, n: int) -> int:
        if n == 0:
            return 1
        mask = (1 << n.bit_length()) - 1
        return n ^ mask
