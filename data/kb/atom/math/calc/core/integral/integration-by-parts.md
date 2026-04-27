---
tags:
  - math
  - calculus
  - integrals
---

# 🧠 Integration by Parts (Atom)

Integration by parts is a technique for integrating **products of functions** by reversing the product rule of differentiation.

---

# 🧠 Core Idea

> Turn a hard product integral into a simpler one by shifting derivatives between functions.

---

# 📐 Formula

![[reference/calc/formula/integration-by-parts|integration-by-parts]]

Where:

- $u$ = function you differentiate
- $dv$ = function you integrate
- $du = u' dx$
- $v = \int dv$

---

# 🔗 Origin (Product Rule)

It comes from the derivative rule:

$$
\frac{d}{dx}(uv) = u'v + uv'
$$

Rearranging and integrating gives integration by parts.

---

# 🧩 When to Use It

Use when you see:

- products of functions:
  - $x e^x$
  - $x \sin x$
  - $x \ln x$
- one part simplifies when differentiated
- one part is easy to integrate

---

# ⚙️ Strategy (Choosing u and dv)

Common heuristic:

## LIATE rule

Pick \(u\) in this priority order:

1. Logarithmic $ln x$
2. Inverse trig
3. Algebraic $x, x^2$
4. Trigonometric
5. Exponential

---

# 📊 Example

Compute:

$$
\int x e^x dx
$$

Let:

- $u = x \Rightarrow du = dx$
- $dv = e^x dx \Rightarrow v = e^x$

Apply formula:

$$
\int x e^x dx = x e^x - \int e^x dx
$$

$$
= x e^x - e^x + C
$$

---

# 🧠 Intuition

- differentiation simplifies one function $u$
- integration handles the other $dv$
- trade complexity from one side to the other

---

# 🔁 Mental Model

> “Move complexity from multiplication into differentiation/integration”

---

# 🔗 Connections

- [[product-rule|Product Rule]] → origin of formula
- [[Substitution]] → alternative integration technique
- [[Tabular Integration]] → repeated integration by parts
- [[Exponential and Trig Integrals]] → common applications

---

# 📌 Summary

Integration by parts transforms product integrals using the reverse of the product rule:

> split the integral into a product minus a simpler integral
