---
tags:
  - calculus
  - calc-2
  - series
  - convergence-tests
---

# 📘 Alternating Series Test

The Alternating Series Test determines whether a series with alternating signs converges.

---

# 🧠 Core Idea

> If terms alternate and shrink to zero in a controlled way, the series converges.

---

# 📊 Form of an Alternating Series

$$
\sum_{n=1}^{\infty} (-1)^{n} a_n
\quad \text{or} \quad
\sum_{n=1}^{\infty} (-1)^{n+1} a_n
$$

Where:

- $a_n \ge 0$

---

# 📈 Test Conditions

The series:

$$
\sum (-1)^n a_n
$$

converges if:

### 1. Decreasing condition

$$
a_{n+1} \le a_n \quad \text{(eventually decreasing)}
$$

### 2. Limit condition

$$
$\lim_{n \to \infty} a_n = 0$
$$

---

# ⚠️ Key Result

If both conditions hold:

> the alternating series converges

---

# 🔍 Intuition

Alternating series behave like:

- positive term pulls sum up
- negative term pulls sum down
- steps get smaller over time

So the sum “settles” into a value.

---

# 📈 Why it converges

Even though terms keep adding forever:

- each correction is smaller than the last
- oscillations shrink
- the partial sums stabilize

---

# 🧮 Example

$$
\sum_{n=1}^{\infty} (-1)^{n+1} \frac{1}{n}
$$

- $1/n \to 0$
- decreasing sequence

So:

> converges

(This is the alternating harmonic series)

---

# ⚠️ Important Contrast

- $\sum \frac{1}{n}$ diverges
- $\sum (-1)^{n+1} \frac{1}{n}$ converges

> alternating signs can completely change behavior

---

# 🧠 Key Insight

> Alternation introduces cancellation, and shrinking terms ensure stability.

---

# 🔗 Related Ideas

- [[divergence-test|Divergence Test]]
- [[p-series-test|P-Series Test]]
- [[root-test|Root Test]]
- [[ratio-test|Ratio Test]]

---

# 🧭 Mental Model

> A seesaw that slowly calms down as each swing gets smaller.

---

# 📌 Summary

- Requires alternating signs
- Terms must decrease in magnitude
- Limit of terms must go to 0
- Produces convergence through cancellation
