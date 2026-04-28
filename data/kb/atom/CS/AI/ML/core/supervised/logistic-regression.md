# Logistic Regression — Atom

## Definition

Logistic regression is a supervised learning algorithm used for binary classification that models the probability that an input belongs to a given class using a linear function passed through a sigmoid function.

---

## Core Idea

> Logistic regression learns a linear decision boundary in feature space, then maps it to probabilities using a sigmoid function.

It predicts:

$$
P(y=1 \mid x)
$$

---

## Model Form

First compute a linear score:

$$
z = w^T x + b
$$

Then apply the sigmoid function:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

So the final output is:

$$
\hat{y} = \sigma(w^T x + b)
$$

---

## Interpretation

The output $\hat{y}$ is interpreted as:

- probability of class 1
- values between 0 and 1

Classification is typically:

- $\hat{y} \geq 0.5$ → class 1
- $\hat{y} < 0.5$ → class 0

---

## Core Idea (Geometric View)

> Logistic regression learns a linear separator in feature space and uses a smooth function to convert distance from the boundary into probability.

The decision boundary is:

$$
w^T x + b = 0
$$

---

## Loss Function

Logistic regression uses **log loss (cross-entropy loss)**:

$$
L = -\frac{1}{n} \sum \left[ y \log(\hat{y}) + (1 - y)\log(1 - \hat{y}) \right]
$$

This penalizes confident wrong predictions heavily.

---

## Why Sigmoid?

The sigmoid function:

- squashes outputs to [0, 1]
- is differentiable (needed for gradient descent)
- maps linear scores to probabilities

---

## Training Process

Logistic regression is trained by:

- defining log loss
- computing gradients
- using gradient descent to update weights

---

## Key Properties

### 1. Linear Decision Boundary

Despite “regression” in the name, it is a linear classifier.

### 2. Probabilistic Output

Outputs calibrated probabilities rather than hard labels.

### 3. Convex Optimization

Loss function is convex → guarantees global minimum.

---

## Multiclass Extension

For multiple classes:

- softmax regression (multinomial logistic regression)

$$
P(y=i) = \frac{e^{z_i}}{\sum_j e^{z_j}}
$$

---

## Strengths

- simple and interpretable
- fast to train
- works well for linearly separable data
- outputs probabilities

---

## Limitations

- cannot model complex nonlinear relationships without feature engineering
- sensitive to feature scaling and multicollinearity
- limited expressiveness compared to neural networks

---

## Mental Model

> Logistic regression is a linear model that learns a separating hyperplane and converts its output into probabilities using a smooth nonlinear mapping.

---

## Summary

Logistic regression is a supervised classification algorithm that models class probabilities using a linear function passed through a sigmoid activation, trained by minimizing cross-entropy loss via gradient-based optimization, producing a probabilistic linear classifier.
