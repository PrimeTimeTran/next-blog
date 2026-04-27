---
tags:
  - math
  - calculus
  - multivariable-calculus
---

# 📦 Triple Integrals (Atom)

A triple integral extends integration to **functions of three variables**, allowing you to accumulate quantities over a **3D region (volume)**.

---

# 🧠 Core Idea

> Add up values of a function throughout a volume.

Triple integrals generalize:

- single integrals → over intervals (1D)
- double integrals → over areas (2D)
- triple integrals → over volumes (3D)

---

# 📐 Definition

$$
\iiint_V f(x, y, z)\, dV
$$

Where:

- \(f(x,y,z)\) = function in space
- \(V\) = 3D region
- \(dV\) = small volume element

---

# 🧩 What It Represents

Depending on context:

- total mass (if density is given)
- total charge
- accumulated quantity in space
- volume (if \(f = 1\))

---

# 📊 Special Case (Volume)

$$
\iiint_V 1 \, dV = \text{Volume of } V
$$

---

# 🔁 Iterated Integrals

Triple integrals are computed as three nested integrals:

$$
\iiint_V f(x,y,z)\, dV =
\int \int \int f(x,y,z)\, dz\,dy\,dx
$$

Order can vary:

- \(dz\,dy\,dx\)
- \(dx\,dz\,dy\)
- etc.

---

# 🔄 Order of Integration

You can change order to simplify computation.

Example:

$$
\int_a^b \int_c^d \int_e^f f(x,y,z)\, dz\,dy\,dx
$$

---

# 📐 Regions of Integration

## 🟦 Rectangular Box

Simple bounds:

- \(a \le x \le b\)
- \(c \le y \le d\)
- \(e \le z \le f\)

---

## 🟩 General Regions

Bounds depend on variables:

$$
\int_a^b \int_{g_1(x)}^{g_2(x)} \int_{h_1(x,y)}^{h_2(x,y)} f(x,y,z)\, dz\,dy\,dx
$$

---

# 🔄 Change of Variables

Sometimes switch coordinate systems.

---

## 🌀 Cylindrical Coordinates

$$
x = r\cos\theta,\quad y = r\sin\theta,\quad z = z
$$

$$
dV = r\,dr\,d\theta\,dz
$$

---

## 🌐 Spherical Coordinates

$$
x = \rho \sin\phi \cos\theta,\quad
y = \rho \sin\phi \sin\theta,\quad
z = \rho \cos\phi
$$

$$
dV = \rho^2 \sin\phi \, d\rho\, d\phi\, d\theta
$$

---

# 🧠 Geometric Intuition

- break a 3D region into tiny boxes
- evaluate function in each box
- sum everything

---

# ⚙️ When to Use

Use triple integrals when:

- working with 3D regions
- computing total mass/volume
- modeling physical systems in space

---

# 🔗 Connections

- [[double-integrals|Double Integrals]] → 2D case
- [[surface-integrals|Surface Integrals]] → boundary of volume
- [[divergence-theorem|Divergence Theorem]] → relates volume to surface
- [[cylindrical-coordinates|Cylindrical Coordinates]] → symmetry around axis
- [[spherical-coordinates|Spherical Coordinates]] → radial symmetry

---

# 🧠 Mental Model

> A triple integral is “adding up infinitely many small values throughout a volume.”

---

# 📌 Summary

Triple integrals extend integration to three dimensions, allowing you to compute volume and total quantities distributed throughout space.
