---
tags:
  - calculus
  - derivatives
  - functions
  - notation
  - review
---

# 📘 Function Notation vs [[reference/math/calc/notation/derivative|Derivative Notation]]

This note clarifies the meaning of common calculus expressions and removes confusion between _definition_, _derivative_, and _relationships between functions_.

---

# 🧠 Core Idea

In calculus, equations are not assignments (like programming). They are **relationships between mathematical objects (functions)**.

Each notation answers a different question.

---

# 📌 1. Function Definition

$$
f(x) = x^2
$$

## Meaning

> This defines what the function \(f\) does.

- Input: $x$
- Output: $x^{2}$

### Key Insight

This is NOT assignment.

It is a **rule describing a function**.

---

# 📌 2. Derivative of a Function

$$
f'(x)
$$

## Meaning

> The rate of change (slope) of $f(x)$

Example:

If

$$
f(x) = x^2
$$

then

$$
f'(x) = 2x
$$

### Key Insight

- $f(x)$ is a _new function_
- It describes how $f$ changes at each point

---

# 📌 3. Relationship Between Two Functions

$$
F'(x) = f(x)
$$

## Meaning

> “$f$ is the derivative of $F$”

So:

- $F(x)$ = original (accumulation function)
- $f(x)$ = rate of change of $F(x)$

### Key Insight

This does NOT mean assignment.

It means:

> The slope of \(F\) at each point is given by \(f\)

---

# 🔁 Unified View

| Expression       | Meaning                          |
| ---------------- | -------------------------------- |
| \(f(x) = ...\)   | Defines a function               |
| \(f'(x)\)        | Derivative of a function         |
| \(F'(x) = f(x)\) | \(f\) is the derivative of \(F\) |

---

# 🧠 Hierarchy of Functions

You can think of calculus as layers:

$$
F(x) \rightarrow F'(x) \rightarrow F''(x)
$$

- $F(x)$: original function
- $F'(x)$: rate of change
- $F''(x)$: rate of change of the rate of change

---

# ⚠️ Common Confusion (Programming vs Calculus)

## Programming mindset (incorrect here):

> Right side gets assigned into left side

## Calculus mindset (correct):

> Left side is the object  
> Right side describes the object

---

# 📈 Mental Model

- $f(x)$: rule for output
- $f'(x)$: how fast output changes
- $F'(x) = f(x)$: link between two functions

---

# 🧭 Key Insight

> Calculus is about relationships between functions, not assignment of values.

---

# 🔗 Related

- [[derivatives]]
- [[fundamental-theorem-of-calculus]]
- [[antiderivatives]]
- [[function-notation]]
