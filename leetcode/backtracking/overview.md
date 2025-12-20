# Backtracking

## Common Problem Types

Backtracking is commonly applied to solve problems that require exploring all possible solutions in a systematic way. Here are the main categories:

### Combinatorial Problems

- **Subsets**: Generate all possible subsets of a set
- **Combinations**: Find all combinations of k elements from n elements
- **Permutations**: Generate all possible arrangements of elements

### Constraint Satisfaction Problems

- **N-Queens**: Place N queens on an N×N chessboard so no two attack each other
- **Sudoku Solver**: Fill a 9×9 grid with digits so each row, column, and 3×3 subgrid contains all digits from 1-9
- **Graph Coloring**: Color a graph with minimum colors such that no adjacent vertices share the same color

### Path Finding and Search Problems

- **Word Search**: Find if a word exists in a 2D grid of letters
- **Maze/Path Finding**: Find all paths from start to end in a grid with obstacles
- **Knight's Tour**: Find a sequence of moves for a knight to visit every square on a chessboard exactly once

### String and Array Problems

- **Palindrome Partitioning**: Partition a string into substrings that are all palindromes
- **Parentheses Generation**: Generate all valid combinations of n pairs of parentheses
- **Expression Evaluation**: Add operators between numbers to achieve a target value

### Other Applications

- **Partition Problems**: Partition a set into subsets with equal sum
- **Subset Sum**: Find if there exists a subset with a given sum
- **Rat in a Maze**: Find all paths for a rat to reach cheese in a maze

## Indicators

Usually identified by having a state change we make and then undo.

### Key Indicators for Backtracking Solutions

1. **"Find All" Requirements**

   - Problems asking to "find all possible ways", "generate all combinations", or "list all solutions"
   - Examples: "Find all subsets", "Generate all permutations"

2. **Multiple Choices at Each Step**

   - Decisions with several options at each point
   - Need to try different choices and backtrack when they don't work

3. **Constraints and Validation**

   - Solutions must satisfy certain constraints or conditions
   - Need to check validity after each choice

4. **Exponential Search Space**

   - Problems where brute force would be O(2^n) or O(n!) complexity
   - Backtracking provides a way to prune invalid paths

5. **State Modification and Undo**

   - Algorithm involves making changes to state and then reverting them
   - Common patterns: adding/removing elements, marking/unmarking visited

6. **Recursive Structure with Pruning**

   - Natural recursive solutions where you can stop exploring certain branches
   - Early termination when constraints are violated

7. **Common Keywords in Problem Statements**

   - "All possible", "generate", "find all", "combinations", "permutations"
   - "Valid arrangements", "satisfying conditions", "without repetition"

8. **Grid or Board Problems**

   - Problems involving 2D grids, chessboards, or similar structures
   - Placing objects with constraints (queens, knights, etc.)

9. **Subset or Combination Generation**

   - Problems requiring selection of elements with specific properties
   - Choosing k out of n items with constraints

10. **Optimization with Multiple Solutions**
    - Finding optimal solutions where you need to explore all possibilities
    - Sometimes combined with dynamic programming for optimization
