---
tags:
  - calculus
  - calc-1
  - theorems
  - continuity
  - derivatives
---

# 📘 Rolle’s Theorem

Rolle’s Theorem is a special case of the Mean Value Theorem where a function starts and ends at the same value.

---

# 🧠 Core Idea

> If a smooth function starts and ends at the same height, it must have a flat (zero-slope) point in between.

---

# 📊 Statement

If:

- $f(x)$ is continuous on $[a, b]$
- $f(x)$ is differentiable on $(a, b)$
- $f(a) = f(b)$

Then:

$$
\exists \ c \in (a, b) \text{ such that } f'(c) = 0
$$

---

# 📈 Meaning

There is at least one point where:

> the tangent line is horizontal

---

# 🔍 Geometric Interpretation

If a curve:

- starts at a height
- ends at the same height

then it must:

> rise and fall (or fall and rise), creating a flat slope somewhere

---

# 🧠 Intuition

Imagine walking:

- you start at the same elevation you end at
- if you went up at some point, you must come down
- at some moment, your slope must be zero

---

# ⚠️ Requirements

Rolle’s Theorem only applies if:

- continuous on $[a, b]$
- differentiable on $(a, b)$
- equal endpoint values

If any condition fails → no guarantee

---

# 🔗 Connection to Mean Value Theorem

Rolle’s Theorem is the MVT with:

$$
f(a) = f(b)
$$

So:

- MVT gives $f'(c) = \frac{f(b)-f(a)}{b-a}$
- here that becomes $f'(c) = 0$

---

# 🧠 Key Insight

> Equal endpoints force at least one moment of zero instantaneous change.

---

# 📌 Why it matters

Rolle’s Theorem is used in:

- proving properties of functions
- establishing uniqueness of roots
- building foundations for MVT proofs

---

# 🧭 Mental Model

> A smooth curve returning to its starting height must “flatten out” somewhere.

---

# 📌 Summary

- Special case of Mean Value Theorem
- Requires continuity, differentiability, and equal endpoints
- Guarantees at least one $f'(c) = 0$
- Ensures existence of a horizontal tangent point
