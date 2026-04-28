# Random Forests — Atom

## Definition

Random Forests are an ensemble learning method that builds multiple decision trees and combines their outputs to improve prediction accuracy and reduce overfitting.

For classification, the final prediction is typically:

- majority vote across trees

For regression:

- average of all tree outputs

---

## Core Idea

> A Random Forest reduces variance by aggregating many decorrelated decision trees trained on different random subsets of data and features.

---

## How it works

### 1. Bootstrap sampling (bagging)

Each tree is trained on a random sample of the dataset (with replacement).

### 2. Feature randomness

At each split, the tree considers only a random subset of features.

### 3. Tree training

Each decision tree is trained independently and grown fully (or with minimal pruning).

### 4. Aggregation

- Classification → majority vote
- Regression → mean prediction

---

## Key Components

### Decision Trees

Base learners that split data based on feature thresholds to reduce impurity.

### Ensemble

A collection of many independent trees whose outputs are combined.

---

## Why it works

> Random Forests reduce overfitting by averaging many high-variance models (decision trees), while maintaining low bias.

The randomness ensures:

- trees are different
- errors are less correlated
- averaging cancels noise

---

## Bias–Variance Insight

- Individual trees → low bias, high variance
- Random Forest → similar bias, reduced variance

---

## Feature Importance

Random Forests can estimate feature importance by:

- measuring impurity reduction
- or permutation impact on accuracy

This makes them interpretable compared to many ML models.

---

## Key Hyperparameters

- number of trees
- max depth
- number of features per split
- minimum samples per leaf

---

## Strengths

- strong performance out of the box
- robust to noise and overfitting
- works with tabular data well
- handles nonlinear relationships

---

## Limitations

- less interpretable than a single decision tree
- computationally heavier
- not ideal for very high-dimensional sparse data
- cannot extrapolate well beyond training range

---

## When to use

Random Forests are effective when:

- data is structured/tabular
- relationships are nonlinear
- interpretability is useful but not strict
- you want a strong baseline model

---

## Mental Model

> A Random Forest is a committee of decision trees where each tree votes independently, and the forest’s wisdom comes from averaging many slightly different perspectives.

---

## Summary

Random Forests are an ensemble machine learning method that improves decision tree performance by training many randomized trees and aggregating their predictions, reducing variance while maintaining strong predictive accuracy on structured data.
