---
tags:
  - stochastic-calculus
  - probability
  - finance
---

# Itô Integral

## Definition

The Itô integral is a way to define integration with respect to a stochastic process, specifically Brownian motion $W_t$, where standard calculus integrals do not apply due to non-smooth randomness.

It defines expressions of the form:

$$
\int_0^T X_t \, dW_t
$$

where $X_t$ is a stochastic process.

---

## Core idea

> The Itô integral measures the accumulated effect of a process driven by random noise.

Unlike classical integrals, it integrates against a **random path**, not a smooth function.

---

## Key challenge it solves

Brownian motion $W_t$:

- is continuous
- but nowhere differentiable

So classical integrals like Riemann or Lebesgue cannot directly handle $dW_t$.

The Itô integral provides a rigorous definition.

---

## Construction intuition

The integral is defined as a limit of sums:

$$
\sum X_{t_i}(W_{t_{i+1}} - W_{t_i})
$$

Key rule:

- $X_{t_i}$ is evaluated at the **left endpoint** (non-anticipative)

---

## Fundamental property

A key result:

$$
\mathbb{E}\left[\int_0^T X_t \, dW_t\right] = 0
$$

This reflects:

> Random fluctuations cancel out on average.

---

## Variance accumulation

Unlike classical integrals:

$$
\mathrm{Var}\left(\int_0^T X_t \, dW_t\right)
=
\mathbb{E}\left[\int_0^T X_t^2 \, dt\right]
$$

This shows:

- randomness accumulates through squared magnitude

---

## Key intuition

> The Itô integral accumulates random shocks weighted by the current state of the system.

---

## Non-anticipativity rule

A critical constraint:

> $X_t$ cannot depend on future values of $W_t$

This ensures:

- no “looking ahead”
- preserves causality in stochastic systems

---

## Why it matters

The Itô integral is foundational for:

- stochastic differential equations (SDEs)
- Black–Scholes model
- financial modeling under uncertainty
- diffusion processes in physics

---

## Connection to Itô’s lemma

Itô’s lemma is essentially:

> “the chain rule for functions of Itô integrals”

It arises directly from how stochastic integrals behave over time.

---

## Mental model

> The Itô integral is accumulation under continuous random shocks, where only present information can influence the integrand.
