---
tags:
  - atom
  - calculus
  - calc-1
type: atom
---

# 📘 Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) connects [[derivative|derivatives]] and [[integral|integrals]], showing they are inverse processes.

---

# 🧠 Core Idea

> Differentiation and integration are inverse operations.

- Derivatives measure **instantaneous rate of change**
- Integrals measure **accumulated change**
- FTC formally connects these two perspectives

---

# 🔷 Accumulation (Area) Function

Before FTC Part 1, define the key object:

Let $f$ be continuous on $[a,b]$.

Define the accumulation function:

![[accumulation-function]]

- This function measures total accumulation of $f(t)$ from $a$ to $x$
- It builds a function from continuous accumulation

---

# 🔷 FTC Part 1 (Derivative of an Accumulation Function)

## Setup

Let $f$ be continuous on $[a,b]$.

Define:

$$
F(x) = \int_a^x f(t),dt
$$

---

## Result

$$
F'(x) = f(x)
$$

---

## Meaning

- Differentiation “undoes” accumulation
- The derivative of a running total returns the original function

---

## Intuition

- The integral builds a function by accumulating values of $f(t)$
- The derivative extracts the instantaneous contribution at $x$

---

## Big Idea

> Differentiation reverses accumulation when the upper limit is variable.
> ![[fundamental-theorem-of-calculus-1]]

---

# 🔷 FTC Part 2 (Evaluation of Definite Integrals)

Let $f$ be continuous on $[a,b]$, and let $F$ be any [[antiderivative]] of $f$, meaning:

$$
F'(x) = f(x)
$$

---

## Result

![[fundamental-theorem-of-calculus-2]]

---

## Meaning

- A definite integral is evaluated using an antiderivative
- Continuous accumulation over an interval reduces to endpoint evaluation

---

## Procedure

To compute:

$$
\int_a^b f(x),dx
$$

1. Find an antiderivative $F(x)$ such that $F'(x)=f(x)$
2. Evaluate $F(b)$
3. Evaluate $F(a)$
4. Subtract:

$$
F(b) - F(a)
$$

---

## Intuition

- Integration measures total accumulation over $[a,b]$
- Antiderivatives convert continuous accumulation into endpoint differences

---

## Big Idea

> A definite integral computes total accumulation by evaluating an antiderivative at the boundaries.

---

# 🔁 Unified Statement (Core Identity)

![[fundamental-theorem-of-calculus-unified-form-core-identity]]

---

# 🧠 Interpretation

- Integration builds an accumulated quantity from $a$ to $x$
- Differentiation recovers the original function from that accumulation

---

# 🔗 Notation Clarity

| Symbol | Meaning                                        |
| ------ | ---------------------------------------------- |
| $f(x)$ | original function (rate of change / integrand) |
| $F(x)$ | antiderivative of $f(x)$                       |
| $t$    | dummy variable inside the integral             |

Relationship:

$$
F'(x) = f(x)
$$

---

# 🧠 Correct Conceptual Framing

- **Derivative** → local behavior (instantaneous rate)
- **Integral** → global behavior (accumulated effect)

---

# ⚠️ Common Misconceptions

### ❌ “Integral is just area”

Not always.

✔ Better:

> A definite integral measures **net accumulation of a function over an interval**

---

### ❌ “FTC defines the integral”

Not exactly.

✔ More precise:

- [[riemann-sum|Riemann sums]] define the integral
- FTC provides an efficient evaluation method

---

# 📌 Summary

The Fundamental Theorem of Calculus states that:

- differentiation and integration are inverse operations
- accumulation and instantaneous change are two views of the same process
- definite integrals are computed efficiently using antiderivatives
