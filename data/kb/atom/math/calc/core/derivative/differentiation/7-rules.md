---
tags:
  - derivatives
  - calc-1
  - atom
type: atom
---

# 🧠 Core Idea

The 7 differentiation rules are shortcuts that let you compute derivatives **without using [[first-principles]]** for every problem.

> Rather than evaluating limits for each function, these rules combine simpler derivatives into more complex ones.

---

# 📌 Intuition

Differentiation rules work because the derivative operation respects certain **algebraic operations**:

- **Linearity**: Derivatives distribute over addition and scalar multiplication (like factoring)
- **Composition**: Complex functions can be broken into simpler parts (like chain rule)
- **Products and Quotients**: When functions multiply or divide, their derivatives combine in predictable ways

Think of these rules as **"building blocks"** — you memorize a few basic derivatives (like $\frac{d}{dx}[x^n]$), then use these rules to find derivatives of almost any function.

---

# 🧩 Key Properties

1. **Finite set of rules** — Just 7 rules cover the vast majority of real-world derivatives
2. **Composable** — You can combine rules (e.g., chain rule inside product rule)
3. **Deterministic** — Unlike first principles, applying rules gives a unique answer
4. **Mechanical** — No limit evaluation required; just symbolic manipulation

![[7-rules-differentiation-table]]

---

# ⚙️ How It Works

## 1. [[constant-rule|Constant Rule]]

The derivative of any constant is always **zero** (constants don't change).

$$\frac{d}{dx}(c) = 0$$

**Intuition**: A horizontal line has slope 0 everywhere.

---

## 2. [[power-rule|Power Rule]]

For power functions, decrease the exponent by 1 and multiply by the original exponent.

$$\frac{d}{dx}[x^n] = nx^{n-1}$$

**Most useful rule** — applies to polynomials, radicals, and more.

---

## 3. [[sum-rule|Sum Rule]]

The derivative of a sum equals the sum of the derivatives.

$$\frac{d}{dx}[f(x) + g(x)] = \frac{d}{dx}[f(x)] + \frac{d}{dx}[g(x)]$$

**Benefit**: Differentiate each term separately.

---

## 4. [[constant-multiple|Constant Multiple]]

Constants factor out of derivatives.

$$\frac{d}{dx}[k \cdot f(x)] = k \cdot \frac{d}{dx}[f(x)]$$

---

## 5. [[product-rule|Product Rule]]

For products of two functions:

$$\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$

**Mnemonic**: "First times derivative of second, plus second times derivative of first"

---

## 6. [[quotient-rule|Quotient Rule]]

For quotients (fractions) of two functions:

$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}$$

**Mnemonic**: "Low-d-high minus high-d-low, square the bottom and away we go"

---

## 7. [[chain-rule|Chain Rule]]

For composite functions $f(g(x))$ (function within a function):

$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Intuition**: Take the derivative of the **outer** function (evaluated at the inner function), then multiply by the derivative of the **inner** function.

---

# 📚 Examples

## Example 1: Power Rule

**Find** $\frac{d}{dx}[x^5]$

$$\frac{d}{dx}[x^5] = 5x^{5-1} = 5x^4$$

---

## Example 2: Sum Rule + Power Rule

**Find** $\frac{d}{dx}[3x^3 - 2x^2 + 5x - 7]$

Apply sum rule (differentiate each term), then power rule on each:

$$= \frac{d}{dx}[3x^3] - \frac{d}{dx}[2x^2] + \frac{d}{dx}[5x] - \frac{d}{dx}[7]$$

$$= 3(3x^2) - 2(2x) + 5(1) - 0$$

$$= 9x^2 - 4x + 5$$

---

## Example 3: Product Rule

**Find** $\frac{d}{dx}[(x^2)(x^3 + 1)]$

Let $f(x) = x^2$ and $g(x) = x^3 + 1$

$$f'(x) = 2x, \quad g'(x) = 3x^2$$

Apply product rule:

$$\frac{d}{dx}[(x^2)(x^3 + 1)] = (2x)(x^3 + 1) + (x^2)(3x^2)$$

$$= 2x^4 + 2x + 3x^4 = 5x^4 + 2x$$

---

## Example 4: Chain Rule

**Find** $\frac{d}{dx}[(3x^2 + 1)^5]$

Let outer function $f(u) = u^5$ and inner function $g(x) = 3x^2 + 1$

$$f'(u) = 5u^4, \quad g'(x) = 6x$$

Apply chain rule:

$$\frac{d}{dx}[(3x^2 + 1)^5] = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4$$

---

## Example 5: Quotient Rule

**Find** $\frac{d}{dx}\left[\frac{x^2}{x + 1}\right]$

Let $f(x) = x^2$ and $g(x) = x + 1$

$$f'(x) = 2x, \quad g'(x) = 1$$

Apply quotient rule:

$$\frac{d}{dx}\left[\frac{x^2}{x+1}\right] = \frac{(2x)(x+1) - (x^2)(1)}{(x+1)^2}$$

$$= \frac{2x^2 + 2x - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}$$

---

ˆ

# 💡 Strategy for Using These Rules

1. **Identify the structure** — Is it a sum? Product? Composite? Fraction?
2. **Apply the matching rule** — Use the rule that fits the structure
3. **Recursively apply rules** — Use power rule, constant rule, etc. on the pieces
4. **Simplify** — Combine like terms and factor when possible

**Pro tip**: The chain rule is the most important and widely used—master it first.

---

# ⚠️ Common Mistakes

1. **Forgetting the chain rule** — $\frac{d}{dx}[(x^2 + 1)^3] \neq 3(x^2 + 1)^2$ (missing the inner derivative!)
2. **Misapplying quotient rule** — Don't flip $f'g - fg'$ to $fg' - f'g$
3. **Forgetting to use product rule** — Treating $(x)(x^2)$ as just $x^3$ (you can, but recognize you're combining multiplication)

---

# 🔗 Related Concepts

- [[first-principles]] — The underlying definition these rules are derived from
- [[atom/math/calc/core/derivative|derivative]] — Core concept; rules are just shortcuts
- [[atom/math/calc/core/derivative/differentiation/chain-rule|chain-rule]] — Deserves special study; used constantly
- [[power-rule]] — The single most important rule for polynomials
- [[reference/calc/symbols|symbols]] — Reference for notation
