# Backtracking — Atom Note

## Core Idea

Backtracking is a systematic algorithmic technique that explores all possible solutions by incrementally building candidates and abandoning (backtracking) when a partial solution cannot lead to a valid complete solution.

---

## How It Works

1. **Start with empty solution**
2. **Make a choice** at each decision point
3. **Recurse** to explore further
4. **Check constraints** - if violated, backtrack
5. **Reach base case** - valid solution found
6. **Undo choice** and try next option

---

## Key Components

### State Space Tree

- Each node represents a partial solution
- Branches represent choices
- Leaves are complete solutions or dead ends

### Decision Points

- Points where multiple choices exist
- Each choice leads to a subproblem

### Pruning

- Early termination when constraints violated
- Avoids exploring invalid paths

### Base Case

- Condition that defines a complete solution
- Triggers solution recording or return

---

## Backtracking Template

```python
def backtrack(current_state):
    if is_solution(current_state):
        record_solution(current_state)
        return

    for choice in get_choices(current_state):
        if is_valid(choice, current_state):
            make_choice(current_state, choice)
            backtrack(current_state)
            undo_choice(current_state, choice)
```

---

## Common Problem Types

### Combinatorial Generation

- **Permutations**: All arrangements of elements
- **Combinations**: Subsets of specific size
- **Subsets**: All possible subsets (power set)

### Constraint Satisfaction

- **N-Queens**: Place N queens on chessboard with no attacks
- **Sudoku**: Fill grid with constraints
- **Graph Coloring**: Color vertices with adjacent constraints

### Path Finding

- **Maze Solving**: Find path with obstacles
- **Knight's Tour**: Visit all squares exactly once
- **Word Search**: Find words in grid

---

## Implementation Patterns

### Choice Management

- Iterate through available options
- Track used elements (arrays, sets, bitmasks)
- Handle duplicates appropriately

### State Tracking

- Current path/solution being built
- Visited/used elements
- Current position/index

### Optimization Techniques

- **Pruning**: Early constraint checking
- **Symmetry Breaking**: Avoid equivalent solutions
- **Heuristics**: Choose promising paths first

---

## Time Complexity

- **Worst Case**: O(b^d) where b=branching factor, d=depth
- **Best Case**: Much better with good pruning
- Often exponential but acceptable for small inputs

---

## When to Use Backtracking

- Problems with multiple choices at each step
- Need to explore all possible combinations
- Constraints that eliminate invalid paths
- Small input sizes (N ≤ 20 typically)
- When DP is too complex or memory-intensive

---

## Common Mistakes

- Forgetting to undo choices (state pollution)
- Not checking constraints early enough
- Inefficient choice ordering
- Missing base cases
- Not handling duplicates properly

---

## Advantages vs Disadvantages

### Advantages

- Simple to implement
- Finds all solutions if needed
- Natural for constraint problems
- Easy to add pruning

### Disadvantages

- Exponential time complexity
- High memory usage for deep recursion
- Not suitable for large inputs
- May find solutions multiple times

---

# Related Algorithms

- **DFS**: Backtracking is a form of DFS with pruning
- **Dynamic Programming**: For optimization problems
- **Greedy**: For problems with optimal substructure
- **Branch and Bound**: Optimization with bounds

---

## Example: Subsets

```python
def subsets(nums):
    result = []

    def backtrack(start, current):
        result.append(current[:])  # Record solution

        for i in range(start, len(nums)):
            current.append(nums[i])  # Make choice
            backtrack(i + 1, current)  # Recurse
            current.pop()  # Undo choice

    backtrack(0, [])
    return result
```

---

## Key Insights

- Backtracking explores the solution space systematically
- Pruning is crucial for performance
- State management (make/undo) is essential
- Template applies to many problem types
- Often used when other methods are overkill
