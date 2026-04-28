---
tags:
  - math
  - calculus
  - integrals
---

# 🧠 Integration Techniques (Atom)

Integration techniques are methods used to evaluate integrals that are not directly solvable using basic rules.

---

# 🧠 Core Idea

> Choose a transformation that makes the integral simpler.

Different integrals require different strategies—there is no single algorithm.

---

# 🧩 Main Techniques Overview

---

## 1. Substitution (u-substitution)

Used when an integral contains a composition of functions.

### Idea:

> Reverse the chain rule

### Pattern:

$$
\int f(g(x))g'(x)\,dx
$$

### Strategy:

Let:

- $u = g(x)$

Then rewrite everything in terms of $u$.

---

## 2. Integration by Parts

Used for products of functions.

### Formula:

$$
\int u\,dv = uv - \int v\,du
$$

### Idea:

> Reverse the product rule

---

## 3. Partial Fractions

Used for rational functions:

$$
\frac{P(x)}{Q(x)}
$$

### Idea:

> Break complex fractions into simpler pieces

---

## 4. Trigonometric Integrals

Used when integrand involves trig powers/products:

- $\sin^m x \cos^n x$
- $\tan^m x \sec^n x$

### Idea:

> Use identities to simplify structure

---

## 5. Trigonometric Substitution

Used for expressions involving radicals:

- $\sqrt{a^2 - x^2}$
- $\sqrt{x^2 + a^2}$
- $\sqrt{x^2 - a^2}$

### Idea:

> Convert algebraic expressions into trig identities

---

## 6. Improper Integrals

Used when:

- bounds are infinite
- function is undefined at a point

### Idea:

> Replace with limits

---

## 7. Numerical Integration

Used when no closed form exists:

- Trapezoidal Rule
- Simpson’s Rule

### Idea:

> Approximate area using discrete sums

---

# 🔁 How to Choose a Method

---

## Step 1: Identify structure

- product → integration by parts
- composition → substitution
- rational function → partial fractions
- trig powers → trig identities
- radicals → trig substitution

---

## Step 2: Simplify first

Before applying any method:

- algebraic simplification
- factoring
- rewriting expressions

---

# 🧠 Mental Model

> Integration is pattern recognition + transformation

You are not solving directly—you are:

- reshaping the integral
- until it matches a known form

---

# 🔗 Connections

- [[Indefinite Integrals]] → antiderivative goal
- [[Substitution]] → inverse chain rule
- [[Integration by Parts]] → inverse product rule
- [[Definite Integrals]] → evaluation after simplification
- [[Series Methods]] → advanced approximation techniques

---

# 📌 Summary

Integration techniques are a toolkit for rewriting integrals into simpler equivalent forms that can be solved using basic rules or known identities.
