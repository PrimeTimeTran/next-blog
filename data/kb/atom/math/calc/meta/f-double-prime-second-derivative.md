# Second Derivative ($f''(x)$)

## Definition

The second derivative of a function $f(x)$ is the derivative of its first derivative:

$$
f''(x) = \frac{d}{dx}\left(f'(x)\right)
$$

It measures how the _rate of change of the function itself_ is changing.

---

## Intuition

- $f'(x)$ → slope (how fast the function is changing)
- $f''(x)$ → curvature (how the slope is changing)

> First derivative tells you direction of motion.
> Second derivative tells you how that motion is accelerating or bending.

---

## Physical meaning

If $f(x)$ represents position:

- $f'(x)$ = velocity
- $f''(x)$ = acceleration

---

## Geometric meaning

- $f''(x) > 0$ → graph is concave up (cup shape)
- $f''(x) < 0$ → graph is concave down (cap shape)

---

## Concavity test

- If $f''(x) > 0$ on an interval → function is concave up there
- If $f''(x) < 0$ → concave down

---

## Inflection points

A point where concavity changes:

$$
f''(x) = 0 \quad \text{(and sign changes)}
$$

These are called **inflection points**.

---

## Second derivative test (critical points)

If $f'(x) = 0$ at a point:

- $f''(x) > 0$ → local minimum
- $f''(x) < 0$ → local maximum
- $f''(x) = 0$ → inconclusive

---

## Key intuition

> The first derivative tells you “how steep”
> The second derivative tells you “how the steepness is evolving”

---

## Why it matters

Used in:

- optimization problems
- curve sketching
- physics (acceleration, forces)
- machine learning (curvature, convexity)
- stability analysis
