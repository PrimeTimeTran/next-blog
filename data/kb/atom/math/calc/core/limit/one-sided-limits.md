---
tags:
  - calculus
  - limits
  - continuity
---

# 📘 One-Sided Limits

One-sided limits describe what a function approaches when you move toward a point from only one direction.

---

# 🧠 Core Idea

> Instead of approaching from both sides, we approach from the left or the right separately.

---

# 📊 Definitions

## Left-hand limit

$$
\lim_{x \to a^-} f(x)
$$

Means:

> approach $a$ from values less than $a$

---

## Right-hand limit

$$
\lim_{x \to a^+} f(x)
$$

Means:

> approach $a$ from values greater than $a$

---

# 📈 Key Condition for a Full Limit

A standard limit exists only if:

$$
\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)
$$

If they are equal:

> the two-sided limit exists

If not:

> the limit does not exist

---

# 🔍 Intuition

Think of walking toward a point on a graph:

- left-hand limit → approaching from the left side
- right-hand limit → approaching from the right side

You compare whether both paths lead to the same height.

---

# 📊 Why One-Sided Limits Matter

They are essential for:

- jump discontinuities
- piecewise functions
- absolute value functions
- step functions

---

# 🧠 Example: Jump Discontinuity

$$
f(x) =
\begin{cases}
1 & x < 0 \\
2 & x \ge 0
\end{cases}
$$

Then:

$$
\lim_{x \to 0^-} f(x) = 1
$$

$$
\lim_{x \to 0^+} f(x) = 2
$$

So:

> the limit at $0$ does not exist

---

# ⚠️ Key Insight

> A function can behave consistently on each side but still fail to have a full limit.

---

# 🔗 Connection to Continuity

A function is continuous at $x=a$ only if:

1. $\lim_{x \to a^-} f(x)$ exists
2. $\lim_{x \to a^+} f(x)$ exists
3. they are equal
4. equal to $f(a)$

---

# 🧭 Mental Model

> One-sided limits test whether both directions agree before “meeting at a point.”

---

# 📌 Summary

- Left-hand limit: approach from the left
- Right-hand limit: approach from the right
- Full limit exists only if both sides match
- Used heavily in discontinuities and piecewise functions
