---
tags:
  - math
  - calculus
  - multivariable-calculus
---

# 📘 Derivative Notation in Multivariable Calculus

In single-variable calculus, notations like $f'(x)$, $\frac{d}{dx} f(x)$, and $\frac{dy}{dx}$ are interchangeable because there is only one input variable.

In multivariable calculus, this breaks down.

---

# 🧠 Core Idea

When a function depends on multiple variables, derivative notation must specify **which variable is changing** and **which are held constant**.

Example:

$$
f(x, y) = x^2 + y^2
$$

Now we get different derivatives depending on the variable:

---

# 📊 Partial Derivatives

### With respect to $x$

$$
\frac{\partial f}{\partial x} = 2x
$$

### With respect to $y$

$$
\frac{\partial f}{\partial y} = 2y
$$

Each derivative describes change in **one direction only**.

---

# 🔁 Notation Shift: Single vs Multivariable Calculus

## Single-variable calculus

- $f'(x)$
- $\frac{d}{dx} f(x)$
- $\frac{dy}{dx}$

All equivalent because there is only one variable.

---

## Multivariable calculus

- $\frac{\partial}{\partial x}$ → partial derivative
- $\frac{\partial}{\partial y}$ → partial derivative

### Meaning of symbols:

- $d$ → total derivative (single-variable context)
- $\partial$ → partial derivative (multivariable context)

---

# 🎯 Meaning of “With Respect To”

When computing:

$$
\frac{\partial f}{\partial x}
$$

You:

> Treat all other variables as constants and vary only $x$

Example:

- $y$ is treated as a constant when differentiating with respect to $x$

---

# ⚠️ Why $f'(x)$ is not enough

In multivariable functions:

- $f'(x)$ is ambiguous
- It does not specify direction of change
- It ignores other variables entirely

This is why partial derivatives are required.

---

# 🧭 Why This Matters

This notation shift is foundational for:

- [[gradient|Gradient]] (combining all partial derivatives into a vector)
- Directional derivatives
- Optimization in multiple dimensions
- [[calculus-3|Calculus 3 Hub]] topics like surfaces and vector fields

---

# 🧠 Core Insight

In multivariable calculus:

> Derivatives are no longer single numbers — they become directional measurements of change.

Each partial derivative is one slice of a higher-dimensional rate of change.

---

# 🔗 Key Takeaway

- Single-variable calculus → one rate of change
- Multivariable calculus → many directional rates of change
- Partial derivatives organize these into a structured system

---

# 📌 Summary

Derivative notation becomes more precise in multivariable calculus because:

- You must specify which variable changes
- You must specify which variables are held constant
- Change becomes directional instead of absolute

---

# 🔗 Related Concepts

- [[limits-and-continuity|Limits and Continuity]]
- [[partial-derivatives|Partial Derivatives]]
- [[gradient|Gradient]]
- [[calculus-3|Calculus 3 Hub]]
