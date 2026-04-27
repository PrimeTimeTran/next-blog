---
tags:
  - cal1
  - derivatives
---

# First Derivative Test

The First Derivative Test states that if we are given a continuous and differentiable function `f`, and `c` is a critical number of function `f`, then `f(c)` can be classified as follows:

- If `f'(x)` changes from negative to positive at `c`, then `f(c)` is a **relative minimum**.
- If `f'(x)` changes from positive to negative at `c`, then `f(c)` is a **relative maximum**.
  We just have to graph our data and then look for outliers in the line.

# Critical Points

![[Critical Points]]

# [[Second Derivative Test]]

Can determine local min & max but not global min & max
Consider
$f(x) = x^3$

## [[Saddle Point]]

Are where the line seems about to turn but then corrects and continues.
Not all critical points where $f''(c) = 0$ are saddle points though
Consider
$f(x) = x^4$

# Higher Order Derivative

Written as
$$f^n(x)$$

Is best described in the context of motion.

Let's say the smooth function $x(t)$ describes the position of an object moving along a one-dimensional track at time $t$.

Then $v(t) = x'(t)$ is the instantaneous velocity, and the instantaneous rate of change of the velocity at time $t$ is called the **acceleration**, $a(t)$.

What is the acceleration in terms of $x(t)$?

$$
x''(t)
$$

The instantaneous rate of change of $v$ at time $t$ is

$$
v'(t) = \frac {d}{dt}[ x'(t)  ] = x''(t)
$$

the second derivative of $x(t)$.
