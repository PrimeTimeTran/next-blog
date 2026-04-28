---
tags:
  - math
  - calculus
  - multivariable-calculus
---

# 🧠 Line Integrals (Atom)

A line integral extends integration to functions evaluated along a curve in space.

---

# 🧠 Core Idea

> Instead of integrating over an interval or area, we integrate along a path.

---

# 📐 Two Main Types

---

## 1. Scalar Line Integrals

Integrate a scalar field along a curve:

$$
\int_C f(x,y)\,ds
$$

Where:

- $C$ = curve
- $ds$ = small arc length element

---

### 🧩 Meaning

> Accumulate a quantity along a path

Examples:

- mass of a wire
- total energy along a path
- density distributed on a curve

---

## 2. Vector Line Integrals (Work Integrals)

Integrate a vector field along a curve:

$$
\int_C \vec{F} \cdot d\vec{r}
$$

Where:

- $\vec{F}$ = vector field (force field)
- $d\vec{r}$ = small displacement vector

---

### 🧩 Meaning

> Work done by a force along a path

---

# ⚙️ Parameterization

To compute line integrals, represent the curve as:

$$
\vec{r}(t) = \langle x(t), y(t), z(t) \rangle,\quad a \le t \le b
$$

Then:

- scalar case: $ds = |\vec{r}'(t)|dt$
- vector case: $d\vec{r} = \vec{r}'(t)dt$

---

# 📊 Scalar Line Integral Formula

$$
\int_C f(x,y)\,ds
=
\int_a^b f(x(t),y(t))\,|\vec{r}'(t)|\,dt
$$

---

# 📊 Vector Line Integral Formula

$$
\int_C \vec{F} \cdot d\vec{r}
=
\int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\,dt
$$

---

# 🧠 Geometric Intuition

## Scalar case:

> Add up values weighted by path length

## Vector case:

> Add up how much a field pushes along the direction of motion

---

# 🔁 Direction Matters

Line integrals depend on orientation:

- reversing the curve changes sign (vector case)

---

# ⚙️ When to Use

Use line integrals when:

- movement occurs along a curve
- quantities are distributed along paths
- fields act along trajectories

---

# 🔗 Connections

- [[Vector Fields]] → input to line integrals
- [[Work-Energy Theorem]] → physical interpretation
- [[Green’s Theorem]] → converts line integrals to area integrals
- [[Fundamental Theorem of Line Integrals]] → simplifies conservative fields
- [[Parameterization]] → required computation tool

---

# 🧠 Mental Model

> Line integrals measure accumulation along motion, not across space.

---

# 📌 Summary

Line integrals generalize integration to curves, allowing computation of accumulated scalar quantities or work done by vector fields along a path.
