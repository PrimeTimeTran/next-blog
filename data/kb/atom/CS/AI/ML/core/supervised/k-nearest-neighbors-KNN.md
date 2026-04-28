# K-Nearest Neighbors (KNN) — Atom

## Definition

K-Nearest Neighbors (KNN) is a supervised learning algorithm that makes predictions based on the labels (or values) of the _K closest training examples_ in feature space.

It is a **non-parametric, instance-based learning method**, meaning it does not explicitly learn a model—just stores the dataset.

---

## Core Idea

> Similar inputs produce similar outputs.

A new input is classified or predicted by looking at the “nearest” points in the training data and aggregating their outputs.

---

## How it works

Given a query point $x$:

### 1. Compute distances

Measure distance from $x$ to all training points (commonly Euclidean distance):

$$
d(x, x_i) = \sqrt{\sum (x - x_i)^2}
$$

---

### 2. Select K nearest neighbors

Pick the $K$ points with smallest distance to $x$.

---

### 3. Aggregate outputs

#### Classification

- majority vote among neighbors

#### Regression

- average of neighbor values

---

## Key Hyperparameter: K

- Small $K$ → sensitive, high variance, overfits
- Large $K$ → smoother, higher bias, underfits

---

## Core Intuition

> KNN assumes the output space is locally smooth: points close in feature space tend to share similar labels.

---

## Decision Boundary

KNN creates **non-linear decision boundaries** that adapt to data shape rather than imposing a fixed functional form.

---

## Distance Metric Matters

Common choices:

- Euclidean distance (L2)
- Manhattan distance (L1)
- Cosine similarity (for text/high-dimensional data)

The notion of “nearest” depends entirely on this choice.

---

## Key Properties

### 1. Lazy Learning

- no training phase
- computation happens at prediction time

### 2. Instance-based

- stores entire dataset
- no explicit model parameters

### 3. Non-parametric

- model complexity grows with data

---

## Strengths

- simple and intuitive
- effective for small datasets
- no training time
- naturally handles multi-class classification

---

## Limitations

- slow inference (must compare to all points)
- sensitive to feature scaling
- suffers in high dimensions (curse of dimensionality)
- memory intensive

---

## Practical Considerations

### Feature scaling is critical

Without normalization, distance becomes meaningless.

### Dimensionality reduction helps

PCA or embeddings often improve performance.

---

## Intuition Example

To classify a new point:

- look at nearby labeled points
- if most neighbors are “red,” predict red
- if mixed, result depends on majority or average

---

## Mental Model

> KNN is a memory-based voting system where predictions are made by consulting the most similar past examples.

---

## Summary

K-Nearest Neighbors is a supervised learning algorithm that predicts outputs for new data points by identifying the K closest examples in the training set and aggregating their labels or values, relying on the assumption that nearby points in feature space have similar outputs.
