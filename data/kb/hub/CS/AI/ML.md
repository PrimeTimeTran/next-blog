---
tags:
  - cs
---

# 🤖 Machine Learning Hub

[[atom/CS/AI/ML|Machine Learning(ML)]] is a branch of [[CS|computer science]] focused on systems that learn patterns from data without being explicitly programmed.

---

# 🧠 Core Idea

[[atom/CS/AI/ML|ML]] [[models]] learn a function:

- Input → Output mapping
- By minimizing error or maximizing reward

Key components:

- Data
- [[models|Model]]
- Loss / Objective Function
- [[atom/math/calc/core/derivatives/optimization|Optimization]]

---

# 📐 Mathematical Foundations

## Optimization & Learning Dynamics

- [[atom/math/calc/core/integrals/gradient-descent|Gradient Descent]]
- [[Cost Functions]]
- [[atom/math/calc/core/derivatives/optimization|Optimization]]

## Calculus for ML

- [[partial-derivatives|Partial Derivatives]]
- [[Chain Rule in Backpropagation]]
- [[Jacobian Matrix]]
- [[Hessian Matrix]]

## Probability & Statistics

- [[Probability Theory and Calculus]]
- [[Bayesian Inference]]
- [[Expectation-Maximization Algorithm]]

---

# 🧩 Problem Types

## [[Classification]]

Predict discrete labels:

- Cat vs Dog
- Digit recognition (6 vs 9)

Key idea:

- decision boundary
- accuracy / error function

---

## [[Regression / Prediction]]

Predict continuous values:

- House prices
- Future bread cost

Key idea:

- minimizing prediction error (e.g. MAE, MSE)

---

## [[Clustering]]

Find structure without labels:

- K-Means
- DBSCAN
- Hierarchical Clustering
- Gaussian Mixture Models

---

## [[Dimensionality Reduction]]

Compress data while preserving structure:

- [[Principal Component Analysis]]
- [[Independent Component Analysis]]

---

# 🧠 Learning Paradigms

ML learning covers many topics but here's the

## [[supervised-learning|Supervised Learning]]

- Labeled data
- Learn mapping $x \rightarrow y$

Models:

- Linear Regression
- Logistic Regression
- SVM
- KNN
- Decision Trees
- Random Forests
- Gradient Boosted Trees

---

## [[unsupervised-learning|Unsupervised Learning]]

- No labels
- Discover structure in data

Models:

- Clustering methods
- PCA / ICA

---

## [[reinforcement-learning|Reinforcement Learning]]

Learning via reward signals in an environment:

- Q-Learning
- Deep Q Networks (DQN)
- Policy Gradient Methods
- Actor-Critic Methods

---

# 🧠 Model Families

## [[Discriminative Models]]

Learn decision boundaries $P(y|x)$

- [[logistic-regression|Logistic Regression]]
- [[support-vector-machines-SVM]]
- [[atom/CS/AI/ML/core/neural-networks|neural-networks]]
- Decision Trees
- [[random-forest]]
- CRFs
- [[k-nearest-neighbors-KNN|K Nearest Neighbors (KNN)]]

---

## [[Generative Models]]

Learn data distribution \( P(x) \)

Examples:

- Naïve Bayes
- Bayesian Networks
- Hidden Markov Models
- Latent Dirichlet Allocation
- [[generative-adversarial-networks-GAN|GANs]]
- [[variational-autoencoders-VAE|VAEs]]
- Diffusion Models
- Autoregressive Models
- Energy-Based Models
- Boltzmann Machines

---

## [[deep-learning|Deep Learning]]

Neural network-based learning systems:

- [[convolutional-neural-network-CNN|CNN]]
- RNNs
- [[long-short-term-memory-networks-LSTM]|LSTMs]
- [[transformers]]
- [[auto-encoders|Auto Encoder]]
- [[graph-neural-networks-GNN|Graph Neural Networks (GNNs)]]
- [[deep-Q-networks-DQN|Deep Q-Networks (DQNs)]]

---

# 🤖 AI Systems

## [[Assistants Models]]

- GPT-style Transformers
- BERT
- Seq2Seq models
- RNN-based systems

Use cases:

- Chatbots
- Virtual assistants

---

## [[Agent Models]]

Systems that act in environments:

- Autonomous agents
- Game-playing AI
- Robotics

Methods:

- Q-learning
- Policy gradients
- Actor-critic

---

[]()# 🔧 ML Engineering Pipeline

## Data Processing

- [[Preprocessing]]
- [[Tokenizers]]
- Feature engineering

## Feature Selection

- ANOVA F-test
- Mutual Information
- Recursive Feature Elimination
- Cross-validation methods

## Model Training Tools

- [[Transformers]]
- [[Diffusers]]
- [[Accelerate]]
- Transfer learning / pretrained models

---

# 🧪 Advanced Topics

## Generative AI Systems

- [[retrieval-augmented-generation-RAG|Retrieval Augmented Generation (R.A.G)]]
- Diffusion Models
- Stable Diffusion research
- Large language models

---

## Model Evaluation

- Accuracy
- Precision / Recall
- Loss functions
- Cross-validation

---

# 📊 Key Mental Model

Machine Learning =

> Data + [[models|Model]] + [[loss-function|Objective (Loss)]] + [[atom/CS/AI/ML/core/optimization|Optimization Process]] → Parameterized Function that Generalizes

---

# 🧭 Big Picture

- Learning Paradigms →
  - **Supervised** → learn from labeled examples
  - **Unsupervised** → finds structure in data
  - **Reinforcement** → learns via reward mechanism
  - [[atom/CS/AI/ML/core/deep-learning|Deep]] → scalable function approximators
- Generative Models → learn to generate data

---

# Related

- [[calculus]]
- [[hub/CS/AI]]

# 🎥 Reference

- https://www.youtube.com/watch?v=aircAruvnKk&t=909s
