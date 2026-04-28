# Neural Networks

## Definition

A neural network is a machine learning model composed of layers of interconnected nodes (neurons) that transform inputs into outputs through learned parameters.

---

## Core idea

> A neural network learns a function by composing many simple transformations.

$$
f(x) = f_L(\dots f_2(f_1(x))\dots)
$$

---

## Basic structure

### 1. Input layer

- receives raw data (features)

---

### 2. Hidden layers

- intermediate transformations
- learn representations

---

### 3. Output layer

- produces final prediction

---

## Neuron (unit)

A single neuron computes:

$$
z = w \cdot x + b
$$

then applies an activation function:

$$
a = \sigma(z)
$$

---

## Activation functions

Introduce non-linearity.

Common ones:

- ReLU: $\max(0, x)$
- Sigmoid: squashes to (0, 1)
- Tanh: squashes to (-1, 1)

---

## Why non-linearity matters

> Without activation functions, a neural network collapses into a linear model regardless of depth.

---

## Forward propagation

Process of computing output:

1. Input passes through layers
2. Each layer applies:

   - linear transformation
   - activation function

3. Final output is produced

---

## Loss function

Measures prediction error:

$$
\text{Loss}(y, \hat{y})
$$

Used to guide learning.

---

## Backpropagation

Algorithm to compute gradients of loss with respect to weights.

> It propagates error backward through the network.

---

## Gradient descent

Weights are updated using gradients:

$$
w := w - \eta \frac{\partial L}{\partial w}
$$

where $\eta$ is learning rate.

---

## Training loop

1. Forward pass
2. Compute loss
3. Backpropagate gradients
4. Update weights
5. Repeat

---

## Key intuition

> Neural networks learn hierarchical feature representations by stacking nonlinear transformations.

---

## Depth vs width

- Depth (more layers) → more abstract features
- Width (more neurons) → more capacity per layer

---

## Overfitting vs underfitting

- Overfitting: too complex, memorizes data
- Underfitting: too simple, misses patterns

---

## Regularization techniques

- dropout
- weight decay (L2 regularization)
- early stopping

---

## When to use neural networks

- large datasets
- complex nonlinear relationships
- unstructured data (images, text, audio)

---

## Limitations

- requires lots of data
- hard to interpret
- computationally expensive
- sensitive to hyperparameters

---

## Mental model

> Neural networks approximate complex functions by composing many simple nonlinear transformations.

---

## Summary

> Neural networks are layered function approximators trained via backpropagation and gradient descent to learn representations from data.
