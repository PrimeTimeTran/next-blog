---
tags:
  - calc-1
  - atom
type: atom
---

# 🧠 Core Idea

A derivative is a function that measures the instantaneous rate of change of another function at any given point.

> The derivative tells you how fast something is changing at an exact moment.

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

---

# 📌 Intuition

Think of derivatives in three complementary ways:

**Graphical view**: The slope of the tangent line touching the graph at point $x$

**Physical view**: The instantaneous velocity—how fast something is moving right now (not average speed over time)

**Algebraic view**: The ratio of infinitesimally small changes: $\\frac{dy}{dx}$ means "change in y divided by change in x as both become tiny"

---

# ⚙️ How It Works

## Definition from First Principles

The derivative at a point is found by taking the limit of the difference quotient:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

Or equivalently:

$$f'(a) = \lim_{b \to a} \frac{f(b) - f(a)}{b-a}$$

## Key Notation

- $f'(x)$ — "f prime of x" (compact; most common)
- $\\frac{df}{dx}$ — "the derivative of f with respect to x" (explicit; shows variable)
- $\frac{df}{dx}\bigg|_{x=a}$ — derivative evaluated at a specific point $x = a$

## Tangent Line Equation

Once you have the derivative, you can write the equation of the tangent line at point $a$:

$$y = f(a) + f'(a)(x - a)$$

---

# 🧩 Key Properties

1. **Represents instantaneous rate of change** — how fast the function is changing at one exact point
2. **Slope of tangent line** — geometrically, it's the slope of the line that just touches the curve
3. **Usually expressed as a function** — $f'(x)$ is itself a function that can be evaluated at any x
4. **Opposite of integration** — derivatives and integrals are inverse operations

---

# 🔍 Finding Derivatives

Add a small anchor line at the top of that section:

### 🔍 Finding Derivatives

All methods below are ways of evaluating or simplifying the **Newton quotient**:

$$
\frac{f(x+h)-f(x)}{h}
$$

### Method 1: [[first-principles|First Principles]] (from definition)

- Take limit of Newton quotient
  - Use the limit definition directly
  - Works for any function but tedious

### Method 2: [[Difference Quotient]]

- Simplify Newton quotient before limiting

### Method 3: Differentiation Rules (fastest)

- Pre-derived shortcuts from Newton quotient behavior
  - Power rule, chain rule, product rule, etc.
  - [[7 Rules of Differentiation]]

---

# 📚 Examples

**Example 1**: Find the derivative of $f(x) = x^2$

$$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0} (2x + h) = 2x$$

**Example 2**: Find the derivative of $f(x) = x^4 - 2x^2 + 1$

Using power rule: $f'(x) = 4x^3 - 4x$

---

# 💡 When to Use Derivatives

- **Optimization**: Find maximum and minimum values (e.g., maximizing revenue, minimizing cost)
- **Motion analysis**: Find instantaneous velocity and acceleration
- **Curve sketching**: Determine where functions are increasing/decreasing and identify inflection points
- **Machine learning**: Gradient descent uses derivatives to train neural networks
- **Physics**: Velocity, acceleration, and other rates of change

---

# 🎯 Real-World Application

**Maximizing Revenue Problem**: A company charges $x$ dollars per unit. Revenue depends on price (higher price = fewer customers). Using derivatives, we find the price that maximizes total revenue.

- Price too cheap → low revenue per unit (even with many sales)
- Price too expensive → few sales (low total revenue)
- Derivative tells us the optimal sweet spot

---

# 🔗 Related Concepts

- [[derivative|Derivative Notation]] — Notations of derivatives explained
- [[first-principles|First Principles]] — Computing derivatives from the limit definition
- [[7-rules-of-differentiation|7 Rules of Differentiation]] — Power rule, chain rule, product rule
- [[First Derivative Test]] — Using derivatives to find local extrema
- [[Second Derivative Test]] — Using second derivatives for concavity
- [[Second Derivatives]] — What the second derivative tells us
- [[Derivatives of Angles]] — Derivatives of trig functions
- [[calculus-symbols-cheatsheet]] — Reference for all calculus notation
