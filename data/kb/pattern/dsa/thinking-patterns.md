# Pattern: DSA Thinking

## Orthogonal

**Definition:** Independent concerns that don’t affect each other  
**Use:** Separate logic cleanly

**Example:**

- Index logic vs value constraints
- Sorting vs searching

---

## Invariant

**Definition:** A condition that remains true throughout execution  
**Use:** Proving correctness of algorithms

**Example:**

- Binary search: target always within bounds
- Sliding window: window satisfies condition

---

## Monotonic

**Definition:** Always increasing or always decreasing  
**Use:** Enables optimization (binary search, stacks)

**Example:**

- Sorted arrays
- Monotonic stack problems

---

## Complementary

**Definition:** Two values that complete each other  
**Use:** Target-based problems

**Example:**

- Two Sum → `target - x`

---

## Symmetric

**Definition:** Mirror-like structure or behavior  
**Use:** Trees, two-pointer techniques

**Example:**

- Symmetric binary tree
- Comparing left/right halves

---

## Idempotent

**Definition:** Repeating operation has no additional effect  
**Use:** Stability, caching, safe repeats

**Example:**

- Adding same element to a set

---

## Commutative

**Definition:** Order doesn’t matter  
**Use:** Simplifies reasoning

**Example:**

- `a + b = b + a`

---

## Associative

**Definition:** Grouping doesn’t matter  
**Use:** Segment trees, parallel ops

**Example:**

- `(a + b) + c = a + (b + c)`

---

## Greedy Choice Property

**Definition:** Local optimal choice leads to global optimum  
**Use:** Greedy algorithms

---

## Divide and Conquer

**Definition:** Break → solve → combine  
**Use:** Recursive algorithms

**Examples:**

- Merge Sort
- Quick Sort

---

# Key Trio to Remember

- Orthogonal → separate concerns
- Invariant → what must stay true
- Monotonic → enables optimization
