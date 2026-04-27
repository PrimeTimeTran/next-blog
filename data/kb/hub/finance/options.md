---
tags:
  - finance
---

# 🧠 Options Hub

Options are financial derivatives that give the holder the **right, but not the obligation**, to buy or sell an underlying asset at a predetermined price within a specified time period.

They are fundamental tools for **speculation, hedging, and structured payoff construction**.

---

# 🧩 Core Idea

An option converts uncertainty into a **controllable payoff function**.

Instead of linear exposure (like stocks), options create **non-linear outcomes**.

---

# 📊 1. Basic Structure of Options

## 🟦 Call Option

Right to **buy** an asset at strike price \(K\)

- Profit when price rises
- Loss limited to premium paid

## 🟥 Put Option

Right to **sell** an asset at strike price \(K\)

- Profit when price falls
- Used for hedging downside risk

---

## 🧾 Key Components

- **Underlying asset** (stock, index, commodity)
- **Strike price (K)** → execution price
- **Expiration (T)** → time limit
- **Premium** → cost of the option
- **Moneyness**
  - ITM (in-the-money)
  - ATM (at-the-money)
  - OTM (out-of-the-money)

---

# 📈 2. Payoff Structure

## Call Option Payoff

$$
\text{Payoff} = \max(S - K, 0)
$$

## Put Option Payoff

$$
\text{Payoff} = \max(K - S, 0)
$$

Where:

- \(S\) = underlying price at expiration
- \(K\) = strike price

---

# 🧠 3. Why Options Matter

Options are powerful because they allow:

## 🛡 Hedging

- protect downside risk (e.g., protective puts)

## 📈 Speculation

- leveraged [[directional|directional]] bets with limited loss

## 🧱 Structured Payoffs

- combine multiple options to design custom risk profiles

---

# 🧮 4. Pricing Intuition

Option value depends on:

- underlying price
- strike price
- time to expiration
- volatility
- interest rates

### Key Insight:

> Volatility is the most important driver of option price.

---

# 📊 5. [[greeks|Greeks]] (Risk Sensitivities)

## Delta (Δ)

- sensitivity to underlying price

## Gamma (Γ)

- rate of change of delta

## Theta (Θ)

- time decay

## Vega (ν)

- sensitivity to volatility

---

# 🧠 6. Options Strategies (Payoff Engineering System)

Options strategies are combinations of positions designed to shape:

- direction exposure (up/down)

- volatility exposure (movement vs stagnation)

- time decay exposure

- risk profile (bounded vs unbounded loss)

---

## 🧱 6.1 Core Building Blocks (FOUNDATION)

All strategies are constructed from a small set of primitives.

---

### 📈 Long / Short Options

- **Long option**

- pay premium

- limited loss

- asymmetric upside

- **Short option (naked)**

- collect premium

- limited gain

- potentially unlimited loss

---

### 🧷 Secured vs Naked Positions

#### [[naked|Naked]] position

- sold without hedge

- high risk (especially short calls)

#### Covered / secured position

- risk offset by another asset or cash reserve

Examples:

- Covered call = long stock + short call

- Cash-secured put = cash reserved to buy stock

---

### ⚖️ Spreads (CORE CONSTRUCTION UNIT)

A **spread** is a combination of options of the same type (calls or puts) with differences in:

- strike prices

- expiration dates

#### Purpose

- reduce cost

- cap risk

- define payoff range

- shape probability distribution of returns

---

### 🧩 Multi-leg Structures

Strategies combining multiple options across strikes/types/expirations:

- straddle

- strangle

- condor

- butterfly

These are **higher-order payoff designs** built from spreads.

---

## 🟩 6.2 Directional Strategies

> Exposure to price movement direction

- Long call → bullish

- Long put → bearish

- Short call (naked) → bearish / neutral (high risk)

- Short put → bullish / income-oriented

---

## 🟨 6.3 Spread Strategies (BOUNDED RISK SYSTEMS)

> Define a controlled payoff range

---

### 📊 Vertical Spreads (same expiration)

- **Bull call spread**

- buy lower-strike call

- sell higher-strike call

- **Bear put spread**

- buy higher-strike put

- sell lower-strike put

---

### 💰 Credit Spreads (income-biased)

- receive net premium

- profit if price stays within range

- defined maximum loss and gain

---

### 💸 Debit Spreads (directional + cost efficient)

- pay net premium

- lower risk than naked options

- reduced upside potential

---

## 🟦 6.4 Volatility Strategies

> Bet on magnitude, not direction

---

### 🔷 [[straddle|Straddle]]

- buy call + buy put (same strike, same expiry)

- profit from large move either direction

---

### 🔶 [[strangle|Strangle]]

- buy OTM call + OTM put

- cheaper than straddle

- requires larger movement to profit

---

## 🟥 6.5 Complex Multi-Leg Structures

> Advanced payoff shaping via multiple strikes

---

### 🦅 [[condor|Condor]]

- 4-leg structure

- profits when price stays within a wide range

---

### 🦋 Butterfly

- 3-strike structure

- profit if price pins near central strike

---

### 📉 Iron Condor

- combination of call spread + put spread

- limited risk, defined reward

- profits in low volatility environments

---

## 🟧 6.6 Income Strategies

> Monetize option premium (theta decay)

---

### Covered Call

- long stock + short call

- generates income from upside cap

---

### Cash-Secured Put

- sell put backed by cash

- economically similar to buying stock at lower price

---

## 🟥 6.7 Time-Based Strategies

> Exploit differences in time decay and volatility structure

---

### Calendar Spread

- same strike

- different expirations

- profit from time decay and volatility differences

---

## 🧠 6.8 Mental Model (IMPORTANT)

All options strategies reduce to:

> shaping a payoff surface over:

- price direction

- volatility

- time decay

- risk constraints

---

## 🔗 6.9 System View

- Single options → building blocks

- Spreads → risk-defined structures

- Multi-leg → probability shaping systems

- Income strategies → volatility harvesting

- Volatility strategies → uncertainty expansion bets

---

# 📉 7. Options vs Stocks

| Feature          | Stocks             | Options                  |
| ---------------- | ------------------ | ------------------------ |
| Exposure         | Linear             | Non-linear               |
| Risk             | Unlimited downside | Limited (long positions) |
| Time sensitivity | None               | Critical                 |
| Leverage         | Low                | High                     |

---

# 🧠 8. Mental Model

Options are best understood as:

> instruments for reshaping probability distributions of returns

Instead of asking:

> “Will price go up or down?”

You ask:

> “What shape of outcome do I want?”

---

# 🔗 9. Where Options Fit in Finance

Options connect to:

- [[Derivatives Markets]] → core instrument class
- [[Risk Management]] → hedging + tail protection
- [[Investments]] → structured portfolios
- [[Volatility Trading]] → pricing uncertainty directly

---

# 📌 Summary

Options are derivative contracts that allow traders to design and control **asymmetric payoff structures**, making them essential tools for hedging risk, expressing views on volatility, and constructing advanced financial strategies.

# Related

- [[trading-strategies|Options Trading Strategies]]
- [[black-scholes-model]]
