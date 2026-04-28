# Continuity — Formal Definition + Intuition

## Core Idea

A function is **continuous** at a point if there are no breaks, jumps, or holes at that point.

---

## Intuition

“Draw without lifting your pencil” means:

- No sudden jumps
- No missing points
- No infinite spikes (at that point)

---

## Formal Definition

A function $f(x)$ is continuous at $x = a$ if:

$$
$\lim_{x \to a} f(x) = f(a)$
$$

---

## What this really means (3 conditions)

For continuity at $x = a$, all must be true:

1. $$f(a)$$ is defined
2. $$\lim_{x \to a} f(x)$$ exists
3. $$\lim_{x \to a} f(x) = f(a)$$

---

## Example — Continuous Function

$$
f(x) = x^2
$$

At any point (e.g. $x = 2$):

- Function is defined
- Limit exists
- Limit equals function value

✅ Continuous everywhere

---

## Example — Not Continuous (Hole)

$$
f(x) = \frac{x^2 - 1}{x - 1}
$$

This simplifies to:

$$
f(x) = x + 1 \quad \text{(for } x \ne 1)
$$

At $x = 1$:

- Function is **undefined**
- Limit exists

❌ Not continuous (hole)

---

## Example — Not Continuous (Jump)

A piecewise function:

$$
f(x) =
\begin{cases}
1 & x < 0 \\
2 & x \ge 0
\end{cases}
$$

At $x = 0$:

- Left limit = 1
- Right limit = 2

❌ Limits don’t match → not continuous

---

## Why Continuity Matters (Important)

Many theorems require continuity.

Example: **[[atom/math/calc/2/test/integral|integral test]] for series**

You can only apply it if:

- function is positive
- decreasing
- **continuous**

---

## Key Insight

Continuity is about **agreement**:

$$
\text{approach value} = \text{actual value}
$$

---

## Tags

#concept #calculus #continuity
