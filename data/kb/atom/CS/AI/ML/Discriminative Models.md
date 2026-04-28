---
tags:
  - supervised-learning
---

# Intro

Discriminative models focus on modeling the decision boundary between classes in a classification problem. The goal is to learn a function that maps inputs to binary outputs, indicating the class label of the input. Maximum likelihood estimation is often used to estimate the parameters of the discriminative model, such as the coefficients of a logistic regression model or the weights of a neural network.

The majority of discriminative models, aka conditional models, are used for supervised machine learning. They do what they ‘literally’ say, separating the data points into different classes and learning the boundaries using probability estimates and maximum likelihood.

# Examples:

**1. Logistic regression:** Logistic regression can be considered the linear regression of classification models. The main idea behind both the algorithms is similar, but while linear regression is used for predicting a continuous dependent variable, logistic regression is used to differentiate between two or more classes.

**2. Support vector machines:** This is a powerful learning algorithm with applications in both regression and classification scenarios. An n-dimensional space containing the data points is divided into classes by decision boundaries using support vectors. The best boundary is called a hyperplane.

**3. Decision trees:** A graphical tree-like model is used to map decisions and their probable outcomes. It could be thought of as a robust version of If-else statements.

A few other examples are commonly-used neural nets, k-nearest neighbor (KNN), conditional random field (CRF), random forest, etc.
