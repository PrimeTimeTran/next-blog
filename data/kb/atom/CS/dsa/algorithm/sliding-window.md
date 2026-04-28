---
tags: dsa
---

# Sliding Window as Dynamic Boundary Control

**Core Idea**
Sliding window is a technique for **maintaining a valid subarray (window) by dynamically expanding and shrinking boundaries**, instead of recomputing from scratch.

---

## Invariant (What You Maintain)

> **A window ([L, R]) that satisfies a problem-specific condition**

- The window always represents a **valid candidate**
- If invalid → adjust boundaries until valid again

---

## Decision Process

At each step:

1. **Expand right boundary (R)** → include new element
2. Check if window is still valid
3. If invalid → **shrink left boundary (L)** until valid

Each decision:

- Adds new information (expand)
- Removes irrelevant/excess information (shrink)

---

## Why It Works

Instead of recomputing every subarray:

- Each element is added **once** (by R)
- Each element is removed **at most once** (by L)

This avoids redundant work and ensures efficiency.

---

## Boundary Interpretation

Sliding window is about **actively managing boundaries**:

- Expand → explore larger candidates
- Shrink → discard invalid portions

At any moment:

> The window represents the **best valid state ending at R**

---

## Template (Variable Window)

```id="d7m2qp"
L = 0

for R in range(n):
    # include A[R]

    while window is invalid:
        # remove A[L]
        L += 1

    # update answer using window [L, R]
```

---

## Key Insight

Sliding window is fundamentally:

> **Grow when possible, shrink when necessary, always maintain validity**

---

## When to Use

- Contiguous subarrays/substrings
- Problems with constraints (sum, distinct elements, frequency, etc.)
- Optimization over ranges (max/min length, count, etc.)

---

## Mental Model

Think:

- “What is the current valid window?”
- “Do I need to expand or shrink to maintain validity?”

Not:

- “Try all subarrays” (that’s brute force)

---

## Complexity

- Time: ( \Theta(n) )
- Space: ( \Theta(1)) to ( \Theta(k)) (depending on tracking)

---

## One-Line Intuition

> Sliding Window = **continuously adjust boundaries to maintain a valid subarray efficiently**

# Related

- [[atom/CS/dsa/algorithms/sliding-window|sliding-window]]
