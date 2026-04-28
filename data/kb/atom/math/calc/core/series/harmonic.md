---
tags:
  - calculus
  - calc-2
  - series
  - divergence
  - p-series
---

# 📘 Harmonic Series

The harmonic series is the infinite series:

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

---

# 🧠 Core Idea

The harmonic series is the **baseline example of a divergent p-series**.

It looks like it should converge because terms go to 0, but:

> it still grows without bound.

---

# 📊 Structure

This is a special case of the p-series:

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

with:

- $p = 1$

---

# ⚠️ Key Result

$$
\sum_{n=1}^{\infty} \frac{1}{n} = \infty
$$

So the series **diverges**.

---

# 🔍 Why it diverges (intuition)

Even though:

$$
$\lim_{n \to \infty} \frac{1}{n} = 0$
$$

the terms shrink **too slowly**.

> The accumulation still grows without bound.

---

# 📈 Growth Behavior

The harmonic series diverges very slowly:

- it increases forever
- but extremely gradually
- it takes many terms to grow noticeably

---

# 🧮 Intuition via grouping

Grouping terms:

- $1$
- $\\frac{1}{2}$
- $\frac{1}{3} + \frac{1}{4}$
- $\frac{1}{5} + \dots + \frac{1}{8}$
- $\frac{1}{9} + \dots + \frac{1}{16}$

Each group still adds a nonzero amount.

So the total keeps increasing.

---

# 🔗 Connection to p-Series

From the p-series rule:

$$
\sum \frac{1}{n^p}
$$

- converges if $p > 1$
- diverges if $p \le 1$

Harmonic series is the **boundary case**.

---

# 🧠 Key Insight

> “Going to zero is not enough — decay speed matters.”

---

# 📌 Why it matters

The harmonic series is foundational because it:

- defines the convergence threshold
- appears in analysis and number theory
- shows up in probability and algorithms
- is used in comparison tests

---

# 🧭 Mental Model

Think of it as:

> infinite accumulation with barely-fast-enough decay… which still fails

---

# 📌 Summary

- Series: $\sum \frac{1}{n}$
- Special case of p-series with $p = 1$
- Diverges
- Fundamental example showing that $a_n \to 0$ is not sufficient for convergence
