---
tags:
  - calculus
  - limits
  - derivatives
  - foundations
---

# 📘 First Principles (Definition from Limits)

First principles refer to defining mathematical concepts directly from their **fundamental limit definitions**, rather than using shortcuts or rules.

---

# 🧠 Core Idea

> Build calculus concepts from the ground up using limits.

---

# 📊 First Principles of the Derivative

The derivative of a function is defined as:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

---

# 🔍 Meaning

This expression measures:

- change in output: $f(x+h) - f(x)$
- change in input: $h$
- ratio as the change becomes infinitesimally small

---

# 📈 Geometric Interpretation

The derivative is the slope of the tangent line:

> obtained as the limit of secant slopes

---

# 🧠 Why it is called “first principles”

Because it avoids:

- derivative rules (power rule, product rule, etc.)
- shortcuts
- memorized formulas

Instead it uses only:

> limits + algebra

---

# 🔁 First Principles of the Integral (Idea level)

While less commonly emphasized in Calc 1, the integral is also built from first principles:

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x
$$

---

# 📊 Meaning

This defines integration as:

> the limit of increasingly fine approximations (Riemann sums)

---

# 🧠 Key Insight

First principles always follow the same pattern:

> break a quantity into finite pieces → refine → take a limit

---

# ⚠️ Why we stop using it directly

After definition, we use rules because:

- first principles are slow
- algebra becomes complex
- rules encode repeated limit results

But everything still depends on them.

---

# 🔗 Connection to Core Concepts

First principles underpin:

- [[limits-at-infinity|Limits]]
- [[derivatives|Derivatives]]
- [[definite-integrals|Definite Integrals]]
- all differentiation/integration rules

---

# 🧭 Mental Model

> Calculus is what happens when discrete change becomes infinitely fine.

---

# 📌 Summary

- “First principles” means using limit definitions directly
- Derivative: limit of difference quotient
- Integral: limit of Riemann sums
- All calculus rules come from these definitions
