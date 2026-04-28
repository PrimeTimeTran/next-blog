## 📈 Asymptotic Complexity

### Core idea

Asymptotic complexity describes **how an algorithm’s resource usage grows as input size approaches infinity**, focusing on the _dominant growth behavior_ rather than exact runtime.

It is the umbrella concept that includes:

> Big O, Big Ω, and Big Θ notation

---

# 🧱 What it actually means

Instead of measuring exact performance, asymptotic complexity asks:

- What happens when input becomes very large?
- Which part of the algorithm dominates growth?
- Does performance scale or collapse?

---

# 📊 Formal structure

```text id="ac1"
Asymptotic Complexity = behavior of f(n) as n → ∞
```

Where:

- `n` = input size
- `f(n)` = resource usage (time or space)

---

# 🧠 The three main expressions

## 1. Big O (Upper bound)

> Worst-case growth ceiling

- “It will not grow faster than this”

---

## 2. Big Ω (Lower bound)

> Best-case growth floor

- “It will grow at least this fast”

---

## 3. Big Θ (Tight bound)

> Exact asymptotic behavior

- “This is the true growth rate”

---

# 🧩 Intuition

Asymptotic complexity ignores:

- constants (3n → n)
- hardware differences
- small input behavior
- implementation details

It keeps only:

> the dominant growth term

---

# 📈 Growth hierarchy (key intuition)

```text id="ac2"
O(1)        constant
O(log n)    logarithmic
O(n)        linear
O(n log n)  linearithmic
O(n²)       quadratic
O(2ⁿ)       exponential
O(n!)       factorial
```

---

# 🧠 Why it exists

Asymptotic complexity exists because:

- exact timing is unreliable across machines
- scalability matters more than micro-optimizations
- large-scale behavior determines feasibility

---

# 🧱 Example

Algorithm:

```text id="ac3"
f(n) = 3n² + 10n + 5
```

Asymptotic complexity:

```text id="ac4"
Θ(n²)
```

Because:

- n² dominates growth
- lower-order terms become irrelevant as n grows

---

# ⚖️ Relationship to Big O

| Concept               | Meaning                      |
| --------------------- | ---------------------------- |
| Asymptotic complexity | overall growth behavior      |
| Big O                 | upper bound of that behavior |
| Big Ω                 | lower bound                  |
| Big Θ                 | tight bound                  |

---

# 🧠 Mental model

```text id="ac5"
Input size → infinity
        ↓
Identify dominant term
        ↓
Ignore constants & noise
        ↓
Classify growth behavior
```

---

# 🔗 Where it shows up in system design

Asymptotic complexity applies to:

- database queries (O(log n), O(n))
- sorting and indexing
- cache lookup strategies
- distributed coordination overhead
- message queue throughput scaling

---

# 📌 Key takeaway

> Asymptotic complexity is the study of how algorithms scale as input size approaches infinity, capturing their dominant growth behavior using Big O, Big Ω, and Big Θ notation.
