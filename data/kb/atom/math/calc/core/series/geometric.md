---
tags:
  - math
  - calculus
  - series
---

# 🔁 Geometric Series (Atom)

A geometric series is an infinite sum where each term is obtained by multiplying the previous term by a constant ratio.

---

# 🧠 Core Idea

> Repeated multiplication creates a predictable infinite sum.

This is the **simplest and most important series** in calculus.

---

# 📐 Definition

## Finite Geometric Series

$$
\sum_{n=0}^{N} ar^n = a + ar + ar^2 + \dots + ar^N
$$

- \(a\) = first term
- \(r\) = common ratio

---

## Infinite Geometric Series

$$
\sum_{n=0}^{\infty} ar^n
$$

---

# 📊 Convergence Condition

An infinite geometric series converges **only if**:

$$
|r| < 1
$$

---

# 🧮 Sum Formula (Infinite Case)

When \(|r| < 1\):

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r}
$$

---

# 🔁 Special Case (Most Important)

$$
\sum_{n=0}^{\infty} x^n = \frac{1}{1 - x}, \quad |x| < 1
$$

This is the foundation for **power series expansions**.

---

# 🧠 Why It Matters

Geometric series are used to:

- build power series
- derive Taylor expansions
- approximate functions
- model decay and growth processes

---

# 📉 Intuition

If \(|r| < 1\):

- terms get smaller and smaller
- sum approaches a finite value

If \(|r| \geq 1\):

- terms don’t shrink
- sum diverges

---

# 🔧 Example

$$
1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots = 2
$$

Here:

- \(a = 1\)
- \(r = \frac{1}{2}\)

---

# 🔗 Connections

- [[Power Series]] → built from geometric series
- [[taylor-series]] → constructed using power series
- [[Convergence Tests]] → determines validity
- [[atom/math/calc/1/limits/limits]] → explains why the sum exists

---

# 🧠 Mental Model

> A geometric series is a shrinking (or growing) process of repeated multiplication.

---

# 📌 Summary

A geometric series is an infinite sum with a constant ratio between terms, converging to a finite value when \(|r| < 1\), and forming the foundation for power series and many results in calculus.
