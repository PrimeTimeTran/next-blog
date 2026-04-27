---
tags:
  - calculus
---

# 🧩 Chain Rule (Derivative Atom)

## Core idea

To differentiate a composition of functions, multiply the derivative of the outer function by the derivative of the inner function.

---

## Rule

$$
\frac{d}{dx}\big[f(g(x))\big] = f'(g(x)) \cdot g'(x)
$$

---

## Meaning

When one function is “inside” another, changes happen in two steps:

- how the outer function changes
- how the inner function changes

Both effects combine multiplicatively.

---

## Intuition

Think of it as a pipeline:

- $x \rightarrow g(x)$ (inner function transforms input)
- $g(x) \rightarrow f(g(x))$ (outer function transforms result)

So the total rate of change depends on:

> outer sensitivity × inner rate of change

---

## Example

$$
\frac{d}{dx}(x^2 + 1)^3
$$

Let:

- outer: $u^3$
- inner: $u = x^2 + 1$

Step:

- derivative of outer: ($3u^2$)
- multiply by inner derivative: $2x$

Result:

$$
= 3(x^2 + 1)^2 \cdot 2x = 6x(x^2 + 1)^2
$$

---

## Geometric view

- inner function reshapes the input axis
- outer function then reacts to that reshaped input
- chain rule accounts for both transformations

---

## Key takeaway

> The chain rule measures how changes flow through nested functions by multiplying outer sensitivity with inner change.
