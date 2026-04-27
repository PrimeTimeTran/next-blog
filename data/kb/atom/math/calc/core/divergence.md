---
tags:
  - calculus
  - multivariable-calculus
  - vector-fields
  - calc-2
  - calc-3
---

# 📘 Divergence (Vector Calculus Concept)

Divergence measures how much a **vector field spreads out or converges at a point**.

---

# 🧠 Core Idea

> Divergence tells you whether a point behaves like a **source**, **sink**, or neither.

- Positive divergence → flow is spreading out
- Negative divergence → flow is converging inward
- Zero divergence → no net “expansion” or “compression”

---

# 📊 Definition

For a vector field:

$$
\mathbf{F}(x,y,z) = \langle P(x,y,z), Q(x,y,z), R(x,y,z) \rangle
$$

The divergence is:

$$
\nabla \cdot \mathbf{F} =
\frac{\partial P}{\partial x} +
\frac{\partial Q}{\partial y} +
\frac{\partial R}{\partial z}
$$

---

# 🧠 Intuition

Think of a fluid flowing through space:

- A **fountain** → positive divergence (flow outward)
- A **drain** → negative divergence (flow inward)
- A **steady flow** → zero divergence

---

# 📈 Physical Meaning

Divergence measures:

> Net “outflow” per unit volume at a point

So it answers:

- Is fluid being created here?
- Is fluid disappearing here?
- Or is it just passing through?

---

# 🔍 Local Interpretation

At a very small region around a point:

- compare **outflow vs inflow**
- divergence is the _difference_

---

# 🧠 Key Insight

> Divergence is a **pointwise measure of expansion** in a vector field.

It does NOT measure:

- total flow
- circulation
- path behavior

It only measures **local spreading strength**.

---

# 🔗 Connection to Other Concepts

- [[gradient]] → measures rate of increase of a scalar field
- [[curl]] → measures rotation in a vector field
- [[divergence-theorem]] → connects local divergence to global flux

---

# 📊 Geometric Picture

Imagine placing a tiny box in a flow field:

- more fluid leaving than entering → positive divergence
- more entering than leaving → negative divergence
- equal → zero divergence

---

# ⚠️ Common Confusion

Divergence is NOT:

- the same as “spreading visually”
- the same as curl
- the same as slope

It is strictly:

> a derivative-based measure of net outward flow

---

# 🧭 Mental Model

> Divergence tells you whether space is acting like a source or sink at a point.

---

# 📌 Summary

- Divergence = net outward flux density at a point
- Positive → source-like behavior
- Negative → sink-like behavior
- Zero → no net expansion
- Defined as:
  $$
  \nabla \cdot \mathbf{F}
  $$
