---
tags:
  - math
  - calculus
  - integration
  - integrals
---

# 📘 Calc I Integration Atlas

## 1. Core Antiderivative Rules

| Function $f(x)$ | Antiderivative                          | Rule Name           |
| --------------- | --------------------------------------- | ------------------- |
| $k$             | $kx + C$                                | Constant rule       |
| $x^n$           | $\frac{x^{n+1}}{n+1} + C$ $(n \neq -1)$ | Power rule          |
| $\\frac{1}{x}$  | $\ln \left\| x \right\|$                | x                   |
| $e^x$           | $e^x + C$                               | Exponential         |
| $a^x$           | $\frac{a^x}{\ln a} + C$                 | General exponential |

---

## 2. Trigonometric Integrals

| Function $f(x)$          | Antiderivative  | Rule Name           |
| ------------------------ | --------------- | ------------------- |
| $\sin x$                 | $-\cos x + C$   | Basic trig          |
| $\cos x$                 | $\sin x + C$    | Basic trig          |
| $\sec^2 x$               | $\tan x + C$    | Derivative identity |
| $\csc^2 x$               | $-\cot x + C$   | Derivative identity |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin x + C$ | Inverse trig        |
| $\\frac{1}{1+x^2}$       | $\arctan x + C$ | Inverse trig        |

---

## 3. Algebraic Patterns

### 🔹 Rational forms

| Function            | Strategy                      |
| ------------------- | ----------------------------- |
| $\\frac{1}{x(x+1)}$ | Partial fractions             |
| $\\frac{1}{x+x^2}$  | $\frac{1}{x} - \frac{1}{x+1}$ |

Result:

$$
\int \frac{1}{x+x^2} dx = \ln\left|\frac{x}{x+1}\right| + C
$$

---

### 🔹 Polynomial × function (substitution candidates)

Look for:

- $x \cdot e^{x^2}$
- $x \cdot \sin(x^2)$
- $(2x)(x^2+1)^n$

Pattern:

> inner function derivative is present

---

## 4. Integration Techniques

---

## 🔷 Substitution (u-sub)

### Pattern:

$$
\int f(g(x))g'(x) \, dx
$$

### Steps:

1. Let $u = g(x)$
2. Replace everything in terms of $u$
3. Integrate
4. Substitute back

---

## 🔷 Integration by Parts

### Formula:

$$
\int u,dv = uv - \int v,du
$$

### When to use:

- product of functions
- logs, inverse trig, polynomials × exponentials

### LIATE rule (choose $u$):

1. Logarithmic
2. Inverse trig
3. Algebraic
4. Trig
5. Exponential

---

## 🔷 Partial Fractions

### Use when:

$$
\text{rational function} = \frac{P(x)}{Q(x)}
$$

### Steps:

1. Factor denominator
2. Split into simpler fractions
3. Integrate term by term

---

## 🔷 Trig Identities

### Key reductions:

$$
\sin^2 x = \frac{1-\cos 2x}{2}, \quad
\cos^2 x = \frac{1+\cos 2x}{2}
$$

Use when:

- powers of trig functions
- no obvious substitution

---

## 5. Definite Integral Framework

### Fundamental Theorem of Calculus:

$$
\int_a^b f(x),dx = F(b) - F(a)
$$

### Workflow:

1. Find antiderivative $F(x)$
2. Evaluate at upper bound
3. Subtract lower bound

---

## 6. Geometric Interpretation

| Expression         | Meaning               |
| ------------------ | --------------------- |
| $\int f(x) \, dx$  | accumulation          |
| $\int_a^b f(x),dx$ | signed area           |
| $\int_0^x f(t),dt$ | running area function |

---

## 7. Riemann Sum (foundation)

### Definition:

$$
\int_a^b f(x),dx = \lim_{n \to \infty} \sum_{k=1}^n f(x_k)\Delta x
$$

### Variants:

- Left sum → underestimate (increasing functions)
- Right sum → overestimate
- Midpoint → best approximation

---

## 8. Common Failure Patterns

### ❌ Forgetting absolute values

$$
\int \frac{1}{x} dx = \ln|x|
$$

### ❌ Missing $+C$

Indefinite integrals always include constant

---

### ❌ Wrong substitution choice

If derivative of inner function is missing → substitution fails

---

## 9. Mental Model (the real point)

| Derivative    | Integral            |
| ------------- | ------------------- |
| local change  | global accumulation |
| slope         | area                |
| instantaneous | total effect        |

---

# 🚀 If you want next upgrade

This atlas becomes extremely powerful if you add:

### 🔷 Visual layer (your idea)

- Desmos / GeoGebra embeds per rule
- Riemann animation blocks
- shaded area examples

### 🔷 Interactive layer (Obsidian plugin idea)

- click rule → graph pops up
- slider for $n$ rectangles
- auto-generated FTC visuals
