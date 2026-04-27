---
tags:
  - fundamentals
  - atom
type: atom
---

# 🧠 Core Idea

Calculus 1 is the study of **instantaneous change** and **accumulation**. It provides tools to measure how quantities change at a single moment and how they accumulate over intervals.

> Calculus 1 teaches you to find slopes of curves and areas under curves—two fundamental operations that describe the physical world.

---

# 📌 Intuition

Think of calculus as **zooming in infinitely close** to understand local behavior:

- **Derivatives**: Like taking a microscope to a curve to see its slope at one point
- **Integrals**: Like adding up infinitely many tiny pieces to find the total area

**Why it matters**: The real world is continuous, not discrete. Calculus lets you model motion, growth, optimization, and accumulation that happen continuously over time or space.

---

# 🧩 Key Properties

1. **Built on limits** — Everything in calculus 1 is defined using limits
2. **Two main operations** — Differentiation (finding rates) and integration (finding totals)
3. **Inverse operations** — Derivatives and integrals are opposites of each other
4. **Foundation for higher math** — Essential for physics, engineering, economics, and data science

---

# ⚙️ How It Works

## The Big Picture

Calculus 1 progresses through these interconnected concepts:

### 1. Limits and Continuity

- Define what happens as variables approach values
- Foundation for all other concepts
- [[atom/math/calc/1/limits/limits]], [[Continuity in Limits]]

### 2. Derivatives

- Measure instantaneous rates of change
- Slope of tangent line to a curve
- [[Derivatives]], [[definition-of-derivative]], [[7-rules-of-differentiation]]

### 3. Applications of Derivatives

- Find maximum/minimum values (optimization)
- Analyze function behavior (increasing/decreasing, concavity)
- Solve related rates problems

### 4. Integrals

- Measure accumulation (area under curves)
- Inverse operation of differentiation
- [[Antiderivative]]

### 5. Fundamental Theorem of Calculus

- Connects derivatives and integrals
- The bridge between the two halves of the course

---

# 📚 Examples

## Example 1: Rate of Change → Derivative

**Problem**: A square's side grows at 2 cm/s. How fast does its area grow?

**Solution**: Area $A = s^2$, where $s$ is side length.

Derivative: $\frac{dA}{ds} = 2s$

If $s = 3$ cm, area grows at $2 \times 3 = 6$ cm²/s.

## Example 2: Accumulation → Integral

**Problem**: Find the area under $f(x) = x^2$ from 0 to 1.

**Solution**: $\int_0^1 x^2 \, dx = \frac{1}{3}$

This represents the total accumulation of the function over that interval.

## Example 3: Optimization

**Problem**: Maximize revenue $R(x) = x(100 - x)$ for price $x$.

**Solution**: Derivative $R'(x) = 100 - 2x = 0$ → $x = 50$

Maximum revenue at price $50.

---

# 💡 Key Insights

1. **Limits are the foundation** — Without limits, no derivatives or integrals
2. **Derivatives measure local behavior** — How fast is it changing right now?
3. **Integrals measure global behavior** — How much has accumulated over time?
4. **The Fundamental Theorem connects everything** — Differentiation and integration are inverse operations
5. **Calculus models continuous processes** — Real-world phenomena like motion, growth, and optimization

---

# ⚠️ Common Mistakes

1. **Confusing average vs instantaneous rate** — Average rate uses finite intervals; instantaneous uses limits
2. **Forgetting the constant of integration** — Indefinite integrals always include +C
3. **Thinking derivatives and integrals are unrelated** — They're inverse operations connected by the Fundamental Theorem
4. **Skipping limits** — You can't understand derivatives without limits
5. **Not checking domains** — Functions must be defined where you're working

---

# 🔗 Related Concepts

- [[atom/math/calc/1/limits/limits]] — The mathematical foundation
- [[Derivatives]] — Core concept of instantaneous change
- [[Antiderivative]] — The inverse of differentiation
- [[7 Rules of Differentiation]] — How to compute derivatives efficiently
- [[fundamental-theorem-of-calculus]] — The unifying principle
- [[calculus-symbols-cheatsheet]] — Essential notation reference
- [[calculus|Calculus Hub]] — Broader progression across calculus courses

## Rates of change

Calculus describes one of the most fundamental aspects of the physical world: how things change over time. To make use of it, we describe problems in terms of functions and their graphs.

As the sides of a square grow at a constant rate, its area grows faster and faster. While we can approximate that rate over an interval, we’ll need new tools to find how it's changing at any single moment.

The tangent line is the instantaneous rate of change. But it isn't the slope. We must have a new way to find the slope because we only have 1 point which means we cannot find the rise over run.

## Rate of change: Practice Questions:

## Rate of change: Challenge Questions

## Instantaneous Rate of Change

## Instantaneous Rate of Change: Practice Questions

## Instantaneous Rate of Change: Challenge Questions

## The Derivative

We've learned how to use the slope of a secant line between two very close points to estimate the value of the tangent line. This also gave us the instantaneous growth rate of the square.

**Finite to Infinitely Small**
`Δx` represents a finite change in the value of `x` while `dx` represents an infinitely small change in the value of `x`.

$$
\frac{dA}{dx} = 2x
$$

$$
A'(x) = 2x
$$

## The Derivative: Practice Questions

## The Derivative: Challenge Questions

## Applying the Derivative: Optimization

## Optimization Practice Problems

## Optimization Challenge Problems

## What is a derivative?

## What are Derivatives for?

## How are Derivatives found?

## Application: Optimization

## What is an Integral?

## How are Integrals found?

## Application: Gabriel's Horn

## Sequences

## What is an Infinite Sum?

## The Tower of Lire

## What are Infinite Sums for?

## Sine & Cosine

## Euler's Formula

## Taylor Series

## Limits

## Continuity
