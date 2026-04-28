## 📈 Asymptotic Analysis

### Core idea

Asymptotic analysis is a method for describing **how an algorithm’s performance grows as input size increases**, ignoring constant factors and low-level implementation details.

It focuses on:

> the _trend of growth_, not exact runtime.

---

# 🧱 Why it exists

Two algorithms can have different actual runtimes depending on hardware or language, but asymptotic analysis lets us compare them by:

- scalability
- efficiency at large input sizes
- worst/average/best-case growth behavior

---

# 📊 Big-O family (core tools)

## 1. Big-O (Upper bound)

> Worst-case growth

```text id="as1"
O(n), O(log n), O(n²)
```

Represents the maximum growth rate as input grows.

---

## 2. Big-Ω (Lower bound)

> Best-case growth

```text id="as2"
Ω(n), Ω(log n)
```

Represents the minimum growth rate.

---

## 3. Big-Θ (Tight bound)

> Exact asymptotic behavior

```text id="as3"
Θ(n log n)
```

Both upper and lower bounds match.

---

# 🧠 Intuition for growth rates

From fastest → slowest growth:

```text id="as4"
O(1)        constant
O(log n)    logarithmic
O(n)        linear
O(n log n)  linearithmic
O(n²)       quadratic
O(2^n)      exponential
O(n!)       factorial
```

---

# 🔍 Key simplification rules

Asymptotic analysis ignores:

- constant multipliers (e.g. 3n → n)
- lower-order terms (n² + n → n²)
- machine-specific details

### Example:

```text id="as5"
3n² + 10n + 5  →  O(n²)
```

---

# 🧱 Example intuition

## Linear search

- checks each element once
- grows directly with input

→ O(n)

---

## Binary search

- halves search space each step

→ O(log n)

---

## Nested loops

```text id="as6"
for i in n:
  for j in n:
```

→ O(n²)

---

# 🧠 Mental model

```text id="as7"
Input size (n)
   ↓
Growth rate of work
   ↓
Ignore constants + hardware
   ↓
Asymptotic complexity class
```

---

# ⚖️ Why it matters in system design

Asymptotic thinking is used for:

- algorithm selection
- scalability reasoning
- database query performance
- system bottleneck analysis

Example:

- O(n²) algorithm becomes unusable at scale
- O(log n) remains stable even for large systems

---

# 🔗 Related concepts

- Time complexity
- Space complexity
- Amortized analysis
- Cache efficiency (in real systems)
- Distributed system scaling behavior

---

# 📌 Key takeaway

> Asymptotic analysis describes how an algorithm’s resource usage grows with input size, focusing on dominant growth behavior rather than exact runtime.
