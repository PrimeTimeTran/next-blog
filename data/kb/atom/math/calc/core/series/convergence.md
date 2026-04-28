---
tags:
  - calculus
---

# Convergence — Formal Definition + Intuition

## Core Idea

A sequence or series **converges** if it approaches a fixed value as it progresses.

---

## 1. Convergence of a Sequence

### Definition

A sequence $a_n$ converges to a value $L$ if:

$$
$\lim_{n \to \infty} a_n = L$
$$

This means:

- As $n$ gets larger, $a_n$ gets closer and closer to $L$

---

## Example (Sequence)

$$
a_n = \frac{1}{n}
$$

As $n \to \infty$:

$$
a_n \to 0
$$

✅ The sequence **converges to 0**

---

## 2. Convergence of a Series

### Definition

A series:

$$
\sum_{n=1}^{\infty} a_n
$$

**converges** if the sum approaches a finite value.

---

## Example (Series)

$$
\sum_{n=1}^{\infty} \frac{1}{2^n}
$$

This is a geometric series with ratio:

$$
r = \frac{1}{2}
$$

Since $|r| < 1$, it converges.

In fact:

$$
\sum_{n=1}^{\infty} \frac{1}{2^n} = 1
$$

---

## 3. Key Difference (Important)

- Sequence → looks at individual terms
- Series → looks at the **sum of terms**

---

## 4. What Convergence is NOT

❌ Not lines intersecting  
❌ Not things “meeting” at a point

✔ It is:

> Getting arbitrarily close to a fixed value

---

## 5. Visual Intuition

Think of steps getting smaller:

$$
1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots
$$

You keep adding, but:

- each step is smaller
- total approaches a limit

---

## 6. Divergence (Contrast)

A series **diverges** if:

- it goes to infinity, OR
- it does not settle to a fixed value

Example:

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

This **diverges** (grows without bound)

---

## 7. Key Rule to Remember

For a series to converge:

$$
a_n \to 0
$$

But:

$$
a_n \to 0 \;\; \text{does NOT guarantee convergence}
$$

---

## Tags

#convergence #series #sequences #calculus
