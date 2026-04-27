---
tags:
  - math
  - calculus
  - integrals
---

# 📦 Accumulation Functions (Atom)

An accumulation function turns a **definite integral into a function** by letting the upper bound vary.

---

# 🧠 Core Idea

> Instead of accumulating over a fixed interval, we accumulate **as we move**.

---

# 📐 Definition

$$
F(x) = \int_a^x f(t)\,dt
$$

Where:

- \(f(t)\) = original function
- \(a\) = fixed starting point
- \(x\) = variable upper bound

---

# 🧩 What This Means

- For each value of \(x\), you get the **total accumulation from \(a\) to \(x\)**
- So \(F(x)\) itself is a **new function**

---

# 📊 Interpretation

If \(f(x) \ge 0\):

> \(F(x)\) = area under \(f\) from \(a\) to \(x\)

More generally:

> \(F(x)\) = net accumulation (area above − area below)

---

# 🔗 Fundamental Theorem of Calculus (Key Result)

$$
F'(x) = f(x)
$$

---

# 🧠 Meaning

> The rate of accumulation at point \(x\) equals the original function value at \(x\)

This is the **bridge between integrals and derivatives**.

---

# 📌 Example

Let:

$$
F(x) = \int_0^x 2t\,dt
$$

Then:

$$
F(x) = x^2
$$

and:

$$
F'(x) = 2x
$$

---

# 🔄 Intuition (Very Important)

Think of:

- \(f(x)\) → **rate (flow, slope, density)**
- \(F(x)\) → **total accumulated amount**

---

# ⚙️ Real-World Meaning

- velocity → position
- rate of flow → total volume
- profit rate → total profit

---

# 🧠 Mental Model

> An accumulation function is a “running total” of a function.

---

# 🔗 Connections

- [[Definite Integrals]] → fixed accumulation
- [[Indefinite Integrals]] → antiderivatives
- [[fundamental-theorem-of-calculus]] → connects both
- [[Derivatives]] → rate of change

---

# 📌 Summary

An accumulation function builds a new function by continuously summing values of another function, and its derivative returns the original function.

> Integration builds totals; differentiation extracts rates.
