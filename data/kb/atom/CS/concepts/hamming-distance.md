# Hamming Distance

Hamming distance measures how different two strings (of equal length) are by counting the number of positions where they differ.

## Definition

For two strings $x$ and $y$ of equal length $n$:

$$
d(x, y) = \sum_{i=1}^{n} [x_i \neq y_i]
$$

where $[x_i \neq y_i]$ is $1$ if the characters differ at position $i$, otherwise $0$.

---

## Intuition

It is simply:

> “How many character substitutions are needed to turn one string into another?”

Example:

$$
x = \text{"cat"}, \quad y = \text{"bat"}
$$

Comparisons:

- $c \neq b$ → 1
- $a = a$ → 0
- $t = t$ → 0

So:

$$
d(x, y) = 1
$$

---

## Properties

- Only defined for equal-length strings
- Always non-negative: $d(x, y) \ge 0$
- Symmetric: $d(x, y) = d(y, x)$
- $d(x, y) = 0$ iff $x = y$

---

## Use cases

- Error detection/correction in coding theory
- String similarity checks
- Problems like “words within k edits” (when edits are substitutions only)
