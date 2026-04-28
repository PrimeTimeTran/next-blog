# Recurrent Neural Networks (RNNs) — Atom

## Definition

Recurrent Neural Networks (RNNs) are neural networks designed to process sequential data by maintaining a hidden state that is updated at each time step, allowing information to persist across a sequence.

---

## Core Idea

> RNNs process data step-by-step while carrying a “memory” of previous inputs through a hidden state.

They are built to model **order and temporal dependency**.

---

## Core Structure

At each time step $t$:

- input: $x_t$
- hidden state: $h_t$
- output: $y_t$

---

## Hidden State Update

The core recurrence:

$$
h_t = \tanh(W_h h_{t-1} + W_x x_t + b)
$$

Output:

$$
y_t = W_y h_t
$$

---

## Core Mechanism

1. Take input sequence one element at a time
2. Update hidden state using current input + previous hidden state
3. Produce output at each step or at final step
4. Share weights across time steps

---

## Key Idea

> RNNs reuse the same network across time steps, allowing them to model sequential dependencies with a persistent hidden state.

---

## Why RNNs work

They encode:

- order sensitivity
- temporal context
- sequential dependencies

Unlike feedforward networks, they are not independent per input.

---

## Unrolled View

An RNN can be visualized as a repeated network:

```
x1 → h1 → y1
      ↓
x2 → h2 → y2
      ↓
x3 → h3 → y3
```

All steps share the same parameters.

---

## Training Mechanism

RNNs are trained using:

- backpropagation through time (BPTT)
- gradient-based optimization

---

## Key Problems

### 1. Vanishing gradients

- long-term dependencies become hard to learn

### 2. Exploding gradients

- unstable updates in long sequences

### 3. Short memory

- struggles with long-range context

---

## Variants

### 1. LSTM

- adds gated memory
- solves vanishing gradient problem

### 2. GRU

- simplified gating mechanism

---

## Applications

- language modeling (early NLP)
- time series prediction
- speech recognition
- sequence labeling

---

## Strengths

- simple sequential modeling
- parameter sharing across time
- naturally handles variable-length input

---

## Limitations

- weak long-term memory
- sequential computation (slow training)
- largely replaced by transformers

---

## Intuition

> An RNN is a neural network that processes sequences by continuously updating an internal memory of what it has seen so far.

---

## Relationship to Other Models

- LSTM → improved RNN with memory gates
- Transformer → replaces recurrence with attention
- CNN → non-sequential alternative for structured inputs

---

## Summary

Recurrent Neural Networks are sequence models that process inputs step-by-step while maintaining a hidden state that carries contextual information through time, enabling them to model temporal dependencies but suffering from long-term memory limitations due to gradient instability.
