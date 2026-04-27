---
tags:
  - calculus
  - calc-1
  - limits
  - asymptotics
---

# 📘 Limits at Infinity

Limits at infinity describe the behavior of a function as the input becomes extremely large or extremely small.

---

# 🧠 Core Idea

> We are not looking at a point — we are looking at long-term behavior.

---

# 📊 General Forms

## 1. Input goes to infinity

$$
\lim_{x \to \infty} f(x)
$$

## 2. Input goes to negative infinity

$$
\lim_{x \to -\infty} f(x)
$$

---

# 🔍 Meaning

We ask:

> what value does the function approach as $x$ grows without bound?

---

# 📈 Possible Outcomes

A limit at infinity can:

- approach a finite value
- grow without bound ($\infty$ or $-\infty$)
- oscillate (no limit)

---

# 📊 Horizontal Asymptotes

If:

$$
\lim_{x \to \infty} f(x) = L
$$

then:

> $y = L$ is a horizontal asymptote

---

# 🧮 Common Strategy: Rational Functions

For:

$$
\frac{P(x)}{Q(x)}
$$

compare highest powers of $x$:

---

## Case 1: Same degree

$$
\lim_{x \to \infty} \frac{ax^n}{bx^n} = \frac{a}{b}
$$

---

## Case 2: Numerator smaller degree

$$
\lim_{x \to \infty} \frac{x^m}{x^n}, \quad m < n
$$

Result:

$$
0
$$

---

## Case 3: Numerator larger degree

$$
\lim_{x \to \infty} \frac{x^m}{x^n}, \quad m > n
$$

Result:

$$
\infty \text{ or } -\infty
$$

---

# 🧠 Key Insight

> At infinity, only dominant growth rates matter.

Lower-order terms become irrelevant.

---

# ⚠️ Important Distinction

- Limits at a point → local behavior
- Limits at infinity → global growth behavior

---

# 📈 Connection to Asymptotic Behavior

Limits at infinity describe:

- long-term trends
- end behavior of functions
- asymptotes (horizontal, and sometimes slant)

---

# 🧭 Mental Model

> You are zooming out infinitely far to see where the function “settles.”

---

# 📌 Summary

- Study behavior as $x \to \pm \infty$
- Dominated by highest growth terms
- May produce finite limits or divergence
- Used to determine asymptotes and long-term behavior
