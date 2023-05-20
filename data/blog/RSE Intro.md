---
title: 'Royal Stock Exchange - A Stock Exchange in .NET'
date: '2023-05-20'
tags: ['.NET', 'Always be learning']
draft: false
summary: 'Personal & Professional growth via building a stock exchange in .NET'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Royal Stock Exchange - A .NET project for career development & personal growth

For years I had the belief that as a software developer, I should focus on being
the best developer I can be, and that'd be my ticket to financial success.

We can't do everything after all, we only have [so many fcuks to give.](https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713)

That being said, I've decided in order to achieve some of my financial goals,
I should learn finance/trading.

Specifically day trading.

At the very least, I'll have a better idea of what people in finance
are talking about when I'm with VCs and people in the industry.

In the middle of the road, I'll be a more compelling hire at a finance company
in the future.

And the best, I'll be able to make enough money trading to retire early/work for
myself.

To that end, I've decided to build a stock exchange, Royal Stock Exchange.

Some of the things I hope to learn more of are:

- .NET
- Flutter
- Finance/trading
- Rider

I'll be documenting my research and process along the way to hopefully cement my
learning of .NET as well as finance.

### Intro

Today I initialized a project using [Rider](https://www.jetbrains.com/rider/) as
a WebAPI ASP.NET 7 project.

The code is [here](https://github.com/primetimetran/net-royalstockexchange).

![Classes](https://i.imgur.com/0W4x6gq.png)

I also added logic for reconciling all buy and sell orders via
an OrderBook class with a function `ExecuteTrades()` [here](https://github.com/PrimeTimeTran/net-RoyalStockExchange/commit/564a4462af1b56513a8620ccb41ef970758bb79f#diff-51857f13a155d63e43a2af7b6d682d0f3caab40cacc14f9c1c62ff3d2123bb82R22-R66).

```csharp
public void ExecuteTrades()
{
    foreach (Order buyOrder in buyOrders)
    {
        foreach (Order sellOrder in sellOrders)
        {
            if (buyOrder.Ticker.Symbol == sellOrder.Ticker.Symbol && buyOrder.Price >= sellOrder.Price && buyOrder.Quantity > 0 && sellOrder.Quantity > 0)
            {
                int tradeQuantity = Math.Min(buyOrder.Quantity, sellOrder.Quantity);
                decimal tradePrice = (buyOrder.Price + sellOrder.Price) / 2;

                Stock boughtStock = new Stock
                {
                    Ticker = buyOrder.Ticker,
                    Price = tradePrice,
                    Quantity = tradeQuantity
                };

                Stock soldStock = new Stock
                {
                    Ticker = sellOrder.Ticker,
                    Price = tradePrice,
                    Quantity = tradeQuantity
                };

                buyOrder.Trader.Portfolio.Add(boughtStock);
                sellOrder.Trader.Portfolio.Add(soldStock);

                buyOrder.Trader.Balance -= tradePrice * tradeQuantity;
                sellOrder.Trader.Balance += tradePrice * tradeQuantity;

                buyOrder.Quantity -= tradeQuantity;
                sellOrder.Quantity -= tradeQuantity;

                if (buyOrder.Quantity == 0)
                {
                    break; // Exit the inner loop if the buy order is completely filled
                }
            }
        }
    }

    buyOrders.RemoveAll(o => o.Quantity == 0);
    sellOrders.RemoveAll(o => o.Quantity == 0);
}
```

Here's a step-by-step explanation of what happens in the method:

- The method iterates over each buy order in the buyOrders list.
- For each buy order, it iterates over each sell order in the sellOrders list.
- It checks if the buy order and sell order match based on the stock symbol, the buy order price is greater than or equal to the sell order price, and both the buy and sell orders have a quantity greater than zero. This ensures that a trade can be executed between these orders.
- If the conditions are met, it determines the trade quantity as the minimum of the buy order quantity and the sell order quantity. This ensures that trades are executed based on the available quantity from both sides.
- It calculates the trade price as the average of the buy order price and the sell order price. This ensures a fair trade price between the buyer and the seller.
- It creates Stock objects to represent the stocks bought and sold in the trade, with the trade price and trade quantity.
- It adds the bought stock to the buyer's portfolio (buyOrder.Trader.Portfolio) and the sold stock to the seller's portfolio (sellOrder.Trader.Portfolio).
- It updates the buyer's balance by deducting the trade price multiplied by the trade quantity (buyOrder.Trader.Balance -= tradePrice \* tradeQuantity).
- It updates the seller's balance by adding the trade price multiplied by the trade quantity (sellOrder.Trader.Balance += tradePrice \* tradeQuantity).
- It reduces the trade quantity from both the buy order and sell order (buyOrder.Quantity -= tradeQuantity and sellOrder.Quantity -= tradeQuantity).
- After executing all trades, it removes the buy orders and sell orders from the order book where the quantity has become zero (buyOrders.RemoveAll(o => o.Quantity == 0) and sellOrders.RemoveAll(o => o.Quantity == 0)).
