# u-Substitution (Integration Technique)

- u-substitution is a method for simplifying integrals by reversing the chain rule

---

## Core Idea

- If an integral contains a composition of functions, we replace the inner function with a new variable $u$
- This transforms a complicated integral into a simpler one:
  $$
  \int f(g(x))g'(x),dx \rightarrow \int f(u),du
  $$

---

## Substitution Rule

Let:

- $u = g(x)$
- then $du = g'(x),dx$

We rewrite the entire integral in terms of $u$

---

## Procedure

1. Choose $u$ (usually the inner function)
2. Compute $du$
3. Rewrite the integral using $u$ and $du$
4. Integrate
5. Substitute back $u = g(x)$

---

## Example

$$
\int 2x(x^2 + 1)^5,dx
$$

Let:

- $u = x^2 + 1$
- $du = 2x,dx$

Then:

$$
\int u^5,du = \frac{u^6}{6} + C
$$

Substitute back:

$$
\frac{(x^2 + 1)^6}{6} + C
$$

---

## Big Idea

- u-substitution simplifies integrals by undoing the chain rule and rewriting everything in terms of a single variable
