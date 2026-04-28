# Reinforcement Learning (RL)

## Core Idea

Learning by **interacting with an environment** and optimizing actions based on **reward feedback**.

## Key Components

- **Agent** → Learner/decision maker
- **Environment** → Everything the agent interacts with
- **State (s)** → Current situation
- **Action (a)** → Choice made by agent
- **Reward (r)** → Feedback signal
- **Policy (π)** → Strategy mapping states → actions

## Objective

Maximize **cumulative reward** over time (not just immediate reward).

## Loop

1. Observe state `s`
2. Choose action `a` using policy `π`
3. Receive reward `r` and next state `s'`
4. Update policy based on feedback

## Types of RL

- **Model-free** → learns directly from experience

  - Q-Learning
  - Policy Gradients

- **Model-based** → learns environment dynamics
- **On-policy** → learns from current policy
- **Off-policy** → learns from other policies (e.g., replay buffers)

## Key Concepts

- **Exploration vs Exploitation**

  - Explore → try new actions
  - Exploit → use known best actions

- **Discount factor (γ)** → importance of future rewards
- **Value function (V)** → expected reward from a state
- **Q-function (Q)** → expected reward from state-action pair

## Intuition

RL is like training a dog:

- Good actions → treats (reward)
- Bad actions → no treat / penalty
- Over time → learns best behavior

## Common Algorithms

- Q-Learning
- Deep Q-Networks (DQN)
- REINFORCE
- Actor-Critic methods
