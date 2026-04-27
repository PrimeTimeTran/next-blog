# 📌 Atom Note: Newton Quotient

## 🧩 Core Idea

The Newton quotient measures the **average rate of change** of a function over a small interval. It is the foundational expression used to define the derivative.

---

## 📐 Difference Quotient

For a function $f(x)$, the difference quotient measures the average rate of change over a small interval $h \neq 0$:

![[reference/calc/formula/difference-quotient|difference-quotient]]

---

## 🔍 Interpretation

- $f(x+h) - f(x)$: change in output (vertical change)
- $h$: change in input (horizontal change)
- The quotient represents the **average rate of change** of $f$ over the interval $[x, x+h]$

---

## 📈 Geometric Meaning

- It is the **slope of the secant line** between the points:
  - $(x, f(x))$
  - $(x+h, f(x+h))$

---

## 🧠 Big Idea

> The difference quotient measures how a function changes over a finite step; the derivative comes from shrinking that step to zero.

---

## 🚀 Link to Derivative

The derivative is obtained by shrinking the interval:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

So:

- Newton quotient = **average slope**
- Derivative = **instantaneous slope**

---

## 🧠 Intuition

Think of it as:

> “How fast is the function changing if I zoom in closer and closer around a point?”

---

## ⚠️ Common Confusion

- It is **not yet the derivative** unless the limit is taken.
- Requires ( $h \neq 0$ ) before taking the limit.

---

## 🔗 Related Ideas

- Secant line
- Tangent line
- [[definition-of-derivative]]
- Average vs instantaneous rate of change
