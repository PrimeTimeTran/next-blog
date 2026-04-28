---
tags:
  - calculus
  - sequences
  - series
  - convergence
---

# 📘 Partial Sums

Partial sums describe the running total of a sequence and are the foundation for defining infinite series.

---

# 🧠 Definition

Given a sequence \(a_n\), the partial sum \(S_n\) is:

$$
S_n = \sum_{k=1}^{n} a_k
$$

---

# 🔑 Meaning

> \(S_n\) is the sum of the first \(n\) terms of a sequence.

It represents a **finite accumulation** of values.

---

# 📈 Sequence vs Partial Sum

## Sequence

$$
a_1, a_2, a_3, \dots
$$

- individual terms
- no accumulation

---

## Partial Sum

$$
S_n = a_1 + a_2 + \cdots + a_n
$$

- accumulated total up to \(n\)
- depends on how many terms you include

---

# 🧠 Key Insight

Partial sums convert a sequence into a new sequence:

$$
S_1, S_2, S_3, \dots
$$

So:

- \(a_n\) = original sequence
- \(S_n\) = derived sequence of accumulations

---

# 📊 Connection to Infinite Series

The infinite series is defined using partial sums:

$$
\sum_{n=1}^{\infty} a_n = \lim_{n \to \infty} S_n
$$

---

# ⚖️ Convergence Idea

A series converges if:

$$
$\lim_{n \to \infty} S_n$
$$

exists and is finite.

Otherwise, it diverges.

---

# 🧠 Intuition

Think of partial sums as:

- step-by-step accumulation
- tracking “how much you’ve built so far”

Example interpretation:

- \(a_n\): daily change
- \(S_n\): total after \(n\) days

---

# ⚠️ Common Confusion

- \(a_n\) is NOT a sum
- \(S_n\) is NOT infinite
- the infinite series is NOT computed directly — it is analyzed through \(S_n\)

---

# 📌 Key Takeaway

> Partial sums are the bridge between sequences and infinite series.

---

# 🔗 Related

- [[sequences]]
- [[infinite-series]]
- [[convergence]]
- [[divergence]]
