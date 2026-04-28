---
tags:
  - calculus
  - derivatives
  - integrals
  - fundamental-theorem
  - visualization
---

# 📘 Derivative–Integral Identity Map

This note unifies the three equivalent views of the same relationship between a function, its derivative, and its antiderivative.

---

# 🧠 Core Relationship

If:

$$
F'(x) = f(x)
$$

then all of the following describe the same idea in different forms:

---

# 🔁 1. Derivative View (Local Change)

$$
F'(x) = f(x)
$$

### Meaning:

> The slope of \(F(x)\) at each point is given by \(f(x)\)

- \(F(x)\): original function
- \(f(x)\): rate of change of \(F(x)\)

---

# 🔁 2. Integral View (Accumulation)

$$
\int f(x)\ \, dx = F(x) + C
$$

### Meaning:

> \(F(x)\) is a function whose derivative is \(f(x)\)

So integration is:

> reconstructing \(F(x)\) from its rate of change

---

# 🔁 3. Net Change View (Fundamental Theorem)

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

### Meaning:

> The total accumulation of \(f(x)\) over \([a,b]\) equals the change in \(F(x)\)

---

# 🧠 Unified Interpretation

All three statements describe the same structure:

| View       | Meaning                          |
| ---------- | -------------------------------- |
| Derivative | instantaneous change             |
| Integral   | accumulated change               |
| FTC        | accumulated change over interval |

---

# 📈 Mental Model (Best Intuition)

Think of a system evolving:

- \(F(x)\): total quantity (position, height, accumulation)
- \(f(x)\): rate of change (velocity, slope, density)

Then:

$$
f(x) = \frac{dF}{dx}
$$

and:

$$
F(x) = \int f(x)\ \, dx
$$

---

# 🔄 Flow Diagram

$$
F(x)
\;\xrightarrow{\text{differentiate}}\;
f(x)
\;\xrightarrow{\text{integrate}}\;
F(x) + C
$$

---

# ⚠️ Key Insight

> Derivatives and integrals are inverse operations describing the same relationship in opposite directions.

- Derivative → “how is it changing right now?”
- Integral → “what function produces this change?”

---

# 📌 Why the notation feels confusing

We reuse symbols:

- \(f(x)\): can be a base function OR a derivative
- \(F(x)\): can be any function OR an antiderivative

They only gain meaning from context:

> The relationship \(F'(x) = f(x)\) defines their roles.

---

# 🧭 Final Mental Lock-In

> There is no “extra function” hiding here.
>
> There is only one relationship seen from three perspectives.

---

# 🔗 Related

- [[fundamental-theorem-of-calculus]]
- [[derivatives]]
- [[integrals]]
- [[antiderivatives]]
