---
tags:
  - math
  - calculus
  - vector-calculus
---

# 🌐 Surface Integrals (Atom)

A surface integral extends integration to **curved surfaces in 3D**, allowing you to measure quantities distributed across a surface.

---

# 🧠 Core Idea

> Accumulate a quantity over a surface instead of along a line or across an area.

Surface integrals generalize:

- line integrals → along curves
- double integrals → over flat regions
- surface integrals → over curved surfaces

---

# 📐 Two Types of Surface Integrals

---

## 🟦 1. Scalar Surface Integral

Measures total quantity distributed over a surface (e.g., mass, temperature).

$$
\iint_S f(x,y,z)\, dS
$$

- \(f(x,y,z)\) = scalar field
- \(dS\) = small surface area element

---

## 🟩 2. Flux Surface Integral

Measures how much a vector field flows **through** a surface.

$$
\iint_S \vec{F} \cdot \vec{n}\, dS
$$

- \(\vec{F}\) = vector field
- \(\vec{n}\) = unit normal vector
- measures **flow across the surface**

---

# 🧭 Surface Element \(dS\)

For a surface parameterized by \(\vec{r}(u,v)\):

$$
dS = \left| \frac{\partial \vec{r}}{\partial u} \times \frac{\partial \vec{r}}{\partial v} \right| du\,dv
$$

This captures how the surface stretches in space.

---

# 🧠 Geometric Intuition

- Break the surface into tiny patches
- evaluate the function on each patch
- sum everything up

For flux:

- measure how much field passes **through** each patch

---

# 🧩 When to Use Surface Integrals

Use when:

- working with **3D surfaces**
- measuring **flux (flow)** across a surface
- applying vector calculus theorems

---

# 🔗 Major Theorems

Surface integrals are central to:

## [[Stokes’ Theorem]]

- relates surface integrals of curl to line integrals

## [[Divergence Theorem]]

- relates flux through a surface to volume integrals

---

# ⚙️ Requirements

- surface must be **smooth or piecewise smooth**
- orientation must be defined (normal vector direction matters)

---

# 🧠 Orientation

- surface has two sides → need consistent normal direction
- affects the sign of the integral

---

# 🔧 Applications

- fluid flow (flux)
- electromagnetism
- heat transfer
- surface mass calculations

---

# 🧠 Mental Model

> Surface integrals measure how much of something exists or flows across a curved surface in 3D space.

---

# 📌 Summary

Surface integrals generalize integration to curved surfaces, allowing you to compute total quantities or flow across surfaces, forming a key part of vector calculus and physical modeling.
