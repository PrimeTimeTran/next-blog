---
tags:
  - math
  - calculus
  - vector-calculus
---

# 🧠 Divergence Theorem (Gauss’ Theorem) — Atom

The Divergence Theorem connects a flux across a closed surface to a volume integral inside the surface.

---

# 🧠 Core Idea

> What flows out of a closed surface equals what is generated inside.

---

# 📐 Statement

Let $\vec{F}$ be a vector field and $V$ a solid region with boundary surface $S$:

$$
\iiint_V (\nabla \cdot \vec{F})\, dV
=
\iint_S \vec{F} \cdot \vec{n}\, dS
$$

---

# 🧩 Meaning of Each Side

## 🔷 Left Side (Volume Integral)

$$
\iiint_V (\nabla \cdot \vec{F})\, dV
$$

- measures total divergence inside the volume
- divergence = “source strength”

---

## 🟦 Right Side (Surface Integral)

$$
\iint_S \vec{F} \cdot \vec{n}\, dS
$$

- measures net outward flux through the surface
- how much field exits the region

---

# 🧠 Intuition

> Total “outflow” through a surface equals total “generation” inside.

---

# 📊 Physical Interpretation

- fluid flow → net fluid leaving a region
- electromagnetism → field flux
- heat flow → energy escaping volume

---

# ⚙️ When to Use

Use the divergence theorem when:

- computing flux through closed surfaces is hard
- converting surface integrals into volume integrals simplifies the problem
- symmetry exists in 3D regions

---

# 🔁 Reverse Use

You can rewrite:

$$
\iint_S \vec{F} \cdot \vec{n}\, dS
\rightarrow
\iiint_V (\nabla \cdot \vec{F})\, dV
$$

---

# 🧩 Requirements

The theorem applies when:

- $\vec{F}$ is sufficiently smooth
- $S$ is a closed surface
- $V$ is a well-defined volume

---

# 🔗 Connections

- [[Surface Integrals]] → flux computation tool
- [[Triple Integrals]] → volume representation
- [[Gradient, Divergence, Curl]] → vector calculus operators
- [[Stokes’ Theorem]] → boundary circulation analogue
- [[Green’s Theorem]] → 2D version of divergence theorem

---

# 🧠 Mental Model

> Surface flow = internal sources

or:

> “What leaves must come from inside.”

---

# 📌 Summary

The Divergence Theorem converts a surface flux integral into a volume integral by relating outward flow to internal divergence.
