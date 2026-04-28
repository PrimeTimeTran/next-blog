---
tags:
  - math
  - calculus
  - vector-calculus
---

# 🟣 Stokes’ Theorem (Atom)

Stokes’ Theorem generalizes Green’s Theorem to 3D surfaces, relating a line integral around a boundary curve to a surface integral over the surface it encloses.

---

# 🧠 Core Idea

> Circulation along a boundary curve = total rotation (curl) across the surface

It converts a line integral into a surface integral.

---

# 📐 Statement of Stokes’ Theorem

$$
\oint_C \vec{F} \cdot d\vec{r}
=
\iint_S (\nabla \times \vec{F}) \cdot \vec{n}\, dS
$$

Where:

- $C$ = boundary curve (closed loop)
- $S$ = surface bounded by $C$
- $\vec{F}$ = vector field
- $\nabla \times \vec{F}$ = curl of the field
- $\vec{n}$ = unit normal vector to the surface

---

# 🔁 What It Means

- Left side: circulation along the boundary
- Right side: total curl (rotation) across the surface

---

# 🧭 Orientation (Important)

- Curve $C$ and surface $S$ must match orientation
- Use the right-hand rule:
  - fingers follow direction of $C$
  - thumb points in direction of surface normal

---

# 🧩 When to Use It

Use Stokes’ Theorem when:

- you have a closed loop in 3D
- computing a line integral is difficult
- converting to a surface integral simplifies the problem

---

# 🧠 Geometric Intuition

- Imagine a fluid flowing over a surface
- The total spin inside the surface equals the circulation around the edge

---

# ⚙️ Requirements

- Curve must be closed
- Surface must be smooth
- Vector field must have continuous partial derivatives

---

# 🔗 Connections

- [[Green’s Theorem]] → 2D special case of Stokes
- [[Curl]] → measures local rotation
- [[Surface Integrals]] → accumulation over surfaces
- [[Line Integrals]] → accumulation along curves
- [[Divergence Theorem]] → relates volume to surface (different concept)

---

# 🧠 Mental Model

> Stokes’ Theorem turns local rotation across a surface into global circulation around its boundary

---

# 📌 Summary

Stokes’ Theorem is a fundamental bridge in vector calculus that connects circulation and curl, allowing complex line integrals in 3D to be evaluated using surface integrals.
