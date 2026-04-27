# 📌 Pattern: Critical Point → Sign Analysis Pattern

## 🧠 Core Idea

When solving optimization or shape-related problems, you often don’t care about the exact function value first — you care about **where behavior changes**.

So you:

> convert the problem into a derivative sign structure problem

---

## 🔁 Pattern Trigger

Use this pattern when you see:

- “find local max/min”
- “increasing/decreasing intervals”
- “optimization problem”
- “shape of graph”
- “where does function change behavior?”

---

## 🧭 Procedure (mental flow)

### 1. Differentiate

Compute $f'(x)$

---

### 2. Find critical points

Solve:

- $f'(x) = 0$
- or where $f'(x)$ undefined

---

### 3. Partition the number line

Break into intervals around critical points

---

### 4. Test sign of $f'(x)$

Pick test points in each interval

---

### 5. Interpret behavior

- $f'(x) > 0$ → increasing
- $f'(x) < 0$ → decreasing

Then classify:

- - → − = local max
- − → + = local min

---

## 🧠 Insight (what makes this a pattern)

You are not “solving a derivative problem.”

You are:

> converting a function into a **sign-change system on intervals**

---

## 🔗 Connects to

- First Derivative Test
- Critical points
- Optimization problems
- Curve sketching
- Second derivative test (later refinement)

---

## ⚡ Why this is a _pattern_, not a topic

Because it compresses multiple ideas into one reusable action:

Instead of thinking:

- derivative rule
- algebra
- limit behavior
- classification test

You think:

> “Find derivative → find structure breaks → test sign → interpret behavior”

That’s reusable across dozens of problems.

---

## 🧠 Even more important insight

This pattern generalizes beyond Calc 1:

- physics (velocity sign → motion direction)
- economics (marginal increase/decrease)
- differential equations (stability regions)

So it becomes a **transferable reasoning tool**, not a course-specific trick.
