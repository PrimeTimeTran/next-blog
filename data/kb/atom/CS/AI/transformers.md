# Transformers

## Core Idea

A **Transformer** is a neural network architecture designed to process sequences using **attention mechanisms instead of recurrence or convolution**, enabling efficient modeling of long-range dependencies.

---

## Key Insight

Instead of processing tokens one-by-one (like RNNs), Transformers process **all tokens in parallel** and learn relationships between them using **self-attention**.

---

## Architecture Components

### Self-Attention

Each token “looks at” other tokens and decides what matters most.

\text{Attention}(Q,K,V)=\text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V

- **Q (Query)** → what I’m looking for
- **K (Key)** → what each token offers
- **V (Value)** → actual information passed forward

---

### Multi-Head Attention

- Runs multiple attention mechanisms in parallel
- Each head learns different relationships (syntax, meaning, context)

---

### Positional Encoding

Since Transformers don’t process sequences in order, they add **position information** so the model knows token order.

---

### Feedforward Network

After attention, each token passes through a small neural network independently.

---

## High-Level Flow

1. Input tokens → embeddings
2. Add positional encoding
3. Self-attention layers (multi-head)
4. Feedforward layers
5. Output representations

---

## Why Transformers Work Well

- Capture **long-range dependencies**
- Fully **parallelizable training**
- Scale effectively with data + compute
- Strong generalization across tasks

---

## Key Tradeoff

- Attention cost grows as **O(n²)** with sequence length → expensive for long inputs

---

## Common Uses

- Language models (GPT, BERT)
- Translation systems
- Code generation
- Vision Transformers (ViT)
- Multimodal models (text + image + audio)

---

## Intuition

A Transformer is like a group discussion:

- Every word “listens” to every other word
- Each word decides what matters most
- Meaning emerges from weighted interactions, not fixed order

---

## Relationship to Other Models

- Replaced RNNs for most NLP tasks
- Extends beyond text (vision, audio, reinforcement learning agents)
