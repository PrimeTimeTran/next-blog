# 🧠 ML Kernel (5–7 core atoms)

## 1. Models (core)

> What is being learned

A model is a parameterized function:

$$
f(x; \theta) \rightarrow \hat{y}
$$

- defines hypothesis space
- maps inputs → outputs
- includes architectures (linear models, trees, neural nets)

---

## 2. Data (core)

> What learning is based on

- inputs + structure
- labels (if supervised)
- distributions and noise

Key idea:

> models are only as good as the data they learn from

---

## 3. Loss Function (core)

> What “wrong” means

$$
L(y, \hat{y})
$$

- defines objective of learning
- converts prediction error into scalar signal
- bridges model output → optimization

---

## 4. Optimization (mechanics)

> How improvement happens

$$
\min_\theta L(\theta)
$$

- gradient descent and variants
- parameter updates
- search over function space

---

## 5. Gradients / Derivatives (math bridge)

> How direction is computed

$$
\nabla_\theta L(\theta)
$$

- slope of loss surface
- tells model how to change
- connects calculus → learning

---

## 6. Training Loop (mechanics)

> The full learning process

1. forward pass (predict)
2. compute loss
3. compute gradients
4. update parameters

> This is the _runtime of ML_

---

## 7. Generalization (core outcome)

> What success means

- performance on unseen data
- avoids overfitting
- depends on model + data + optimization

---

# 🧭 How these 7 atoms relate

```txt
DATA → MODEL → PREDICTION
              ↓
           LOSS
              ↓
        GRADIENTS
              ↓
        OPTIMIZATION
              ↓
        UPDATED MODEL
              ↓
     GENERALIZATION (evaluation reality)
```

---

# 🧠 Why this kernel works

This set is minimal because:

- everything else is a _variant_ of these
- all ML paradigms (supervised, unsupervised, RL) reduce into them
- all architectures are implementations of “Model”
- all learning methods are implementations of “Optimization”

---

# 📦 What you explicitly _don’t_ need in the kernel

These are **expansions, not primitives**:

- neural networks (→ model type)
- backpropagation (→ optimization mechanism)
- classification/regression (→ problem types)
- clustering (→ unsupervised application)
- RL algorithms (→ optimization with reward signal)
- evaluation metrics (→ measuring generalization)

---

# 🧠 Final mental model

> Machine Learning is the interaction between data, models, and loss, driven by optimization using gradients, evaluated by generalization.
