---
tags:
  - fundamentals
  - atom
type: atom
---

# 🧠 Core Idea

Calculus 2 extends Calculus 1 by focusing on **advanced integration techniques** and **infinite processes**. It teaches you to compute complex integrals and understand infinite sums and series.

> Calculus 2 is about mastering integration and exploring the behavior of infinite sequences—essential for modeling continuous systems and infinite processes.

---

# 📌 Intuition

Think of Calculus 2 as **scaling up integration** to handle real-world complexity:

- **Advanced Integration**: Like having a toolkit of techniques to "undo" any derivative
- **Infinite Series**: Like understanding what happens when you add infinitely many terms
- **Applications**: Using integration to find areas, volumes, and other geometric quantities

**Why it matters**: Many physical phenomena (waves, oscillations, growth) are modeled using the tools of Calc 2. It's the bridge between basic calculus and advanced mathematics.

---

# 🧩 Key Properties

1. **Integration mastery** — Learn systematic ways to compute antiderivatives
2. **Infinite processes** — Understand convergence and divergence of series
3. **Geometric applications** — Use integration for areas, volumes, and surfaces
4. **Coordinate systems** — Work with parametric and polar representations

---

# ⚙️ How It Works

## The Big Picture

Calculus 2 builds on Calc 1 with these major themes:

### 1. Advanced Integration Techniques

- Integration by substitution (reverse chain rule)
- Integration by parts (reverse product rule)
- Trigonometric integrals and substitutions
- Partial fractions for rational functions

### 2. Applications of Integration

- Area between curves
- Volume of solids of revolution (disk/washer method)
- Arc length and surface area
- Work and fluid pressure

### 3. Sequences and Series

- Convergence tests (ratio, root, comparison, integral)
- Power series and radius of convergence
- Taylor and Maclaurin series
- Representing functions as infinite polynomials

### 4. Parametric Equations and Polar Coordinates

- Curves defined by parametric equations
- Polar coordinate system and integration
- Area in polar coordinates

### 5. Differential Equations

- Separation of variables
- First-order linear equations
- Applications to growth/decay problems

---

# 📚 Examples

## Example 1: Integration by Parts

**Find** $\int x e^x \ \, dx$

Using integration by parts: $\int u \, dv = uv - \int v \, du$

Let $u = x$, $dv = e^x dx$

Then $du = dx$, $v = e^x$

$$\int x e^x \ \, dx = x e^x - \int e^x \ \, dx = x e^x - e^x + C = e^x(x - 1) + C$$

## Example 2: Volume of Revolution

**Find volume of solid formed by rotating** $y = x^2$ **from 0 to 1 around x-axis**

Using disk method: $V = \pi \int_0^1 (x^2)^2 \, dx = \pi \int_0^1 x^4 \, dx = \pi [\frac{x^5}{5}]_0^1 = \frac{\pi}{5}$

## Example 3: Series Convergence

**Does** $\sum_{n=1}^\infty \frac{1}{n^2}$ **converge?**

Using p-series test: converges when p > 1, here p = 2 > 1, so converges to $\\frac{\pi^2}{6}$.

## Example 4: Parametric Equations

**Find the length of** $x = t^2$, $y = 2t$ **from t=0 to t=1**

Arc length: $L = \int_0^1 \sqrt{(dx/dt)^2 + (dy/dt)^2} \, dt = \int_0^1 \sqrt{(2t)^2 + 2^2} \, dt = \int_0^1 \sqrt{4t^2 + 4} \, dt$

---

# 💡 Key Insights

1. **Integration techniques are systematic** — Each method reverses a differentiation rule
2. **Series convergence determines behavior** — Infinite sums can converge to finite values or diverge to infinity
3. **Geometric intuition helps** — Many integration applications have clear geometric interpretations
4. **Parametric/polar extend Cartesian** — Different coordinate systems make some problems easier
5. **Differential equations model change** — They describe how quantities evolve over time

---

# ⚠️ Common Mistakes

1. **Wrong integration by parts choice** — Pick u and dv carefully (u should be easy to differentiate)
2. **Forgetting absolute value in arc length** — Always take the positive square root
3. **Misapplying convergence tests** — Each test has specific conditions
4. **Confusing parametric vs polar** — Parametric uses t as parameter; polar uses angle θ
5. **Skipping the +C** — Even definite integrals start as indefinite

---

# 🔗 Related Concepts

- [[calc-1-fundamentals]] — Builds directly on Calc 1 integration
- [[Antiderivative]] — Foundation for integration techniques
- [[atom/math/calc/core/derivatives/7-rules-of-differentiation/overview|7-rules-of-differentiation]] — Integration reverses these rules
- [[fundamental-theorem-of-calculus]] — Connects differentiation and integration
- [[taylor]] — Power series representation of functions
- [[Differential Equations]] — Modeling with derivatives
- [[calculus|Calculus Hub]] — Part of the broader calculus progression
