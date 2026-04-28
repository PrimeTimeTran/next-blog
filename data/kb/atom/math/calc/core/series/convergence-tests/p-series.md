---
tags:
  - calculus
  - calc-2
  - series
  - convergence-tests
---

alternating-series, comparison, divergence, integral, limit-comparsion, p-series, ratio, root are what kind of gtests again?

# 📘 p-Series Test

The p-series test determines whether a specific family of infinite series converges or diverges.

---

# 🧠 Core Idea

> The convergence of $\sum \frac{1}{n^p}$ depends entirely on how fast the terms decay.

---

# 📊 Definition (p-Series)

A p-series has the form:

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

where $p$ is a constant.

---

# 📈 Test Result

- If $p > 1$ → the series **converges**
- If $p \le 1$ → the series **diverges**

---

# 🔍 Key Examples

## Divergent case (harmonic series)

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

Here $p = 1$, so:

> diverges

---

## Convergent case

$$
\sum_{n=1}^{\infty} \frac{1}{n^2}
$$

Here $p = 2$, so:

> converges

---

# 🧠 Intuition

The test is about **decay speed**:

- large $p$ → terms shrink fast → convergence
- small $p$ → terms shrink slowly → divergence

---

# ⚠️ Critical Insight

Even though:

$$
$\lim_{n \to \infty} \frac{1}{n^p} = 0$
$$

this alone does NOT guarantee convergence.

> The sum depends on _how fast_ it approaches zero.

---

# 🔗 Connection to Harmonic Series

The harmonic series is the boundary case:

- $p = 1$ → diverges (slow decay threshold)

---

# 🧠 Key Insight

> There exists a sharp threshold at $p = 1$ separating convergence from divergence.

---

# 📌 Why it matters

The p-series test is used as a benchmark for:

- comparison tests
- bounding more complex series
- understanding convergence behavior

---

# 🧭 Mental Model

> Think of adding infinitely many shrinking pieces: only fast enough shrinking leads to a finite total.

---

# 📌 Summary

- Series: $\sum \frac{1}{n^p}$
- Converges if $p > 1$
- Diverges if $p \le 1$
- Fundamental reference point for all convergence tests
