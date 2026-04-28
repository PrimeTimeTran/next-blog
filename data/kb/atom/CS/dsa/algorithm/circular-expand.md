# 🧠 Core idea of `% n`

```text id="m1"
index = (start ± d) % n
```

means:

> “walk left or right, and if you fall off the array, wrap around to the other side”

Think of the array as a **circle**, not a line.

---

# 🔁 Example setup

Let’s use:

```text id="ex1"
arr = [0, 1, 2, 3, 4]
n = 5
start = 0
```

---

# 🧭 Step-by-step circular movement

## Start at index 0

We expand outward by distance `d`.

---

## d = 1

```text id="d1"
left  = (0 - 1) % 5 = 4
right = (0 + 1) % 5 = 1
```

```
Circle layout:

      4
   3     0     1
      2
```

So first ring:

```text id="r1"
left → 4
right → 1
```

---

## d = 2

```text id="d2"
left  = (0 - 2) % 5 = 3
right = (0 + 2) % 5 = 2
```

```
      3
   2     0     1
      4
```

Second ring:

```text id="r2"
left → 3
right → 2
```

---

## d = 3

```text id="d3"
left  = (0 - 3) % 5 = 2
right = (0 + 3) % 5 = 3
```

Notice something important:

You are revisiting the same nodes, just from opposite directions.

---

## d = 4

```text id="d4"
left  = (0 - 4) % 5 = 1
right = (0 + 4) % 5 = 4
```

---

# 🔄 Full circular expansion order

From start = 0:

```text id="order"
distance 1 → (4, 1)
distance 2 → (3, 2)
distance 3 → (2, 3)
distance 4 → (1, 4)
```

---

# 🧠 Mental model (important)

Think of it as:

## ❌ linear array

```
0 → 1 → 2 → 3 → 4
```

## ✅ circular array

```
0 → 1 → 2 → 3 → 4
↑                 ↓
← ← ← ← ← ← ← ← ←
```

---

# ⚡ Why `% n` works

Because:

```text id="mod1"
-1 % 5 = 4
-2 % 5 = 3
5 % 5 = 0
```

So it automatically “wraps” indices:

| raw index | wrapped |
| --------- | ------- |
| -1        | 4       |
| -2        | 3       |
| 5         | 0       |

---

# 🧠 The key insight you’re missing

Instead of thinking:

> “left goes negative and right goes positive”

Think:

> “both directions live on a loop with no edges”

---

# 📌 One-line mental model

> `% n` turns a straight line into a loop where stepping past an edge re-enters from the opposite side.

# 🧠 Key rule used in most programming languages

In Python (and most modern languages):

> Result of `% n` is always in range:

```text id="m4"
0 ≤ result < n
```

So it must always be between:

```text
0 and 4   (for n = 5)
```

---

# 🔥 So what is -1 % 5?

We ask:

> “What number in [0..4], when subtracted by a multiple of 5, gives -1?”

Try:

```text id="m5"
4 - 5 = -1
```

So:

```text id="m6"
-1 % 5 = 4
```

---

# 🧠 Another way to see it

We rewrite:

```text id="m7"
-1 = 5 * (-1) + 4
```

So remainder = 4.

---

# 🔁 Why this matters for circular arrays

When you do:

```python id="m8"
(start - d) % n
```

You are saying:

> “go left, and if I go past 0, wrap to the end”

So:

| expression  | meaning                             |
| ----------- | ----------------------------------- |
| (0 - 1) % 5 | step left from 0 → go to last index |
| (0 - 2) % 5 | two steps left → index 3            |
| (0 - 3) % 5 | index 2                             |

---

# 🧠 Intuition shift (this is the key)

Instead of thinking:

> “modulo gives remainder”

Think:

> “modulo forces numbers into a fixed circle of size n”

So:

```text id="m9"
-1 becomes “last element”
because the circle wraps around
```

---

# 📦 Visual model

Array of size 5:

```text id="m10"
Index:  0  1  2  3  4
        ⟳          ⟲
```

Now:

```text id="m11"
-1 → wraps to 4
-2 → wraps to 3
-3 → wraps to 2
```

---

# ⚡ One-line takeaway

> `% n` doesn’t just compute remainders — it maps any integer (positive or negative) into a circular index space `[0, n-1]`.
