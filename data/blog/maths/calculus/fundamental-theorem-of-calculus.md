---
draft: true
date: '2025-01-03'
title: 'Fundamental Theorem of Calculus'
summary: ''
tags: ['calculus', 'fundamental theorem of calculus']
---

# Fundamental Theorem of Calculus

The difference between the value of a function f at x = b and it's value at x = a equals the integral of it's derivative from the bounds x = a to x = b.

$$
\int _{a}^{b} f'(x) \, dx = f(b) - f(a)
$$

> "The integral of the derivative across the bounds is equal to the original function at the bounds."

We're commonly provided with $𝑓′(𝑥)f′(x)$ as the function we want to integrate, this is typically expressed as

$$
\int_{a}^{b} f(x)dx = F(b) - F(a)
$$

or in slightly different notation

$$
\int_{a}^{b} f(x)dx = F(x) |  {_a^b}
$$

where `𝐹(𝑥)` is an [[antiderivative]] of `𝑓(𝑥)`, which means that the derivative of `𝐹(𝑥)` is `𝑓(𝑥)`.

## Leibniz Notation:

$$
\frac {dF}{dx} = \frac {d}{dx}\left[ \int _{a}^x f(t)dt \right] = f(x)
$$

- Connects differential & integral calculus.
- Connection between derivatives & integration.
- Every continuous function has an antiderivative, $F(x)$.

$$
\int_{a}^{b} f(x)dx = F(b) - F(a) = F(x) |  {_a^b}
$$

## 2 Parts of Fundamental Theorem of Calculus

### Part 1:

If `f` is continuous on `[a,b]` and `F` is an antiderivative of `f` on `[a,b]` then:

$$
\int_{a}^{b} f(x)dx = F(b) - F(a) = F(x) |  {_a^b}
$$

### Part 2:

If `f` is continuous real-valued function defined on a closed interval `[a,b]`, then the function `F` defined by: $$F(x) = \int _{a}^{x}  f(t)\,dt$$
for `x` in `[a,b]`, is continuous on `[a,b]`, differentiable on the open interval `(a,b)`, and `F'(x) = f(x)`.

# Conclusion

The lowercase `f` is the function you integrate, and the uppercase `F` is the function you obtain after integration, which is also the antiderivative of `f`.

## References

- All of Multivariable Calculus in One Formula
  - https://www.youtube.com/watch?v=Jk_k3q9RoMU&t=127s
