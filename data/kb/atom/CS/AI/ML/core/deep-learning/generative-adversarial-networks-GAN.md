# Generative Adversarial Networks (GANs) — Atom

## Definition

Generative Adversarial Networks (GANs) are a class of generative models where two neural networks—a generator and a discriminator—are trained in opposition to each other in a minimax game, with the goal of producing realistic synthetic data.

---

## Core Idea

> GANs learn to generate realistic data by having two models compete: one creates fake data, the other tries to detect it.

This adversarial process drives both networks to improve.

---

## Architecture

### 1. Generator (G)

- input: random noise $z$
- output: synthetic data $\hat{x}$
- goal: fool the discriminator

$$
\hat{x} = G(z)
$$

---

### 2. Discriminator (D)

- input: real or generated data
- output: probability data is real

$$
D(x) \in [0,1]
$$

---

## Training Objective

GANs solve a minimax optimization problem:

$$
\min_G \max_D ; \mathbb{E}*{x \sim p*{data}}[\log D(x)] + \mathbb{E}_{z \sim p(z)}[\log(1 - D(G(z)))]
$$

---

## Core Mechanism

1. Sample real data $x$
2. Generate fake data $G(z)$
3. Train discriminator to distinguish real vs fake
4. Train generator to fool discriminator
5. Repeat adversarial loop

---

## Key Idea

> GANs learn the underlying data distribution implicitly by playing a game between two competing networks.

---

## Training Dynamics

- Discriminator improves classification of real vs fake
- Generator improves realism of generated samples
- Equilibrium occurs when:

  - discriminator cannot distinguish real from fake

---

## Types of GANs

### 1. Vanilla GAN

- original formulation
- simple generator + discriminator

---

### 2. Conditional GAN (cGAN)

- conditioned on labels or inputs
- enables controlled generation

---

### 3. DCGAN (Deep Convolutional GAN)

- uses convolutional networks
- improves image generation quality

---

### 4. WGAN (Wasserstein GAN)

- improves training stability
- uses Wasserstein distance instead of JS divergence

---

## Applications

- image generation
- style transfer
- data augmentation
- super-resolution
- deepfakes
- synthetic datasets

---

## Strengths

- produces highly realistic samples
- learns complex data distributions
- does not require explicit likelihood modeling

---

## Limitations

- unstable training (mode collapse)
- difficult to tune
- no explicit density estimation
- sensitive adversarial dynamics

---

## Key Failure Mode: Mode Collapse

> Generator produces limited variety of outputs instead of full distribution.

---

## Intuition

> GANs are a competition: one network tries to create fake data, while another becomes better at detecting fakes, forcing both to continuously improve.

---

## Relationship to Other Models

- VAEs → probabilistic generative alternative
- Diffusion models → modern stable generative approach
- Autoencoders → reconstruction-based representation learning
- DQN → unrelated (RL, but also adversarial training idea similarity)

---

## Summary

Generative Adversarial Networks are generative models consisting of a generator and discriminator trained in opposition, where the generator learns to produce realistic synthetic data by attempting to fool the discriminator, resulting in implicit learning of the underlying data distribution through adversarial optimization.
