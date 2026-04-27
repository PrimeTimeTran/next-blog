---
tags:
  - math
  - calculus
  - series
---

# 🧠 Ratio Test (Atom)

The Ratio Test determines whether an infinite series converges or diverges by comparing consecutive terms.

---

# 🧠 Core Idea

> If terms shrink fast enough, the series converges. If not, it diverges.

---

# 📐 Test Statement

For a series:

$$
\sum_{n=1}^{\infty} a_n
$$

compute:

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$

---

# 📊 Decision Rules

## ✅ Converges absolutely if:

$$
L < 1
$$

---

## ❌ Diverges if:

$$
L > 1 \quad \text{or} \quad L = \infty
$$

---

## ⚠️ Inconclusive if:

$$
L = 1
$$

(other tests needed)

---

# 🧠 Intuition

> Compare how fast terms shrink from one step to the next.

- ratio < 1 → shrinking fast → sum stabilizes
- ratio > 1 → terms grow → blows up
- ratio = 1 → unclear behavior

---

# 📐 Why It Works

The test compares the series locally to a geometric series:

$$
\sum r^n
$$

which:

- converges if \(|r| < 1\)
- diverges otherwise

---

# 📊 Connection to Geometric Series

If:

$$
\left| \frac{a_{n+1}}{a_n} \right| \approx r
$$

then the series behaves like:

$$
\sum r^n
$$

---

# 🧮 When to Use It

Best for:

- factorials \(n!\)
- exponentials \(a^n\)
- power series
- products of polynomials and exponentials

---

# ⚙️ Example Pattern

### Example:

$$
a_n = \frac{n!}{2^n}
$$

Ratio:

$$
\left| \frac{a_{n+1}}{a_n} \right|
= \frac{(n+1)!}{2^{n+1}} \cdot \frac{2^n}{n!}
= \frac{n+1}{2}
$$

Limit → ∞ → diverges

---

# 🔗 Connections

- [[Geometric Series]] → limiting comparison model
- [[Root Test]] → alternative convergence test
- [[Radius and Interval of Convergence]] → main tool for power series
- [[Infinite Series]] → broader framework

---

# 🧠 Mental Model

> “Check whether the series behaves like a shrinking geometric sequence.”

---

# 📌 Summary

The Ratio Test determines convergence by analyzing the limiting ratio of consecutive terms, comparing the series to a geometric benchmark.
