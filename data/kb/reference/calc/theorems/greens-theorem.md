---
tags:
  - math
  - calculus
  - vector-calculus
---

# 🟢 Green’s Theorem (Atom)

Green’s Theorem connects a **line integral around a closed curve** to a **double integral over the region it encloses**.

---

# 🧠 Core Idea

> Circulation around a boundary = accumulation of rotation inside the region

It converts a **boundary problem** into an **area problem**.

---

# 📐 Statement of Green’s Theorem

$$
\oint_C (P\,dx + Q\,dy) = \iint_R \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\, dA
$$

Where:

- \(C\) = positively oriented (counterclockwise) closed curve
- \(R\) = region enclosed by \(C\)
- \(P(x,y), Q(x,y)\) = functions with continuous partial derivatives

---

# 🔁 Two Interpretations

## 🌀 Circulation Form

Measures how much a vector field **rotates along the boundary**

- Left side: movement _around_ the curve
- Right side: total rotation _inside_ the region

---

## 📦 Flux Form (Alternate Form)

$$
\oint_C \vec{F} \cdot \vec{n}\, ds = \iint_R \nabla \cdot \vec{F}\, dA
$$

- relates outward flow (flux) to divergence inside the region

---

# 🧩 When to Use It

Use Green’s Theorem when:

- you have a **closed curve**
- computing a line integral directly is difficult
- converting to a double integral simplifies the problem

---

# 🧠 Geometric Intuition

- The boundary curve “wraps around” a region
- Instead of tracing the entire boundary, you measure what’s happening **inside**
- Local rotation (curl) accumulates to global circulation

---

# ⚙️ Requirements

- Curve must be **closed**
- Curve must be **positively oriented (counterclockwise)**
- Functions must be **smooth (continuous derivatives)**

---

# 🔗 Connections

- [[Line Integrals]] → boundary perspective
- [[Double Integrals]] → area perspective
- [[Curl]] → measures local rotation
- [[Divergence]] → measures outward flow
- [[Stokes Theorem]] → 3D generalization of Green’s Theorem

---

# 🧠 Mental Model

> Green’s Theorem translates **local rotation inside a region** into **global circulation around its boundary**

---

# 📌 Summary

Green’s Theorem is a bridge between **line integrals and double integrals**, allowing you to compute circulation or flux by analyzing the behavior inside a region rather than along its boundary.
