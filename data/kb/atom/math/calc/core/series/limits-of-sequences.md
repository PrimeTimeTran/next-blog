# 📌 Limits of Sequences

## 🧭 Core idea

A **sequence** is an ordered list of numbers:
$$(a_n) = a_1, a_2, a_3, \dots$$

The **limit of a sequence** describes what the terms approach as $n \to \infty$:

$$
$\lim_{n \to \infty} a_n = L$
$$

If the terms get arbitrarily close to $L$, the sequence **converges** to $L$. Otherwise, it **diverges**.

---

## 📈 Formal definition (convergence)

A sequence $(a_n)$ converges to $L$ if:

> For every $\varepsilon > 0$, there exists $N \in \mathbb{N}$ such that if $n \ge N$, then
>
> $$|a_n - L| < \varepsilon$$

This means:

- eventually all terms stay within any chosen error tolerance around $L$

---

## ❌ Divergence

A sequence **diverges** if it does not approach a single finite value.

Common cases:

- Unbounded growth: $a_n \to \infty$
- Oscillation: $a_n = (-1)^n$
- No limiting behavior

---

## 🧠 Key examples

### 1. Convergent

$$
a_n = \frac{1}{n}
\quad \Rightarrow \quad \lim_{n \to \infty} a_n = 0
$$

### 2. Divergent (infinite growth)

$$
a_n = n
\quad \Rightarrow \quad a_n \to \infty
$$

### 3. Oscillating (no limit)

$$a_n = (-1)^n$$

---

## 📌 Useful theorems

### 🔹 Monotone Convergence Theorem

If $(a_n)$ is:

- increasing and bounded above, or
- decreasing and bounded below

then $(a_n)$ converges.

---

### 🔹 Squeeze Theorem

If:
$$b_n \le a_n \le c_n$$
and:
$$\lim_{n \to \infty} b_n = \lim_{n \to \infty} c_n = L$$
then:
$$\lim_{n \to \infty} a_n = L$$

---

## 🔁 Connection to series

A necessary condition for series convergence:
$$\sum a_n \text{ converges } \Rightarrow \lim_{n \to \infty} a_n = 0$$

(But $\lim a_n = 0$ does NOT guarantee convergence.)

---

## 🧠 Intuition

A sequence is a process generating values forever.

The limit asks:

> What value does this process approach as $n$ grows without bound?

---

## 🔑 Summary

- Sequence: $(a_n)$
- Limit: $\lim_{n \to \infty} a_n$
- Convergent: approaches finite $L$
- Divergent: no finite limit

---
