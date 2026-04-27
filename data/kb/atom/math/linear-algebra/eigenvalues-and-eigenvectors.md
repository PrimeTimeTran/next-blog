---
tags:
  - linear-algebra
  - eigenvalues
  - eigenvectors
  - matrices
---

# 📘 Eigenvalues and Eigenvectors

Eigenvalues and eigenvectors describe special directions of a linear transformation where vectors are only **scaled**, not rotated.

---

# 🧠 Core Idea

For a matrix $A$, an eigenvector is a direction that does not change under transformation:

> it only gets stretched or compressed.

---

# 📊 Definition

An eigenvector $\vec{v} \neq \vec{0}$ satisfies:

$$
A\vec{v} = \lambda \vec{v}
$$

Where:

- $A$ = square matrix (linear transformation)
- $\vec{v}$ = eigenvector
- $\lambda$ = eigenvalue (scaling factor)

---

# 🔍 Interpretation

- $A\vec{v}$ = transformed vector
- $\lambda \vec{v}$ = same direction, scaled length

So:

> eigenvectors define invariant directions under $A$

---

# 🧮 Finding Eigenvalues

Solve:

$$
\det(A - \lambda I) = 0
$$

This produces a polynomial in $\lambda$ called the **characteristic equation**.

---

# 🧭 Finding Eigenvectors

For each eigenvalue $\lambda$:

Solve:

$$
(A - \lambda I)\vec{v} = 0
$$

This gives the eigenvector space (null space).

---

# 📈 Geometric Intuition

A matrix transformation usually:

- rotates
- stretches
- shears

But eigenvectors are directions where:

- no rotation happens
- only scaling occurs

---

# ⚙️ Key Properties

- Eigenvalues can be real or complex
- Eigenvectors define invariant subspaces
- A matrix may have:
  - no eigenvectors (rare in real space)
  - one eigenvector direction
  - many independent eigenvectors

---

# 🧠 Why it matters

Eigenvalues and eigenvectors are used in:

- differential equations
- stability analysis
- machine learning (PCA)
- physics (quantum states)
- graph theory
- diagonalization

---

# 🔗 Key Connection

If a matrix has $n$ independent eigenvectors:

$$
A = PDP^{-1}
$$

Where:

- $D$ = diagonal matrix of eigenvalues
- $P$ = matrix of eigenvectors

---

# 📌 Summary

- Eigenvectors = directions unchanged by a transformation
- Eigenvalues = scaling factor along those directions
- Defined by $A\vec{v} = \lambda \vec{v}$
- Found via $\det(A - \lambda I) = 0$
