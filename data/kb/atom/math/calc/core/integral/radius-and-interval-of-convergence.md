---
tags:
  - math
  - calculus
  - series
---

# 🧠 Radius and Interval of Convergence (Atom)

The radius and interval of convergence describe where a **power series is valid (converges)**.

---

# 🧠 Core Idea

> A power series only works reliably for certain values of \(x\); outside that range, it diverges.

---

# 📐 General Power Series Form

$$
\sum_{n=0}^{\infty} a_n (x - c)^n
$$

- \(c\) = center
- \(x\) = variable
- \(a_n\) = coefficients

---

# 📊 1. Radius of Convergence (R)

The **radius of convergence** \(R\) is the distance from the center \(c\) where the series converges.

### Meaning:

- converges if:

  $$
  |x - c| < R
  $$

- diverges if:

  $$
  |x - c| > R
  $$

- boundary \( |x - c| = R \): must be tested separately

---

# 🧠 Geometric Interpretation

A power series behaves like:

> a function that is “trusted” only within a circle of radius \(R\) around \(c\)

---

# 📐 2. Interval of Convergence

The **interval of convergence** is the actual set of real values where the series converges.

It has form:

$$
(c - R, \; c + R)
$$

BUT endpoints may or may not be included.

---

# ⚠️ Endpoint Testing

At:

$$
x = c - R \quad \text{or} \quad x = c + R
$$

you must test separately using:

- [[Integral Test]]
- [[Alternating Series Test]]
- [[p-Series]]
- direct comparison

---

# 🧮 How to Find R (Standard Method)

Most commonly use:

## Ratio Test

$$
$\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = L$
$$

Then:

- \(L < 1\) → converges
- \(L > 1\) → diverges

Solve for \(x\) → gives \(R\)

---

# 📊 Example Structure

If:

$$
\sum \frac{(x-2)^n}{n}
$$

Then:

- center: \(c = 2\)
- radius: determined via Ratio Test
- interval: \((2 - R, 2 + R)\), endpoints checked separately

---

# 🧠 Intuition

> Power series behave like local approximations that lose validity as you move away from the center.

---

# 🔗 Connections

- [[Power Series]] → base structure
- [[Ratio and Root Tests]] → convergence tools
- [[Maclaurin Series]] → special case where \(c = 0\)
- [[Taylor Series Expansion]] → general centered expansion

---

# 🧠 Mental Model

> “A power series defines a function only within a bounded region of trust.”

---

# 📌 Summary

The radius of convergence defines how far a power series works, and the interval of convergence specifies exactly where (including endpoint behavior) the series is valid.
