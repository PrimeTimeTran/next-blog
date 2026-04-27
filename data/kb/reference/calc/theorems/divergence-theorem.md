---
tags:
  - calculus
  - calc-3
  - vector-calculus
  - theorems
---

# 📘 Divergence Theorem

The Divergence Theorem connects **flux through a closed surface** to **behavior inside the volume**.

---

# 🧠 Core Idea

> What flows out of a closed surface is determined by what happens inside it.

---

# 📊 Statement

Let $\mathbf{F}$ be a vector field and let $V$ be a solid region with boundary surface $S$ (oriented outward). Then:

$$
\iint_{S} \mathbf{F} \cdot d\mathbf{S}
=
\iiint_{V} (\nabla \cdot \mathbf{F})\, dV
$$

---

# 📌 Meaning of Each Side

## 🔵 Left Side (Flux Integral)

$$
\iint_{S} \mathbf{F} \cdot d\mathbf{S}
$$

- measures total flow **out of the surface**
- called **net outward flux**
- depends only on the boundary

---

## 🟣 Right Side (Volume Integral)

$$
\iiint_{V} (\nabla \cdot \mathbf{F})\, dV
$$

- measures total “source strength” inside the region
- $\nabla \cdot \mathbf{F}$ = divergence
- adds up local expansion/compression

---

# 📈 Intuition

- Divergence > 0 → source (stuff is created / flowing outward)
- Divergence < 0 → sink (stuff is absorbed / flowing inward)

So:

> Total outward flow = total internal “source strength”

---

# 🧠 Key Concept: Divergence

$$
\nabla \cdot \mathbf{F}
$$

Measures:

> how much a vector field spreads out at a point

---

# 📊 Physical Interpretation

Used in:

- fluid flow → net outflow of fluid
- electromagnetism → Gauss’s law
- heat flow → diffusion models

---

# 🔄 Big Connection

The theorem converts:

- surface integrals → volume integrals
- hard boundary problems → easier interior problems (or vice versa)

---

# 🧮 When to Use It

Use Divergence Theorem when:

- surface is closed
- flux is difficult to compute directly
- divergence is simpler than surface geometry

---

# 🧭 Mental Model

> Instead of measuring flow across a boundary, measure what is happening everywhere inside.

---

# ⚠️ Requirement

The surface $S$ must be:

- closed (encloses a volume)
- oriented outward

---

# 📌 Summary

- Relates surface flux to volume divergence
- Converts a 2D integral into a 3D integral
- Fundamental tool in vector calculus
- Interprets flow as accumulation of local sources
