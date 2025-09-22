---
draft: true
date: '2025-01-03'
title: ''
summary: ''
tags: ['maths', 'calculus']
---

# Introduction

## Series

Adding up numbers given a pattern

### Power Series

Summation of the coefficient
$$\sum_{n=1}^{\infty}  {C}_{n}x^{n}$$

$$\sum_{n=1}^{\infty}  {C}_{n}x^{n} = {C}_{0}x^{0} + {C}_{1}x^{1} + {C}_{2} x^{2} + \space ...$$

#### Benefits

Used to approximate difficult functions

### Taylor Series

Specialty: Series expansion of a function about a specific point.

$$\sum_{n=0}^{\infty}  {\frac{f^{n}(a)}{n!}}(x-a)^2$$

Outputs a polynomial: Taylor Polynomial

$$= f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x+a)^2 $$

Approximation of a function at a certain point.

Increase the value of n creates a more accurate approximation of the function

### Convergence & Divergence

### Convergence

Partial sums approach a certain value
$$\sum_{k=0}^{\infty}(-\frac{1}{2})^k = \frac{1}{1-(-\frac{1}{2})} = \frac{2}{3}$$

$$1 - \frac{1}{2} + \frac{1}{4} - \frac{1}{8} + \space ... \space = \frac{2}{3}$$

### Divergence

Partial sums usually approach -+ infinity

$$\sum_{n=0}^{\infty}2^{n} = 1 + 2 + 4 + 8 + 16 + \space ... $$

$$


## Ratio Test

The ratio test is a method used to determine the convergence or divergence of infinite series, especially those involving factorials or exponentials.

$$
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$


- **Statement:** For a series \( \sum a_n \), compute \( L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| \).
- **If** \( L < 1 \): The series converges absolutely.
- **If** \( L > 1 \) or \( L = \infty \): The series diverges.
- **If** \( L = 1 \): The test is inconclusive.
- Commonly used for series with factorials, powers, or exponential terms.
- Helps quickly identify convergence for many common series in calculus.

## Integrals

### Rules
- Power Rule
  $$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$$
- Exponential
  $$\int e^{x} \, dx = e^{x} + C$$
- Constant Multiples
  $$\int a f(x) \, dx = a \int f(x) \, dx$$
- Absolute Values
  $$\int |x| \, dx = \frac{1}{2}x|x| + C$$
- Sum & Differences
  $$\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$$


# Conclusion

## References
- https://www.youtube.com/watch?v=8uNod-pxvXg
$$
