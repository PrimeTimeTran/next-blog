# 📌 Pattern: “Limit Evaluation Strategy”

## 🧠 Core Idea

Most limit problems are not solved directly — they are **classified into cases**, then reduced using the appropriate technique.

So the skill is:

> recognize structure → choose method → simplify → evaluate

---

## 🔁 Pattern Trigger

Use this pattern when you see:

- $\lim_{x \to c} f(x)$
- $\lim_{x \to \infty} f(x)$
- expressions that become undefined or messy when substituting
- “evaluate the limit” problems

---

## 🧭 Procedure (decision flow)

### 1. Try direct substitution

Compute $f(c)$

- If it works → done
- If you get:
  - $0/0$
  - $\infty/\infty$
  - undefined forms  
     → continue

---

### 2. Classify the indeterminate form

Common cases:

- $0/0$ → algebraic simplification needed
- $\infty/\infty$ → divide by dominant term
- oscillation → squeeze or special structure

---

### 3. Choose a simplification tool

Depending on structure:

- **Factoring**
- **Rationalizing**
- **Common denominators**
- **Canceling terms**
- **Dominant term division (end behavior)**
- **Trig identities (if trig is involved)**

---

### 4. Re-evaluate the limit

After simplification, try substitution again.

---

## 🧠 Key Insight

A limit problem is not “compute a value.”

It is:

> “remove the obstacle causing undefined behavior, then evaluate what remains”

---

## 🔗 Related Ideas

- Newton quotient (derivative foundation)
- Continuity
- Indeterminate forms
- Asymptotic behavior
- L’Hôpital’s Rule (later extension)

---

## ⚡ Why this is a _pattern_

Because every limit problem reduces to:

> detect failure → classify failure → repair expression → evaluate

It’s a reusable decision tree, not a formula.

---

## 🧠 Optional upgrade insight

Most students think limits are:

> “plug in and simplify”

But in reality they are:

> “structure detection + transformation”

That shift is exactly what makes this a pattern-level concept.
