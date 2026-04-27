---
tags:
  - calculus
  - integrals
  - accumulation
---

# 📘 Definite Integral

A definite integral represents the **net accumulation** of a function over an interval.

---

# 🧠 Core Idea

The definite integral measures:

> how much a quantity builds up from $a$ to $b$

This can represent:

- area under a curve
- total change from a rate
- accumulated quantity over time

---

# 📊 Definition

$$
\int_a^b f(x)\,dx
$$

Where:

- $f(x)$ = function being accumulated
- $a, b$ = bounds of integration
- $dx$ = infinitesimal change in $x$

---

# 📈 Geometric Meaning

If $f(x) \ge 0$:

$$
\int_a^b f(x)\,dx
$$

represents the **area under the curve** between $a$ and $b$.

If $f(x)$ takes negative values:

- areas below the x-axis subtract from total

---

# ⚖️ Net Accumulation Interpretation

A definite integral measures:

> total positive contribution minus total negative contribution

So it is not just area — it is **signed accumulation**.

---

# 🧮 Connection to Riemann Sums

The definite integral is defined as:

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum f(x_i)\Delta x
$$

Where:

- interval is split into small pieces
- rectangles approximate area
- limit refines approximation infinitely

---

# 🔗 Fundamental Theorem Link

Definite integrals can be evaluated using antiderivatives:

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

Where:

- $F'(x) = f(x)$

---

# 🧠 Intuition

Think of it as:

> adding infinitely many tiny contributions across an interval

Each piece:

- height = $f(x)$
- width = $dx$

---

# ⚙️ Physical Meaning

Depending on context:

- velocity → displacement
- rate of flow → total quantity
- density → total mass
- force → work done

---

# 📌 Key Properties

- Linear: $\int (f+g) = \int f + \int g$
- Reversal: $\int_a^b = -\int_b^a$
- Zero width: $\int_a^a = 0$

---

# 🧭 Mental Model

> Derivative = local change  
> Integral = total accumulation

---

# 📌 Summary

- Computes net accumulation over an interval
- Defined as a limit of sums
- Can represent area, motion, mass, and more
- Evaluated using antiderivatives via FTC
