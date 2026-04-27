---
tags:
  - calculus
  - sequences
  - series
  - convergence
  - calc-2
---

# 📘 Sequences, Series, and Partial Sums Notation

This note explains the core notation used in [[sequences]] and [[series]].

---

# 🧠 Core Objects

## Sequence

A sequence is an ordered list of terms:

$$
a_1, a_2, a_3, \dots, a_n, \dots
$$

Each individual term is written as:

$$
a_n
$$

> $a_n$ = the nth term of a sequence

---

## Series

A series is the sum of terms in a sequence:

$$
\sum_{n=1}^{\infty} a_n
$$

> A series represents an infinite summation process, not a single finite sum.

---

## Partial Sum

A partial sum is the sum of the first $n$ terms:

$$
S_n = \sum_{k=1}^{n} a_k
$$

> $S_n$ = finite sum up to the nth term

---

# 🔑 Key Notation Meaning

## Term

$$
a_n
$$

- The nth term of a sequence
- A single value, not a sum

---

## Partial Sum

$$
S_n
$$

- Sum of first \(n\) terms
- Finite accumulation

---

## Infinite Series Definition

![[infinite-series-definition]]

---

# 🧠 Core Insight

A series is defined through its partial sums:

- Terms → build the sequence
- Partial sums → accumulate the sequence
- Limit of partial sums → defines the infinite series

---

# 📈 Intuition

Think of it as:

- $a_n$: each step
- $S_n$: total after n steps
- infinite series: final behavior as $n$ grows without bound

---

# ⚠️ Common Confusion

- $a_n$ is NOT a sum
- $S_n$is NOT infinite
- $\sum_{n=1}^{\infty} a_n$ is NOT computed directly — it is analyzed via limits

---

# 📌 Summary

$$
a_n = \text{term}
$$

$$
S_n = \sum_{k=1}^{n} a_k
$$

$$
\sum_{n=1}^{\infty} a_n = \lim_{n \to \infty} S_n
$$

---

# 🔗 Related

- [[infinite-sum]]
- [[convergence]]
- [[divergence]]
- [[p-series]]
