---
tags:
  - math
  - calculus
  - integrals
---

# 🧠 Integration of Rational Functions (Atom)

Integration of rational functions is the process of integrating expressions of the form:

$$
\frac{P(x)}{Q(x)}
$$

where \(P(x)\) and \(Q(x)\) are polynomials.

---

# 🧠 Core Idea

> Break complex fractions into simpler pieces that can be integrated directly.

---

# ⚙️ Main Strategy

The standard approach depends on the relationship between degrees of \(P(x)\) and \(Q(x)\):

---

## 🟦 Step 1: Improper vs Proper

### If:

$$
\deg(P) \ge \deg(Q)
$$

👉 Perform **polynomial long division** first

---

### If:

$$
\deg(P) < \deg(Q)
$$

👉 Proceed to decomposition directly

---

# 🧩 Step 2: Partial Fraction Decomposition

Rewrite:

$$
\frac{P(x)}{Q(x)} = \text{sum of simpler fractions}
$$

---

## 📊 Common Forms

### 1. Distinct linear factors

$$
\frac{1}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}
$$

---

### 2. Repeated linear factors

$$
\frac{1}{(x-a)^n}
$$

becomes:

$$
\frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \dots
$$

---

### 3. Irreducible quadratics

$$
x^2 + bx + c \quad (\text{no real roots})
$$

form:

$$
\frac{Ax + B}{x^2 + bx + c}
$$

---

# 📐 Step 3: Integrate Each Term

Once decomposed:

## 🔹 Log forms

$$
\int \frac{1}{x-a} dx = \ln|x-a|
$$

---

## 🔹 Quadratic forms

Often lead to:

- arctan
- completing the square

Example:

$$
\int \frac{1}{x^2 + a^2} dx = \frac{1}{a}\arctan\left(\frac{x}{a}\right)
$$

---

# 🧠 Intuition

> Turn one complicated rational expression into many simple “known integrals.”

---

# ⚙️ When to Use

Use this method when:

- integrand is a ratio of polynomials
- direct substitution doesn’t simplify
- integration by parts is not helpful

---

# 🔁 Workflow Summary

1. Check degree (division if needed)
2. Factor denominator
3. Split into partial fractions
4. Integrate term-by-term

---

# 🔗 Connections

- [[Polynomial Long Division]] → preprocessing step
- [[Partial Fraction Decomposition]] → core technique
- [[Logarithmic Integrals]] → frequent outcome
- [[Arctangent Integrals]] → quadratic cases
- [[integration-techniques|]] → broader framework

---

# 🧠 Mental Model

> “Decompose a complex ratio into a sum of simple known shapes.”

---

# 📌 Summary

Integration of rational functions uses algebraic decomposition to convert complex fractions into simpler integrals involving logarithms and inverse trig functions.
