# Deep Q-Networks (DQN) — Atom

## Definition

Deep Q-Networks (DQN) are a reinforcement learning algorithm that combines Q-learning with deep neural networks to approximate the optimal action-value function in environments with large or continuous state spaces.

---

## Core Idea

> DQN learns a function that estimates how good an action is in a given state, using a neural network instead of a table.

It extends classical Q-learning to high-dimensional inputs like images.

---

## Key Function: Q-value

The Q-function represents expected future reward:

$$
Q(s, a)
$$

Where:

- $s$ = state
- $a$ = action
- $Q(s, a)$ = expected return of taking action $a$ in state $s$

---

## Neural Network Approximation

Instead of a lookup table, DQN uses:

$$
Q(s, a; \theta)
$$

A neural network with parameters $\theta$ that approximates Q-values.

---

## Learning Objective

DQN minimizes the difference between predicted Q-values and target Q-values:

$$
L = \left(Q(s,a) - (r + \gamma \max_{a'} Q(s', a'))\right)^2
$$

Where:

- $r$ = immediate reward
- $\gamma$ = discount factor
- $s'$ = next state

---

## Core Mechanism

1. Observe state $s$
2. Choose action $a$ (often via ε-greedy policy)
3. Receive reward $r$ and next state $s'$
4. Compute target Q-value
5. Update network using gradient descent

---

## Key Innovations in DQN

### 1. Experience Replay

- stores past transitions $(s, a, r, s')$
- samples random batches for training
- reduces correlation between updates

---

### 2. Target Network

- separate network used to compute stable targets
- updated periodically
- improves training stability

---

## Exploration vs Exploitation

DQN balances:

- exploration (trying new actions)
- exploitation (choosing best known action)

Common strategy:

- ε-greedy policy

---

## Key Idea

> DQN replaces a Q-table with a neural network that generalizes value estimation across large state spaces.

---

## Why Deep Learning is needed

Classical Q-learning fails when:

- state space is too large (e.g., images)
- tabular representation is impossible

DQN solves this by:

> using deep networks as function approximators.

---

## Applications

- Atari game playing
- robotics control
- navigation tasks
- decision-making systems

---

## Strengths

- works with high-dimensional inputs
- learns directly from raw observations
- generalizes across states

---

## Limitations

- unstable training (without tricks like replay + target network)
- sample inefficient
- sensitive to hyperparameters
- struggles with long-term credit assignment compared to advanced RL methods

---

## Intuition

> DQN learns a “value intuition” for actions by repeatedly simulating experience and improving its predictions of long-term reward.

---

## Relationship to Other Models

- Q-learning → base algorithm
- Neural networks → function approximator
- Policy gradient methods → alternative RL approach
- Actor-critic → more stable modern RL framework

---

## Summary

Deep Q-Networks are reinforcement learning models that approximate the Q-value function using deep neural networks, enabling agents to learn optimal actions in high-dimensional environments by combining Q-learning with experience replay, target networks, and gradient-based optimization.
