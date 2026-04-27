---
tags:
  - calculus
  - calc-1
  - calc-2
  - integration
  - antiderivatives
---

# 📘 Indefinite Integrals

An indefinite integral represents the family of all antiderivatives of a function.

---

# 🧠 Core Idea

> Integration is the reverse process of differentiation.

---

# 📊 Definition

The indefinite integral of a function is written as:

$$
\int f(x)\,dx = F(x) + C
$$

where:

- $F'(x) = f(x)$
- $C$ is an arbitrary constant

---

# 🔁 Meaning

An indefinite integral answers:

> “What function did this come from when differentiated?”

---

# 📈 Key Insight

Unlike definite integrals, there are:

- no bounds
- no numerical area directly computed
- an entire **family of functions**

---

# ⚠️ Why the constant $C$ matters

Because:

$$
\frac{d}{dx}[F(x) + C] = f(x)
$$

any vertical shift disappears under differentiation.

So integration must include:

> all possible vertical shifts

---

# 🔗 Connection to Derivatives

If:

$$
\frac{d}{dx}F(x) = f(x)
$$

then:

$$
\int f(x)\,dx = F(x) + C
$$

---

# 📊 Basic Patterns

## Power rule (reverse form)

$$
\int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)
$$

## Special case

$$
\int \frac{1}{x} dx = \ln|x| + C
$$

---

# 🧠 Intuition

- Derivative: “slope at a point”
- Indefinite integral: “reconstruct the original curve from slope”

---

# 📌 Relationship to definite integrals

Indefinite integrals are building blocks for:

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

So:

> definite integrals are evaluation of an indefinite integral

---

# 🧭 Mental Model

> Integration = reverse engineering a function from its rate of change.

---

# 📌 Summary

- Indefinite integral = family of antiderivatives
- Always includes $+C$
- Reverses differentiation
- Used to build definite integrals and solve accumulation problems
