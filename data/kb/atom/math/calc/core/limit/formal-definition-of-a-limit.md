# Formal Definition of a Limit (ε–δ definition)

Let $f(x)$ be a function defined on an open interval around $a$ (except possibly at $a$). We say:

$$
$\lim_{x \to a} f(x) = L$
$$

if for every $\varepsilon > 0$, there exists a $\delta > 0$ such that:

$$
0 < |x - a| < \delta ;\Rightarrow; |f(x) - L| < \varepsilon
$$

---

**Intuition**

- $\varepsilon$: how close you want $f(x)$ to be to $L$
- $\delta$: how close $x$ needs to be to $a$
- You can make $f(x)$ _as close as you want_ to $L$ by taking $x$ _sufficiently close_ to $a$

---

**Key Features**

- Does _not_ require $f(a)$ to be defined
- Focuses on behavior _near_ $a$, not _at_ $a$
- Enables rigorous proofs of limits

---

**Compact Version**

> For every $\varepsilon > 0$, there exists $\delta > 0$ such that closeness in $x$ implies closeness in $f(x)$.

---

If you want, I can add a minimal ε–δ proof example in the same format.
