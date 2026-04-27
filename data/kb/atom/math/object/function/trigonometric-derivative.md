---
tags:
  - calculus
  - derivatives
  - trigonometry
---

# 📘 Trigonometric Derivatives

Trigonometric derivatives describe how trig functions change with respect to $x$. They are foundational rules used throughout calculus for differentiation problems.

- [[trigonometric-derivatives.jpg|Cheatsheet]]

---

# 🧠 Core Idea

These rules tell you:

> “What is the slope (rate of change) of each trig function?”

---

# 📌 Basic Derivative Rules

$$
\frac{d}{dx}(\sin x) = \cos x
$$

$$
\frac{d}{dx}(\cos x) = -\sin x
$$

$$
\frac{d}{dx}(\tan x) = \sec^2 x
$$

$$
\frac{d}{dx}(\cot x) = -\csc^2 x
$$

$$
\frac{d}{dx}(\sec x) = \sec x \tan x
$$

$$
\frac{d}{dx}(\csc x) = -\csc x \cot x
$$

### Loop

## Pair 1: sine/cosine cycle

> sin → cos → −sin → −cos → sin

- derivative of sine → cosine
- derivative of cosine → negative sine

## Pair 2: secant/tangent cycle

> sec x → sec x · tan x -> tan x → sec² x

- This pair is also a **feedback loop**, but multiplicative instead of rotational.

## Pair 3: cot/csc cycle

> $\cot x \rightarrow -\csc^2 x$ > $\csc x \rightarrow -\csc x \cot x$

- Same structure: reciprocal pair + negative feedback

---

# 🔁 Chain Rule Extension

If the input is not just $x$:

### Example pattern:

$$
\frac{d}{dx}[\sin(g(x))] = \cos(g(x)) \cdot g'(x)
$$

Similarly:

$$
\frac{d}{dx}[\cos(g(x))] = -\sin(g(x)) \cdot g'(x)
$$

---

# 🧠 Key Insight

Trig derivatives always follow a pattern:

- trig function → becomes another trig function
- chain rule applies if input is not just $x$

---

# 📊 Memory Structure

| Function | Derivative       |
| -------- | ---------------- |
| $\sin x$ | $\cos x$         |
| $\cos x$ | $-\sin x$        |
| $\tan x$ | $\sec^2 x$       |
| $\sec x$ | $\sec x \tan x$  |
| $\csc x$ | $-\csc x \cot x$ |
| $\cot x$ | $-\csc^2 x$      |

---

# ⚠️ Common Mistakes

- forgetting negative signs for cosine and cosecant derivatives
- forgetting chain rule when inside function exists
- mixing identities with derivatives (they are different concepts)

---

# 🧠 Intuition

Trig derivatives describe:

> how circular motion changes at each point

- sine and cosine continuously feed into each other
- derivatives cycle through trig relationships

---

# 🔗 Related

- [[trigonometric-identities]]
- [[chain-rule]]
- [[derivatives]]
- [[calculus-1]]
