# Properties of Sequences

## Definition

A **sequence** is an ordered list of numbers:

$$
(a_n) = a_1, a_2, a_3, \dots
$$

where each term is defined by a rule depending on the index $n$.

---

## Boundedness

A sequence is:

- **Bounded above** if there exists $M$ such that $a_n \le M$
- **Bounded below** if there exists $m$ such that $a_n \ge m$
- **Bounded** if both hold

---

## Monotonicity

A sequence can be:

- **Increasing**: $a_{n+1} \ge a_n$
- **Strictly increasing**: $a_{n+1} > a_n$
- **Decreasing**: $a_{n+1} \le a_n$
- **Strictly decreasing**: $a_{n+1} < a_n$

A sequence that is always increasing or decreasing is called **monotonic**.

---

## Convergence

A sequence **converges** if it approaches a finite limit:

$$
$\lim_{n \to \infty} a_n = L$
$$

Otherwise, it **diverges**.

---

## Key theorem (Monotone Convergence Theorem)

If a sequence is:

- monotonic
- bounded

then it must converge.

---

## Oscillation

A sequence may:

- alternate values
- fail to settle toward a single limit

Example: $(-1)^n$

Such sequences typically diverge unless damping is present.

---

## Growth behavior

Sequences can exhibit:

- **linear growth** (e.g., $a_n = n$)
- **polynomial growth** (e.g., $n^2$)
- **exponential growth** (e.g., $2^n$)
- **decay** (e.g., $1/n$)

Growth rate strongly influences convergence of related series.

---

## Key intuition

> A sequence is about long-term behavior of ordered values as the index increases.

---

## Why it matters

Sequences are foundational for:

- series (sums of sequences)
- limits and continuity
- convergence tests
- numerical approximations
- calculus foundations

---

## Connection to series

A series is built from a sequence:

$$
\sum a_n
$$

So understanding sequences is prerequisite to understanding infinite sums.
