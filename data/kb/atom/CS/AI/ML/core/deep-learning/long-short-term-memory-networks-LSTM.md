# Long Short-Term Memory Networks (LSTMs) — Atom

## Definition

Long Short-Term Memory (LSTM) networks are a type of recurrent neural network (RNN) designed to model sequential data while solving the vanishing gradient problem by introducing a gated memory cell that can retain or forget information over long time spans.

---

## Core Idea

> LSTMs learn long-term dependencies in sequences by controlling what information is stored, updated, and forgotten over time using learned gates.

---

## Why LSTMs exist

Standard RNNs struggle because:

- gradients vanish over long sequences
- earlier information is lost

LSTMs fix this by introducing a persistent **memory cell**.

---

## Core Structure

Each LSTM unit contains:

- Cell state $C_t$ → long-term memory
- Hidden state $h_t$ → short-term output
- Gates → control information flow

---

## Gates

### 1. Forget Gate

Decides what to remove from memory:

$$
f_t = \sigma(W_f [h_{t-1}, x_t] + b_f)
$$

---

### 2. Input Gate

Decides what new information to store:

$$
i_t = \sigma(W_i [h_{t-1}, x_t] + b_i)
$$

---

### 3. Candidate Memory

New candidate content:

$$
\tilde{C}*t = \tanh(W_C [h*{t-1}, x_t] + b_C)
$$

---

### 4. Cell State Update

Combines old memory and new information:

$$
C_t = f_t \cdot C_{t-1} + i_t \cdot \tilde{C}_t
$$

---

### 5. Output Gate

Controls output of hidden state:

$$
o_t = \sigma(W_o [h_{t-1}, x_t] + b_o)
$$

$$
h_t = o_t \cdot \tanh(C_t)
$$

---

## Core Mechanism

1. Input sequence arrives step by step
2. Gates decide what to remember or forget
3. Memory cell carries long-term context
4. Hidden state outputs current prediction

---

## Key Idea

> LSTMs act as controlled memory systems that selectively preserve important information across long sequences.

---

## What makes them powerful

- explicit memory cell
- gated information flow
- stable gradient propagation over time

---

## Strengths

- captures long-range dependencies
- effective for sequential data
- more stable than vanilla RNNs

---

## Limitations

- computationally expensive
- harder to parallelize
- largely replaced by transformers in many domains

---

## Common Applications

- language modeling (pre-transformer era)
- speech recognition
- time series forecasting
- sequence-to-sequence tasks

---

## Intuition

> An LSTM is a neural network with a learned memory system that decides what to remember, what to forget, and what to output at each step in a sequence.

---

## Relationship to Other Models

- RNN → base recurrent architecture
- GRU → simplified gated variant of LSTM
- Transformer → replaces recurrence with attention
- CNN → non-sequential alternative for structured data

---

## Summary

Long Short-Term Memory networks are recurrent neural networks that use gated memory cells to control information flow across time steps, enabling the modeling of long-term dependencies in sequential data by mitigating vanishing gradient issues through learned memory retention and update mechanisms.
