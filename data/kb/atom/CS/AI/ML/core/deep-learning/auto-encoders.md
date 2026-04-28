# Autoencoders — Atom

## Definition

Autoencoders are neural networks that learn compressed representations of data by training the network to reconstruct its own input.

They consist of two parts:

- an encoder that compresses input into a latent representation
- a decoder that reconstructs the input from that representation

---

## Core Idea

> Autoencoders learn efficient internal representations by forcing a model to compress and then reconstruct data.

This creates a bottleneck that encourages feature learning.

---

## Architecture

### Encoder

Maps input $x$ into a latent representation $z$:

$$
z = f(x)
$$

### Latent Space (Bottleneck)

Compressed representation of input data.

### Decoder

Reconstructs input from latent space:

$$
\hat{x} = g(z)
$$

---

## Training Objective

Autoencoders minimize reconstruction error:

$$
L = |x - \hat{x}|^2
$$

or other distance-based losses depending on data type.

---

## Core Mechanism

1. Input $x$ is passed through encoder → $z$
2. Decoder reconstructs $\hat{x}$ from $z$
3. Loss compares $x$ and $\hat{x}$
4. Backpropagation updates parameters

---

## Key Idea

> The model is trained to reproduce its input, but must first compress it, forcing it to learn meaningful structure in the data.

---

## Latent Representation

The bottleneck layer $z$ captures:

- compressed features
- essential structure
- reduced noise

This representation can be used for:

- dimensionality reduction
- feature extraction
- clustering

---

## Variants of Autoencoders

### 1. Undercomplete Autoencoders

- latent space smaller than input
- forces compression

---

### 2. Sparse Autoencoders

- encourages sparse activations
- improves feature interpretability

---

### 3. Denoising Autoencoders

- trained to reconstruct clean input from noisy input

---

### 4. Variational Autoencoders (VAEs)

- probabilistic latent space
- enables data generation via sampling

---

## Applications

- dimensionality reduction (alternative to PCA)
- anomaly detection
- feature learning
- data compression
- pretraining deep networks

---

## Key Limitation

> Autoencoders can learn to simply copy input if bottleneck is too large, without learning meaningful representations.

---

## Intuition

> Autoencoders are compression systems that learn what information is essential by forcing a network to reconstruct data through a constrained internal representation.

---

## Relationship to Other Models

- PCA → linear compression method
- Autoencoder → nonlinear learned compression
- VAE → probabilistic generative extension

---

## Summary

Autoencoders are neural networks trained to reconstruct their input through a compressed latent representation, enabling them to learn meaningful features in an unsupervised manner by minimizing reconstruction error between input and output.
