# Pattern: Solving Dynamic Programming Problems

## Goal

Systematically derive a DP solution from first principles.

---

## Core idea

> DP = define a state, express it recursively, cache results

---

## Step 1: Confirm it’s actually DP

Ask:

- Are there overlapping subproblems?
- Is brute force exponential?
- Can I define smaller versions of the same problem?

If YES → proceed with DP

---

## Step 2: Define the state

> “What does a subproblem represent?”

Common forms:

- `dp[i]` → answer using first $i$ elements
- `dp[i][j]` → answer with two variables (index + constraint)
- `dp[x]` → answer for value/amount/state

---

## Step 3: Define the decision

Ask:

> “What choices do I have at each step?”

Examples:

- take / skip
- include / exclude
- try all options (coins, paths, splits)

---

## Step 4: Write the recurrence

> “How does this state depend on smaller states?”

General form:

$$
dp[state] = \text{best/valid result from previous states}
$$

Examples:

- min / max
- sum / count
- boolean (true/false)

---

## Step 5: Identify base cases

> Smallest problems with known answers

Examples:

- `dp[0] = 0`
- empty input
- starting position

---

## Step 6: Choose implementation style

### Top-down (memoization)

- start from goal
- recurse into subproblems
- cache results

Use when:

- easier to think recursively
- sparse state space

---

### Bottom-up (tabulation)

- build from base cases upward
- fill table iteratively

Use when:

- clear order of computation
- dense state space

---

## Step 7: Optimize (optional)

- reduce dimensions (2D → 1D)
- carry only needed previous states
- eliminate unnecessary storage

---

## Recognition patterns

### Strong DP signals

- “minimum / maximum” over combinations
- “number of ways”
- “can we reach / is it possible”
- overlapping decisions

---

### NOT enough alone

- “min / max” (can also be greedy or binary search)

---

## Common DP categories

- 1D DP (linear sequences)
- 2D DP (grids, strings)
- knapsack (include/exclude)
- subsequences / substrings
- interval DP

---

## Mental checklist

1. What does a subproblem mean?
2. What choices do I have?
3. How do choices reduce the problem?
4. What repeats?
5. What do I cache?

---

## Example: Coin Change

- State: `dp[x]` = min coins to make amount $x$
- Decision: try each coin
- Recurrence:

$$
dp[x] = \min(dp[x - c]) + 1
$$

---

## Key intuition

> DP is brute force over a state space, optimized by caching

---

## Failure modes

- unclear state definition
- wrong recurrence
- mixing DP with greedy intuition
- overcomplicating state dimensions

---

## Final mental model

> DP = explore all possibilities once, remember the results, and build the answer from them

# Related

- [[problem-recognition]]
-
