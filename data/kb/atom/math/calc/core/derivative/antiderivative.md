---
tags:
  - calc-1
  - derivatives
  - atom
type: atom
---

# 🧠 Core Idea

An antiderivative is a function whose derivative equals a given function. It's the **inverse operation of differentiation**.

> If $f'(x) = g(x)$, then $f(x)$ is an antiderivative of $g(x)$.

$$\int g(x) \ \, dx = f(x) + C$$

---

# 📌 Intuition

Think of antiderivatives as **"working backwards"**:

- **Derivative**: You have a function, and you find its rate of change
- **Antiderivative**: You have a rate of change, and you find the original function

**Visual analogy**:

- If velocity (speed over time) is the derivative of position
- Then position is the antiderivative of velocity

The constant $C$ appears because many different functions can have the same derivative. For example:

- $\frac{d}{dx}(x^2) = 2x$
- $\frac{d}{dx}(x^2 + 5) = 2x$
- $\frac{d}{dx}(x^2 - 10) = 2x$

All have the same derivative! So when you find an antiderivative, you get a **family of functions** differing only by a constant.

---

# 🧩 Key Properties

1. **Inverse of differentiation** — The fundamental inverse operation
2. **Family of solutions** — The constant of integration $C$ represents infinitely many valid antiderivatives
3. **Not unique** — Every function has infinitely many antiderivatives (one for each value of $C$)
4. **Connected to integration** — The antiderivative and indefinite integral are the same concept

---

# ⚙️ How It Works

## Definition

An antiderivative $F(x)$ of a function $f(x)$ satisfies:

$$F'(x) = f(x)$$

## Relationship to Indefinite Integrals

The notation $\int f(x) \ \, dx$ means: "Find all antiderivatives of $f(x)$"

The result is written as:

$$\int f(x) \ \, dx = F(x) + C$$

where $C$ is the **constant of integration** (representing all possible constants).

## Power Rule for Integration

The most fundamental rule (inverse of power rule for derivatives):

$$\int x^n \ \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

## Other Integration Rules

- **Constant multiple**: $\int k \cdot f(x) \ \, dx = k \int f(x) \ \, dx$
- **Sum rule**: $\int [f(x) + g(x)] \ \, dx = \int f(x) \ \, dx + \int g(x) \ \, dx$

---

# 📚 Examples

## Example 1: Simple Power Function

**Find the antiderivative of** $f(x) = 2x$

$$\int 2x \ \, dx$$

1. Factor out the constant:
   $$2 \int x \ \, dx$$

2. Apply power rule ($\int x^1 \ \, dx = \frac{x^2}{2}$):
   $$2 \cdot \frac{x^2}{2} + C$$

3. Simplify:
   $$x^2 + C$$

**Check**: $\frac{d}{dx}(x^2 + C) = 2x$ ✓

## Example 2: Polynomial

**Find the antiderivative of** $f(x) = 3x^2 - 4x + 1$

$$\int (3x^2 - 4x + 1) \ \, dx$$

Apply power rule to each term:

$$= 3 \cdot \frac{x^3}{3} - 4 \cdot \frac{x^2}{2} + 1 \cdot x + C$$

$$= x^3 - 2x^2 + x + C$$

**Check**: $\frac{d}{dx}(x^3 - 2x^2 + x + C) = 3x^2 - 4x + 1$ ✓

---

# 💡 Key Distinctions

## Antiderivative vs. Indefinite Integral

These terms are often used interchangeably, but they have subtle differences:

- **Antiderivative**: A specific function $F(x)$ such that $F'(x) = f(x)$
- **Indefinite Integral**: The entire family of antiderivatives, including the constant of integration $C$

In practice, both refer to the same process and result.

---

# ⚠️ Important Notes

1. **The constant $C$ is crucial** — Never forget it for indefinite integrals
2. **Many functions don't have "nice" antiderivatives** — Some require advanced techniques or can't be expressed in elementary functions
3. **Antiderivatives are used for integration** — The Fundamental Theorem of Calculus connects antiderivatives to definite integrals

---

# 🔗 Related Concepts

- [[Derivatives]] — The operation that antiderivatives reverse
- [[Indefinite Integrals]] — The formal integration process
- [[Definite Integrals]] — Integration with bounds (produces a number, not a family of functions)
- [[fundamental-theorem-of-calculus]] — Connects antiderivatives to areas and definite integrals
- [[7 Rules of Differentiation]] — Understanding these helps you recognize which functions have which antiderivatives
