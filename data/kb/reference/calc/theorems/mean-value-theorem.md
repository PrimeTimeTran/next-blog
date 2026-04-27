---
tags:
  - calculus
  - calc-1
  - theorems
  - continuity
  - derivatives
---

# 📘 Mean Value Theorem (MVT)

The Mean Value Theorem connects **average rate of change** to **instantaneous rate of change**.

---

# 🧠 Core Idea

> At some point, the instantaneous slope matches the average slope over an interval.

---

# 📊 Statement

If:

- $f(x)$ is continuous on $[a, b]$
- $f(x)$ is differentiable on $(a, b)$

Then:

$$
\exists \ c \in (a, b) \text{ such that } f'(c) = \frac{f(b) - f(a)}{b - a}
$$

---

# 📈 Meaning

The theorem guarantees:

> at least one point where the tangent line matches the secant line

---

# 📊 Geometric Interpretation

- Secant line = average change over interval
- Tangent line = instantaneous change at a point

MVT says:

> these two must match somewhere inside the interval

---

# 🧠 Intuition

If you travel from point A to B:

- average speed is fixed over the whole trip
- at some moment, your exact speed equals that average

---

# ⚠️ Requirements

MVT only applies if:

- function is continuous on $[a, b]$
- function is differentiable on $(a, b)$

If either fails → theorem does not apply

---

# 🔗 Special Case: Rolle’s Theorem

If:

$$
f(a) = f(b)
$$

then:

$$
f'(c) = 0
$$

Meaning:

> there is at least one flat tangent point

---

# 🧠 Key Insight

> Average behavior over an interval guarantees matching instantaneous behavior somewhere inside it.

---

# 📈 Why it matters

MVT is used for:

- proving inequalities
- understanding function behavior
- error bounds in approximations
- foundational proofs in calculus

---

# 🧭 Mental Model

> A function cannot move from A to B without “matching the average speed” at least once.

---

# 📌 Summary

- Relates average slope to instantaneous slope
- Requires continuity + differentiability
- Guarantees existence of a matching tangent point
- Fundamental theorem for analyzing function behavior
