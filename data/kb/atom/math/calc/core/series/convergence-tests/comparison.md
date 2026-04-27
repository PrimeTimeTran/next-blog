---
tags:
  - calculus
  - calc-2
  - series
  - convergence-tests
---

# 📘 Comparison Test

The Comparison Test determines convergence or divergence by comparing a series to another series whose behavior is already known.

---

# 🧠 Core Idea

> If a series is smaller than a known convergent series, it converges.  
> If it is larger than a known divergent series, it diverges.

---

# 📊 Direct Comparison Test

Assume:

$$
0 \le a_n \le b_n
$$

for sufficiently large $n$.

---

## ✔️ Convergence Case

If:

$$
\sum b_n \text{ converges}
$$

then:

$$
\sum a_n \text{ converges}
$$

---

## ❌ Divergence Case

If:

$$
\sum a_n \text{ diverges}
$$

then:

$$
\sum b_n \text{ diverges}
$$

---

# 🔍 Meaning

You “trap” a difficult series between simpler ones:

- smaller than something finite → must be finite
- bigger than something infinite → must also be infinite

---

# 📈 Intuition

Think of series as accumulation:

- if you’re always adding less than a finite total → you stay finite
- if you always exceed something that blows up → you also blow up

---

# 🧮 Example (Convergence)

$$
\frac{1}{n^2 + 1} \le \frac{1}{n^2}
$$

Since:

$$
\sum \frac{1}{n^2} \text{ converges}
$$

then:

> $\sum \frac{1}{n^2 + 1}$ converges

---

# 🧮 Example (Divergence)

$$
\frac{1}{n} \le \frac{1}{\sqrt{n}}
$$

Since:

$$
\sum \frac{1}{n} \text{ diverges}
$$

then:

> $\sum \frac{1}{\sqrt{n}}$ diverges

---

# ⚠️ Key Requirement

You must choose comparisons carefully:

- inequalities must hold for large $n$
- both series must be non-negative

---

# 🧠 Key Insight

> You don’t solve the series directly — you classify it by dominance.

---

# 🔗 Related Tests

- [[p-series-test|P-Series Test]]
- [[divergence-test|Divergence Test]]
- [[limit-comparison-test|Limit Comparison Test]]
- [[integral-test|Integral Test]]

---

# 🧭 Mental Model

> Compare your unknown series to a known “benchmark growth pattern.”

---

# 📌 Summary

- Compare to known convergent/divergent series
- Use inequalities: $a_n \le b_n$
- Smaller than convergent → converges
- Larger than divergent → diverges
- Works best with positive-term series
