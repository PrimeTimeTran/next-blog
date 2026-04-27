---
tags:
  - calculus
---

# Product Rule

The **product rule** is a differentiation rule used when you take the derivative of a product of two functions.

## 📌 Statement

If:

$$
f(x) = u(x) \times v(x)
$$

then:

$$
\frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x)
$$

---

## 🧠 Intuition

The product rule says:

> Don’t just multiply derivatives — each function “takes a turn” being differentiated.

So you:

1. Differentiate the first, keep the second
2. Keep the first, differentiate the second
3. Add them together

---

## 🔍 Why it exists (informal idea)

A product changes in two ways:

- one factor changes while the other stays fixed
- the second factor changes while the first stays fixed

Both effects contribute to the total rate of change.

---

## 📊 Example

Let:

$$
f(x) = x \sin(x)
$$

Apply the rule:

- $u = x \Rightarrow u' = 1$
- $v = \sin(x) \Rightarrow v' = \cos(x)$

So:

$$
\frac{d}{dx}[x\sin(x)] = \sin(x) + x\cos(x)
$$

---

## ⚠️ Common mistake

❌ Wrong:

- “Derivative of a product is product of derivatives”

✔ Correct:

- You must use **sum of two mixed terms**, not multiply derivatives

---

## 🧠 Memory shortcut

> “1st derivative times 2nd term + 1st term times 2nd derivative”

---

## 🔗 Related concepts

- Chain rule (composition of functions)
- Quotient rule (built from product rule)
- Linear derivatives (basic rules like (x' = 1))
