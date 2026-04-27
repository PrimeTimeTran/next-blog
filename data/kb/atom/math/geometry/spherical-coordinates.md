---
tags:
  - calculus
  - calc-3
  - multivariable-calculus
  - coordinates
---

# 📘 Spherical Coordinates

Spherical coordinates describe points in 3D space using a **radius and two angles**, making them ideal for problems with spherical symmetry.

---

# 🧠 Core Idea

> Instead of $(x, y, z)$, we describe a point by how far it is from the origin and its direction in space.

---

# 📊 Definition

A point is written as:

$$
(\rho, \theta, \phi)
$$

Where:

- $\rho$ = distance from the origin
- $\theta$ = angle in the $xy$-plane (same as polar angle)
- $\phi$ = angle down from the positive $z$-axis

---

# 🔁 Conversion to Cartesian

## Spherical → Cartesian

$$
x = \rho \sin(\phi)\cos(\theta)
$$

$$
y = \rho \sin(\phi)\sin(\theta)
$$

$$
z = \rho \cos(\phi)
$$

---

## Cartesian → Spherical

$$
\rho = \sqrt{x^2 + y^2 + z^2}
$$

$$
\theta = \tan^{-1}\left(\frac{y}{x}\right)
$$

$$
\phi = \cos^{-1}\left(\frac{z}{\rho}\right)
$$

---

# 📈 Geometric Meaning

- $\rho$ controls distance from origin
- $\theta$ controls rotation around $z$-axis
- $\phi$ controls tilt downward from $z$-axis

---

# 🔄 Relationship to Other Systems

- Polar coordinates → 2D radial system
- Cylindrical coordinates → polar + height
- Spherical coordinates → full 3D radial system

---

# 📊 Volume Element

In spherical coordinates:

$$
dV = \rho^2 \sin(\phi)\, d\rho\, d\phi\, d\theta
$$

Used in triple integrals over spheres and radial regions.

---

# 📈 Why Spherical Coordinates Matter

They simplify problems involving:

- spheres
- radial fields (gravity, electric fields)
- symmetry around a point

---

# 🧠 Key Insight

> Spherical coordinates align with natural symmetry in 3D space.

Instead of slicing by cubes (Cartesian), we slice by spheres and angles.

---

# 🧭 Mental Model

Think of it as:

> “distance from center + direction in 3D space”

---

# 📌 Summary

- Uses $(\rho, \theta, \phi)$ in 3D
- $\rho$ = radius, $\theta$ = azimuth angle, $\phi$ = polar angle
- Converts using trigonometry
- Essential for spherical symmetry and triple integrals
