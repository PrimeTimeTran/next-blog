# Gradient Descent (Machine Learning Context) — Atom

## Definition

Gradient descent is an optimization algorithm used in machine learning to minimize a loss function by iteratively adjusting model parameters in the direction of steepest decrease.

It updates parameters $\theta$ using:

$$
\theta := \theta - \eta \nabla_\theta L(\theta)
$$

Where:

- $\theta$ = model parameters (weights, biases)
- $\eta$ = learning rate
- $L(\theta)$ = loss function
- $\nabla_\theta L(\theta)$ = gradient of the loss

---

## Core Idea

> Gradient descent trains a model by repeatedly reducing prediction error through small, guided parameter updates.

---

## Role in Machine Learning

Gradient descent is the central mechanism that enables learning in most modern ML systems.

It connects:

- model predictions
- [[loss-function|loss-functions]]
- parameter updates
- [[backpropagation|back-propagation]]

---

## Training Context (How it fits in ML)

Gradient descent operates inside the training loop:

1. Forward pass: compute predictions $\hat{y}$
2. Compute loss $L(y, \hat{y})$
3. Compute gradients $\nabla_\theta L$
4. Update parameters using gradient descent

This loop repeats over many iterations until convergence.

---

## Variants of Gradient Descent

### 1. Batch Gradient Descent

- uses entire dataset per update
- stable but slow

### 2. Stochastic Gradient Descent (SGD)

- uses one sample per update
- noisy but fast

### 3. Mini-batch Gradient Descent

- uses small batches
- standard in deep learning

---

## Key Intuition

> Gradient descent treats learning as navigating a loss landscape, moving step-by-step downhill toward a minimum.

- gradient = direction of steepest increase
- negative gradient = direction of steepest decrease

---

## Connection to Backpropagation

Backpropagation computes:

> $\nabla_\theta L(\theta)$ efficiently using the chain rule

Gradient descent then uses these gradients to update parameters.

---

## Practical Considerations

### Learning rate ($\eta$)

- too large → divergence
- too small → slow training

### Convergence

- reaches local or global minimum depending on loss surface

### Non-convexity

- deep learning loss surfaces often have many local minima and saddle points

---

## Mental Model

> Gradient descent is the process of iteratively adjusting a model’s parameters to reduce prediction error by following the slope of the loss function.

---

## Summary

Gradient descent in machine learning is an iterative optimization algorithm that updates model parameters by moving in the direction of the negative gradient of a loss function, enabling models to learn from data through repeated error minimization.

# Related

- [[atom/math/calc/core/integrals/gradient-descent|Calculus: Gradient Descent]]
