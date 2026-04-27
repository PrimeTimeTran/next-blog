---
tags:
  - math
  - calculus
  - integration
  - integrals
---

# 📘 Basic Power Rule (most important)

| Function            | Antiderivative            |
| ------------------- | ------------------------- |
| $x^n$ $(n \neq -1)$ | $\frac{x^{n+1}}{n+1} + C$ |
| $x^2$               | $\frac{x^3}{3} + C$       |
| $x^3$               | $\frac{x^4}{4} + C$       |
| $x$                 | $\frac{x^2}{2} + C$       |
| $1$                 | $x + C$                   |

---

# 📘 Exponentials

| Function | Antiderivative          |
| -------- | ----------------------- |
| $e^x$    | $e^x + C$               |
| $a^x$    | $\frac{a^x}{\ln a} + C$ |

---

# 📘 Logarithms

| Function      | Antiderivative |
| ------------- | -------------- |
| $\frac{1}{x}$ | $\ln           |

---

# 📘 Trigonometric functions

| Function   | Antiderivative |
| ---------- | -------------- |
| $\sin x$   | $-\cos x + C$  |
| $\cos x$   | $\sin x + C$   |
| $\sec^2 x$ | $\tan x + C$   |
| $\csc^2 x$ | $-\cot x + C$  |

---

# 🧠 Key rules (quick memory)

### 🔑 Power rule

$$
\int x^n , dx = \frac{x^{n+1}}{n+1} + C
$$

---

### 🔑 Constant multiple rule

$$
\int a f(x),dx = a \int f(x),dx
$$

---

### 🔑 Log special case

$$
\int \frac{1}{x} , dx = \ln|x| + C
$$

---

# 🧠 Concept map (intuition)

| Derivatives        | Antiderivatives |
| ------------------ | --------------- |
| slope              | accumulation    |
| local change       | total area      |
| instantaneous rate | global sum      |

| Function $f(x)$          | Antiderivative                          | Rule Name / Notes          |
| ------------------------ | --------------------------------------- | -------------------------- |
| $k$ (constant)           | $kx + C$                                | Constant rule              |
| $x^n$                    | $\frac{x^{n+1}}{n+1} + C$ $(n \neq -1)$ | Power rule                 |
| $x^{-1}$                 | $\ln                                    | x                          |
| $e^x$                    | $e^x + C$                               | Exponential rule           |
| $a^x$                    | $\frac{a^x}{\ln a} + C$                 | General exponential        |
| $\cos(x)$                | $\sin(x) + C$                           | Basic trig                 |
| $\sin(x)$                | $-\cos(x) + C$                          | Basic trig                 |
| $\sec^{2}(x)$            | $\tan(x) + C$                           | Derivative identity of tan |
| $\frac{1}{x + x^2}$      | $\ln\left                               | \frac{x}{x+1}\right        |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin(x) + C$                        | Inverse trig form          |
