# Optimization (Machine Learning Context) — Atom

## Definition

Optimization in machine learning is the process of adjusting a model’s parameters to minimize a loss function or maximize an objective function, typically using iterative numerical methods.

---

## Core Idea

> Optimization is how a model _learns_ by continuously improving its parameters to reduce prediction error on data.

---

## Formal View

Given a loss function:

$$
L(\theta)
$$

Optimization seeks:

$$
\theta^* = \arg\min_{\theta} L(\theta)
$$

Where:

- $\theta$ = model parameters (weights, biases)
- $L(\theta)$ = loss function measuring error

---

## Role in Machine Learning

Optimization is the mechanism that connects:

- model predictions
- loss functions
- learning algorithms (training)

Without optimization, a model is static and cannot learn from data.

---

## Common Optimization Methods

### 1. Gradient Descent

- uses gradients to update parameters
- most fundamental ML optimizer

### 2. Stochastic Gradient Descent (SGD)

- updates using individual samples or mini-batches
- faster but noisier updates

### 3. Advanced Optimizers

- Adam
- RMSProp
- Momentum-based methods

These improve convergence speed and stability.

---

## Core Mechanism

Most ML optimization follows:

1. Compute predictions $\hat{y}$
2. Compute loss $L(y, \hat{y})$
3. Compute gradients $\nabla_\theta L$
4. Update parameters:
   $$
   \theta := \theta - \eta \nabla_\theta L
   $$

---

## Key Concepts

### Loss Landscape

- visualization of loss as a function of parameters
- optimization is navigation through this landscape

### Learning Rate ($\eta$)

- controls step size
- too large → divergence
- too small → slow convergence

### Local vs Global Minima

- non-convex problems may have multiple minima
- deep learning often relies on approximate solutions

---

## Why Optimization is Central

> Machine learning is fundamentally an optimization problem over data-driven loss functions.

All training methods reduce to:

- define objective
- choose optimization strategy
- iteratively improve parameters

---

## Connection to Calculus

Optimization relies heavily on:

- gradients (partial derivatives)
- chain rule (backpropagation)
- curvature (Hessian in advanced methods)

However, in ML it is applied computationally rather than analytically.

---

## Mental Model

> Optimization in ML is the iterative process of tuning model parameters so that predictions become progressively more accurate according to a defined loss function.

---

## Summary

Optimization in machine learning is the process of iteratively adjusting model parameters to minimize a loss function, forming the core mechanism through which models learn from data using gradient-based and numerical methods.
