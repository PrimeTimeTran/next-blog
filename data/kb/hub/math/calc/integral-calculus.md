# Integral Calculus

- Calculating Distance
- Using Riemann Sums
- The Definite Integral
- First Calculations
- The Fundamental Theorem of Calculus
- Integrating Polynomials
- Substitutions
- Exponentials and Trig
- Integration by Parts
- Basics of Partial Fractions
- Trigonometric Integrals
- Trig Substitution
- Integration in the World
- Area and Probability
- Calculating Volume
- Arc Length and Surface Area
- Integration in Physics I
- Application Differential Equations
- Integration in Physics II
- Zeno's Paradox and Sums
- Sums and Sigma Notation
- Secret Identities
- Converging Sums
- Ratio and Root Tests
- The Integral Test
- Rearrangements: 0=1?
- Limit Comparison Test
- Power Series
- Basics of Fourier Series

## Calculating Distance

n-approximation

$$
S = \frac{n}{2} * (a+l)
$$

where

- S is the sum of the series,
- n is the number of terms,
- a is the first term, and
- l is the last term.

### Riemann Sums

$$RS(f,a,b,n)$$
It's a technique for calculating speed/distance traveled over a period by by diving up the distance into many smaller chunks and adding them.
The limit is the closet we can get.

## Using Riemann Sums

Appears in

- distance traveled,
- average value of functions,
- continuous probability

## The Definite Integral

$$\int_{a}^{b} f(x) \space dt$$

Returns a value

## First Calculations

$$\frac{10}{n} \sum_{i=0}^{n-1} \left( \frac{10i}{n} \right)$$

### Step 1: Combine the Constants

First, we can factor out the constants \(\frac{10}{n}\) and \(\frac{10}{n}\) from the summation:
$$\frac{10}{n} \sum_{i=0}^{n-1} \left( \frac{10i}{n} \right) = \frac{10}{n} \cdot \frac{10}{n} \sum_{i=0}^{n-1} i$$
This simplifies to:
$$\frac{100}{n^2} \sum_{i=0}^{n-1} i$$

### Step 2: Sum of the First \(n-1\) Integers

We know that the sum of the first \(n-1\) integers is:
$$\sum_{i=0}^{n-1} i = \frac{(n-1)n}{2}$$

### Step 3: Substitute the Sum into the Expression

Now we substitute this result back into our expression:
$$\frac{100}{n^2} \cdot \frac{(n-1)n}{2}$$

### Step 4: Simplify the Expression

Now let's simplify this expression:
$$\frac{100}{n^2} \cdot \frac{(n-1)n}{2} = \frac{100(n-1)n}{2n^2} = \frac{100(n-1)}{2n} = \frac{50(n-1)}{n}$$

### Summary

Therefore, the simplified form of the given expression is:
$$\frac{10}{n} \sum_{i=0}^{n-1} \left( \frac{10i}{n} \right) = \frac{50(n-1)}{n}$$

### To understand why

$$\lim_{n \to \infty} \frac{n}{n-1} = 1$$

1. **Rewrite the Fraction:**
   $$\frac{n}{n-1} = \frac{n}{n(1 - \frac{1}{n})}$$
2. **Simplify the Expression:**
   $$\frac{n}{n(1 - \frac{1}{n})} = \frac{1}{1 - \frac{1}{n}}$$
3. **Consider the Limit:**
   $$\lim_{n \to \infty} \frac{1}{1 - \frac{1}{n}} = \frac{1}{1 - 0} = \frac{1}{1} = 1$$

### Conclusion

$$\lim_{n \to \infty} \frac{n}{n-1} = 1$$

### Make the connection between limits, Riemann sums, and definite integrals.

1. Write the integral in terms of its corresponding Riemann sum — usually easy.
2. Simplify the Riemann sum into a single expression — usually hard.
3. Evaluate the limit of the simplified Riemann sum — could be easy, could be hard.

Let's clarify the analysis for the expression:
$$\lim_{n \to \infty} \frac{2n^2 - 3n + 1}{6n^2}$$

### Understanding the Behavior of Terms

As \( n \) approaches infinity, let's analyze the terms in the numerator \( 2n^2 - 3n + 1 \):

- The term \( 2n^2 \) is the dominant term in the numerator because it grows faster than \( -3n \) and \( 1 \) as \( n \) becomes very large.

### Simplification at Infinity

Because we're evaluating the limit as it approaches infinity, we can drop the insignificant terms, `3n + 1`, in this case

1. **Dominant Term Analysis:**
   - As $n$ becomes very large, the terms $-3n$ and $1$ in $2n^2 - 3n + 1$ become negligible compared to $2n^2$.
2. **Limit Evaluation:**
   $$\lim_{n \to \infty} \frac{2n^2 - 3n + 1}{6n^2} \approx \lim_{n \to \infty} \frac{2n^2}{6n^2} = \frac{2}{6} = \frac{1}{3}$$

$$\lim_{n \to \infty} \frac{2n^2 - 3n + 1}{6n^2} = \frac{1}{3}$$

### Key Points:

1. **Asymptotic Behavior:** When \( n \) is large, terms involving \( n \) of higher degree (like \( 2n^2 \)) grow much faster than those of lower degree (like \( -3n + 1 \)).
2. **Limit Evaluation:** In the context of limits, particularly as \( n \to \infty \), we focus on the leading terms in the numerator and the denominator to determine the behavior of the fraction. Terms that contribute less to the overall magnitude of the expression can be disregarded in the limit evaluation.

3. **Precision:** This technique is effective for simplifying limits where the dominant term becomes apparent as \( n \) increases indefinitely. It allows for a straightforward evaluation of the limit without needing to perform complex algebraic manipulations.

### Summary:

- The Riemann sums we’ve been working with so far are **left-endpoint** sums — basically, the heights of the rectangles are determined by the left endpoint, as shown in the graph on the left:
- We could just as easily use **right-endpoint** sums, where the heights of the rectangles are determined by the right endpoint, as shown in the graph on the right.
- We could even use **trapezoidal sums**, in which the rectangles are replaced by trapezoids with the top edge spanning from the left endpoint to the right endpoint.

## The Fundamental Theorem of Calculus

Solidify your complete comprehension of the close connection between derivatives and integrals.
[Start lesson](https://brilliant.org/courses/calculus-ii/integration-techniques-3/the-fundamental-theorem-of-calculus/?from_llp=advanced-math)

## Integrating Polynomials

## Substitutions

## Exponentials and Trig

## Integration by Parts

## Basics of Partial Fractions

## Trigonometric Integrals

## Trig Substitution

## Integration in the World

## Area and Probability

## Calculating Volume

## Arc Length and Surface Area

## Integration in Physics I

## Application Differential Equations

## Integration in Physics II

## Zeno's Paradox and Sums

## Sums and Sigma Notation

## Secret Identities

## Converging Sums

## Ratio and Root Tests

## The Integral Test

## Rearrangements: 0=1?

## Limit Comparison Test

## Power Series

## Basics of Fourier Series
