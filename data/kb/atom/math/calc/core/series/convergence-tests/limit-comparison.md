---
tags:
  - calculus
  - calc-2
  - series
  - convergence-tests
---

# 📘 Limit Comparison Test

The Limit Comparison Test determines convergence by comparing the long-term behavior of two positive-term series.

---

# 🧠 Core Idea

> If two series behave the same way for large $n$, they either both converge or both diverge.

---

# 📊 Setup

Let:

$$
\sum a_n \quad \text{and} \quad \sum b_n
$$

where $a_n > 0$, $b_n > 0$.

Compute:

$$
\lim_{n \to \infty} \frac{a_n}{b_n} = c
$$

---

# ✔️ Main Result

If:

$$
0 < c < \infty
$$

then:

> $\sum a_n$ and $\sum b_n$ either both converge or both diverge.

---

# ⚠️ Edge Cases

## 1. If $c = 0$

- $a_n$ is much smaller than $b_n$
- If $\sum b_n$ converges → $\sum a_n$ converges
- Otherwise inconclusive

---

## 2. If $c = \infty$

- $a_n$ is much larger than $b_n$
- If $\sum b_n$ diverges → $\sum a_n$ diverges
- Otherwise inconclusive

---

## 3. If limit does not exist

> test is inconclusive

---

# 📈 Intuition

Instead of comparing sizes directly, you ask:

> “Do these terms shrink at the same rate as $n \to \infty$?”

---

# 🧮 Example

Compare:

$$
a_n = \frac{2n^2 + 5}{n^3 + 1}, \quad b_n = \frac{1}{n}
$$

Compute:

$$
\frac{a_n}{b_n}
=
\frac{(2n^2 + 5)/(n^3 + 1)}{1/n}
=
\frac{n(2n^2 + 5)}{n^3 + 1}
\to 2
$$

Since:

$$
0 < 2 < \infty
$$

then:

> both behave like $\sum \frac{1}{n}$ → diverge

---

# 🔍 When to Use It

Use LCT when:

- terms are rational functions
- highest-degree terms dominate behavior
- direct inequality comparison is messy

---

# 🧠 Key Insight

> Limit Comparison Test matches _growth rates_, not exact bounds.

---

# 🔗 Related Concepts

- [[comparison-test|Comparison Test]]
- [[p-series-test|P-Series Test]]
- [[limit-at-infinity|Limits at Infinity]]
- [[divergence-test|Divergence Test]]

---

# 🧭 Mental Model

> Strip away lower-order terms and compare only dominant behavior.

---

# 📌 Summary

- Compare $\frac{a_n}{b_n}$
- If limit is finite and positive → same convergence behavior
- Best for asymptotic comparison of series
