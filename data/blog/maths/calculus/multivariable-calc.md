---
draft: true
date: '2025-01-03'
title: 'Multivariable Calculus: The Fundamental Theorems'
summary: 'A guide to the major theorems of multivariable calculus, with LaTeX examples and explanations.'
tags: ['maths', 'calculus']
---

# Multivariable Calculus: The Fundamental Theorems

This post explores the major theorems and formulas in multivariable calculus, explaining their meaning, use, and how they fit into the broader context of calculus. Each section includes a LaTeX example.

## Fundamental Theorem of Single-Variable Calculus

The Fundamental Theorem of Calculus links the concept of the derivative of a function with the concept of the integral. If $f$ is continuous on $[a, b]$ and $F$ is an antiderivative of $f$ on $[a, b]$:

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

This theorem forms the backbone of single-variable calculus, connecting differentiation and integration.

---

## Fundamental Theorem of Line Integrals

This theorem generalizes the Fundamental Theorem of Calculus to vector fields. If $\vec{F}$ is a conservative vector field and $f$ is a potential function, then for a curve $C$ from $A$ to $B$:

$$
\int_C \vec{F} \cdot d\vec{r} = f(B) - f(A)
$$

It shows that the line integral of a conservative field depends only on the endpoints, not the path taken.

---

## Green's Theorem

Green's Theorem relates a line integral around a simple closed curve $C$ to a double integral over the region $D$ it encloses:

$$
\oint_C (L\,dx + M\,dy) = \iint_D \left( \frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} \right) dx\,dy
$$

This theorem is a key result in planar vector calculus, connecting circulation around a curve to the behavior inside the region.

---

## Stokes' Theorem

Stokes' Theorem generalizes Green's Theorem to surfaces in three dimensions. It relates a surface integral of the curl of a vector field over a surface $S$ to a line integral around its boundary $\partial S$:

$$
\int_S (\nabla \times \vec{F}) \cdot d\vec{S} = \oint_{\partial S} \vec{F} \cdot d\vec{r}
$$

This theorem is fundamental in vector calculus, connecting local rotation (curl) to circulation along the boundary.

---

## Divergence Theorem

The Divergence Theorem relates the flux of a vector field through a closed surface $S$ to the triple integral of the divergence over the volume $V$ inside $S$:

$$
\iint_S \vec{F} \cdot d\vec{S} = \iiint_V (\nabla \cdot \vec{F}) dV
$$

This theorem is essential for converting surface integrals to volume integrals, widely used in physics and engineering.

---

## Formula Dictionary Deciphering

Understanding these formulas and their relationships helps decipher the connections between different areas of calculus. Each theorem generalizes the previous, culminating in the most general form.

---

## Generalized Stokes' Theorem

The Generalized Stokes' Theorem unifies all the above results. In differential forms language:

$$
\int_{\Omega} d\omega = \int_{\partial \Omega} \omega
$$

Where $\omega$ is a differential form, $\Omega$ is a manifold, and $\partial \Omega$ its boundary. This theorem shows the deep unity of calculus in higher dimensions.

---

## Conclusion

These theorems form the backbone of multivariable calculus, connecting derivatives, integrals, and geometry. Mastery of these results provides powerful tools for analysis in mathematics, physics, and engineering.
