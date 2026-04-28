---
tags:
  - calculus
  - limits
  - indeterminate-forms
  - calc-2
---

# 📘 L’Hôpital’s Rule

L’Hôpital’s Rule is a technique for evaluating limits that produce **indeterminate forms** like $\\frac{0}{0}$ or $\infty/\infty$.

## ![[indeterminate-forms.png]]

# 🧠 Core Idea

> When a limit is unclear due to an indeterminate ratio, you can replace it with the ratio of derivatives.

---

# 📊 Rule Statement

If:

$$
$\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{0}{0} \quad \text{or} \quad \frac{\infty}{\infty}$
$$

and \(f, g\) are differentiable near \(a\), then:

$$
$\lim_{x \to a} \frac{f(x)}{g(x)} =$
$\lim_{x \to a} \frac{f'(x)}{g'(x)}$
$$

(if the right-hand limit exists)

---

# 🧠 Meaning

Instead of evaluating the original expression:

- compare **rates of change**
- not raw values

So it shifts the problem from:

> “What is the value?”

to:

> “Which one is changing faster?”

---

# 🔍 When to Use It

Only use L’Hôpital’s Rule when you see:

### Indeterminate forms:

- \(0/0\)
- \(\infty/\infty\)

---

# ⚠️ Common Misuse

Do NOT use it for:

- \(0 \cdot \infty\)
- \(\infty - \infty\)
- \(0^0, 1^\infty, \infty^0\)

👉 These must first be algebraically rewritten into a quotient form.

---

# 📈 Example

$$
$\lim_{x \to 0} \frac{\sin x}{x}$
$$

Direct substitution gives \(0/0\), so apply L’Hôpital:

$$
= \lim_{x \to 0} \frac{\cos x}{1}
= 1
$$

---

# 🧠 Intuition

L’Hôpital’s Rule compares:

- numerator growth rate
- denominator growth rate

So it answers:

> Who dominates as we approach the limit?

---

# 🔗 Connection to Derivatives

This rule is fundamentally built on:

- derivative as instantaneous rate of change
- limits of ratios

So it is essentially:

> “limit behavior analyzed through local linear approximation”

---

# 📌 Key Insight

> If two functions both approach 0 or ∞, their _values are not informative_, but their _rates of change are_.

---

# 🧭 Mental Model

> Replace “value comparison” with “speed comparison.”

---

# 📊 Workflow

1. Check for indeterminate form
2. Differentiate numerator and denominator separately
3. Re-evaluate the limit
4. Repeat if needed

---

# 📌 Summary

- Used for \(0/0\) and \(\infty/\infty\)
- Converts limit of ratio → ratio of derivatives
- Compares growth rates instead of values
- Often simplifies otherwise difficult limits
