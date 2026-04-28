https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description/?envType=daily-question&envId=2026-04-28

# 🧠 What “normalize” means here

In this problem, “normalize” means:

> Convert all values into a simpler coordinate system where each valid operation is just ±1.

---

# ⚙️ Original world

You start with:

- numbers in a grid
- allowed operation: `+x` or `-x`

So movement looks like:

```text id="9c2k3v"
value → value ± x → value ± 2x → value ± 3x ...
```

That’s a “step size of x” world.

---

# 🔁 Why we normalize

We want to remove the `x` so the problem becomes simpler.

So we divide everything by `x`:

```python id="k8v3q1"
n // x
```

Now each operation becomes:

```text id="m2p9xz"
±x  → ±1 in normalized space
```

---

# 🧠 Simple analogy

Imagine:

- original: measuring distance in “meters in chunks of 5”
- normalize: convert to “number of chunks”

So:

| Original | Normalized |
| -------- | ---------- |
| 10       | 2          |
| 15       | 3          |
| 20       | 4          |

Now movement is just:

> +1 or -1 chunk

---

# ⚠️ Important subtlety

Strictly speaking, normalization should be:

```python id="u3kq7m"
(n - base) // x
```

But in this problem we skip `base` because:

- all values already share same modulo (you checked earlier)
- shifting doesn't change distances

So we simplify to:

```python id="p9xv2a"
n // x
```

---

# 🧠 Why this helps

After normalization:

You’ve reduced the problem from:

> “move by ±x in 2D grid values”

to:

> “move by ±1 on a number line”

That’s why median suddenly works cleanly.

---

# 🔥 Intuition in one line

> Normalization removes the step size so the problem becomes unit-distance optimization.

---

# 🧩 After normalization

Now this:

```python id="kq8v1d"
sum(abs(a[i] - T))
```

literally means:

> number of ±1 moves needed

---

If you’re tired, the key thing to remember is:

> normalization = “make every move cost 1 instead of x”

That’s it.
