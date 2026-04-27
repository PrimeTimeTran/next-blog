---
tags:
  - calculus
  - calc-1
  - applications
  - optimization
---

# 📘 Optimization (Calc 1)

Optimization is the process of finding the **maximum or minimum value** of a function under given constraints.

---

# 🧠 Core Idea

> Use derivatives to find the best possible value of a quantity.

---

# 📊 What you are doing

You are typically trying to find:

- maximum area
- minimum cost
- maximum volume
- minimum distance
- optimal design conditions

---

# 🔍 Standard Problem Structure

Most optimization problems follow this pattern:

1. Define a quantity to optimize (objective function)
2. Express it in one variable
3. Take derivative
4. Find critical points
5. Test which is max or min

---

# 📈 Key Tool: Critical Points

Critical points occur when:

$$
f'(x) = 0 \quad \text{or} \quad f'(x) \text{ is undefined}
$$

These are candidates for:

- local maxima
- local minima

---

# 🧠 Why derivatives matter

> The derivative tells you where a function stops increasing or decreasing.

So:

- $f'(x) > 0$ → increasing
- $f'(x) < 0$ → decreasing
- $f'(x) = 0$ → possible extremum

---

# 📊 Steps (Algorithmic View)

## Step 1: Define function

Write the quantity you want to optimize:

$$
f(x)
$$

---

## Step 2: Reduce variables

Use constraints to rewrite everything in terms of one variable.

---

## Step 3: Differentiate

Compute:

$$
f'(x)
$$

---

## Step 4: Solve

Find:

$$
f'(x) = 0
$$

---

## Step 5: Classify

Use:

- first derivative test
- or second derivative test

---

# 📈 Example Intuition

A rectangle with fixed perimeter:

> What dimensions maximize area?

This becomes:

- constraint: fixed perimeter
- objective: area function
- solution: derivative-based maximum

---

# ⚠️ Common Mistake

Optimization is NOT:

> “plugging values and guessing”

It is:

> structured search using derivatives

---

# 🔗 Connections

- [[derivatives|Derivatives]] → detect change direction
- [[critical-points|Critical Points]] → candidates for extrema
- [[mean-value-theorem|Mean Value Theorem]] → guarantees extrema exist

---

# 🧭 Mental Model

> Optimization is turning real-world constraints into a function, then using calculus to find its best value.

---

# 📌 Summary

- Goal: find max/min values
- Method: convert problem → function → derivative
- Key step: solve $f'(x)=0$
- Core idea: extrema occur where change stops
