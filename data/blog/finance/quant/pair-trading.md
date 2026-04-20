---
draft: false
date: '2025-01-03'
title: 'Pair Trading: A Quantitative Approach'
summary: 'A walkthrough of pair trading, portfolio construction, and mean-variance optimization in quant finance.'
tags: ['finance', 'quant', 'pair trading']
---

### Pair Trading

Pair trading is a **market-neutral quantitative strategy** that exploits the relative price relationship between two correlated assets.

---

## **Core Idea**

Two assets that historically move together tend to **revert to a stable relationship**.

When the relationship deviates:

> buy the underperformer and short the overperformer

---

## **Setup**

Choose two correlated assets:

- Stock A
- Stock B

Define a relationship:

- price ratio
- spread
- statistical model (e.g. regression residual)

---

## **Trade Logic**

### When A becomes expensive relative to B:

- **Short A**
- **Long B**

### When A becomes cheap relative to B:

- **Long A**
- **Short B**

---

## **Goal**

Profit from:

> **mean reversion of the price relationship**, not direction of the market

---

## **Market Neutrality**

Pair trading aims to reduce exposure to overall market movement:

- One long position
- One short position

$\text{Net Exposure} \approx 0$

So:

> returns depend on relative mispricing, not market direction

---

## **Spread Concept**

The key variable is the **spread**:

$\text{Spread} = P_A - \beta P_B$

Where:

- ( $\beta$ ) adjusts for scale or hedge ratio

---

## **Entry / Exit Signal**

- Enter trade when spread deviates significantly from mean
- Exit when spread reverts back

---

## **Why it works**

Pair trading relies on:

- statistical correlation
- temporary mispricing
- mean reversion behavior

---

## **Risk Considerations**

- correlation can break down
- structural regime changes
- execution + transaction costs
- model mis-specification

---

## **Connection to Portfolio Theory**

Pair trading is a **special case of portfolio optimization**:

- Two-asset hedge portfolio
- Minimizes market exposure
- Optimizes relative return vs risk

---

## **One-line Summary**

Pair trading is a market-neutral strategy that profits by betting on the convergence of the price relationship between two historically correlated assets.
