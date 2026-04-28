## 📉Big O Notation

### Core idea

Big O notation describes the **upper bound of an algorithm’s growth rate** as input size increases.

It answers:

> “How bad can performance get as data scales?”

---

# 🧱 Formal intuition

Big O ignores implementation details and focuses on dominant growth:

```text id="bo1"
f(n) → growth of work
O(f(n)) → upper bound of growth as n → large
```

---

# 📊 Common Big O classes

## O(1) — Constant time

> Execution time does not change with input size

Example:

- array access by index

```text id="bo2"
arr[5]
```

---

## O(log n) — Logarithmic time

> Problem size halves each step

Example:

- binary search

```text id="bo3"
search space → n → n/2 → n/4 → ...
```

---

## O(n) — Linear time

> Work grows directly with input size

Example:

- loop through array

---

## O(n log n) — Linearithmic time

> Efficient sorting algorithms

Example:

- merge sort
- heap sort

---

## O(n²) — Quadratic time

> Nested loops over input

Example:

- comparing every pair of elements

---

## O(2ⁿ) — Exponential time

> Growth doubles with each input increase

Example:

- recursive Fibonacci (naive)
- subset generation

---

## O(n!) — Factorial time

> Extremely expensive combinatorial growth

Example:

- traveling salesman brute force

---

# 🧠 Key rules

## 1. Drop constants

```text id="bo4"
3n → O(n)
```

## 2. Keep dominant term

```text id="bo5"
n² + n → O(n²)
```

## 3. Different loops multiply

```text id="bo6"
O(n) + O(n) → O(n)
O(n) × O(n) → O(n²)
```

---

# 🧩 Why Big O matters

Big O is used to:

- compare algorithm efficiency
- predict scalability limits
- choose data structures
- evaluate system bottlenecks

---

# 🧠 Visual growth intuition

```text id="bo7"
O(1)        flat line
O(log n)    slow curve
O(n)        straight line
O(n log n)  slightly curved line
O(n²)       steep curve
O(2ⁿ)       explosive curve
```

---

# 🔗 Relationship to other concepts

- Big O = upper bound of growth
- Big Ω = lower bound
- Big Θ = exact bound
- Asymptotic analysis = umbrella concept

---

# 📌 Key takeaway

> Big O notation expresses the worst-case growth rate of an algorithm as input size increases, allowing comparison of scalability independent of hardware or implementation details.

# Related

- [[asymptotic-analysis|Asymptotic Analysis]]
- [[asymptotic-complexity|Asymptotic Complexity]]
- [[complexity-classes-algorithm-groups|Complexity Classes Algorithm Groupings]]
