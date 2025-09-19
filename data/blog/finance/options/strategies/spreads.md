---
draft: false
date: '2024-09-06'
title: 'Finance: Spreads'
summary: 'A comprehensive guide to option spread strategies, including vertical, credit, and debit spreads. Learn how spreads manage risk, reduce cost, and enhance returns.'
tags: ['finance', 'options', 'investment strategies', 'risk management', 'spreads']
---

# Introduction

Spreads are a moderately risky option strategy with intermediate difficulty. They involve opening multiple legs with differing strike prices for both bid/ask sides.

The outlook you have, bull vs bear, will determine the lower/higher strike price relative to the underlying price at opening.

# Spreads Table

| Name               | Sentiment       | Reward / Purpose                               | Flow                                                                         | Moneyness | Loss Drivers                                                                                                                           | Description                                                                                                                                       |
| ------------------ | --------------- | ---------------------------------------------- | ---------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vertical Spread    | Neutral/Bullish | Limited risk/reward (bull/bear vertical)       | Buy to open & Sell to open (same expiry)                                     | ITM/OTM   | Both legs move against the expected direction or insufficient move to cover spread debit (loss = net premium paid or max spread loss). | Benefit: reduces cost vs a single option and defines risk. Tradeoffs: caps upside or downside vs naked option; requires correct directional bias. |
| Call Debit Spread  | Bullish         | Lowered cost vs long call, limited upside      | Buy to open lower-strike call; Sell to open higher-strike call               | OTM       | Underlying fails to rally enough before expiry (net premium lost) or spread widens unfavorably.                                        | Benefit: lower net premium and limited loss. Tradeoffs: capped upside; needs a moderate directional move to profit.                               |
| Call Credit Spread | Bearish/Neutral | Premium income, defined risk                   | Sell to open lower-strike call; Buy to open higher-strike call (same expiry) | OTM       | Underlying rallies strongly past short strike causing the spread to widen toward max loss (defined by strike difference minus credit). | Benefit: collect premium with defined max loss. Tradeoffs: profit limited to premium; losing scenario if underlying rallies above strikes.        |
| Put Debit Spread   | Bearish         | Limited downside protection, lower cost        | Buy to open a higher-strike put; Sell to open lower-strike put               | OTM       | Underlying does not fall sufficiently before expiry (lose net premium); IV collapse reduces value.                                     | Benefit: cheaper hedge than a single put with defined risk. Tradeoffs: reduced payoff vs a long put; needs a sufficient downside move.            |
| Put Credit Spread  | Bullish/Neutral | Premium income, defined risk (bull put spread) | Sell to open a higher-strike put; Buy to open lower-strike put               | OTM       | Underlying falls below short strike and spread approaches max loss (difference between strikes minus credit received).                 | Benefit: collect premium with capped downside. Tradeoffs: limited profit and obligation to buy if assigned; requires bullish-to-neutral view.     |

# Moneyness

Assuming strikes are DESC order when viewing the option chain you should place your spreads in the following quadrants.

| Calls              | Puts              |
| ------------------ | ----------------- |
| Call Debit Spread  | Put Credit Spread |
| Call Credit Spread | Put Debit Spread  |

# Alternative Names

Depending on your broker the strategies might have different names.

| Cash Flow | Spread Type | Alternative Name  | Structure (Basic)                              |
| --------- | ----------- | ----------------- | ---------------------------------------------- |
| Debit     | Bull Call   | Long Call Spread  | Buy lower strike call, Sell higher strike call |
| Credit    | Bear Call   | Short Call Spread | Sell lower strike call, Buy higher strike call |
| Credit    | Bull Put    | Short Put Spread  | Sell higher strike put, Buy lower strike put   |
| Debit     | Bear Put    | Long Put Spread   | Buy higher strike put, Sell lower strike put   |

# Conclusion

Vertical spreads are a versatile and risk-defined way to trade options, allowing investors to express bullish or bearish views while controlling both potential profit and loss. By combining long and short positions at different strikes, traders can reduce costs, limit risk, and tailor strategies to market outlook and volatility. Whether you’re seeking income, hedging, or directional exposure, mastering vertical spreads can add precision and flexibility to your options toolkit. As always, understanding the mechanics and risks is key—start with small positions and build confidence as you learn.
