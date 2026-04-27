---
tags:
  - calculus
  - calc-1
  - derivatives
  - differentiation-rules
---

# 📘 Difference Rule

The difference rule is a basic differentiation rule for subtracting functions.

---

# 🧠 Core Idea

> The derivative of a difference is the difference of the derivatives.

---

# 📊 Rule

If:

$$
f(x) - g(x)
$$

then:

$$
\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)
$$

---

# 🔍 Meaning

You can differentiate each part separately:

- differentiate the first function
- differentiate the second function
- subtract results

---

# 📈 Why it works

Derivatives are linear operators, meaning:

- they distribute over addition
- they distribute over subtraction

So:

$$
\frac{d}{dx}(f - g) = \frac{d}{dx}(f) - \frac{d}{dx}(g)
$$

---

# 🧮 Example

If:

$$
h(x) = x^3 - 5x^2
$$

Then:

- derivative of $x^3$ is $3x^2$
- derivative of $5x^2$ is $10x$

So:

$$
h'(x) = 3x^2 - 10x
$$

---

# ⚠️ Common Mistake

Do NOT treat subtraction as a special case:

- you don’t “combine first”
- you differentiate term by term

---

# 🧠 Key Insight

> Differentiation respects addition and subtraction structure.

This is part of the broader **linearity of derivatives**.

---

# 🔗 Related Rules

- [[sum-rule|Sum Rule]]
- [[power-rule|Power Rule]]
- [[chain-rule|Chain Rule]]
- [[product-rule|Product Rule]]
- [[quotient-rule|Quotient Rule]]

---

# 🧭 Mental Model

> Each term in an expression can be differentiated independently.

---

# 📌 Summary

- Derivative distributes over subtraction
- Differentiate each term separately
- Subtract results
- Works because differentiation is linear
