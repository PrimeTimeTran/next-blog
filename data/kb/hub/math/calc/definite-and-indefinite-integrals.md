---
tags:
  - math
  - calculus
  - integrals
---

# ∫ Integral Types Hub

Integration comes in two fundamentally different forms:

- **Indefinite integrals** → find functions
- **Definite integrals** → compute values

---

# 🧠 Core Idea

> Integration either **reverses differentiation** or **accumulates quantities over an interval**

---

# 📦 1. Indefinite Integrals (Antiderivatives)

## Definition

$$
\int f(x)\,dx = F(x) + C
$$

Where:

- \(F'(x) = f(x)\)
- \(C\) = constant of integration

---

## 🧠 Meaning

> Find a function whose derivative is \(f(x)\)

---

## 📌 Example

$$
\int 2x\,dx = x^2 + C
$$

---

## 🔑 Key Properties

- Always produces a **family of functions**
- Includes **+ C**
- Reverses differentiation

---

## 🔗 Connected Ideas

- [[Antiderivatives]]
- [[Differentiation]]
- [[Differential Equations]]

---

# 📊 2. Definite Integrals (Accumulation)

## Definition

$$
\int_a^b f(x)\,dx
$$

---

## 🧠 Meaning

> Accumulate values of \(f(x)\) from \(a\) to \(b\)

---

## 📌 Interpretation

- area under a curve
- net accumulation
- total change

---

## 📌 Example

$$
\int_0^2 2x\,dx = 4
$$

---

## 🔑 Key Properties

- Produces a **number (not a function)**
- No constant \(C\)
- Depends on bounds \(a, b\)

---

## 🔗 Connected Ideas

- [[Area Under Curve]]
- [[Accumulation Functions]]
- [[Riemann Sums]]

---

# 🔗 The Bridge: Fundamental Theorem of Calculus

This connects both worlds:

## Part 1

$$
\frac{d}{dx} \left( \int_a^x f(t)\,dt \right) = f(x)
$$

## Part 2

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

---

## 🧠 Meaning

> Definite integrals are computed using antiderivatives

---

# ⚖️ Side-by-Side Comparison

| Feature         | Indefinite Integral | Definite Integral     |
| --------------- | ------------------- | --------------------- |
| Output          | Function            | Number                |
| Includes \(C\)? | Yes                 | No                    |
| Purpose         | Find antiderivative | Accumulate quantity   |
| Notation        | \(\int f(x)\,dx\)   | \(\int_a^b f(x)\,dx\) |

---

# 🧠 Mental Model

- **Indefinite integral** → “What function gives this slope?”
- **Definite integral** → “How much total accumulates?”

---

# 📌 Summary

- Indefinite integrals produce **functions (antiderivatives)**
- Definite integrals produce **values (accumulated quantities)**
- The Fundamental Theorem of Calculus connects the two

> Integration is both **undoing change** and **measuring total change**
