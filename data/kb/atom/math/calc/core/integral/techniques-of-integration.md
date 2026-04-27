---
tags:
  - math
  - calculus
  - integrals
---

# 🧠 Integration by Substitution (u-Substitution) (Atom)

u-substitution is a technique for simplifying integrals by reversing the chain rule.

---

# 🧠 Core Idea

> Replace a complicated expression inside an integral with a single variable \(u\), making the integral easier to solve.

---

# 📐 Basic Form

If an integral has the structure:

$$
\int f(g(x)) \cdot g'(x)\,dx
$$

Let:

$$
u = g(x)
$$

Then:

$$
du = g'(x)\,dx
$$

---

# 🔁 Substitution Rule

After substitution:

$$
\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du
$$

---

# 🧠 Why It Works

It is the **reverse of the chain rule**:

Chain rule:

$$
\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)
$$

Substitution undoes this structure.

---

# 📊 Standard Workflow

## Step 1: Choose \(u\)

Pick the “inside function” (usually nested expression).

---

## Step 2: Compute \(du\)

Differentiate:

$$
du = \frac{du}{dx}dx
$$

---

## Step 3: Rewrite integral

Replace everything in terms of \(u\).

---

## Step 4: Integrate

Solve simpler integral.

---

## Step 5: Substitute back

Replace \(u\) with original expression.

---

# 📐 Example

### Integral:

$$
\int 2x(x^2 + 1)^3 dx
$$

---

### Step 1:

Let:

$$
u = x^2 + 1
$$

---

### Step 2:

$$
du = 2x\,dx
$$

---

### Step 3 (rewrite):

$$
\int u^3 \, du
$$

---

### Step 4:

$$
\frac{u^4}{4} + C
$$

---

### Step 5 (back-substitute):

$$
\frac{(x^2 + 1)^4}{4} + C
$$

---

# 🧠 Intuition

> You are “compressing” a complicated expression into a single variable to reveal a simple integral underneath.

---

# ⚙️ When to Use It

Use u-substitution when you see:

- nested functions (function inside function)
- a derivative multiplied by its inner function
- expressions like \(f(g(x))g'(x)\)

---

# 🔗 Connections

- [[Chain Rule in Backpropagation]] → reverse relationship
- [[Indefinite Integral]] → target operation
- [[integration-techniques|]] → broader strategy class
- [[integration-by-parts]] → alternative decomposition method

---

# 🧠 Mental Model

> “Rename the inside of a function so the integral becomes simple.”

---

# 📌 Summary

u-substitution is a method for simplifying integrals by changing variables to match an inner function and its derivative, effectively reversing the chain rule.
