# Supervised Learning

## Definition

Supervised Learning is a type of machine learning where a model learns a mapping from inputs to outputs using labeled data.

$$
(x, y) \rightarrow \text{learn } f(x) \approx y
$$

---

## Core idea

> Learn a function that maps inputs to known outputs by minimizing prediction error.

---

## Data structure

Each example consists of:

- **Input (features)**: $x$
- **Output (label)**: $y$

Dataset:

$$
{(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)}
$$

---

## Goal

Find a function:

$$
f(x) \approx y
$$

that generalizes well to unseen data.

---

## Types of supervised learning

### 1. Classification

- output is discrete (categories)

Examples:

- spam vs not spam
- image labels

---

### 2. Regression

- output is continuous (real values)

Examples:

- house price prediction
- temperature forecasting

---

## Training process

1. Initialize model
2. Make predictions $\hat{y} = f(x)$
3. Compute loss (error)
4. Update model parameters
5. Repeat until convergence

---

## Loss function

Measures how wrong predictions are:

$$
\text{Loss}(y, \hat{y})
$$

Examples:

- mean squared error (regression)
- cross-entropy (classification)

---

## Optimization

Models are trained using optimization methods such as:

- gradient descent

Goal:

$$
\min \text{Loss}
$$

---

## Evaluation

Split data into:

- training set
- validation/test set

Common metrics:

- accuracy
- precision / recall
- F1 score
- mean squared error

---

## Overfitting vs underfitting

### Overfitting

- model memorizes training data
- poor generalization

### Underfitting

- model too simple
- fails to capture patterns

---

## Key intuition

> Supervised learning is learning from examples with known answers.

---

## When to use

- labeled data is available
- clear input-output relationship exists
- prediction task is well-defined

---

## Limitations

- requires labeled data (often expensive)
- sensitive to noisy or biased labels
- may not generalize beyond training distribution

---

## Mental model

> Fit a function to known data points and hope it generalizes to new ones.

---

## Summary

> Supervised learning trains models on labeled data to learn a mapping from inputs to outputs, optimizing performance through error minimization.

Trying to remember where to add Knns, linear regression, random forrests, super vector machines
