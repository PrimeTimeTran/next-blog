---
tags:
  - ai
  - machine-learning
  - supervised-learning
---

# Linear Regression

## Definition

Linear regression is a supervised learning method used to model the relationship between input variables and a continuous output by fitting a linear function to data.

It assumes the output can be approximated as a weighted sum of inputs:

$$
\hat{y} = w^T x + b
$$

Where:

- $x$ = input features
- $w$ = weights
- $b$ = bias
- $\hat{y}$ = predicted value

---

## Core Idea

> Linear regression finds the best-fitting line (or hyperplane) that minimizes prediction error over a dataset.

---

## Objective (Loss Function)

Most commonly, linear regression minimizes Mean Squared Error:

$$
L = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

This measures how far predictions are from actual values.

---

## Learning Process

Linear regression learns parameters $(w, b)$ by minimizing loss using optimization methods such as:

- [[atom/CS/AI/ML/mechanics/gradient-descent|gradient-descent]]
- Normal equation (closed-form solution)

---

## Geometric Interpretation

Linear regression finds a hyperplane in feature space that minimizes the squared distance between:

- predicted points
- actual data points

---

# Relationship to Linear Regression in Mathematics

## As a Mathematical Concept

In pure mathematics, linear regression is an application of:

> **least squares approximation in linear algebra**

It is not a learning algorithm, but a problem of fitting a linear function to data.

---

## Mathematical Formulation

Given a system:

$$
y = Xw + \epsilon
$$

We want to find $w$ that minimizes:

$$
|Xw - y|^2
$$

This leads to the normal equation:

$$
w = (X^T X)^{-1} X^T y
$$

---

## Key Mathematical Ideas Behind It

### 1. Linear Algebra

- vectors and matrices
- projections
- solving overdetermined systems

---

### 2. Optimization

- minimizing quadratic error function
- convex optimization problem

---

### 3. Geometry

- projecting $y$ onto the column space of $X$
- finding closest point on a subspace

---

## Key Insight

> Linear regression in ML is the _computational learning version_ of the classical least squares projection problem in mathematics.

---

## ML vs Math Perspective

| Perspective      | Meaning                                         |
| ---------------- | ----------------------------------------------- |
| Mathematics      | Find best linear approximation to data          |
| Machine Learning | Learn parameters that minimize prediction error |

---

## Why It Works Well

Linear regression is:

- convex (single global minimum)
- interpretable
- efficient to compute
- stable under noise assumptions

---

## Limitations

- assumes linear relationship
- sensitive to outliers
- struggles with complex non-linear patterns

---

## Mental Model

> Linear regression is the process of fitting a linear function to data by projecting observed outcomes onto a parameterized linear space and minimizing squared error.

---

## Summary

Linear regression is both:

- a mathematical least squares problem in [[hub/math/linear-algebra|linear-algebra]]
- and a machine learning method for learning linear relationships from data by minimizing prediction error using optimization techniques.

# Related
