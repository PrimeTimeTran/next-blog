---
tags:
  - math
  - calculus
  - series
---

# 🧠 Root Test (Atom)

The Root Test determines whether an infinite series converges by analyzing the **nth root of its terms**.

---

# 🧠 Core Idea

> Measure how fast terms shrink by extracting their “per-step growth rate.”

---

# 📐 Test Statement

For a series:

$$
\sum_{n=1}^{\infty} a_n
$$

compute:

$$
L = \lim_{n \to \infty} \sqrt[n]{|a_n|}
$$

---

# 📊 Decision Rules

## ✅ Converges absolutely if:

$$
L < 1
$$

---

## ❌ Diverges if:

$$
L > 1
$$

---

## ⚠️ Inconclusive if:

$$
L = 1
$$

---

# 🧠 Intuition

> The Root Test checks the “average exponential growth rate” of the terms.

- \(L < 1\) → terms shrink exponentially → converges
- \(L > 1\) → terms grow → diverges
- \(L = 1\) → borderline case

---

# 📐 Why It Works

It compares the series to a geometric form:

$$
a_n \approx r^n
$$

because:

$$
\sqrt[n]{|r^n|} = |r|
$$

So the test directly extracts the “effective ratio.”

---

# 🧮 When to Use It

Best for:

- expressions raised to \(n\)-th powers
- exponential-type terms
- complicated powers like \((f(n))^n\)
- cases where Ratio Test is messy

---

# 📊 Example Pattern

### Example:

$$
a_n = \left(\frac{n}{n+1}\right)^n
$$

Apply Root Test:

$$
\sqrt[n]{a_n} = \frac{n}{n+1}
$$

Limit:

$$
$\lim_{n \to \infty} \frac{n}{n+1} = 1$
$$

→ inconclusive

---

# 🔗 Connection to Ratio Test

- Ratio Test → compares consecutive terms
- Root Test → measures overall growth per term

They often give similar results, but:

> Root Test is cleaner for exponent-heavy expressions.

---

# 🔗 Related Concepts

- [[Ratio Test]] → primary comparison method
- [[Geometric Series]] → benchmark behavior
- [[Power Series]] → convergence tool
- [[Radius and Interval of Convergence]] → application domain

---

# 🧠 Mental Model

> “Extract the hidden exponential growth rate of the series.”

---

# 📌 Summary

The Root Test determines convergence by measuring the nth-root growth rate of terms, identifying whether the series behaves like a geometric sequence.
