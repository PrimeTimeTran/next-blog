# Reward Functions (Reinforcement Learning) — Atom

## Definition

A **reward function** defines the feedback signal an agent receives in a reinforcement learning (RL) system after taking an action in an environment.

Formally:

$$
R(s, a, s')
$$

Where:

- $s$ = current state
- $a$ = action taken
- $s'$ = resulting state
- $R$ = scalar reward signal

---

## Core Idea

> A reward function tells an agent _how good or bad an action was in a given context_.

It is the mechanism that defines what “success” means in RL.

---

## Role in Reinforcement Learning

In RL, the agent learns by:

1. Observing state $s$
2. Taking action $a$
3. Receiving reward $R$
4. Updating its policy to maximize future reward

The objective is:

$$
\max \mathbb{E}\left[\sum_{t=0}^{\infty} \gamma^t R_t \right]
$$

---

## Key Components

### 1. State ($s$)

Current situation of the environment.

### 2. Action ($a$)

Decision taken by the agent.

### 3. Next State ($s'$)

Resulting environment after action.

### 4. Reward ($R$)

Scalar feedback signal:

- positive → desirable behavior
- negative → undesirable behavior

---

## Types of Reward Signals

### Sparse Rewards

- reward is rare
- e.g., win/lose at end of game

### Dense Rewards

- frequent feedback
- e.g., points per step in a game

### Shaped Rewards

- engineered intermediate signals to guide learning

---

## Reward vs Objective

- **Reward function** → defines immediate feedback
- **Objective (return)** → cumulative future reward

---

## Key Concept: Reward Hypothesis

> All goals can be framed as the maximization of expected cumulative reward.

This is a foundational assumption in RL.

---

## Reward Design Problem

A major challenge in RL is:

> Designing a reward function that correctly encodes the desired behavior.

Poor reward design leads to:

- reward hacking
- unintended strategies
- unstable learning

---

## Intuition

> The reward function is the “grading system” of an RL environment.

It tells the agent:

- what is good behavior
- what is bad behavior
- what to optimize over time

---

## Common Pitfall

If reward ≠ true goal, the agent will:

> optimize the reward, not the intent behind it

This is known as **specification gaming**.

---

## Mental Model

> Reward functions define the incentive landscape over which an RL agent learns to act.

---

# Summary

A reward function is a scalar feedback mechanism in reinforcement learning that evaluates actions taken by an agent and defines the optimization objective for learning behavior over time.
