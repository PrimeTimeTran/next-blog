---
tags:
  - limits
  - atom
type: atom
---

# 🧠 Core Idea

A limit describes the value a function **approaches** as the input approaches some value—without necessarily reaching it.

> Limits let us analyze function behavior at points where the function might not even be defined.

$$\lim_{x \to a} f(x) = L$$

**Read as**: "The limit of $f(x)$ as $x$ approaches $a$ is $L$"

> "The $y$ values of the function are approaching $L$ as the $x$ values of the function are approaching $a$"

**Interpretation**: As

---

# 📌 Intuition

Think of limits as **"getting arbitrarily close"**:

- You don't have to _reach_ the value; you just have to get _arbitrarily close_ to it
- The function value at the point itself doesn't matter—only what happens nearby

**Physical analogy**: Imagine a racecar approaching a finish line. The limit describes where the car _should be_ as it gets close, even if there's traffic that prevents it from crossing.

**Three key scenarios:**

1. **Function is defined at the point** — Limit equals the function value
2. **Function has a "hole"** — Limit still exists; the hole doesn't matter
3. **Function has a jump or discontinuity** — Limit might not exist

---

# 🧩 Key Properties

1. **Independent of the actual value** — $\lim_{x \to a} f(x)$ doesn't depend on $f(a)$
2. **Directional** — Can approach from left ($x \to a^-$) or right ($x \to a^+$)
3. **Unique (when it exists)** — If a limit exists, it has exactly one value
4. **Foundation of calculus** — Derivatives and integrals are defined using limits

---

# ⚙️ How It Works

## Formal Definition

We say $\lim_{x \to a} f(x) = L$ if:

For every small distance $\epsilon > 0$, we can find a small distance $\delta > 0$ such that whenever $0 < |x - a| < \delta$, we have $|f(x) - L| < \epsilon$.

**In plain English**: We can get as close to $L$ as we want by choosing $x$ sufficiently close to $a$.

## One-Sided Limits

**Left-hand limit**: $\lim_{x \to a^-} f(x)$ — approaching from the left

**Right-hand limit**: $\lim_{x \to a^+} f(x)$ — approaching from the right

**Key fact**: A limit exists if and only if both one-sided limits exist and are equal.

$$\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$

## Limit Laws

When limits exist, they obey algebraic rules (you can factor them):

- **Sum rule**: $\lim[f(x) + g(x)] = \lim f(x) + \lim g(x)$
- **Product rule**: $\lim[f(x) \cdot g(x)] = \lim f(x) \cdot \lim g(x)$
- **Quotient rule**: $\lim \frac{f(x)}{g(x)} = \frac{\lim f(x)}{\lim g(x)}$ (if denominator $\neq 0$)
- **Power rule**: $\lim [f(x)]^n = [\lim f(x)]^n$

---

# 📚 Examples

## 1: Direct Substitution

**Find** $\lim_{x \to 2} (3x + 1)$

Since the function is continuous, just substitute:

$$\lim_{x \to 2} (3x + 1) = 3(2) + 1 = 7$$

---

## 2: Hole in the Graph

**Find** $\lim_{x \to 1} \frac{x^2 - 1}{x - 1}$

Direct substitution gives $\\frac{0}{0}$ (undefined), but we can still find the limit:

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x-1)(x+1)}{x-1}$$

Cancel the $(x-1)$ factor (valid since $x \neq 1$ in the limit):

$$= \lim_{x \to 1} (x + 1) = 1 + 1 = 2$$

**Interpretation**: There's a hole at $x = 1$, but the limit is still 2.

---

## 3: One-Sided Limits

**Find** $\lim_{x \to 0^+} \frac{1}{x}$ **and** $\lim_{x \to 0^-} \frac{1}{x}$

From the right ($x > 0$, approaching 0):
$$\lim_{x \to 0^+} \frac{1}{x} = +\infty$$

From the left ($x < 0$, approaching 0):
$$\lim_{x \to 0^-} \frac{1}{x} = -\infty$$

Since the one-sided limits are different, $\lim_{x \to 0} \frac{1}{x}$ **does not exist (D.N.E.)**

---

## 4: Limits at Infinity

**Find** $\lim_{x \to \infty} \frac{1}{x}$

As $x$ gets arbitrarily large, $\\frac{1}{x}$ gets arbitrarily close to 0:

$$\lim_{x \to \infty} \frac{1}{x} = 0$$

---

# 💡 Key Insights

1. **Limits don't require the function to be defined at the point** — That's the whole point! Limits describe behavior near a point, not at it.

2. **One-sided limits must agree** — If left and right limits differ, the (two-sided) limit doesn't exist.

3. **Continuity and limits are connected** — A function is continuous at $x = a$ if $\lim_{x \to a} f(x) = f(a)$.

4. **Algebraic techniques matter** — When direct substitution fails, use factoring, rationalizing, or other algebra to find the limit.

5. **Limits are the foundation of everything** — Derivatives are limits. Integrals are limits. Understanding limits deeply is crucial.

---

# ⚠️ Common Mistakes

1. **Thinking the limit must equal $f(a)$** — The limit and function value can be different (or the function value may not exist)

2. **Forgetting to check one-sided limits** — A limit only exists if left and right limits agree

3. **Getting $\\frac{0}{0}$ and giving up** — This means you need to simplify algebraically; the limit can still exist

4. **Assuming $\infty$ is a limit** — We say "$\lim = \infty$" as shorthand for "the limit doesn't exist; the function goes to infinity"

5. **Not simplifying before substituting** — Always factor, rationalize, or simplify first if you're getting indeterminate forms

---

# 🔗 Related Concepts

- [[continuous]]
  - [[vertical asymptote]]
- [[continuity]] — When limits equal function values
- [[continuity-in-limits]] ⎯
- [[definition-of-derivative]] — Derivatives are defined as limits
- [[Integrals]] — Integration involves limits of Riemann sums
- [[Squeeze Theorem]] — A technique for finding tricky limits
- [[L'Hôpital's Rule]] — Advanced technique for $\\frac{0}{0}$ and $\\frac{\infty}{\infty}$ cases
- [[calculus-symbols-cheatsheet]] — Notation reference for limits

# Related

[[top-10-must-knows-limits]]
