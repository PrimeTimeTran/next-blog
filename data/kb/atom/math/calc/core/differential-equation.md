---
tags:
  - calculus
  - calc-1
  - calc-2
  - differential-equations
  - applications
---

# 📘 Differential Equations

A differential equation is an equation that relates a function to its derivatives.

---

# 🧠 Core Idea

> Instead of solving for a number, you solve for a function.

---

# 📊 Definition

A differential equation has the form:

$$
\frac{dy}{dx} = f(x, y)
$$

or higher-order forms like:

$$
\frac{d^2y}{dx^2} + \frac{dy}{dx} + y = 0
$$

---

# 📈 What makes it different

Unlike algebraic equations:

- unknown = number → algebra
- unknown = function → differential equations

---

# 🔍 Why they matter

They describe systems where change depends on:

- current value
- rate of change
- time or space dynamics

---

# 🧠 Intuition

> You are given rules about how something changes, and you reconstruct the thing itself.

---

# 📊 Common Types (Calc-level overview)

## 1. Separable equations

$$
\frac{dy}{dx} = g(x)h(y)
$$

Can be rearranged into:

> all $y$ terms on one side, all $x$ terms on the other

---

## 2. First-order linear equations

$$
\frac{dy}{dx} + P(x)y = Q(x)
$$

---

## 3. Exponential growth / decay

$$
\frac{dy}{dx} = ky
$$

Solution:

$$
y = Ce^{kx}
$$

---

# 📈 Geometric Meaning

A differential equation describes a **slope field**:

- each point has a slope
- solutions are curves that follow those slopes

---

# 🔁 Key Insight

> A solution curve is always tangent to the slope field.

---

# ⚠️ Initial Conditions

To get a unique solution, you often need:

$$
y(x_0) = y_0
$$

This selects one curve from infinitely many.

---

# 🔗 Connections

- [[atom/math/calc/core/derivative|derivative]] → define rates of change
- [[integral-calculus|Integrals]] → solve accumulated forms
- [[calculus-2-fundamentals|Calc 2 techniques]] → methods for solving

---

# 🧭 Mental Model

> Differential equations describe “rules of motion,” not static values.

---

# 📌 Summary

- Relates functions to their derivatives
- Solutions are functions, not numbers
- Models real-world change (growth, motion, decay)
- Requires initial conditions for unique solutions
