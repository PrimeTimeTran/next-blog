---
tags:
  - math
  - calculus
  - multivariable-calculus
  - vector-calculus
---

# 📘 Gradient

The gradient is a vector that describes the **direction and rate of steepest increase** of a multivariable function.

---

# 🧠 Core Idea

For a function of multiple variables:

$$
f(x, y, z)
$$

the gradient combines all partial derivatives into a single vector:

$$
\nabla f
$$

It tells you:

> “If you move in this direction, the function increases fastest.”

---

# 📊 Definition

For a scalar function:

$$
f(x, y, z)
$$

the gradient is:

$$
\nabla f =
\left(
\frac{\partial f}{\partial x},
\frac{\partial f}{\partial y},
\frac{\partial f}{\partial z}
\right)
$$

In 2D:

$$
\nabla f =
\left(
\frac{\partial f}{\partial x},
\frac{\partial f}{\partial y}
\right)
$$

---

# 📈 Geometric Meaning

At any point:

- The gradient points **uphill most steeply**
- Its magnitude tells how steep that direction is

---

# 🧭 Intuition

Think of a landscape:

- Height = $f(x, y)$
- Gradient = direction you would walk to climb fastest

---

# ⚖️ Key Properties

## Direction of steepest ascent

$$
\nabla f \quad \text{points uphill}
$$

## Magnitude

$$
|\nabla f|
$$

represents how fast the function increases in that direction.

---

## Perpendicular to level curves

At a point:

- Gradient is **orthogonal** to level curves / surfaces

---

# 🧩 Connection to Partial Derivatives

Gradient is built from:

- [[partial-derivatives|Partial Derivatives]]

Each component measures change in one axis direction.

---

# 🔗 Connection to Calculus 3

The gradient is central to:

- [[directional-derivative|Directional Derivatives]]
- Tangent planes
- Optimization problems
- Vector fields in [[calculus-3-hub|Calculus 3 Hub]]

---

# ⚙️ Connection to Optimization

Gradient is used to find extrema:

- $\nabla f = 0$ → critical points
- Used in constrained optimization (Lagrange multipliers)
- Basis for numerical methods like [[gradient-descent|Gradient Descent]]

---

# 🧠 Key Insight

> The gradient turns “many partial derivatives” into a single geometric object that describes how a function behaves in space.

---

# 📌 Summary

- Gradient = vector of partial derivatives
- Points in direction of steepest increase
- Perpendicular to level curves/surfaces
- Central object in multivariable calculus and optimization
