# Loss Functions

## Definition

A **loss function** measures how far a model’s prediction is from the true value.

$$
L(y, \hat{y}) \rightarrow \mathbb{R}
$$

Where:

- $y$ = true label
- $\hat{y}$ = model prediction
- $L$ = error score (to be minimized)

---

## Core idea

> Loss functions convert “how wrong the model is” into a single number that can be optimized.

---

## Why loss functions exist

Machine learning models cannot directly “understand correctness.”

They need a scalar signal:

- small loss → good prediction
- large loss → bad prediction

This becomes the objective for learning.

---

## Training objective

Models are trained by minimizing loss:

$$
\min_\theta L(y, f(x; \theta))
$$

---

## Common types of loss functions

### 1. Regression losses

Used when predicting continuous values.

#### Mean Squared Error (MSE)

$$
L = (y - \hat{y})^2
$$

- penalizes large errors more heavily
- smooth and differentiable

---

### 2. Classification losses

Used when predicting categories.

#### Cross-Entropy Loss

Measures distance between predicted probabilities and true class.

- encourages confident correct predictions
- penalizes wrong high-confidence predictions heavily

---

### 3. Absolute error

#### Mean Absolute Error (MAE)

$$
L = |y - \hat{y}|
$$

- more robust to outliers than MSE
- less sensitive to large errors

---

## Key properties of a good loss function

- differentiable (for gradient-based optimization)
- reflects task objective
- stable for training
- penalizes incorrect behavior appropriately

---

## Intuition

> Loss functions define what “good behavior” means for a model in numeric form.

---

## Loss vs objective function

- **Loss** → error per example
- **Objective function** → overall quantity minimized (often average loss + regularization)

---

## Role in training

Loss functions are used to compute gradients:

$$
\nabla_\theta L
$$

which guide updates in optimization algorithms like gradient descent.

---

## Key intuition

> The loss function is the model’s feedback signal: it tells the model how wrong it is and how to improve.

---

## Common pitfalls

- choosing a loss that doesn’t match the real goal
- sensitivity to outliers (MSE issue)
- misalignment between training loss and evaluation metric

---

## Mental model

> Loss functions translate prediction error into a smooth landscape that optimization algorithms can navigate.

---

## Summary

> A loss function is a mathematical measure of prediction error used to guide model training by converting correctness into a value that can be minimized.
