---
tags:
  - math
  - calculus
  - series
---

# 🧠 Integral Testı

The integral test is a method for determining whether an **infinite series converges or diverges** by comparing it to an [[improper-integrals]].

---

# 🧠 Core Idea

> If a series behaves like an integral, its convergence can be determined by the corresponding integral.

---

# 📐 Statement

Let \(f(x)\) be:

- positive
- continuous
- decreasing
- for \(x \ge 1\)

Then:

$$
\sum_{n=1}^{\infty} f(n) \quad \text{and} \quad \int_1^{\infty} f(x)\,dx
$$

either both:

- converge
- or diverge

---

# 🔗 Key Principle

$$
\sum f(n) \;\;\text{behaves like}\;\; \int f(x)\,dx
$$

---

# 🧩 Intuition

- Series = sum of discrete points
- Integral = continuous area

If the function is smooth and decreasing, the two behave similarly.

---

# 📊 Example

Consider:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2}
$$

Compare with:

$$
\int_1^{\infty} \frac{1}{x^2}\,dx
$$

Compute:

$$
\int_1^{\infty} \frac{1}{x^2}\,dx = 1
$$

So:

- integral converges → series converges

---

# ❌ Divergence Example

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

Compare:

$$
\int_1^{\infty} \frac{1}{x}\,dx = \infty
$$

So:

- integral diverges → series diverges

---

# ⚙️ When to Use

Use the integral test when:

- terms look like a function \(f(n)\)
- function is smooth and decreasing
- comparison tests are unclear

---

# 🔁 Error Bound Insight

The integral also estimates the “tail”:

$$
\int_{n}^{\infty} f(x)\,dx \approx \text{error after } n \text{ terms}
$$

---

# 🔗 Connections

- [[Improper Integrals]] → required for evaluation
- [[Infinite Series]] → object being tested
- [[Comparison Test]] → alternative method
- [[p-series]] → classic application case
- [[Convergence Tests]] → broader framework

---

# 🧠 Mental Model

> A series converges if its continuous version (integral) has finite total area.

---

# 📌 Summary

The integral test determines convergence of an infinite series by comparing it to an improper integral of the corresponding function.
