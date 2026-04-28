# Transformer Networks — Atom

## Definition

Transformer networks are deep learning architectures for sequence modeling that replace recurrence and convolution with self-attention mechanisms, allowing models to learn relationships between all elements in a sequence in parallel.

---

## Core Idea

> Transformers model sequences by letting every token directly attend to every other token, learning context through attention rather than step-by-step memory.

This removes the need for recurrence.

---

## Core Mechanism: Self-Attention

Each token builds a weighted mixture of other tokens in the sequence.

### Attention computation:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

Where:

- $Q$ = queries
- $K$ = keys
- $V$ = values

---

## Intuition

- Query = “what am I looking for?”
- Key = “what do I contain?”
- Value = “what information do I provide?”

Each token decides what to focus on in the entire sequence.

---

## Architecture

### 1. Input Embeddings

Tokens are converted into vectors.

### 2. Positional Encoding

Adds order information (since no recurrence exists).

### 3. Multi-Head Self-Attention

Multiple attention mechanisms run in parallel:

- capture different relationships
- different representation subspaces

### 4. Feedforward Layers

Nonlinear transformation applied per token.

---

## Core Block Structure

Each transformer layer contains:

- self-attention block
- feedforward network
- residual connections
- layer normalization

---

## Key Idea

> Transformers learn relationships between all elements of a sequence simultaneously using attention instead of sequential memory.

---

## Why Transformers replaced RNNs

### RNN limitations:

- sequential computation (slow)
- weak long-term memory

### Transformer advantages:

- fully parallelizable
- captures long-range dependencies directly
- scales efficiently with data and compute

---

## Encoder vs Decoder

### Encoder

- processes input sequence
- builds contextual representations

### Decoder

- generates output sequence
- uses masked attention to prevent future leakage

---

## Variants

### 1. Encoder-only models

- BERT-style
- understanding tasks

### 2. Decoder-only models

- GPT-style
- generative language modeling

### 3. Encoder-decoder models

- translation
- sequence-to-sequence tasks

---

## Applications

- language models (LLMs)
- translation systems
- image transformers (ViT)
- multimodal models
- code generation

---

## Strengths

- strong long-range dependency modeling
- scalable training
- high parallel efficiency
- general-purpose architecture

---

## Limitations

- quadratic attention cost ($O(n^2)$)
- large compute/memory requirements
- data-hungry

---

## Intuition

> A transformer is a system where every element in a sequence dynamically decides what other elements are important and builds its representation from weighted relationships across the entire input.

---

## Relationship to Other Models

- RNN → sequential memory
- LSTM → gated sequential memory
- CNN → local spatial patterns
- Transformer → global relational modeling

---

## Summary

Transformer networks are deep learning architectures that replace recurrence with self-attention mechanisms, enabling parallel processing of sequences while modeling global dependencies by allowing every element in the input to attend to every other element, forming the foundation of modern large language models.
