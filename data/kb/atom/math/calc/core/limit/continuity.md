How to determine if a function is continuous?
A function $f$ is continuous at a point $a$ if $\lim_{ x \to a } f(x)$ exists and equals $f(x)$

1. Show that function is defined
   $f(a)$ is defined

2. Show that $\lim_{ x \to a }f(x)$ exists
   - Approaching from both left and right need to equal.
     $\lim_{x \to a^{+}} f(x) = \lim_{x \to a^{-}} f(x)$
3. Show that $\\lim_{ x \to a }f(x) = f(a)$
   $\\lim_{ x \to a }f(x) = f(a)$

Ex 1.

$$
f(x) =
\begin{cases}
\sqrt {x+2} & \text{if } x < 2 \\
x^2 - 2 & \text{if }  2 \leq x < 3 \\
2x + 5 & \text{if } x \geq 3  \\
\end{cases}
$$

Pick a number. Our options are 2 and 3 because of the piece wise functions

1. Prove $f(a)$ is defined.
   $$
   f(2) = (2)^2 -2 = 2
   $$
2. Show limit exists.
   Approaching from the left:
   $$
   \lim_{ x \to 2^- }f(x) = \sqrt {2+2} = 2
   $$
   Approaching from the right:
   $$
   \lim_{ x \to 2^+ }f(x) = (2)^2 - 2 = 2
   $$
3. Show that the limit $\\lim_{ x \to a }f(x) = f(a)$
   Notice that step 1 & step 2 resulted in the same value. Because they're the same we know that step 3 passes/is true.
