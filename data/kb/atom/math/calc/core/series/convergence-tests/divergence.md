---
tags:
  - calculus
  - calc-2
  - sequence-and-series
  - convergence-tests
---

# 📘 Divergence Test (Nth-Term Test)

The Divergence Test is a quick check to determine if a series definitely diverges.

---

# 🧠 Core Idea

> If the terms of a series do not go to zero, the series cannot converge.

---

# 📊 Statement

For a series:

$$
\sum_{n=1}^{\infty} a_n
$$

If:

$$
$\lim_{n \to \infty} a_n \ne 0$
$$

or the limit does not exist, then:

$$
\sum_{n=1}^{\infty} a_n \text{ diverges}
$$

---

# ⚠️ Important Subtlety

If:

$$
$\lim_{n \to \infty} a_n = 0$
$$

then:

> the test is inconclusive

The series may still diverge.

---

# 📈 Intuition

A series is like adding infinitely many pieces:

- If pieces don’t shrink to zero → sum cannot stabilize
- If pieces shrink to zero → it still might diverge or converge

---

# 🧮 Example 1 (Diverges)

$$
a_n = \frac{n}{n+1}
$$

Then:

$$
$\lim_{n \to \infty} \frac{n}{n+1} = 1$
$$

Since limit ≠ 0:

> the series diverges

---

# 🧮 Example 2 (Inconclusive)

$$
a_n = \frac{1}{n}
$$

Then:

$$
$\lim_{n \to \infty} \frac{1}{n} = 0$
$$

So:

> test does not decide convergence

---

# 🧠 Key Insight

> Zero-term behavior is necessary for convergence, but not sufficient.

---

# 🔗 When to use it

Use this test first when analyzing a series because:

- it is fast
- it can immediately rule out divergence
- it simplifies later testing

---

# 🧭 Mental Model

> If the “pieces” don’t shrink away, infinite summation cannot settle.

---

# 📌 Summary

- Check $\lim a_n$
- If not 0 → diverges immediately
- If 0 → need other convergence tests
- It is a necessary condition, not a sufficient one
