# Itô’s Lemma

## Definition

Itô’s lemma is the stochastic calculus analogue of the chain rule. It describes how a function of a stochastic process evolves over time when the underlying process includes randomness.

---

## Core idea

If a variable follows a stochastic process:

$$
dX_t = \mu(X_t, t),dt + \sigma(X_t, t),dW_t
$$

then a function ( f(X_t, t) ) evolves as:

$$
df = \left(\frac{\partial f}{\partial t} + \mu \frac{\partial f}{\partial x} + \frac{1}{2}\sigma^2 \frac{\partial^2 f}{\partial x^2}\right)dt + \sigma \frac{\partial f}{\partial x} dW_t
$$

---

## Intuition

> Unlike classical calculus, randomness adds an extra correction term proportional to the second derivative.

This extra term appears because:

- stochastic paths are not smooth
- variance accumulates over time

---

## Key insight

The extra term:

$$
\frac{1}{2}\sigma^2 \frac{\partial^2 f}{\partial x^2}
$$

exists because:

> small random fluctuations have a non-zero average effect when squared

---

## Why it matters

Itô’s lemma is used to:

- transform stochastic processes
- derive option pricing equations (Black–Scholes)
- compute dynamics of derived quantities

---

## Mental model

> “Chain rule + correction for randomness”

---

## Common failure intuition

Classical chain rule assumes:

- smooth trajectories

Itô’s lemma corrects for:

- jagged, non-differentiable paths like Brownian motion
