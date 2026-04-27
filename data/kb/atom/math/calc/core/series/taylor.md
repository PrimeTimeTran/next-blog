---
tags:
  - math
  - calculus
  - series
  - approximation
---

# 📘 Taylor Series

The Taylor Series represents a function as an **infinite polynomial expansion** centered around a point $a$.

---

# 🧠 Core Idea

A smooth function can be approximated by:

> a polynomial built from its derivatives at a single point.

---

# 📊 Definition

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

Where:

- $f^{(n)}(a)$ = $n$th derivative of $f$ evaluated at $a$
- $a$ = center of expansion
- $(x-a)^n$ = distance from center
- $n!$ = normalization factor

---

# 🎯 Special Case: Maclaurin Series

When $a = 0$:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n
$$

---

# 🧭 Intuition

Taylor series says:

> A function is just an infinite sum of local slope information.

Each term adds more accuracy:

- 0th derivative → value
- 1st derivative → slope
- 2nd derivative → curvature
- higher derivatives → finer shape details

---

# 📈 Why it works

It approximates functions because:

- derivatives encode local geometry
- polynomials are easy to compute
- infinite terms → exact reconstruction (under conditions)

---

# ⚙️ Common Examples

### Exponential

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

### Sine

$$
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
$$

### Cosine

$$
\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
$$

---

# 🔗 Connections

- [[maclaurin|Maclaurin Series]]
- [[power-series|Power Series]]
- [[radius-and-interval-of-convergence|Radius and Interval of Convergence]]

---

# 🧠 Key Insight

> Taylor Series turns functions into polynomials so they become algebraically manipulable.

---

# 📌 Summary

- Represents functions as infinite polynomials
- Built from derivatives at a point
- General form of Maclaurin series
- Fundamental tool for approximation and analysis
