---
tags:
  - calculus
  - calc-2
  - series
  - convergence-tests
---

# 📘 Root Test

The Root Test determines whether an infinite series converges by analyzing the **nth root of the absolute value of terms**.

---

# 🧠 Core Idea

The Root Test measures how fast terms shrink (or grow) in an exponential sense.

> It is especially useful when terms are raised to the power of $n$.

---

# 📊 Test Definition

Given a series:

$$
\sum_{n=1}^{\infty} a_n
$$

Compute:

$$
L = \lim_{n \to \infty} \sqrt[n]{|a_n|}
$$

---

# 📈 Conclusions

- If $L < 1$ → the series **converges absolutely**
- If $L > 1$ (or $L = \infty$) → the series **diverges**
- If $L = 1$ → the test is **inconclusive**

---

# 🔍 Intuition

The Root Test asks:

> “On average, how much does each term scale per step?”

It detects **exponential growth or decay behavior**.

---

# ⚙️ When to Use It

Best used when:

- terms look like $n^n$, $a^{n}$, or $(\cdot)^n$
- expressions are heavily exponential
- Ratio Test becomes messy

---

# 📊 Example 1 (Convergent)

$$
\sum \left(\frac{1}{2}\right)^n
$$

$$
\sqrt[n]{\left|\frac{1}{2^n}\right|} = \frac{1}{2}
$$

So:

- $L = \frac{1}{2} < 1$
- converges

---

# 📊 Example 2 (Divergent)

$$
\sum 2^n
$$

$$
\sqrt[n]{2^n} = 2
$$

So:

- $L = 2 > 1$
- diverges

---

# 🧠 Key Insight

The Root Test is essentially:

> a detector for exponential behavior in series growth or decay.

---

# 🔗 Related Concepts

- [[ratio-test|Ratio Test]]
- [[geometric-series|Geometric Series]]
- [[infinite-series|Infinite Series]]
- [[p-series|P-Series]]

---

# 📌 Summary

- Compute: $L = \lim \sqrt[n]{|a_n|}$
- $L < 1$ → converges
- $L > 1$ → diverges
- $L = 1$ → inconclusive
- Best for exponential-type series
