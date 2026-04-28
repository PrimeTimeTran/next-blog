# Deep Belief Networks (DBNs) — Atom

## Definition

Deep Belief Networks are generative neural networks composed of multiple layers of latent variables, typically built by stacking Restricted Boltzmann Machines (RBMs), trained in a layer-wise fashion to learn hierarchical probabilistic representations of data.

---

## Core Idea

> DBNs learn hierarchical feature representations by stacking probabilistic models that capture increasingly abstract structure in the data.

Unlike standard deep networks, they are originally trained in an unsupervised, greedy layer-wise manner.

---

## Architecture

A DBN is a stack of layers:

- Visible layer (input data)
- Multiple hidden layers (latent representations)

Each pair of adjacent layers forms a Restricted Boltzmann Machine (RBM).

---

## Restricted Boltzmann Machine (RBM)

Each layer pair models:

- visible units $v$
- hidden units $h$

with an energy-based probabilistic formulation:

$$
P(v, h) \propto e^{-E(v,h)}
$$

The network learns to model the joint distribution of data.

---

## Training Process

DBNs are trained in two phases:

### 1. Greedy layer-wise pretraining

- Train first RBM on raw data
- Freeze it
- Train next RBM on hidden activations
- Repeat for all layers

This builds hierarchical feature representations.

---

### 2. Fine-tuning

- After pretraining, the full network is optionally fine-tuned using supervised learning or backpropagation.

---

## Core Mechanism

1. Input data is passed into first RBM
2. Each RBM learns a representation of the layer below
3. Higher layers capture more abstract features
4. Final stacked model represents a deep probabilistic generative model

---

## Key Idea

> DBNs build deep representations by stacking probabilistic feature learners that model the distribution of the data layer by layer.

---

## Why they mattered historically

DBNs were important because they:

- helped solve vanishing gradient issues in early deep learning
- introduced unsupervised pretraining for deep networks
- enabled learning deep architectures before modern optimization techniques matured

---

## Strengths

- can learn hierarchical features without labels
- good generative modeling capability (in theory)
- historically important for deep learning development

---

## Limitations

- complex and slow training process
- largely replaced by modern architectures (e.g., transformers, VAEs, GANs)
- RBM training is computationally expensive
- less commonly used in modern ML pipelines

---

## Intuition

> A Deep Belief Network is a stack of probabilistic feature extractors where each layer learns a higher-level representation of the data distribution than the previous layer.

---

## Relationship to Other Models

- RBM → building block of DBNs
- Autoencoders → deterministic alternative for representation learning
- VAEs → modern probabilistic generative successor
- Deep neural networks → replaced DBNs with backprop-based training

---

## Summary

Deep Belief Networks are generative neural networks composed of stacked Restricted Boltzmann Machines trained layer by layer to learn hierarchical probabilistic representations of data, historically important for enabling deep learning before modern end-to-end training methods became standard.
