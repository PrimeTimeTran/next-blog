---
draft: false
date: '2025-01-03'
title: 'Pair Trading: A Quantitative Approach'
summary: 'A walkthrough of pair trading, portfolio construction, and mean-variance optimization in quant finance.'
tags: ['finance', 'quant', 'pair trading']
---

# Introduction

Pair trading is a classic market-neutral strategy that involves taking opposing positions in two correlated assets. This post walks through a simple example and connects it to portfolio theory.

---

## Example: Alpha & Omega

Imagine two tech firms, Alpha and Omega. We construct a pair trade:

- **Short Omega**
- **Long Alpha**

### Initial Trade

|           | Alpha  | Omega    |
| --------- | ------ | -------- |
| Price     | $50    | $40      |
| Trade     | Buy 20 | Short 25 |
| Cash Flow | -$1000 | +$1000   |

### After 3 Months

|           | Alpha   | Omega  |
| --------- | ------- | ------ |
| Price     | $45     | $35    |
| Trade     | Sell 20 | Buy 25 |
| Cash Flow | +$900   | -$875  |

### Performance

- **Alpha ($50 → $45):** 10% drop
- **Omega ($40 → $35):** 12.5% drop

#### Position Types

- **Long Position:** Profit when price rises
- **Short Position:** Profit when price falls

---

## Scaling Up: Portfolio Construction

Pair trading can be extended to a portfolio of carefully chosen stocks. The goal is to use mathematical models to balance risk and return, factoring in correlations.

---

## Mean-Variance Optimization

The standard way to build a portfolio is through mean-variance optimization:

- **Return Vector:** $\vec{\mu} = (\mu_1, \mu_2, ..., \mu_n)$
- **Covariance Matrix:**

$$
\Sigma =
\begin{bmatrix}
\mathrm{Var}(X) & \mathrm{Cov}(X,Y) \\
\mathrm{Cov}(Y,X) & \mathrm{Var}(Y)
\end{bmatrix}
$$

- **Weight Vector:** $\vec{w} = (w_1, w_2, ..., w_n)$

### Portfolio Returns

- **Expected Return:**

  $$
  	ext{Expected Return} = \vec{w} \cdot \vec{\mu}
  $$

- **Portfolio Variance:**

  $$
  \sigma^2 = \vec{w}^T \Sigma \vec{w}
  $$

- **Objective Function (Loss Function):**

  $$
  \vec{w} \cdot \vec{\mu} - \lambda \vec{w}^T \Sigma \vec{w}
  $$

> The objective is to find weights $\vec{w}$ that maximize this function, balancing return and risk according to your preferences.

---

## Portfolio Constraints

| Portfolio Type       | Description                         | Constraints                              |
| -------------------- | ----------------------------------- | ---------------------------------------- |
| Long-Only Portfolio  | No shorting, fully invested         | $w_{i} \geq 0$, $\sum w_{i} = 1$         |
| Long-Short Portfolio | Allows shorts, fully invested       | $w_{i} \in \mathbb{R}$, $\sum w_{i} = 1$ |
| Market Neutral       | Allows shorts, net exposure is zero | $w_{i} \in \mathbb{R}$, $\sum w_{i} = 0$ |

## Alternative Data

_Coming soon..._

---

# Conclusion

## References

- [QuantRocket: Pairs Trading](https://www.quantrocket.com/code/?)
- [YouTube: Pairs Trading Explained](https://www.youtube.com/watch?v=JVtUcM1sWQw)
