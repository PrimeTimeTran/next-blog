---
tags:
  - calculus
  - integrals
  - integration
  - rules
---

# 📘 Basic Integration Rules

Integration is the reverse process of differentiation. These rules let you compute antiderivatives quickly.

---

# 🧠 Core Idea

Integration answers:

> “What function had this derivative?”

So if:

$$
F'(x) = f(x)
$$

then:

$$
\int f(x)\ \, dx = F(x) + C
$$

---

# 📌 1. Power Rule

For $n \ne -1$:

$$
\int x^n\ \, dx = \frac{x^{n+1}}{n+1} + C
$$

---

# 📌 2. Constant Rule

$$
\int c\ \, dx = cx + C
$$

Where $c$ is a constant.

---

# 📌 3. Constant Multiple Rule

$$
\int c \cdot f(x)\ \, dx = c \int f(x)\ \, dx
$$

---

# 📌 4. Sum Rule

$$
\int (f(x) + g(x))\ \, dx = \int f(x)\ \, dx + \int g(x)\ \, dx
$$

---

# 📌 5. Difference Rule

$$
\int (f(x) - g(x))\ \, dx = \int f(x)\ \, dx - \int g(x)\ \, dx
$$

---

# 📌 6. Exponential Rule

$$
\int e^x\ \, dx = e^x + C
$$

$$
\int a^x\ \, dx = \frac{a^x}{\ln a} + C
$$

---

# 📌 7. Trigonometric Basics

$$
\int \sin x\ \, dx = -\cos x + C
$$

$$
\int \cos x\ \, dx = \sin x + C
$$

---

# 📌 8. Log Rule (special case)

$$
\int \frac{1}{x}\ \, dx = \ln|x| + C
$$

---

# 🧠 Key Insight

Integration is linear:

- You can split sums
- Pull out constants
- Apply rules term-by-term

---

# ⚠️ Important Note

Always include:

$$
+ C
$$

This represents the **family of all antiderivatives**.

---

# 🧭 Mental Model

| Operation  | Meaning                       |
| ---------- | ----------------------------- |
| Derivative | rate of change                |
| Integral   | accumulation / reverse change |
| \(+C\)     | missing starting value        |

---

# 🔗 Related

- [[derivatives]]
- [[fundamental-theorem-of-calculus]]
- [[u-substitution]]
- [[integration-techniques]]
