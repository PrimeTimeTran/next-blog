---
tags:
  - calculus
  - integration
  - patterns
  - techniques-of-integration
---

# 📘 Pattern: Integration Strategy Selection

This note helps you decide **which integration method to use before solving**.

---

# 🧠 Core Idea

Integration is not about computing immediately.

It is about:

> Recognizing structure → choosing the correct tool

---

# 🧭 Step 0: Always Ask First

Before any method, ask:

- Can I simplify algebraically?
- Can I split the integral?
- Can I rewrite the expression?

If yes → do it first.

---

# 📊 1. Basic Rules First (Always Check)

Use directly if the integrand matches:

- Polynomials → power rule
- Simple sums → linearity
- \(e^x\), \(\sin x\), \(\cos x\)
- \(\frac{1}{x}\)

👉 If it fits cleanly, **do NOT overcomplicate**

---

# 🔁 2. Substitution Pattern (u-sub)

Use when you see:

> A function inside another function + its derivative nearby

### Look for:

- chain structure
- parentheses
- composite expressions

### Pattern form:

$$
f(g(x)) \cdot g'(x)
$$

👉 Example triggers:

- \((x^2 + 1)^5\)
- \(x e^{x^2}\)
- \(\frac{2x}{x^2 + 1}\)

---

# 🔗 3. Integration by Parts

Use when:

> Product of two different “types” of functions

### Pattern:

- polynomial × exponential
- polynomial × trig
- log × anything

### Form:

$$
\int u \, dv
$$

👉 Typical trigger:

- \(x e^x\)
- \(x \sin x\)
- \(\ln x\)

---

# 🔺 4. Trigonometric Substitution

Use when:

> Square roots of quadratic expressions

### Patterns:

- \(a^2 - x^2\)
- \(a^2 + x^2\)
- \(x^2 - a^2\)

👉 Signals:

- radicals involving quadratics
- circles / geometry structure

---

# 📐 5. Partial Fractions

Use when:

> Rational function (polynomial / polynomial)

### Pattern:

$$
\frac{P(x)}{Q(x)}
$$

where degree(P) < degree(Q)

👉 Steps:

- factor denominator
- split into simpler fractions

---

# 🔄 6. Trig Identities

Use when:

> Powers/products of trig functions

### Patterns:

- \(\sin^m x \cos^n x\)
- \(\tan x, \sec x\) combinations

👉 Strategy:

- convert using identities
- reduce powers

---

# 📊 Decision Tree (Quick Mental Model)

1. Is it basic function? → direct rules
2. Composite structure? → substitution
3. Product of unlike functions? → integration by parts
4. Rational function? → partial fractions
5. Trig powers/products? → trig identities
6. Square root quadratic? → trig substitution

---

# ⚠️ Common Mistake

Trying to “compute immediately” instead of:

> identifying structure first

---

# 🧠 Key Insight

> Integration is a pattern recognition problem before it is a calculation problem.

---

# 🔗 Related

- [[basic-integration-rules]]
- [[u-substitution]]
- [[integration-by-parts]]
- [[partial-fractions]]
- [[trigonometric-substitution]]
