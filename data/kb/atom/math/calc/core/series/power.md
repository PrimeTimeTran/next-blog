---
tags:
  - math
  - calculus
  - series
---

# 🔢 Power Series (Atom)

A power series is an **infinite polynomial** used to represent functions as sums of powers of $x$

---

# 🧠 Core Idea

> A function can be approximated (or exactly represented) by an infinite sum of powers.

This turns complicated functions into **polynomials**, which are easier to work with.

---

# 📐 Definition

$$
\sum_{n=0}^{\infty} a_n (x - c)^n
$$

Where:

- \(a_n\) = coefficients
- \(c\) = center of the series
- \(x\) = variable

---

# 🟦 Special Case (Centered at 0)

$$
\sum_{n=0}^{\infty} a_n x^n
$$

Called a **Maclaurin series**.

---

# 📊 Radius of Convergence

A power series only works within a certain range:

$$
|x - c| < R
$$

- \(R\) = radius of convergence
- inside → series converges
- outside → diverges

---

# 🧠 Why It Matters

Power series allow you to:

- approximate functions
- compute difficult integrals
- solve differential equations
- analyze behavior near a point

---

# 🔁 Common Examples

## Geometric Series

$$
\sum_{n=0}^{\infty} x^n = \frac{1}{1 - x}, \quad |x| < 1
$$

---

## Exponential Function

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

---

## Sine Function

$$
\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}
$$

---

## Cosine Function

$$
\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}
$$

---

# 🧩 Convergence Behavior

- may converge everywhere (e.g., \(e^x\))
- may converge only in a finite interval
- endpoints must be tested separately

---

# 🔧 Operations on Power Series

Within the radius of convergence, you can:

- differentiate term-by-term
- integrate term-by-term
- add and multiply series

---

# 🔗 Connections

- [[taylor]] → specific power series using derivatives
- [[maclaurin]] → centered at 0
- [[sequence]] & [[series]] → convergence theory
- [[differential-equation]] → solving via series

---

# 🧠 Mental Model

> Power series turn functions into infinite polynomials you can manipulate.

---

# 📌 Summary

A power series expresses a function as an infinite sum of powers, enabling approximation, analysis, and computation across calculus and applied mathematics.

# 📈 What a power series actually is

A power series has the form:
$\sum a_n (x - c)^n$

It behaves like a **machine that depends on $x$**, and its behavior changes based on where you are relative to $c$.

---

## ⚙️ Core properties (what actually matters)

### 1. It defines a function (inside its interval)

Inside its radius of convergence, the series:

- converges to a **well-defined function**
- can be treated like a “normal function”

---

### 2. There is a radius of convergence $R$

- Converges when $|x - c| < R$
- Diverges when $|x - c| > R$
- Endpoints must be checked separately

So the real object is:

> a **region where the series behaves nicely**

---

### 3. Smoothness (huge property)

Inside the interval of convergence:

- infinitely differentiable
- can differentiate term-by-term
- can integrate term-by-term

That’s one of the biggest reasons they matter.

---

### 4. They represent functions locally

This is the key idea you’re circling:

> A power series is a **local approximation of a function around $c$**

Not global—just near $c$.

That’s why:

- Taylor series = power series representation of a function
- Maclaurin = Taylor centered at $0$

---

### 5. Different behavior outside the radius

Outside $R$:

- the series diverges
- often “blows up” or becomes meaningless

So it has a **hard boundary of validity**

---

## ❌ What it is NOT

- Not inherently oscillatory
- Not like $\sin x$ in structure
- Not “always converging and diverging everywhere”

Oscillation only shows up if the _resulting function_ oscillates.

Example:

- $\sum \frac{x^n}{n!} = e^x$ → no oscillation
- $\sum (-1)^n x^n$ → alternating behavior depends on $x$

---

## 🧠 Clean intuition

Think of a power series as:

> “A function that only exists nicely inside a circle around $c$”

Inside:

- smooth, differentiable, usable

Outside:

- breaks down completely

---

## 🔑 One-line summary

A power series is a **locally valid infinite polynomial representation of a function with a strict convergence region**, not an oscillating object like trig functions.
