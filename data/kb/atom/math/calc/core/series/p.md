---
tags:
  - calculus
  - calc-2
  - series
  - convergence-tests
---

# 📘 P-Series

A p-series is a type of infinite series of the form:

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

where $p$ is a real number.

---

# 🧠 Core Idea

A p-series compares how fast terms decay as $n \to \infty$.

> The key question: does the tail shrink fast enough to produce a finite sum?

---

# 📊 Convergence Rule

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

- Converges if $p > 1$
- Diverges if $p \le 1$

---

# 🔍 Intuition

- Larger $p$ → faster decay → more likely to converge
- Smaller $p$ → slower decay → infinite accumulation

---

# 📈 Key Special Cases

### Harmonic Series

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

- This is the case $p = 1$
- Diverges (very slowly, but still diverges)

---

### Strongly convergent example

$$
\sum_{n=1}^{\infty} \frac{1}{n^2}
$$

- $p = 2$
- Converges

---

# 🧠 Why it matters

p-series are a **benchmark family** used to test other series:

> Many convergence tests compare unknown series to a p-series.

---

# 🔗 Connection to Integral Test

p-series behavior matches:

$$
\int_1^\infty \frac{1}{x^p} dx
$$

So:

- same threshold: $p = 1$
- same convergence behavior

---

# 🧭 Mental Model

Think of p-series as:

> “How fast must decay be to beat infinity?”

---

# 📌 Summary

- Standard form: $\sum \frac{1}{n^p}$
- Converges if $p > 1$
- Diverges if $p \le 1$
- Fundamental comparison tool in Calc 2 series analysis
