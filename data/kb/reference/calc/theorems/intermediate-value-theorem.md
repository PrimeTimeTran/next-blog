---
tags:
  - calculus
  - calc-1
  - continuity
  - theorems
---

# 📘 Intermediate Value Theorem (IVT)

The Intermediate Value Theorem describes how **continuous functions behave on an interval**.

---

# 🧠 Core Idea

> A continuous function cannot “skip values.”

If you move smoothly from one point to another, you must pass through all intermediate values.

---

# 📊 Statement

If:

- $f(x)$ is continuous on $[a, b]$
- $N$ is any value between $f(a)$ and $f(b)$

Then:

$$
\exists \ c \in (a, b) \text{ such that } f(c) = N
$$

---

# 🔍 Meaning

If a function starts at one value and ends at another:

> it must hit every value in between at least once.

---

# 📈 Intuition

Imagine drawing a curve without lifting your pen:

- start at $f(a)$
- end at $f(b)$
- you must pass through all intermediate heights

---

# ⚠️ Key Requirement: Continuity

The theorem only works if:

> the function has no breaks, jumps, or holes on $[a, b]$

If discontinuous:

- values can be skipped
- theorem does not apply

---

# 🧮 Example

If:

$$
f(a) = 2, \quad f(b) = 8
$$

Then IVT guarantees:

- every value between 2 and 8 is achieved
- e.g. $f(c) = 5$ for some $c \in (a, b)$

---

# 🧠 What IVT does NOT say

It does NOT tell you:

- where $c$ is
- how many times it occurs
- how the function behaves between points

It only guarantees existence.

---

# 🔗 Why it matters

IVT is foundational for:

- root-finding methods (bisection method)
- proving solutions exist
- understanding continuity behavior
- calculus reasoning about functions

---

# 🧭 Mental Model

> Continuity forces “no skipping.”

A continuous function must sweep through all intermediate values.

---

# 📌 Summary

- Requires continuity on $[a, b]$
- If $N$ is between $f(a)$ and $f(b)$, then $f(c)=N$ for some $c$
- Guarantees existence, not location
- Formalizes the idea of “no jumps in a continuous graph”
