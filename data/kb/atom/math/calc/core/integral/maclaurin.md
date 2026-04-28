---
tags:
  - math
  - calculus
  - series
---

# 🧠 Maclaurin Series (Atom)

The Maclaurin series is a special case of the Taylor series centered at $x = 0$, used to approximate functions using polynomials.

---

# 🧠 Core Idea

> Represent a function as an infinite polynomial built from its derivatives at 0.

---

# 📐 Definition

For a function $f(x)$:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n
$$

---

# 🧩 Meaning of Terms

- $f^{(n)}(0)$: nth derivative evaluated at 0
- $n!$: scaling factor
- $x^n$: polynomial basis

---

# 📊 Structure

Expands into:

$$
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f^{(3)}(0)}{3!}x^3 + \cdots
$$

---

# 🧠 Intuition

> Build a function from its local behavior at a single point.

Each derivative adds more accuracy.

---

# ⚙️ Why It Works

Near $x=0$:

- polynomials approximate smooth functions well
- higher derivatives refine curvature and shape
- infinite terms give exact reconstruction (under convergence)

---

# 📌 Common Maclaurin Series

## 🔷 Exponential

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

---

## 🔷 Sine

$$
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
$$

---

## 🔷 Cosine

$$
\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
$$

---

## 🔷 Logarithm

$$
\ln(1+x) = \sum_{n=1}^{\infty} (-1)^{n+1}\frac{x^n}{n}
$$

(valid for $|x| < 1$)

---

# 📊 Convergence

A Maclaurin series only works when:

- the function is smooth enough
- the series converges at the input value

---

# 🧠 Applications

- function approximation
- numerical computation
- solving differential equations
- physics (wave motion, quantum mechanics)
- machine learning approximations

---

# 🔗 Connections

- [[Taylor Series Expansion]] → generalized form centered at $a$
- [[Power Series]] → broader framework
- [[Error Approximation]] → truncation error
- [[atom/math/calc/1/limits/limits]] → convergence behavior

---

# 🧠 Mental Model

> “Any smooth function can be rebuilt from its slope, curvature, and higher-order behavior at a single point.”

---

# 📌 Summary

The Maclaurin series expresses a function as an infinite polynomial based on its derivatives at 0, enabling approximation and deep analytical insight.
