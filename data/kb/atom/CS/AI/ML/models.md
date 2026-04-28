# Models in Machine Learning

## Definition

A **machine learning model** is a mathematical function that maps inputs to outputs by learning patterns from data.

$$
f(x; \theta) \rightarrow \hat{y}
$$

Where:

- $x$ = input features
- $\theta$ = learned parameters
- $\hat{y}$ = prediction

---

## Core idea

> A model is a parameterized function that improves its predictions by adjusting parameters based on data.

---

## What a model represents

A model encodes:

- relationships between variables
- assumptions about structure in data
- a space of possible functions

---

## Components of a model

### 1. Structure (architecture)

Defines how computation happens:

- linear model
- decision tree
- neural network

---

### 2. Parameters

Values learned from data:

- weights
- biases
- coefficients

---

### 3. Prediction function

Maps input → output:

$$
\hat{y} = f(x; \theta)
$$

---

## Training vs inference

### Training

- learn parameters $\theta$
- minimize loss on data

### Inference

- use learned model to make predictions
- parameters are fixed

---

## Model types

### 1. Linear models

- simple, interpretable
- assume linear relationships

---

### 2. Tree-based models

- decision rules
- handle nonlinearity via splits

---

### 3. Neural networks

- layered nonlinear function approximators
- high flexibility

---

### 4. Probabilistic models

- model uncertainty explicitly
- outputs distributions instead of point predictions

---

## Key concepts

### Hypothesis space

Set of all functions the model can represent.

---

### Inductive bias

Assumptions a model makes to generalize beyond training data.

---

### Capacity

Ability of a model to fit complex patterns:

- low capacity → underfitting
- high capacity → overfitting risk

---

## Loss function

Measures error between prediction and truth:

$$
L(y, \hat{y})
$$

Training minimizes this loss.

---

## Generalization

> A good model performs well on unseen data, not just training data.

---

## Overfitting vs underfitting

- Overfitting: memorizes training data
- Underfitting: fails to capture patterns

---

## Key intuition

> A model is a controllable function that learns how to approximate reality from examples.

---

## Model lifecycle

1. Define model structure
2. Initialize parameters
3. Train on data
4. Validate performance
5. Deploy for inference
6. Monitor and update

---

## When models succeed

- enough data is available
- patterns exist in data
- model assumptions match problem structure

---

## Limitations

- biased by training data
- may not generalize outside distribution
- can be opaque (hard to interpret)

---

## Mental model

> A model is a compressed representation of patterns in data encoded as a function with adjustable parameters.

---

## Summary

> In machine learning, a model is a parameterized function trained on data to learn patterns and make predictions on unseen inputs.
