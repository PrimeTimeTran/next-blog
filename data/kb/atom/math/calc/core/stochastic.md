# Stochastic Calculus

## Definition

Stochastic calculus is a branch of mathematics that extends classical calculus to systems involving **random processes**, allowing analysis of quantities that evolve with inherent uncertainty over time.

It is primarily used to model and reason about continuous-time stochastic processes such as financial markets.

---

## Core idea

Unlike [[calculus|classical calculus]], where changes are deterministic, stochastic calculus deals with quantities that evolve with randomness:

- Classical calculus: smooth, predictable change
- Stochastic calculus: continuous change + random fluctuations

---

## Key object: Brownian motion

The foundational process is **Brownian motion** ( W_t ):

- Continuous in time
- Random, nowhere differentiable paths
- Independent increments
- Normally distributed changes

---

## Stochastic differential equation (SDE)

A typical stochastic system is written as:

$$
dX_t = \mu(X_t, t),dt + \sigma(X_t, t),dW_t
$$

Where:

- $\mu$ = drift (deterministic trend)
- $\sigma$ = volatility (randomness strength)
- $dW_t$ = random noise term (Brownian motion increment)

---

## Core intuition

> A system evolves as a combination of predictable motion + random shock at every instant.

---

## Key difference from classical calculus

| Classical calculus      | Stochastic calculus          |
| ----------------------- | ---------------------------- |
| Derivatives exist       | Paths are non-differentiable |
| Deterministic functions | Random processes             |
| Smooth trajectories     | Irregular, noisy paths       |

---

## Fundamental tools

### 1. Itô’s lemma

A stochastic version of the chain rule that accounts for randomness:

- Adjusts for variance terms that do not appear in classical calculus

---

### 2. Itô integral

Defines integration with respect to Brownian motion:

- Handles integration over noisy, non-smooth paths

---

## Applications

- Financial mathematics (Black–Scholes model)
- Option pricing and hedging
  - [[black-scholes-model]]
- Risk modeling
- Physics (diffusion processes)
- Engineering systems with noise

---

## Key mental model

> Stochastic calculus describes how systems evolve when every small change includes both a deterministic shift and a random perturbation.

---

## Limitation intuition

Because paths are not smooth:

- standard derivatives fail
- classical intuition about slopes does not apply
- new rules (Itô calculus) are required
