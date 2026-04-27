---
tags:
  - calc-1
  - derivatives
  - atom
type: atom
---

# 🧠 Core Idea

The derivative is defined as the limit of the average rate of change as the interval shrinks to zero.

> It measures the instantaneous rate of change—how fast a function is changing at one exact point.

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

---

# 📌 Intuition

Imagine zooming in on a curve near a point. The closer you look, the more the curve looks like a straight line. That line's slope is the derivative.

**Three ways to think about it:**

1. **Geometric**: Slope of the tangent line touching the curve at point $x$

2. **Physical**: Instantaneous velocity—how fast something is moving _right now_ (not average speed)

3. **Algebraic**: The ratio of infinitesimal changes—how much $y$ changes when $x$ changes by an infinitely small amount

The **limit process** is crucial: we're not evaluating at $h = 0$ (which would give $\frac{0}{0}$), but rather seeing what value the ratio approaches as $h$ gets arbitrarily close to 0.

---

# 🧩 Key Properties

1. **Limit-based definition** — Requires taking a limit; can't be computed by direct substitution
2. **Local property** — Describes behavior at a specific point, not across an interval
3. **Produces a function** — The derivative $f'(x)$ is itself a function that can be evaluated at any $x$
4. **Foundation of calculus** — All other derivatives concepts (rules, integrals) are built on this definition

---

# ⚙️ How It Works

## The Definition Broken Down

![[reference/calc/formula/derivative|derivative]]

**What each part means:**

- **$f(x+h)$** — Function value at the point slightly to the right
- **$f(x)$** — Function value at our point of interest
- **$f(x+h) - f(x)$** — Change in $y$ (rise)
- **$h$** — Change in $x$ (run)
- **$\frac{f(x+h) - f(x)}{h}$** — Average rate of change over interval $[x, x+h]$
- **$\lim_{h \to 0}$** — Let the interval shrink to 0 to get instantaneous rate

## Alternative Formulations

Using different points $a$ and $b$ (instead of $x$ and $x+h$):

$$f'(a) = \lim_{b \to a} \frac{f(b) - f(a)}{b - a}$$

Or using $\Delta x$ and $\Delta y$ notation:

$$f'(x) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$$

---

# 📚 Examples

## Example 1: Linear Function

**Find the derivative of** $f(x) = 3x + 2$ **at** $x = 1$

$$f'(1) = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h}$$

$$= \lim_{h \to 0} \frac{[3(1+h) + 2] - [3(1) + 2]}{h}$$

$$= \lim_{h \to 0} \frac{[3 + 3h + 2] - [5]}{h}$$

$$= \lim_{h \to 0} \frac{3h}{h}$$

$$= \lim_{h \to 0} 3 = 3$$

**Interpretation**: At $x = 1$, the function is changing at a rate of 3 units up for every 1 unit right.

---

## Example 2: Quadratic Function

**Find the derivative of** $f(x) = x^2$ **at** $x = 2$

$$f'(2) = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h}$$

$$= \lim_{h \to 0} \frac{(2+h)^2 - 2^2}{h}$$

$$= \lim_{h \to 0} \frac{4 + 4h + h^2 - 4}{h}$$

$$= \lim_{h \to 0} \frac{4h + h^2}{h}$$

$$= \lim_{h \to 0} (4 + h)$$

$$= 4$$

**Interpretation**: At $x = 2$, the parabola is increasing at a rate of 4.

---

## Example 3: Finding the Derivative Function

**Find** $f'(x)$ **for** $f(x) = x^2$

Instead of finding the derivative at one point, find it for any $x$:

$$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h}$$

$$= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$$

$$= \lim_{h \to 0} \frac{2xh + h^2}{h}$$

$$= \lim_{h \to 0} (2x + h)$$

$$= 2x$$

Now we have **the derivative function**: $f'(x) = 2x$

This gives us the slope at _any_ point on the parabola.

---

# 💡 Key Insights

1. **Why we need limits**: We can't just plug in $h = 0$ because we'd get $\frac{0}{0}$ (undefined). The limit tells us what value we approach as $h$ gets arbitrarily small.

2. **Algebraic simplification is crucial**: Before taking the limit, simplify the expression (usually you can cancel the $h$ in the denominator). Then take the limit.

3. **Derivative = instantaneous rate, not average**: The difference quotient $\frac{f(x+h) - f(x)}{h}$ is the _average_ rate. The limit (shrinking $h$ to 0) converts this to _instantaneous_.

4. **Not every function is differentiable**: Some functions have corners, jumps, or cusps where the limit doesn't exist.

---

# ⚠️ Common Mistakes

1. **Setting $h = 0$ too early** — Don't substitute before simplifying; you'll get $\frac{0}{0}$
2. **Forgetting the limit** — The derivative is the _limit_, not the expression before taking the limit
3. **Not simplifying the fraction** — Always factor or expand to cancel the $h$ in the denominator
4. **Confusing average and instantaneous rate** — Average rate uses fixed $h$; instantaneous uses $h \to 0$

---

# 🔗 Related Concepts

- [[Derivatives]] — The core concept this definition underpins
- [[first-principles|First Principles]] — Computing derivatives using this definition directly
- [[7-rules-of-differentiation|7 Rules of Differentiation]] — Shortcuts derived from this definition
- [[Antiderivative]] — The inverse operation
- [[atom/math/calc/1/limits/limits]] — The mathematical foundation underlying the definition
- [[derivative|notation]] — Different notations for derivatives explained
- [[derivative]] — Complete guide to derivative notation
