---
tags:
  - math
  - calculus
  - multivariable-calculus
---

# 📘 Partial Derivatives

Partial derivatives measure how a multivariable function changes when **only one variable is allowed to vary**, while all others are held constant.

---

# 🧠 Core Idea

For a function:

$$
f(x, y)
$$

we can measure change in different directions separately:

- change in $x$
- change in $y$

Each gives a different “slice” of behavior.

---

# 📊 Definition

### With respect to $x$

$$
\frac{\partial f}{\partial x}
$$

means:

> Treat $y$ as constant and differentiate with respect to $x$.

---

### With respect to $y$

$$
\frac{\partial f}{\partial y}
$$

means:

> Treat $x$ as constant and differentiate with respect to $y$.

---

# 🧭 Intuition

Think of a surface:

$$
z = f(x, y)
$$

- $\frac{\partial f}{\partial x}$ → slope when moving along the x-direction
- $\frac{\partial f}{\partial y}$ → slope when moving along the y-direction

---

# ⚙️ Geometric Meaning

Partial derivatives describe:

- slope along coordinate axes
- local behavior of surfaces
- directional slices of a higher-dimensional function

---

# 📈 Example

Given:

$$
f(x, y) = x^2 + y^2
$$

Then:

$$
\frac{\partial f}{\partial x} = 2x
$$

$$
\frac{\partial f}{\partial y} = 2y
$$

---

# 🔗 Connection to Gradient

Partial derivatives are the components of the gradient:

$$
\nabla f =
\left(
\frac{\partial f}{\partial x},
\frac{\partial f}{\partial y}
\right)
$$

See: [[gradient|Gradient]]

---

# 🔁 Higher-Order Partial Derivatives (Preview)

You can differentiate partial derivatives again:

- $f_{xx}$ → curvature in x-direction
- $f_{yy}$ → curvature in y-direction
- $f_{xy}$ → mixed interaction term

These are studied in:
[[higher-order-partial-derivatives|Higher-Order Partial Derivatives]]

---

# 🧠 Key Insight

> Partial derivatives break a multivariable function into independent directions of change.

---

# 📌 Summary

- Partial derivatives measure change in one variable at a time
- Other variables are held constant
- They form the building blocks of the gradient
- They extend naturally into higher-order partial derivatives
