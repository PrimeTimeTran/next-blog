---
title: 'Royal Stock Exchange(RSE) - Part 1'
date: '2023-05-20'
tags: ['.NET', 'Always be learning']
draft: false
summary: 'Personal & Professional growth via building a stock exchange in .NET, Flutter, & more'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Royal Stock Exchange(RSE) - A project for career & personal growth

Decided to build a stock exchange.

I plan to master along the following:

- .NET
- Azure
- Flutter
- Finance/trading

Documenting the journey.

### Royal Stock Exchange(RSE) - Part 1

- [Repo](https://github.com/primetimetran/net-royalstockexchange)

### Tools

- [Azure](https://azure.microsoft.com/en-us)
- [Rider](https://www.jetbrains.com/rider/)
- [Flutter](https://flutter.dev/)
- [SQL Server](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash)
- [Entity Framework](https://learn.microsoft.com/en-us/aspnet/entity-framework)
- [Azure Data Studio](https://azure.microsoft.com/en-us/products/data-studio)
- [.NET 7 Core - Web API](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

### Initial Observations

- C# is verbose compared to Ruby, JS, Python. Must define everything in classes.

  ![Classes](https://i.imgur.com/0W4x6gq.png)

- Visual Studio/Rider can scaffold things like models & controllers quick and
  easy like Rails.

  ![Preview](https://i.imgur.com/y9zmnWw.png)

- API Documentation is generated using OpenAPI & Swagger. Cool.

  ![Preview](https://i.imgur.com/CSuaHCs.png)

- This is going to be a challenging project, implementing all the logic required
  for an exchange. Reconciling order books for example.

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

Overview:

- The method iterates over each buy order in the buyOrders list.
- For each buy order, it iterates over each sell order in the sellOrders list.
- It checks if the buy order and sell order match based on the stock symbol, the
  buy order price is greater than or equal to the sell order price, and both the buy
  and sell orders have a quantity greater than zero. This ensures that a trade can
  be executed between these orders.
- If the conditions are met, it determines the trade quantity as the minimum of
  the buy order quantity and the sell order quantity. This ensures that trades are
  executed based on the available quantity from both sides.
- It calculates the trade price as the average of the buy order price and the sell
  order price. This ensures a fair trade price between the buyer and the seller.
- It creates Stock objects to represent the stocks bought and sold in the trade,
  with the trade price and trade quantity.
- It adds the bought stock to the buyer's portfolio (buyOrder.Trader.Portfolio)
  and the sold stock to the seller's portfolio (sellOrder.Trader.Portfolio).
- It updates the buyer's balance by deducting the trade price multiplied by the
  trade quantity (buyOrder.Trader.Balance -= tradePrice \* tradeQuantity).
- It updates the seller's balance by adding the trade price multiplied by the trade
  quantity (sellOrder.Trader.Balance += tradePrice \* tradeQuantity).
- It reduces the trade quantity from both the buy order and sell order
  (buyOrder.Quantity -= tradeQuantity and sellOrder.Quantity -= tradeQuantity).
- After executing all trades, it removes the buy orders and sell orders from the
  order book where the quantity has become zero (buyOrders.RemoveAll(o => o.Quantity == 0)
  and sellOrders.RemoveAll(o => o.Quantity == 0)).
