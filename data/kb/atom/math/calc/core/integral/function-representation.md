---
tags:
  - math
  - calculus
  - vector-calculus
---

# 🧠 Divergence (Atom)

Divergence measures how much a **vector field spreads out or converges at a point**.

---

# 🧠 Core Idea

> Divergence tells you whether a point behaves like a **source**, **sink**, or neither.

---

# 📐 Definition

For a vector field:

$$
\vec{F}(x,y,z) = \langle P(x,y,z), Q(x,y,z), R(x,y,z) \rangle
$$

Divergence is:

$$
\nabla \cdot \vec{F}
=
\frac{\partial P}{\partial x}
+
\frac{\partial Q}{\partial y}
+
\frac{\partial R}{\partial z}
$$

---

# 🧩 Meaning

At a point:

- **positive divergence** → source (flow out)
- **negative divergence** → sink (flow in)
- **zero divergence** → no net flow (incompressible behavior)

---

# 📊 Intuition (Fluid Model)

Imagine a fluid flow field:

- water spreading outward → positive divergence
- water converging inward → negative divergence
- steady flow with no expansion → zero divergence

---

# ⚙️ Physical Interpretation

Divergence measures:

> net outward flux per unit volume at a point

---

# 📐 Local Interpretation

$$
\nabla \cdot \vec{F} \approx \frac{\text{net flow out of tiny box}}{\text{volume of box}}
$$

---

# 🔗 Connection to Divergence Theorem

$$
\iiint_V (\nabla \cdot \vec{F})\,dV
=
\iint_S \vec{F} \cdot \vec{n}\,dS
$$

So:

> divergence is the **local version of flux**

---

# 🧠 Geometric Meaning

- field lines spreading apart → positive divergence
- field lines converging → negative divergence
- parallel uniform flow → zero divergence

---

# 📊 Example Fields

## 1. Radial Outward Field

$$
\vec{F} = \langle x, y, z \rangle
$$

Divergence:

$$
\nabla \cdot \vec{F} = 3
$$

→ constant source everywhere

---

## 2. Incompressible Flow

$$
\nabla \cdot \vec{F} = 0
$$

→ fluid density stays constant

---

# ⚙️ When to Use

Use divergence when:

- analyzing flow fields
- checking conservation of mass/energy
- applying Divergence Theorem
- studying vector calculus behavior

---

# 🔁 Related Operators

- **Gradient (∇f)** → direction of steepest increase
- **Divergence (∇·F)** → source strength
- **Curl (∇×F)** → rotation

---

# 🧠 Mental Model

> Divergence measures how much a field is “expanding or compressing” at a point.

---

# 📌 Summary

Divergence quantifies the local “outflow strength” of a vector field, indicating whether a point acts as a source, sink, or neutral region.
