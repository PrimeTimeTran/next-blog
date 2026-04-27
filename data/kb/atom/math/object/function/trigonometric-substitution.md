---
tags:
  - calculus
  - integrals
  - trigonometry
  - techniques-of-integration
---

# 📘 Trigonometric Substitution

Trigonometric substitution is an integration technique used to simplify integrals involving **square roots of quadratic expressions**.

---

# 🧠 Core Idea

Replace algebraic expressions involving squares with trig identities to make the integral easier.

This works because of identities like:

$$
1 - \sin^2\theta = \cos^2\theta
$$

$$
1 + \tan^2\theta = \sec^2\theta
$$

$$
\sec^2\theta - 1 = \tan^2\theta
$$

---

# 🔁 Standard Substitutions

## 1. $\sqrt{a^2 - x^2}$

Use:

$$
x = a \sin\theta
$$

Then:

$$
\sqrt{a^2 - x^2} = a\cos\theta
$$

---

## 2. $\sqrt{a^2 + x^2}$

Use:

$$
x = a \tan\theta
$$

Then:

$$
\sqrt{a^2 + x^2} = a\sec\theta
$$

---

## 3. $\sqrt{x^2 - a^2}$

Use:

$$
x = a \sec\theta
$$

Then:

$$
\sqrt{x^2 - a^2} = a\tan\theta
$$

---

# 🧠 Why it works

These substitutions convert algebraic expressions into trig identities that **simplify radicals into basic trig functions**.

---

# 📈 Example Pattern

If you see:

- $a^2 - x^2$ → think circle identity → sine substitution
- $a^2 + x^2$ → tangent identity
- $x^2 - a^2$ → secant identity

---

# 🔄 Workflow

1. Identify expression type
2. Substitute trig function
3. Rewrite integral in $\theta$
4. Integrate in trig form
5. Convert back to $x$ using a triangle

---

# 📊 Geometric Intuition

Each substitution corresponds to a right triangle:

- $x = a\sin\theta$ → circle geometry
- $x = a\tan\theta$ → tangent ratio triangle
- $x = a\sec\theta$ → secant ratio triangle

---

# ⚠️ Common Mistakes

- Forgetting to convert back to $x$
- Not updating $dx$
- Choosing wrong substitution type

---

# 🔗 Related

- [[trigonometric-identities]]
- [[integration-techniques]]
- [[u-substitution]]
- [[completing-the-square]]
