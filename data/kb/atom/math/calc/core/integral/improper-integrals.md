---
tags:
  - math
  - calculus
  - integrals
---

# 🧠 Improper Integrals (Atom)

Improper integrals are definite integrals where **standard assumptions break down**, usually due to infinite bounds or undefined behavior.

---

# 🧠 Core Idea

> Extend definite integrals using limits to handle infinity or discontinuities.

---

# 📐 Two Main Types

## 1. Infinite Intervals

Integrals with infinity as a bound:

$$
\int_a^{\infty} f(x)\,dx
$$

or

$$
\int_{-\infty}^{\infty} f(x)\,dx
$$

---

## 2. Discontinuous Functions

Integrals where the function is undefined at a point:

$$
\int_a^b f(x)\,dx \quad \text{where } f(x) \to \infty \text{ at some point}
$$

---

# 🔁 Definition via Limits

## Infinite bound:

$$
\int_a^{\infty} f(x)\,dx
=
\lim_{b \to \infty} \int_a^b f(x)\,dx
$$

---

## Discontinuity:

If \(f(x)\) blows up at \(c\):

$$
\int_a^b f(x)\,dx
=
\lim_{t \to c^-} \int_a^t f(x)\,dx
+
\lim_{t \to c^+} \int_t^b f(x)\,dx
$$

---

# 🧩 Meaning

Improper integrals measure:

- total accumulation over infinite regions
- or accumulation near singularities

---

# 📊 Example 1: Convergent

$$
\int_1^{\infty} \frac{1}{x^2}\,dx
$$

Compute:

$$
= \lim_{b \to \infty} \left(1 - \frac{1}{b}\right) = 1
$$

✔ converges

---

# 📊 Example 2: Divergent

$$
\int_1^{\infty} \frac{1}{x}\,dx
$$

Compute:

$$
= \lim_{b \to \infty} \ln b = \infty
$$

✘ diverges

---

# ⚙️ Convergence vs Divergence

An improper integral:

- **converges** → finite value exists
- **diverges** → grows without bound or oscillates

---

# 🔗 Key Connections

- [[atom/math/calc/2/test/integral.md|Integral Test]] → uses improper integrals
- [[infinite|Infinite Series]] → comparison tool
- [[atom/math/calc/1/limits/limits]] → foundational mechanism
- [[Area Under Curve]] → geometric interpretation

---

# 🧠 Intuition

> You are asking: “Does infinite accumulation still produce a finite result?”

---

# 🧠 Mental Model

- finite bounds → standard accumulation
- infinite bounds → limit of accumulation
- singularities → careful split accumulation

---

# 📌 Summary

Improper integrals extend definite integrals using limits to handle infinity or discontinuities, determining whether total accumulation remains finite.
