---
draft: true
date: '2025-09-10'
title: ''
summary: ''
tags: ['']
---

Perfect 👌 let’s build a **30/60/90-day learning plan** that balances **options/finance knowledge** with **fintech product + regulatory awareness**. The goal is to get you from “I get options at a high level” → “I can design, discuss, and ship an options feature confidently.”

---

# 📅 30/60/90 Day Learning Plan

---

## 🔹 First 30 Days: Build a Solid Foundation

**Goal:** Understand the mechanics of options and the financial plumbing behind them.

1. **Options Basics (Deep Dive)**

   - Calls vs puts, intrinsic vs extrinsic value.
   - Moneyness: ITM, ATM, OTM.
   - Time decay (theta) and volatility (vega).

2. **Strategies (Simple First)**

   - Covered calls, protective puts.
   - Vertical spreads (credit vs debit).
   - Payoff diagrams → practice sketching them.

3. **Market Structure**

   - OCC (Options Clearing Corporation): exercise/assignment process.
   - How options contracts are standardized (100 shares, expirations, strikes).
   - Market makers and bid-ask spreads.

4. **Tech/Practical Side**

   - Explore an **options chain** in Robinhood, Thinkorswim, or Yahoo Finance.
   - Learn how market data APIs deliver chains + Greeks.
   - Get comfortable reading an options quote.

---

## 🔹 Days 31–60: Intermediate Level

**Goal:** Move from knowing “what” an option is to “why” it’s priced and used the way it is.

1. **The Greeks (core for your role)**

   - Delta: hedge ratios.
   - Gamma: convexity risk.
   - Theta: time decay math.
   - Vega: volatility risk.
   - Rho: interest rates.
     👉 Work through real examples: “If SPY moves \$1, what happens to this call option?”

2. **Options Pricing Models**

   - Black-Scholes formula intuition (not the math-heavy part).
   - Implied volatility vs historical volatility.
   - Volatility smile/skew and why it exists.

3. **More Complex Strategies**

   - Straddles, strangles, butterflies, condors.
   - Rolling options and early exercise logic.
   - “IV crush” around earnings.

4. **Product/Regulation Awareness**

   - FINRA/SEC suitability requirements for options levels (1–4).
   - Risk disclosures your app must surface.
   - Margin vs cash accounts → how brokers protect against naked call blowups.

---

## 🔹 Days 61–90: Advanced + Product Builder’s Mindset

**Goal:** Connect finance knowledge to product design + risk management.

1. **Risk & Portfolio Management**

   - Margin requirements per strategy.
   - Portfolio Greeks (aggregate exposure).
   - Why brokers restrict certain trades for retail (e.g., naked short calls).

2. **Market Microstructure**

   - Order types (market, limit, stop, complex multi-leg).
   - How multi-leg orders route through exchanges.
   - Liquidity and slippage in real-world fills.

3. **Product & UX**

   - Study apps like **Tastytrade, Robinhood, Webull, Interactive Brokers, Thinkorswim**.
   - Note differences in how they display Greeks, payoff charts, IV, risk warnings.
   - Think about onboarding flows for new option traders → how do you simplify without misleading?

4. **Stretch Topics**

   - How volatility products (VIX options, VXX, UVXY) work.
   - Options on ETFs vs single stocks.
   - Options tax treatment (Section 1256 for index options).

---

## 🔹 Ongoing Habits

- **Follow daily markets:** WSJ Markets, Bloomberg, Option Alpha, Tastytrade YouTube.
- **Practice:** Paper trade strategies (most brokers have a “simulator” mode).
- **Community:** Hang around r/options on Reddit or FinTwit (lots of noise, but you’ll learn the lingo).
- **Documentation:** Keep a “playbook” of payoff diagrams + notes on how each strategy works.

---

✅ By 90 days, you’ll be able to:

- Talk comfortably with traders, devs, and compliance teams.
- Understand why your app requires certain checks (margin, suitability).
- Contribute to product decisions with **financial + technical insight**.

---

Do you want me to **expand this into a week-by-week roadmap with resources** (books, videos, APIs to practice with), so you have a clear path to follow?
