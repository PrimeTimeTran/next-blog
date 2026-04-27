---
tags:
  - calculus
  - calc-2
  - series
  - convergence
---

# 📘 Infinite Series

An infinite series is the sum of infinitely many terms of a sequence.

$$
\sum_{n=1}^{\infty} a_n
$$

---

# 🧠 Core Idea

An infinite series is not computed by “adding forever” directly.

Instead:

> we study the behavior of partial sums.

---

# 📊 Definition (via Partial Sums)

Define the partial sum:

$$
S_N = \sum_{n=1}^{N} a_n
$$

Then the infinite series is:

$$
\sum_{n=1}^{\infty} a_n = \lim_{N \to \infty} S_N
$$

---

# 🔍 Convergence vs Divergence

## Convergent Series

If the limit exists and is finite:

$$
\lim_{N \to \infty} S_N = S
$$

then the series converges to $S$.

---

## Divergent Series

If the limit does not exist or is infinite:

$$
\lim_{N \to \infty} S_N = \infty \ \text{or DNE}
$$

then the series diverges.

---

# 🧠 Key Insight

A series is defined by:

> the behavior of accumulation over increasing finite sums

not by direct infinite addition.

---

# 📈 Example

### Geometric Series

$$
\sum_{n=0}^{\infty} ar^n
$$

- Converges if $|r| < 1$
- Diverges if $|r| \ge 1$

---

# ⚙️ Common Types of Series

- [[geometric-series|geometric series]]
- [[p-series|p-series]]
- [[harmonic-series|harmonic series]]
- [[alternating-series|alternating series]]
- [[power-series|power-series]]

---

# 🔗 Related Concepts

- [[sequences|sequences]] → the list of terms
- [[p-series|p-series]] → benchmark convergence family
- [[geometric-series|geometric series]] → exponential-type decay/growth
- [[ratio-test|ratio test]] → convergence test
- [[root-test|root test]] → convergence test

---

# 🧭 Mental Model

Think of an infinite series as:

> a process of accumulating more and more terms and observing whether it stabilizes.

---

# 📌 Summary

- Infinite series = sum of infinitely many terms
- Defined using limits of partial sums
- Converges if partial sums stabilize
- Diverges if they grow without bound or oscillate
