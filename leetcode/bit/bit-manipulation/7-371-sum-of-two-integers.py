'''
Ah, yes! This is a classic **“sum without using `+` or `-`”** trick using **bit manipulation**. Let’s go through it step by step.

Here’s the code you provided:

```python
class Solution:
    def getSum(self, a: int, b: int) -> int:
        mask = 0xffffffff
        
        while b & mask != 0:
            c = (a & b) << 1
            a = a ^ b
            b = c

        return a & mask if b > mask else a
```

---

### 1️⃣ The Goal

We want to add `a` and `b` **without using `+` or `-`.**

* `^` is **XOR** → acts like addition **without carry**
* `&` is **AND** → finds where a **carry** happens
* `<< 1` → moves the carry to the left, so it will be added in the next bit

---

### 2️⃣ How it Works

The algorithm mimics how addition works **bit by bit**:

#### Step A: XOR for sum without carry

```python
a = a ^ b
```

* `a ^ b` adds the bits where at most **one of them is 1**.
* But it **ignores carry**, e.g., `1 + 1 = 0` with carry `1`.

#### Step B: AND + shift for carry

```python
c = (a & b) << 1
b = c
```

* `a & b` finds **where both bits are 1** → that’s a carry.
* `<< 1` moves the carry to the **next higher bit**.
* In the next iteration, this carry is added to `a`.

#### Step C: Repeat until no carry

```python
while b & mask != 0:
```

* Keep looping until there’s **no more carry** (`b == 0` effectively).

---

### 3️⃣ The Mask: `mask = 0xffffffff`

Python integers are **arbitrary-precision**, but the algorithm is designed for **32-bit signed integers**.

* `0xffffffff` is `32` bits of `1`s (`4294967295` in decimal).
* `b & mask != 0` ensures we **limit to 32 bits** in the loop.
* At the end:

```python
return a & mask if b > mask else a
```

* If the number is larger than 32-bit signed max (`2^31 - 1 = 2147483647`), we convert it to **Python’s negative number representation** using two’s complement:

  * `a & mask` → keeps only 32 bits

---

### 4️⃣ Example Walkthrough

Suppose `a = 5` (0101), `b = 3` (0011):

1. `c = (a & b) << 1 = (0101 & 0011) << 1 = 0001 << 1 = 0010` → carry
2. `a = a ^ b = 0101 ^ 0011 = 0110` → sum without carry
3. `b = c = 0010`
4. Next iteration:

   * `c = (a & b) << 1 = (0110 & 0010) << 1 = 0010 << 1 = 0100`
   * `a = a ^ b = 0110 ^ 0010 = 0100`
   * `b = c = 0100`
5. Next iteration:

   * `c = (0100 & 0100) << 1 = 0100 << 1 = 1000`
   * `a = 0100 ^ 0100 = 0000`
   * `b = 1000`
6. Next iteration:

   * `c = (0000 & 1000) << 1 = 0`
   * `a = 0000 ^ 1000 = 1000`
   * `b = 0` → stop

✅ Result: `a = 1000 = 8`

---

### 5️⃣ TL;DR

* `^` → adds bits ignoring carry
* `& << 1` → calculates carry
* Loop until no carry left
* `mask` → simulates 32-bit signed integer arithmetic

This is essentially **simulating how computers do addition at the bit level**.


2. Diagram
7 = 0111
6 = 0110

a = 0111
b = 0110
mask = 0xffffffff  # just for 32-bit safety

a & b = 0111 & 0110 = 0110
carry = 0110 << 1 = 1100

0111 ^ 0110 = 0001
'''
class Solution:
    def getSum(self, a: int, b: int) -> int:
        # return sum([a,b])
        # return int(math.log2(2**a * 2**b))
        # return operator.add(a,b)
        mask = 0xffffffff
        
        while b & mask != 0:
            # Find bits that are carried
            c = (a&b) << 1
            # Sum bits where at most one is set
            a = a^b
            # Carry is stored in b
            b = c

        return a & mask if b > mask else a


class Solution:
    def getSum(self, a: int, b: int) -> int:
        mask = 0xffffffff
        max_int = 0x7fffffff

        while b != 0:
            # Calculate carry bits and keep them 32-bit
            c = ((a & b) << 1) & mask
            # Sum bits without carry and keep 32-bit
            a = (a ^ b) & mask
            # Carry for next iteration
            b = c

        # Convert to negative if result exceeds 32-bit signed max
        return a if a <= max_int else ~(a ^ mask)




'''
Best Solution
We sum two integers `a` and `b` using bit manipulation.
As long as we have carry bits, we keep adding the two binary numbers.

mask = pow(2, 32) - 1          32-bit mask to limit integer size.

b & mask                        checks if there are carry bits left.

a ^ b                           gives sum without carry. It's really the partial sum.
(a & b) << 1                    gives the carry bits. or “Where did 1 + 1 happen?”

a, b = a ^ b, (a & b) << 1 
'''
class Solution:
    def getSum(self, a: int, b: int) -> int:
        mask = pow(2, 32) - 1
        while b & mask:
            a, b = a ^ b, (a & b) << 1
        return a & mask if b > 0 else a




'''python
Explanation> **The loop ends when no carry exists in the lowest 32 bits — not when `b` becomes zero — and the final step reinterprets the 32-bit pattern as a signed integer.**

This was a *very* deep question.
If you understood this, you now understand:

* why masks exist
* how overflow is emulated
* how CPUs do signed arithmetic

You’re officially thinking at the systems level now.
'''

class Solution:
    def getSum(self, a: int, b: int) -> int:
        mask = 0xffffffff
        while b & mask:
            a, b = a ^ b, (a & b) << 1
        if a & (1 << 31):
            return a - (1 << 32)
        return a
