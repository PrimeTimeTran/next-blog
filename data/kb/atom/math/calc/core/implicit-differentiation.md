# Implicit Differentiation

## Core Idea

Implicit differentiation is used when a relationship between variables is **not solved for one variable explicitly** (e.g., not written as $y = f(x)$).

Instead, you differentiate **both sides of the equation with respect to $x$**, treating $y$ as a function of $x$.

---

## Key Principle

Whenever you differentiate a term involving $y$, you must apply the **chain rule**:

$$
\frac{d}{dx}[y] = \frac{dy}{dx}
$$

$$
\frac{d}{dx}[y^n] = n y^{n-1} \frac{dy}{dx}
$$

---

## General Strategy

1. Differentiate both sides with respect to $x$
2. Treat $y$ as a function of $x$
3. Apply the chain rule whenever differentiating $y$
4. Collect all $\frac{dy}{dx}$ terms on one side
5. Factor out $\frac{dy}{dx}$
6. Solve for $\frac{dy}{dx}$

---

## Example

Given:

$$
x^2 + y^2 = 25
$$

Differentiate both sides:

$$
2x + 2y \frac{dy}{dx} = 0
$$

Solve for $\frac{dy}{dx}$:

$$
2y \frac{dy}{dx} = -2x
$$

$$
\frac{dy}{dx} = \frac{-2x}{2y} = -\frac{x}{y}
$$

---

## When to Use It

- Equations like $x^2 + y^2 = 25$ (circles)
- Relations where solving for $y$ is difficult or messy
- Situations with multiple $y$ terms mixed with $x$

---

## Common Pitfalls

- Forgetting the $\frac{dy}{dx}$ when differentiating $y$
- Not factoring correctly when solving for $\frac{dy}{dx}$
- Treating $y$ as a constant (it’s not!)

---

## Motivating Problem

Find $\frac{dy}{dx}$ for:

$$
x^2 y + y^3 = 10
$$

_(Try it before expanding the solution—this one forces you to use both product rule and implicit differentiation together.)_
