---
draft: true
date: '2025-01-03'
title: 'Fundamental Theorem of Calculus'
summary: ''
tags:
  - math
  - calculus
  - core-theorem
---

# 📘 Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) connects **derivatives** and **integrals**, showing they are inverse processes.

---

# 🧠 Core Idea

> Differentiation and integration undo each other.

- Derivatives measure _instantaneous change_
- Integrals measure _accumulated change_
- FTC links both views into one system

---

# 📊 FTC Part 1 (Derivative of an Integral)

If:

- $$ f \text{ is continuous on } [a,b] $$
- define
  $$
  F(x) = \int_a^x f(t)\,dt
  $$

Then:

$$
F'(x) = f(x)
$$

---

## 🧠 Meaning

- The derivative of an accumulation function gives back the original function
- Integration builds a function; differentiation extracts the rate of change

---

# 📊 FTC Part 2 (Evaluation of Definite Integrals)

If $$ f $$ is continuous on $$ [a,b] $$ and $$ F $$ is any antiderivative of $$ f $$, then:

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

---

## 🧠 Meaning

A definite integral can be computed using any antiderivative:

- find $$ F(x) $$ such that $$ F'(x) = f(x) $$
- evaluate at bounds
- subtract

---

# 🔁 Unified Form

$$
\int_a^b f(x)\,dx = F(x)\big|_a^b = F(b) - F(a)
$$

---

# 🧭 Leibniz Interpretation

FTC expresses a deep relationship:

$$
\frac{d}{dx}\left(\int_a^x f(t)\,dt\right) = f(x)
$$

---

## 🧠 Key Insight

- Integration accumulates area from $$ a $$ to $$ x $$
- Differentiation removes the accumulation, recovering the original function

---

# 🔗 Notation Clarification

- $$ f(x) $$: original function (integrand)
- $$ F(x) $$: antiderivative of $$ f(x) $$

Relationship:

$$
F'(x) = f(x)
$$

---

# 🧠 Intuition

Think of it as:

- **Derivative → zooms in (local change)**
- **Integral → sums up (global accumulation)**

FTC says:

> Zooming out after summing brings you back to where you started.

---

# 📌 Why it matters

FTC is the foundation of:

- computing definite integrals efficiently
- physics (work, energy, motion)
- probability (continuous distributions)
- all applied calculus

---

# 🧩 Common Usage Pattern

To evaluate:

$$
\int_a^b f(x)\,dx
$$

Steps:

1. Find antiderivative $$ F(x) $$
2. Compute $$ F(b) $$
3. Compute $$ F(a) $$
4. Subtract

---

# ⚠️ Common Misconception

FTC does **not** say:

- “integral = area only”

Instead:

> It computes net accumulation of a rate of change.

---

# 📌 Summary

The Fundamental Theorem of Calculus states that:

- differentiation and integration are inverse operations
- definite integrals can be evaluated using antiderivatives
- accumulation and instantaneous change are two views of the same process

# Related

- [derivatives|Derivatives]
- [integrals|Integrals]
