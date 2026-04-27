---
tags:
  - math
  - calculus
  - multivariable-calculus
---

# 📦 Double Integrals (Atom)

A double integral extends integration to **functions of two variables**, allowing you to accumulate quantities over a **2D region**.

---

# 🧠 Core Idea

> Add up values of a function over an area.

Double integrals generalize:

- single integrals → over intervals (1D)
- double integrals → over regions (2D)

---

# 📐 Definition

$$
\iint_R f(x, y)\, dA
$$

Where:

- $f(x, y)$ = function over a region
- $R$ = region in the plane
- $dA$ = small area element

---

# 🧩 What It Represents

Depending on context:

- volume under a surface
- total mass (if density is given)
- accumulated quantity over an area

---

# 📊 Interpretation (Volume)

If $f(x,y) \ge 0$:

$$
\iint_R f(x,y)\, dA = \text{volume under the surface}
$$

---

# 🔁 Iterated Integrals

Double integrals are computed as **two single integrals**:

$$
\iint_R f(x,y)\, dA = \int_a^b \int_c^d f(x,y)\, dy\,dx
$$

Order matters:

- integrate inside first
- then outside

---

# 🔄 Order of Integration

You can switch order:

$$
\int_a^b \int_c^d f(x,y)\, dy\,dx
\quad \leftrightarrow \quad
\int_c^d \int_a^b f(x,y)\, dx\,dy
$$

Used when:

- one order is easier than the other

---

# 📐 Regions of Integration

## 🟦 Rectangular Regions

Simple bounds:

- \(a \le x \le b\)
- \(c \le y \le d\)

---

## 🟩 General Regions

Bounds depend on variables:

$$
\int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y)\, dy\,dx
$$

---

# 🔄 Change of Variables

Sometimes switch coordinate systems:

## Polar Coordinates

$$
x = r\cos\theta, \quad y = r\sin\theta
$$

$$
dA = r\,dr\,d\theta
$$

Used for:

- circular regions
- radial symmetry

---

# 🧠 Geometric Intuition

- divide region into tiny rectangles
- evaluate function on each
- sum everything up

---

# ⚙️ When to Use

Use double integrals when:

- working with functions of two variables
- computing area, volume, or mass over a region
- solving multivariable problems

---

# 🔗 Connections

- [[Single Integrals]] → 1D case
- [[triple-integrals|Triple Integrals]] → 3D extension
- [[surface-integrals|Surface Integrals]] → curved surfaces
- [[polar-coordinates|Polar Coordinates]] → coordinate transformation
- [[Fubini’s Theorem]] → justifies iterated integrals

---

# 🧠 Mental Model

> A double integral is “adding up infinitely many small values across an area.”

---

# 📌 Summary

Double integrals extend integration to two dimensions, allowing you to compute volume, mass, and accumulated quantities over regions in the plane.
