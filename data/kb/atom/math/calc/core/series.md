# Series

## Definition

A **series** is the sum of the terms of a sequence.

If $(a_n)$ is a sequence, then the corresponding series is:

$$
\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots
$$

---

## Finite vs infinite

- Finite series: sum stops at a fixed index
- Infinite series: continues without end

The key question in calculus is:

> Does the infinite sum converge to a finite value?

---

## Partial sums

A series is understood through its **partial sums**:

$$
S_n = \sum_{k=1}^{n} a_k
$$

The series converges if:

$$
$\lim_{n \to \infty} S_n \text{ exists and is finite}$
$$

---

## Convergence vs divergence

- **Convergent series** → approaches a finite value
- **Divergent series** → grows without bound or oscillates

---

## Key examples

### Geometric series

$$
\sum_{n=0}^{\infty} ar^n
$$

Converges if $|r| < 1$.

---

### p-series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

- Converges if $p > 1$
- Diverges if $p \le 1$

---

## Core idea

> A series is not just a sum—it is the behavior of accumulation over infinite steps.

---

## Why series matter

Series are used to:

- approximate functions (Taylor / Maclaurin series)
- model growth and decay
- analyze algorithms (computer science)
- solve differential equations
- understand convergence in analysis

---

## Key intuition

> A series asks whether infinite accumulation stabilizes or explodes.

---

## Connection to calculus

Series bridge:

- discrete processes (sums)
- continuous processes (integrals, functions)

They are a foundational tool for approximation and analysis.
