# Pattern: Convergence Recognition

## Goal

To quickly determine whether a sequence or series converges, and which test or intuition applies _before doing formal work_.

---

## Core idea

> Convergence is usually decided by **structure recognition**, not computation.

Most problems reduce to identifying the _type of behavior_ rather than calculating limits directly.

---

## Step 1: Identify object type

- Sequence → analyze $a_n$
- Series → analyze $\sum a_n$

This determines whether you look at:

- limit behavior (sequence)
- accumulated behavior (series)

---

## Step 2: Detect dominant behavior

Ask: _what controls growth/decay?_

### Common patterns:

- polynomial: $n^k$
- exponential: $r^n$
- factorial: $n!$
- logarithmic: $\log n$
- rational: $\frac{p(n)}{q(n)}$

---

## Step 3: Normalize expression

Rewrite to expose structure:

- factor highest power
- simplify fractions
- isolate exponentials
- compare dominant terms

---

## Step 4: Match to known convergence archetypes

### Benchmark families

#### 1. p-series form

$$
\frac{1}{n^p}
$$

- converges if $p > 1$

---

#### 2. geometric form

$$
ar^n
$$

- converges if $|r| < 1$

---

#### 3. factorial / exponential growth

- factorial dominates exponentials
- usually suggests **ratio test**

---

#### 4. alternating structure

$$
(-1)^n a_n
$$

Check:

- decreasing magnitude
- $a_n \to 0$

---

## Step 5: Choose test by structure

### Quick mapping:

- Ratio test → factorials, exponentials
- Root test → powers like $n^n$, $(a_n)^n$
- Comparison test → inequalities / known bounds
- Limit comparison → rational expressions
- Integral test → monotone decreasing functions
- Alternating test → sign flips
- Divergence test → check $\lim a_n$

---

## Step 6: Sanity check limit behavior

Always ask:

- Does term go to 0?
- Does magnitude shrink?
- Is there hidden exponential growth?

---

## Key intuition

> Convergence is determined by _dominant asymptotic behavior_, not exact algebra.

---

## Common failure modes

- ignoring dominant term
- overusing algebra instead of recognition
- applying tests blindly without structure matching

---

## Mental model

> “What familiar object does this behave like at infinity?”

Once you can answer that, the correct test is usually obvious.
