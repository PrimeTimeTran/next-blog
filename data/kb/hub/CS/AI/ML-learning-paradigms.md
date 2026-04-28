# (ML)Learning Paradigms Hub

## Purpose

This note organizes Machine Learning into its **three core paradigms** and shows how their subtopics connect and overlap.

---

# 1. Supervised Learning

## Core idea

Learn a mapping from inputs to labeled outputs:

$$
f(x) \rightarrow y
$$

---

## Subtopics

### Tasks

- classification
- regression

### Models

- linear regression
- logistic regression
- decision trees
- random forests
- neural networks (supervised use)

### Key concepts

- loss functions (MSE, cross-entropy)
- training vs testing
- generalization
- overfitting / underfitting

### Patterns

- feature engineering
- label-driven learning
- error minimization

---

## What it fundamentally does

> learns a function from known answers

---

# 2. Unsupervised Learning

## Core idea

Find structure in unlabeled data:

$$
x \rightarrow \text{structure}
$$

---

## Subtopics

### Tasks

- clustering
- dimensionality reduction
- density estimation

### Models / methods

- k-means
- hierarchical clustering
- PCA
- t-SNE / UMAP

### Key concepts

- similarity / distance metrics
- latent structure
- embeddings
- feature compression

### Patterns

- grouping without labels
- discovering hidden structure
- representation learning

---

## What it fundamentally does

> discovers patterns without ground truth

---

# 3. Reinforcement Learning

## Core idea

Learn by interacting with an environment:

$$
(s, a, r, s') \rightarrow \pi(a|s)
$$

---

## Subtopics

### Components

- agent
- environment
- state
- action
- reward

### Methods

- Q-learning
- policy gradients
- actor-critic

### Key concepts

- reward function
- exploration vs exploitation
- long-term return
- Markov Decision Processes (MDPs)

### Patterns

- sequential decision-making
- delayed feedback
- trial-and-error learning

---

## What it fundamentally does

> learns behavior through feedback over time

---

# Overlaps Between the 3

---

## 1. Representation Learning (shared across all)

All three learn representations:

- supervised → feature → label mapping
- unsupervised → latent structure
- RL → state representations

Neural networks often act as a shared backbone.

---

## 2. Optimization (shared core mechanism)

All use:

- loss functions (explicit or implicit)
- gradient descent or variants

---

## 3. Neural Networks as a unifier

Neural networks can be used in:

- supervised learning (predict labels)
- unsupervised learning (autoencoders, embeddings)
- reinforcement learning (policy/value networks)

---

## 4. Decision vs Prediction vs Structure

| Paradigm      | Output type    |
| ------------- | -------------- |
| Supervised    | prediction     |
| Unsupervised  | structure      |
| Reinforcement | actions/policy |

---

## 5. Feedback signal differences

- Supervised → explicit labels
- Unsupervised → no labels
- RL → reward signal (delayed, sparse)

---

# Unified mental model

> Machine learning is the study of learning functions from different types of feedback signals.

---

# Cross-cutting concepts

These appear in all 3:

- models (function approximators)
- loss / objective functions
- generalization
- data representation
- optimization

---

# Key intuition

> The three ML paradigms differ mainly in **what feedback signal is available**, not in the underlying goal of learning patterns from data.

---

# Summary

Machine Learning splits into three major paradigms:

- **Supervised** → learn from labeled examples
- **Unsupervised** → discover structure in data
- **Reinforcement** → learn via reward-driven interaction

All three converge on the same core idea:

> learning parameterized models that improve through optimization on data-derived signals.

# Related

- [[hub/CS/AI/ML|Machine Learning Hub]]
