# Math Proofs

## Definition

A **mathematical proof** is a finite sequence of logically valid steps that demonstrates the truth of a statement from accepted axioms, definitions, and previously proven results.

---

## Purpose

- Establish **certainty** beyond examples or intuition
- Build a **logical structure** for mathematics
- Connect results into a **dependency network** of theorems

---

## Core Structure

Most proofs follow this pattern:

1. **Statement (Theorem/Claim)**
2. **Assumptions (Given / Hypotheses)**
3. **Logical steps**
4. **Conclusion**

---

## Common Proof Methods

### 1. Direct Proof

Start from assumptions → apply logic → reach conclusion.

Example idea:
If ( n ) is even, then ( n^2 ) is even.

---

### 2. Proof by Contradiction

Assume the opposite → derive a contradiction → conclude original statement is true.

Used for:

- irrationality proofs
- uniqueness arguments

---

### 3. Proof by Contrapositive

Instead of proving ( P \rightarrow Q ), prove ( \neg Q \rightarrow \neg P )

Often simpler than direct proof.

---

### 4. Mathematical Induction

Used for integers.

Structure:

- Base case: prove for first value (e.g., ( n=1 ))
- Inductive step: assume true for ( n=k ), prove for ( n=k+1 )

---

### 5. Case Analysis

Split into exhaustive cases and prove each separately.

Useful when:

- absolute values
- piecewise definitions
- parity (even/odd)

---

## Key Principles

- Every step must follow **explicit logic**
- No reliance on intuition alone
- Definitions are **not optional shortcuts**
- Previous theorems are valid only if already proven

---

## Common Pitfalls

- Circular reasoning (assuming what you’re proving)
- Missing edge cases
- Implicit assumptions (domain restrictions, continuity, etc.)
- Jumping steps without justification

---

## Mental Model

A proof is not computation — it is:

> a controlled transformation of truth from axioms → conclusion

---

# Related Concepts

- [[axiom|Axiom]]
- [[theorem|Theorem]]
- Lemma
- Corollary
- Logical implication
