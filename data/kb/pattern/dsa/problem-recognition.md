# Pattern: DSA Problem Recognition (Understanding Phase)

## Goal

Identify the correct algorithmic pattern by analyzing **structure**, not keywords.

---

## Core idea

> Multiple patterns share the same surface signals (min/max, optimal, etc.)
> The real differentiator is **how the solution space is explored**.

---

## Step 1: What is being asked?

Classify the goal:

- Find exact value → search problem
- Optimize (min/max) → optimization problem
- Count ways → combinatorics / DP
- Validate existence → decision problem

⚠️ Note: “min/max” alone is NOT enough to pick DP vs greedy vs binary search.

---

## Step 2: Identify the search space

Ask:

> “What are all possible answers?”

### Common structures:

#### 1. Linear / sorted space

- array, sorted list
  → suggests: **binary search / two pointers**

---

#### 2. All combinations / subsets

- “ways”, “combinations”, “subsets”
  → suggests: **backtracking / DP**

---

#### 3. Sequential decisions

- step-by-step choices
  → suggests: **greedy or DP**

---

#### 4. Implicit graph

- transitions between states
  → suggests: **BFS / DFS / DP**

---

## Step 3: Can I reuse subproblems?

Ask:

> “Do overlapping subproblems exist?”

If YES:
→ **Dynamic Programming**

Signals:

- repeated states
- “min steps”, “max profit”
- recomputation if brute forced

---

## Step 4: Is a local decision always safe?

Ask:

> “If I make the best choice now, will it still be optimal later?”

If YES:
→ **Greedy**

Signals:

- no need to reconsider past decisions
- choices don’t interact globally

---

## Step 5: Is the answer monotonic?

Ask:

> “If a solution works, do larger/smaller values also work?”

If YES:
→ **Binary Search on answer**

Signals:

- searching over range of answers
- condition flips once (false → true)

Example:

- “minimum capacity”
- “smallest value that satisfies condition”

---

## Step 6: Can I simulate and track state?

If the process evolves step-by-step with constraints:
→ **Sliding window / two pointers / simulation**

---

## Pattern differentiation (critical)

### DP vs Greedy

| Question                        | If YES → |
| ------------------------------- | -------- |
| Do I need to revisit decisions? | DP       |
| Are subproblems overlapping?    | DP       |
| Is local optimal always global? | Greedy   |

---

### DP vs Binary Search

| Question                              | If YES →      |
| ------------------------------------- | ------------- |
| Am I choosing among combinations?     | DP            |
| Am I searching for a threshold value? | Binary Search |

---

### Greedy vs Binary Search

| Question                                   | If YES →      |
| ------------------------------------------ | ------------- |
| Am I constructing a solution step-by-step? | Greedy        |
| Am I testing candidate answers?            | Binary Search |

---

## Example mappings

### Coin Change

- goal: min coins
- structure: combinations + reuse
  → **DP**

---

### Best Time to Buy/Sell Stock (simple)

- goal: max profit
- structure: single pass decision
  → **Greedy**

---

### Koko Eating Bananas

- goal: minimum speed
- structure: monotonic condition
  → **Binary Search**

---

## Key intuition

> Don’t ask “what does the problem say?”
> Ask “what shape is the solution space?”

---

## Mental checklist

1. What are all possible answers?
2. Is the answer space ordered?
3. Do subproblems repeat?
4. Can I commit locally?
5. Is there a monotonic condition?

---

## Failure mode

> Mapping keywords → patterns instead of structure → patterns

This leads to confusion between:

- DP vs Greedy
- Greedy vs Binary Search

---

## Final mental model

> Pattern recognition = identifying how the solution space behaves, not what the problem says.

# Related

- [[solving-DP]]
