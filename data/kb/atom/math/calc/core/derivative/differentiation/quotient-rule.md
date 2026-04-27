---
tags:
  - calculus
---

# 🧩 Quotient Rule (Derivative Atom)

## Core idea

To differentiate a ratio of two functions, combine both derivatives in a structured way.

---

## Rule

$$
\frac{d}{dx}\left(\frac{f(x)}{g(x)}\right)
=
\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

---

## Meaning

The derivative of a quotient depends on:

- how the top changes $f'(x)$
- how the bottom changes $g'(x)$
- and how they interact through division

---

## Intuition (mnemonic form)

> “Low d-high minus high d-low, over low squared”

- **Low** = denominator $g(x)$
- **High** = numerator $f(x)$

---

## Structure breakdown

$$
\text{Derivative} =
\frac{
(\text{top changes}) \cdot (\text{bottom})

(\text{top}) \cdot (\text{bottom changes})
}{
(\text{bottom})^2
}
$$

---

## Why it looks like this (intuition)

A quotient changes when:

- the numerator increases/decreases
- the denominator increases/decreases
- and these effects compete against each other

The subtraction captures this “push-pull” effect.

---

## Key takeaway

> The quotient rule measures how a ratio changes by combining the change in both parts, weighted by the current value of the other part.
