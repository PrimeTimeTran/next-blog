## Step 1: Ask _what kind of question is being asked?_

### 1️⃣ **“Can I reach / is it possible?”**

→ Often **greedy** or **graph reachability**

Examples:

- Jump Game
- Can reach end?
- Valid parentheses
- Interval coverage

👉 These usually **don’t require optimality**, just feasibility.

---

### 2️⃣ **“What is the minimum / maximum?”**

→ Usually **DP** or **graph shortest path**

Examples:

- Coin Change (min coins)
- Minimum jumps
- Edit distance
- Min cost path

⚠️ Greedy is suspicious here unless proven safe.

---

### 3️⃣ **“List all / try all / count all”**

→ **Backtracking**

Examples:

- Permutations
- Combinations
- N-Queens
- Subsets

👉 If the problem wants _enumeration_, greedy is dead on arrival.

---

## Step 2: Look at **choice reversibility**

This is the biggest tell.

### Greedy

- Makes a choice
- **Never undoes it**
- Trusts the choice forever

> “I pick this now and move on.”

---

### Backtracking

- Makes a choice
- Explores
- **Undoes it**
- Tries another

> “Try → recurse → undo → try next”

---

### DP

- Doesn’t “choose” at runtime
- Computes **all possible choices**
- Stores results
- Reuses them

> “I’ll remember the answer to this state.”

---

### Graph

- Moves between **states/nodes**
- Uses BFS/DFS/Dijkstra
- Often looks like DP with a queue

> “States + transitions”

---

## Step 3: Ask — **does a bad early choice ruin everything?**

### If YES → ❌ Greedy

Examples:

- Coin Change
- Word Break (sometimes)
- Partition problems

---

### If NO → ✅ Greedy possible

Examples:

- Jump Game
- Interval scheduling
- Activity selection

---

## Step 4: Recognize code patterns (very practical)

### Greedy pattern

```python
best = something
for x in data:
    best = update(best, x)
return best
```

✔ No recursion
✔ No memo
✔ No undo

---

### Backtracking pattern

```python
def dfs(path):
    if done:
        record(path)
        return
    for choice in choices:
        path.append(choice)
        dfs(path)
        path.pop()  # <-- undo
```

✔ Explicit undo
✔ Explores all branches

---

### DP pattern

```python
@lru_cache
def dp(state):
    if base:
        return value
    return best(dp(next_state) for next_state in options)
```

✔ State definition
✔ Memoization
✔ Optimal substructure

---

### Graph pattern

```python
queue = deque([start])
visited = set([start])

while queue:
    node = queue.popleft()
    for nei in neighbors(node):
        if nei not in visited:
            visited.add(nei)
            queue.append(nei)
```

✔ Explicit nodes & edges
✔ BFS/DFS/Dijkstra

---

## Step 5: Why they _look_ similar

This is key:

> **DP, backtracking, and graph traversal are all exploring a state space.**

Difference:

- Backtracking: explores everything
- DP: explores everything but remembers
- Graph: explores states via edges
- Greedy: **refuses to explore**

That’s why greedy is fastest — and most fragile.

---

## One powerful shortcut question (use this every time)

Ask yourself:

> “If I had infinite time, would I try all possibilities?”

- Yes → Backtracking / DP
- No, I can decide immediately → Greedy

Then ask:

> “Do subproblems repeat?”

- Yes → DP
- No → Backtracking

---

## Final mental cheat sheet

| Problem smell     | Likely approach |
| ----------------- | --------------- |
| Reachability      | Greedy / Graph  |
| Minimum cost      | DP / Graph      |
| All solutions     | Backtracking    |
| State transitions | Graph           |
| Local choice safe | Greedy          |
| Must undo choices | Backtracking    |
