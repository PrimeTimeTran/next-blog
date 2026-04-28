# Variational Autoencoders (VAEs) — Atom

## Definition

Variational Autoencoders (VAEs) are probabilistic generative models that learn a structured latent space for data by encoding inputs into a probability distribution and decoding samples from that distribution to reconstruct or generate data.

---

## Core Idea

> VAEs learn not just a compressed representation of data, but a _distribution_ over representations, enabling controlled generation by sampling from latent space.

---

## Key Difference from Autoencoders

- **Autoencoder:** learns a fixed latent vector
- **VAE:** learns a probability distribution over latent vectors

Instead of:

$$
z = f(x)
$$

VAEs learn:

$$
z \sim p(z|x)
$$

---

## Architecture

### 1. Encoder (Inference Network)

Maps input $x$ to a distribution:

- mean: $\mu(x)$
- variance: $\sigma^2(x)$

So latent space is:

$$
z \sim \mathcal{N}(\mu(x), \sigma^2(x))
$$

---

### 2. Latent Space

A continuous probabilistic space that is:

- smooth
- structured
- sampleable

---

### 3. Decoder (Generative Network)

Reconstructs input from sampled latent vector:

$$
\hat{x} = p(x|z)
$$

---

## Core Trick: Reparameterization

To make sampling differentiable:

$$
z = \mu + \sigma \cdot \epsilon,\quad \epsilon \sim \mathcal{N}(0, 1)
$$

This allows backpropagation through stochastic sampling.

---

## Training Objective

VAEs optimize two terms:

### 1. Reconstruction Loss

Measures how well output matches input:

$$
\mathcal{L}_{rec} = |x - \hat{x}|
$$

---

### 2. KL Divergence Regularization

Forces latent distribution to match a prior (usually Gaussian):

$$
\mathcal{L}*{KL} = D*{KL}(q(z|x) ,|, p(z))
$$

---

### Total Loss

$$
\mathcal{L} = \mathcal{L}*{rec} + \mathcal{L}*{KL}
$$

---

## Core Mechanism

1. Encode input into distribution parameters ($\mu, \sigma$)
2. Sample latent vector using reparameterization
3. Decode latent vector into reconstruction
4. Optimize reconstruction + distribution regularization

---

## Key Idea

> VAEs learn a smooth, continuous latent space where similar inputs map to nearby regions, enabling meaningful interpolation and controlled generation.

---

## Why VAEs matter

They combine:

- neural networks (function approximation)
- probability theory (latent distributions)
- optimization (variational inference)

---

## Strengths

- structured latent space
- stable training (compared to GANs)
- enables interpolation between samples
- principled probabilistic framework

---

## Limitations

- blurry generated outputs (compared to GANs)
- weaker sample sharpness
- assumes simple prior distributions (often Gaussian)
- can underfit complex data distributions

---

## Applications

- image generation
- anomaly detection
- representation learning
- data compression
- latent space exploration

---

## Intuition

> A VAE learns how to compress data into a smooth probabilistic space, where you can sample points and reliably decode them into realistic outputs.

---

## Relationship to Other Models

- Autoencoders → deterministic compression
- GANs → adversarial generation
- Diffusion models → iterative generative refinement
- Transformers → sequence modeling (not generative latent compression)

---

## Summary

Variational Autoencoders are generative neural networks that learn probabilistic latent representations of data by encoding inputs into distributions and decoding sampled latent variables, trained using a combination of reconstruction loss and KL divergence regularization to produce a structured, continuous latent space for data generation.
