---
tags:
  - machine-learning
  - deep-learning
  - optimization
---

# 🧠 EMAOnly in Machine Learning

In machine learning, **"emaonly"** refers to a model checkpoint or state where only the **Exponential Moving Average (EMA)** of the model parameters is saved or used.

---

# 📊 Exponential Moving Average (EMA)

## 🔹 Definition

EMA is a weighted moving average that gives more importance to recent values, used to smooth noisy updates.

---

## 🔹 Formula

For a sequence of values $x_t$, the EMA is defined as:

$$
EMA_t = \alpha x_t + (1 - \alpha) EMA_{t-1}
$$

Where:

- $\alpha$ = smoothing factor (between 0 and 1)
- $x_t$ = current value
- $EMA_{t-1}$ = previous EMA value

---

## 🔹 Intuition

- recent values matter more
- older values decay exponentially
- result is a smoother signal

---

# 🤖 EMA in Machine Learning

During training:

- model parameters update noisily (especially with SGD)
- EMA tracks a **smoothed version of weights**

So instead of using raw weights, we maintain:

- raw parameters → noisy updates
- EMA parameters → smoothed trajectory

---

# 💾 EMA in Model Checkpoints

A checkpoint may store:

## 🔸 1. Raw Parameters

- direct training weights
- highly sensitive to noise

## 🔸 2. EMA Parameters

- smoothed weights using EMA
- often better generalization

---

# 🏷️ What "emaonly" Means

A checkpoint labeled **emaonly** means:

> Only EMA-smoothed parameters are stored, not the raw model weights.

---

# 📈 Why Use EMA Only?

## 🔹 Stability

EMA reduces oscillations in parameter updates.

## 🔹 Better Generalization

Smoothed weights often perform better on unseen data.

## 🔹 Inference Quality

EMA models typically produce more stable outputs.

---

# ⚙️ Practical Scenario

During training:

1. Update raw model weights normally
2. Maintain EMA version in parallel
3. Save only EMA weights at the end

Result:

- checkpoint: `model_emaonly.ckpt`
- used directly for inference or deployment

---

# 🧠 Mental Model

> EMA is a “smoothed memory” of the model’s training trajectory.

Instead of trusting the latest step, it trusts the **trend over time**.

---

# 📌 Summary

"emaonly" checkpoints store only the exponential moving average of model parameters, providing a more stable and often higher-quality version of the trained model for inference.
