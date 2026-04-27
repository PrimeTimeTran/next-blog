---
tags:
  - calculus
  - calc-1
  - limits
---

# 📘 Evaluating Limits

Evaluating limits is the process of finding what value a function approaches as the input approaches a given point.

---

# 🧠 Core Idea

> A limit asks what happens near a point, not necessarily at the point.

---

# 📊 General Form

$$
\lim_{x \to a} f(x)
$$

We are asking:

> what value does $f(x)$ approach as $x$ gets close to $a$?

---

# 🧩 Main Strategies

## 1. Direct Substitution

If $f(x)$ is continuous:

$$
\lim_{x \to a} f(x) = f(a)
$$

---

## 2. Factoring

Used when substitution gives indeterminate form:

$$
\frac{0}{0}
$$

Example idea:

- factor numerator and denominator
- cancel common terms
- substitute again

---

## 3. Rationalizing

Used with roots:

- multiply by conjugate
- eliminate square roots
- simplify expression

---

## 4. Common Trigonometric Limits

Key identities:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

$$
\lim_{x \to 0} \frac{1 - \cos x}{x} = 0
$$

---

## 5. Squeeze Theorem

Used when a function is trapped between two simpler functions with known limits.

---

## 6. Infinite Limits / Behavior at Infinity

Used when $x \to \infty$:

- compare highest powers
- divide by dominant term
- analyze decay/growth

---

# ⚠️ Indeterminate Forms

Common forms that require work:

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$
- $0 \cdot \infty$
- $\infty - \infty$
- $0^0, \infty^0, 1^\infty$

---

# 🧠 Key Insight

> Limits are not computed by substitution alone — they are computed by simplifying behavior near the point.

---

# 🔗 Related Concepts

- [[continuity-in-limits|Continuity in Limits]]
- [[difference-quotient|Difference Quotient]]
- [[squeeze-theorem|Squeeze Theorem]]
- [[intermediate-value-theorem|Intermediate Value Theorem]]

---

# 🧭 Mental Model

> You are not evaluating the function at a point — you are analyzing its behavior as it approaches that point.

---

# 📌 Summary

- Limits describe approaching behavior
- Multiple techniques exist depending on structure
- Indeterminate forms require algebraic or analytic simplification
- Core idea: simplify first, then evaluate
