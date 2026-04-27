# 📌 Pattern: Differentiation Strategy (Beyond Rules)

## 🧠 Core Idea

Differentiation is not just applying rules — it is **choosing the correct transformation method for the structure of an expression**.

The “7 rules” are tools, but the deeper skill is:

> recognize structure → select differentiation strategy → simplify correctly

---

## 🔁 Pattern Trigger

> Use this when the derivative is not immediately obvious from a single rule.

Use this pattern when you see:

- expressions that need to be **differentiated efficiently**
- functions with **structure (products, quotients, nesting)**
- derivatives inside **limits or indeterminate forms**
- situations where **rewriting simplifies differentiation**

---

## 🧭 Strategy Layers (how differentiation is actually done)

### 🟦 1. Direct Rule Application Layer

Start here if structure is simple:

- Power rule
- Sum/difference rule
- Constant multiple rule

👉 Used when expression is “flat”

---

### 🟨 2. Structural Decomposition Layer

If expression is composed:

- Product rule → $f(x)g(x)$
- Quotient rule → $\frac{f(x)}{g(x)}$
- Chain rule → nested functions

👉 Used when expression has **interaction or nesting**

---

### 🟧 3. Rewriting Layer (critical hidden step)

Before differentiating, often you should transform:

- simplify algebraically
- expand or factor
- rewrite radicals as exponents
- split fractions

👉 Goal: convert into a form where rules apply cleanly

---

### 🟥 4. Limit-Based Differentiation (foundational view)

All differentiation comes from:

$$
\frac{d}{dx}f(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
$$

This is the **[[newtons-quotient|Newton quotient foundation]]**

👉 Used conceptually when:

- deriving rules
- understanding why rules work
- handling edge cases

---

### 🟪 5. Indeterminate Structure Handling (advanced extension)

When differentiation appears inside limits:

- $0/0$ forms
- asymptotic expressions
- complicated rational behavior

Then you may:

- simplify using algebra first
- or apply **L’Hôpital’s Rule**

👉 Key idea:

> differentiate numerator and denominator as a transformation step, not a rule application

---

## 🧠 Key Insight

Differentiation is not one operation — it is a **hierarchy of transformation choices**:

> simplify → decompose → apply rules → interpret limit structure

---

## 🔗 Related Ideas

- [[newtons-quotient|Newton quotient]] (definition of derivative)
- [[chain-rule|Chain rule]] (composition handling)
- [[product-rule|Product]]/[[quotient-rule|quotient]] rule (interaction handling)
- [[lhopitals-rule|L’Hôpital’s Rule]] (limit-driven differentiation)
- [[first-principles|First principles]] differentiation
- Algebraic simplification before calculus

---

## ⚡ Why this is a pattern (not a topic)

Because every derivative problem reduces to:

> “what structure am I looking at, and what transformation makes it differentiable?”

The 7 rules are just **surface tools** — this pattern is the decision engine behind them.
