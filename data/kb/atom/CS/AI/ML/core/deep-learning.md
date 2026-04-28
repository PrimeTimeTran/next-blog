# Deep Learning — Kernel Atom

## Definition

Deep learning is a subset of machine learning that uses multi-layer neural networks to learn hierarchical representations of data through composition of nonlinear transformations.

It is based on the idea that complex patterns can be learned by stacking simpler feature transformations across multiple layers.

---

## Core Idea

> Deep learning learns representations by composing many layers of nonlinear functions, allowing raw data to be transformed into increasingly abstract features.

---

## Mathematical Form (Core View)

A deep neural network can be written as:

$$
f(x) = f_L(f_{L-1}(\dots f_2(f_1(x)) \dots))
$$

Where each layer:

- applies a linear transformation
- followed by a non-linear activation

---

## Core Training Mechanism

Deep learning models are trained using:

- loss functions (error signal)
- backpropagation (gradient computation)
- gradient-based optimization (parameter updates)

---

## Why “Deep”?

> “Depth” refers to the number of layers in the network.

Deeper networks:

- learn hierarchical features
- increase representational capacity
- model complex relationships

---

# Core Deep Learning Model Families

## 1. Autoencoders

> Learn compressed representations of data

- encoder: maps input → latent space
- decoder: reconstructs input

Used for:

- dimensionality reduction
- representation learning
- anomaly detection

---

## 2. Variational Autoencoders (VAEs)

> Probabilistic version of autoencoders

- learns latent distribution instead of fixed encoding
- enables generative sampling

Key idea:

> model data as a distribution in latent space

---

## 3. Generative Adversarial Networks (GANs)

> Two networks competing in a game

- Generator: produces fake data
- Discriminator: distinguishes real vs fake

Objective:

> generator improves until fake data is indistinguishable from real

---

## 4. Recurrent Neural Networks (RNNs)

> Designed for sequential data

- maintains hidden state across time steps
- processes sequences one step at a time

Used for:

- language modeling
- time series

---

## 5. Long Short-Term Memory Networks (LSTMs)

> Improved RNNs with memory control

- input gate
- forget gate
- output gate

Solves:

> vanishing gradient problem in long sequences

---

## 6. Transformer Networks

> Attention-based architecture for sequence modeling

Core mechanism:

- self-attention replaces recurrence

Advantages:

- parallel computation
- long-range dependency modeling

Foundation of:

- LLMs (e.g., GPT-style models)

---

## 7. Graph Neural Networks (GNNs)

> Neural networks for graph-structured data

- nodes represent entities
- edges represent relationships

Mechanism:

> message passing between connected nodes

Used for:

- social networks
- molecules
- recommendation systems

---

## 8. Deep Q-Networks (DQNs)

> Deep learning applied to reinforcement learning

- approximates Q-value function using neural networks
- learns action-value mappings from experience

Used for:

- game-playing agents
- control systems

---

## 9. Deep Belief Networks (DBNs)

> Stacked probabilistic generative models

- composed of restricted Boltzmann machines (RBMs)
- learned layer by layer

Historically important in early deep learning research.

---

# Key Unifying Principle

> All deep learning models learn hierarchical feature representations using stacked nonlinear transformations optimized via gradient-based learning.

---

## Shared Components Across All Models

- Neural layers (linear + nonlinear transformations)
- [[loss-function|Loss functions]]
- [[Backpropagation]]
- [[atom/CS/AI/ML/mechanics/gradient-descent|Gradient descent]] or variants
- Learned parameters (weights)

---

## Mental Model

> Deep learning is a framework where intelligence emerges from layered transformations that progressively convert raw inputs into structured representations optimized for a task.

---

## Summary

Deep learning is a machine learning paradigm based on multi-layer neural networks that learn hierarchical representations of data through stacked nonlinear transformations, trained using [[backpropagation]] and gradient-based optimization. It includes major architectures such as [[auto-encoders]], [[variational-autoencoders-VAE|VAEs]], [[generative-adversarial-networks-GAN|GANs]], [[recurrent-neural-networks-RNN|RNNs]], [[long-short-term-memory-networks-LSTM|LSTMs]], [[transformers]], [[graph-neural-networks-GNN|GNNs]], [[deep-belief-networks-DBN|DBNs]], and deep reinforcement learning models like DQNs, each specialized for different data structures and learning objectives.
