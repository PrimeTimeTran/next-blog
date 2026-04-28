---
tags: dsa
---

# Binary Search as Boundary-Based Decision Making

**Core Idea**
Binary search is not just “finding a value in a sorted array”—it is a **decision process that repeatedly shrinks a search space while guaranteeing the target remains inside it**.

---

## Invariant (What You Protect)

At every step, you maintain:

> **The target must lie within the current boundary ([L, R])**

All decisions are made to **preserve this invariant**.

---

## Decision Rule

At each step:

1. Pick middle index ( mid )
2. Compare target with ( A[mid] )
3. **Discard one half safely**

- If target ≤ ( A[mid] ) → keep left half
- If target > ( A[mid] ) → keep right half

Each decision is **not about finding immediately**, but about **eliminating impossible regions**.

---

## Why It Works

Because the array is sorted:

- One comparison gives **global information**
- You can safely discard **half the search space**
- The remaining partition still **guarantees containment of the target**

---

## Boundary Interpretation

Binary search is best understood as **shrinking boundaries**:

- Start: full range ([0, n-1])
- End: smallest valid range (often a single index)

Each step:

- Moves either **left boundary (L)** or **right boundary (R)**
- Never excludes the target prematurely

---

## Template (Boundary Style)

```
L = 0, R = n - 1
while L <= R:
    mid = (L + R) // 2

    if condition(mid):
        R = mid - 1   # discard right side safely
    else:
        L = mid + 1   # discard left side safely
```

---

## Key Insight

Binary search is really about:

> **Designing a condition that lets you safely discard half the space while preserving correctness**

---

## Generalization

Binary search applies beyond arrays:

- Finding first/last occurrence
- Searching answer space (e.g., minimum feasible value)
- Optimization problems

In all cases:

- Define a **monotonic condition**
- Use it to **cut the search space safely**

---

## Mental Model

Think:

- “Where can the answer still be?”
- “Which half can I prove is impossible?”

Not:

- “Did I find it yet?”

---

## Complexity

[
\Theta(\log n)
]

Each step halves the valid search space.
