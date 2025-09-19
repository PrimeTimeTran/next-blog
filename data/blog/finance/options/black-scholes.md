---
draft: false
date: '2024-09-07'
title: 'Quant Finance: Understanding the Black-Scholes Formula for Option Pricing'
summary: 'A practical guide to the Black-Scholes formula, its significance in finance, and how to calculate option prices using Python.'
tags: ['finance', 'options', 'quant', 'black-scholes', 'python']
---

# Introduction

The Black-Scholes formula is a cornerstone of modern financial theory, providing a mathematical model for pricing European-style options. Developed by Fischer Black, Myron Scholes, and Robert Merton in the early 1970s, this formula revolutionized the way traders and analysts evaluate risk and value in the options market. In this post, we'll explore the intuition behind the Black-Scholes model, its key variables, and how you can use Python to calculate option prices.

```py
# ./blacks-scholes.py
import math
import argparse

def black_scholes(S, K, T, r, sigma, option_type='call'):
    d1 = (math.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    N = lambda x: 0.5 * (1 + math.erf(x / math.sqrt(2)))
    if option_type == 'call':
        price = S * N(d1) - K * math.exp(-r * T) * N(d2)
    else:
        price = K * math.exp(-r * T) * N(-d2) - S * N(-d1)
    return price

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Black-Scholes Option Price Calculator')
    parser.add_argument('--S', type=float, required=True, help='Current stock price')
    parser.add_argument('--K', type=float, required=True, help='Strike price')
    parser.add_argument('--T', type=float, required=True, help='Time to expiration (in years)')
    parser.add_argument('--r', type=float, required=True, help='Risk-free interest rate (annual, decimal)')
    parser.add_argument('--sigma', type=float, required=True, help='Volatility (annual, decimal)')
    parser.add_argument('--type', choices=['call', 'put'], default='call', help='Option type')
    args = parser.parse_args()

    price = black_scholes(args.S, args.K, args.T, args.r, args.sigma, args.type)
    print(f"{args.type.capitalize()} option price: {price:.4f}")
```

## How to Run the Python Script

You can calculate the price of a call or put option using the provided Python script. For example:

```sh
python blacks-scholes.py --S 100 --K 100 --T 1 --r 0.05 --sigma 0.2 --type call
```

This command will output the price of a call option with the specified parameters.

# Conclusion

The Black-Scholes formula remains a fundamental tool for anyone involved in options trading or financial engineering. By understanding its components and how to implement it in Python, you can gain deeper insights into option pricing and risk management. Whether you're a student, analyst, or trader, mastering this formula will enhance your ability to make informed decisions in the financial markets.
