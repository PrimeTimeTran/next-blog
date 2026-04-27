---
tags:
  - calculus
  - sequences
  - series
  - notation
---

# 📘 Atom Note: Riemann Sum Definition

The definite integral is defined as the limit of a sum of rectangular areas:

![[formal-riemann-sum-forml]]

---

### Components

- $[a,b]$ → interval of integration
- $n$ → number of subintervals
- $\Delta x = \frac{b-a}{n}$ → width of each rectangle
- $x_k$ → sample point in each subinterval

---

### Interpretation

- Each term $f(x_k)\Delta x$ represents the area of a rectangle
- The sum approximates total area
- The limit makes the approximation exact

---

### Types of Riemann Sums

- Left sum: $x_k = a + (k-1)\Delta x$
- Right sum: $x_k = a + k\Delta x$
- Midpoint sum: $x_k = a + \left(k - \frac{1}{2}\right)\Delta x$

---

### Key Idea

> The integral is accumulation built from infinitely many infinitesimally thin rectangles.

---

### Connection to FTC

$$
\int_a^b f(x),dx = F(b) - F(a)
$$

- Riemann sum → defines the integral
- FTC → evaluates it efficiently

---

### Mental Model

| View     | Meaning            |
| -------- | ------------------ |
| Sum      | approximation      |
| Limit    | exact value        |
| Integral | total accumulation |

# 🔗 Related

- [[fundamental-theorem-calculus-FTC]]
- [[partial-sums]]
- [[convergence]]
- [[divergence]]
- [[infinite]]
