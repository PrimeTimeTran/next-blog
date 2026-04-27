---
tags:
  - calculus
  - parametric-equations
  - geometry
  - multivariable-prep
---

# 📘 Parametric Equations

Parametric equations describe a curve using a third variable called a **parameter**, usually \(t\), instead of expressing \(y\) directly as a function of \(x\).

---

# 🧠 Core Idea

Instead of:

$$
y = f(x)
$$

we write:

$$
x = f(t), \quad y = g(t)
$$

> Both \(x\) and \(y\) depend on a shared parameter \(t\).

---

# 📊 Interpretation

As \(t\) changes:

- \(x(t)\) moves horizontally
- \(y(t)\) moves vertically
- together they trace a curve

So the curve is:

$$
(x(t), y(t))
$$

---

# 📈 Example

$$
x = \cos t, \quad y = \sin t
$$

This traces:

> A unit circle

because:

$$
x^2 + y^2 = 1
$$

---

# 🧠 Why use parametric equations?

They allow you to represent:

- circles and ellipses easily
- motion over time
- curves that fail vertical line test
- physics trajectories

---

# ⏱ The Parameter Meaning

Often:

- \(t\) = time

So:

$$
x(t), y(t)
$$

represents **position over time**

---

# 📊 Derivatives in Parametric Form

Slope of a parametric curve:

$$
\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}
$$

---

# 📈 Arc Length (Calc 2/3 idea)

$$
L = \int_{a}^{b} \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt
$$

---

# 🧠 Key Insight

> Parametric equations separate geometry from function form.

Instead of forcing \(y = f(x)\), we describe motion directly.

---

# ⚠️ Common Confusion

- \(t\) is NOT required to represent time (just a parameter)
- Different \(t\) values can trace same \(x,y\) values multiple times
- The same curve can have multiple parametric representations

---

# 🔗 Related

- [[polar-coordinates]]
- [[vector-functions]]
- [[derivatives]]
- [[arc-length]]
- [[calculus-2]]
