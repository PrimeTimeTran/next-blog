---
tags:
  - math
  - optimization
  - machine-learning
---

# 🧠 Gradient Descent

Gradient descent is an iterative method for finding the **minimum of a function** by moving in the direction of steepest decrease.

---

# 🧠 Core Idea

> To minimize a function, repeatedly move “downhill” along its slope.

---

# 📐 Update Rule

For a function \(f(x)\):

$$
x_{n+1} = x_n - \eta \nabla f(x_n)
$$

Where:

- \(x_n\) = current position
- \(\eta\) = learning rate (step size)
- \(\nabla f(x)\) = gradient (direction of steepest increase)

---

# 🧩 Intuition

- Gradient points **uphill**
- So we move **against the gradient**

$$
\text{move direction} = -\nabla f
$$

---

# 📊 Geometric Meaning

At each step:

1. compute slope (gradient)
2. take a step downhill
3. repeat until flat region is reached

---

# ⚙️ Why It Works

Near a minimum:

- slope becomes small
- updates shrink
- convergence occurs

---

# 📉 Learning Rate (\(\eta\))

Controls step size:

- too large → overshoot / divergence
- too small → slow convergence
- just right → stable descent

---

# 🧠 Visualization (1D intuition)

For \(f(x)\):

- slope positive → move left
- slope negative → move right
- slope zero → stop

---

# 🧠 Multivariable Case

For \(f(x,y)\):

$$
\nabla f(x,y) =
\left\langle
\frac{\partial f}{\partial x},
\frac{\partial f}{\partial y}
\right\rangle
$$

Update:

$$
(x,y) \leftarrow (x,y) - \eta \nabla f(x,y)
$$

---

# 📊 Example (Simple Quadratic)

$$
f(x) = x^2
$$

Gradient:

$$
\nabla f(x) = 2x
$$

Update:

$$
x_{n+1} = x_n - 2\eta x_n
$$

---

# 🔗 Connections

- [[Partial Derivatives]] → components of gradient
- [[Gradient Vector]] → direction of steepest ascent
- [[Optimization]] → goal of minimizing functions
- [[Loss Functions]] → ML application
- [[Hessian Matrix]] → curvature analysis

---

# 🧠 Machine Learning Interpretation

Gradient descent is how models:

> learn parameters by minimizing error (loss)

---

# 🔁 Variants

- Batch Gradient Descent
- Stochastic Gradient Descent (SGD)
- Mini-batch Gradient Descent

---

# 🧠 Mental Model

> “Follow the steepest downhill direction until you can’t go lower.”

---

# 📌 Summary

Gradient descent is an iterative optimization method that minimizes a function by moving opposite to its gradient until convergence.
