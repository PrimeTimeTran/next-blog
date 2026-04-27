---
tags:
  - calculus
  - calc-1
  - limits
  - theorems
---

# 📘 Squeeze Theorem (Sandwich Theorem)

The Squeeze Theorem is a method for evaluating limits by **trapping a function between two others**.

---

# 🧠 Core Idea

If a function is “sandwiched” between two functions that approach the same limit, then it must approach that same limit too.

---

# 📊 Statement

If:

$$
g(x) \le f(x) \le h(x)
$$

and:

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L
$$

Then:

$$
\lim_{x \to a} f(x) = L
$$

---

# 🔍 Meaning

If two functions “pinch” another function into the same value:

> the middle function has no choice but to converge there too.

---

# 📈 Intuition

Think of:

- a lower bound pulling up toward $L$
- an upper bound pulling down toward $L$

The middle function is forced to follow.

---

# 🧮 Classic Example

$$
-x^2 \le x^2 \sin\left(\frac{1}{x}\right) \le x^2
$$

As $x \to 0$:

- $-x^2 \to 0$
- $x^2 \to 0$

So:

$$
\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0
$$

---

# ⚠️ Why it works

Even if $f(x)$ oscillates wildly:

- as long as its “amplitude” shrinks
- and it is trapped tightly enough

the limit is forced.

---

# 🧠 Key Insight

> Behavior is controlled by bounds, not internal complexity.

Even chaotic functions behave predictably if constrained.

---

# 🔗 When to use it

Use the Squeeze Theorem when:

- direct substitution fails
- function oscillates (sine/cosine)
- expression is bounded but shrinking
- geometry or inequalities naturally trap the function

---

# 🧭 Mental Model

> If two collapsing walls meet at a point, anything inside must collapse there too.

---

# 📌 Summary

- Trap function between two others
- If both bounds converge to same limit, so does the function
- Especially useful for oscillating or bounded expressions
