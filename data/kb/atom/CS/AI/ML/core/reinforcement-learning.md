# Reinforcement Learning (RL)

## Definition

Reinforcement Learning is a type of machine learning where an agent learns to make decisions by interacting with an environment and receiving feedback in the form of rewards.

---

## Core idea

> Learn behavior by trial and error to maximize cumulative reward over time.

---

## Components

### 1. Agent

The learner or decision-maker.

---

### 2. Environment

The system the agent interacts with.

---

### 3. State ($s$)

A representation of the current situation.

---

### 4. Action ($a$)

A choice made by the agent.

---

### 5. Reward ($r$)

Feedback signal:

- positive → good action
- negative → bad action

---

## Interaction loop

At each step:

1. Observe state $s$
2. Choose action $a$
3. Receive reward $r$
4. Transition to new state $s'$
5. Repeat

---

## Goal

Maximize total future reward:

$$
\sum_{t=0}^{\infty} r_t
$$

---

## Key concept: policy

A **policy** defines how the agent chooses actions:

$$
\pi(a \mid s)
$$

> It is the strategy mapping states to actions.

---

## Value functions

Measure how good states or actions are.

### State value:

Expected reward from a state.

### Action value (Q-value):

Expected reward from taking an action in a state.

---

## Exploration vs exploitation

### Exploration

Try new actions to discover better strategies.

### Exploitation

Use known best actions to maximize reward.

> RL must balance both.

---

## Learning approaches

### 1. Value-based

Learn value function (e.g., Q-learning)

---

### 2. Policy-based

Directly learn policy $\pi(a \mid s)$

---

### 3. Actor-Critic

Combines both:

- actor = policy
- critic = value estimator

---

## Key intuition

> Reinforcement learning is learning by interacting with a world and using feedback to improve decisions over time.

---

## When to use RL

- sequential decision problems
- environments with delayed rewards
- games or simulations
- robotics or control systems

---

## Limitations

- requires many interactions (data inefficient)
- unstable training
- reward design is critical
- hard to guarantee optimality

---

## Mental model

> RL = learning a strategy by repeatedly trying actions and learning from consequences.

---

## Summary

> Reinforcement learning trains an agent to maximize long-term reward by interacting with an environment and learning from feedback signals.
