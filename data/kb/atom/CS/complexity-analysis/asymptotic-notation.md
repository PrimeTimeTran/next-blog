## Asymptotic Notation

**Definition**  
A mathematical framework used to describe how an algorithm’s time or space complexity grows as input size (n → ∞). It ignores constants and lower-order terms to emphasize growth rate.

---

## Core Notations

### Big O — Upper Bound (Worst Case)

- Describes the maximum growth rate.
- Guarantee: algorithm will not grow faster than this.

```text
f(n) = O(g(n)) if 0 ≤ f(n) ≤ c · g(n) for n ≥ n₀
```

---

### Big Omega — Lower Bound (Best Case)

- Describes the minimum growth rate.
- Guarantee: algorithm will take at least this much.

```text
f(n) = Ω(g(n)) if 0 ≤ c · g(n) ≤ f(n) for n ≥ n₀
```

---

### Big Theta — Tight Bound

- Exact growth rate (both upper and lower bound).

```text
f(n) = Θ(g(n)) ⇔ f(n) = O(g(n)) and f(n) = Ω(g(n))
```

---

## Non-Tight Notations

- **Little o**: strict upper bound (grows strictly slower than ( g(n) ))
- **Little ω**: strict lower bound (grows strictly faster than ( g(n) ))

---

## Common Growth Classes (Increasing Order)

1. Constant: Θ(1)
2. Logarithmic: Θ(log n)
3. Linear: Θ(n)
4. Linearithmic: Θ(n log n)
5. Polynomial: Θ(n²), Θ(n³)
6. Exponential: Θ(2ⁿ)
7. Factorial: Θ(n!)

---

## Key Ideas

- **Ignore constants**: 3n² + 5n → O(n²)
- **Focus on dominant term**
- **Machine-independent**
- **Used to compare scalability**

---

## Quick Intuition

- Big O → “at most”
- Big Ω → “at least”
- Big Θ → “exactly (within bounds)”
