# Machine Learning (ML) — Overview

## Definition

Machine Learning is a field of computer science focused on building systems that learn patterns from data to make predictions or decisions without being explicitly programmed.

---

## Core idea

> Instead of writing rules, we train models to infer rules from data.

---

## Basic workflow

1. Collect data
2. Preprocess / clean data
3. Choose a model
4. Train the model
5. Evaluate performance
6. Deploy / iterate

---

## Learning Paradigms

### 1. Supervised Learning

- learns from labeled data $(x, y)$
- goal: predict outputs from inputs

Examples:

- classification (spam vs not spam)
- regression (predict price)

---

### 2. Unsupervised Learning

- no labels, only inputs $(x)$
- goal: discover structure in data

Examples:

- clustering (group similar items)
- dimensionality reduction

---

### 3. Reinforcement Learning

- agent interacts with environment
- learns by rewards and penalties

Goal:

- maximize cumulative reward over time

---

## Model Families

A [[atom/CS/AI/ML/models/overview|machine learning model]] is a parameterized function that learns patterns from data by adjusting internal parameters (such as weights and biases) through training so it can map inputs to outputs or actions; in practice, especially for modern systems like LLMs, a “model” also includes its learned parameters, architecture (how computations are structured), and sometimes training configuration, all of which together define its behavior after training.

### 🟦 Regression models

- [[linear-regression]]
- Ridge / Lasso

### 🟩 Instance-based learning

- [[k-nearest-neighbors|K Nearest Neighbors (KNN)]]

### 🟨 Probabilistic models

- Naive Bayes
- [[logistic-regression]] (borderline both regression + classification)

### 🟥 Tree-based models

- Decision Trees
- [[random-forest]]
- Gradient Boosted Trees

### 🟪 Kernel methods

- [[support-vector-machines-SVM|Support Vector Machines (SVM)]]

---

## Key concepts

### Features

Input variables used by the model.

---

### Labels

Ground truth outputs (in supervised learning).

---

### Training vs Testing

- training set → used to learn
- test set → used to evaluate

---

### Overfitting

Model memorizes training data but fails to generalize.

---

### Underfitting

Model is too simple to capture patterns.

---

## Optimization

Models are trained by minimizing a loss function:

$$
\text{Loss} = \text{error between predictions and actual values}
$$

Common method:

- gradient descent

---

## Evaluation metrics

- accuracy (classification)
- precision / recall
- F1 score
- mean squared error (regression)

---

## Key intuition

> ML is about finding patterns that generalize beyond the data you’ve seen.

---

## When to use ML

- data is abundant
- rules are complex or unknown
- patterns are not easily hand-coded

---

## Limitations

- requires large, quality datasets
- can be hard to interpret
- sensitive to bias in data
- may not generalize well

---

## Mental model

> ML = learning a function $f(x)$ that maps inputs to outputs using data instead of explicit rules.

---

## Summary

> Machine Learning builds models that learn from data to make predictions, relying on statistical patterns rather than explicit programming.
