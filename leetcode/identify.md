## Cheat Sheet — Algorithm Intuition

### Binary Search

- **Keywords / phrases that give it away:**

  - “Minimum / maximum / smallest / largest / least / most…”
  - “Is X enough?” / “Is X feasible?” / “Can we do it in Y days?”
  - You need to **guess an answer** and verify it.

- **Core idea:**

  - There’s a monotonic yes/no predicate: once it flips, it stays that way.
  - If `C` works → all capacities > C work; if `C` fails → all < C fail.

- **How to approach:**

  1. Define the search space (min/max possible answer).
  2. Write a function to check feasibility for a candidate.
  3. Binary search to find the minimal/maximal value satisfying the condition.

- **Visual cue:** “Guess & verify” problems.

---

### Greedy

- **Keywords / phrases that give it away:**

  - Earliest, latest, closest, as soon as possible, locally optimal.
  - “Maximum number of…” / “Minimum number of…” / “Take it now.”
  - Irreversible decisions.

- **Core idea:**

  - You **make the locally optimal choice at each step**, and it leads to a globally optimal solution.
  - **No backtracking**, once a choice is made, you never regret it.

- **How to approach:**

  1. Sort / order items if needed.
  2. Always pick the “best” available item at each step according to the greedy rule.

- **Visual cue:** “Decide once, move on.”

---

### Graph

- **Keywords / phrases that give it away:**

  - If the problem is about moving between configurations under rules, it’s a graph.

- **Core idea:**

  - If the problem is about moving between configurations under rules, it’s a graph.

- **How to approach:**

  1. Is there a notion of “state”?
  2. Can I move from one state to another via fixed rules?
  3. Am I trying to reach a target state?
  4. Do I need to avoid revisiting states?

- **Visual cue:** “Decide once, move on.”

---

### Dynamic Programming (DP)

- **Keywords / phrases that give it away:**

  - Max / min / least / most / smallest / largest …
  - “Number of ways”, “all possible”, “optimal substructure”, “choose / don’t choose”, “maximum profit / minimum cost”.
  - “Try all valid choices and remember the best.”

- **Core idea:**

  - Break problem into overlapping subproblems.
  - **Store solutions** to subproblems to avoid recomputation.
  - Often: `dp[i] = best answer using first i items` or `dp[state] = best answer from this configuration`.

- **How to approach:**

  1. Identify the subproblem and state variables.
  2. Define the recurrence relation.
  3. Compute bottom-up or top-down with memoization.

- **Visual cue:** “Explore choices, remember results.”

---

### One-Liners

- **Binary Search:** Guess & verify (monotonic).
- **Greedy:** Decide once, move on.
- **DP:** Explore choices, remember results.

---

### Extra Notes on Recognition

- **Linked Lists:** keywords like `next`, `prev`, `head`, `tail`.
- **Trees:** nodes, left/right, root, subtree.
- **Graphs:** nodes, edges, adjacency, connected components, shortest paths.
- **Important mindset:** For trees/graphs, even if keywords aren’t explicit, think “can I model this as nodes/edges and apply BFS/DFS/Dijkstra/etc?”
