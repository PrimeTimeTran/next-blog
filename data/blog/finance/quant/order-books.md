---
draft: false
date: '2016-01-01'
title: 'Order Books Explained: How Markets Match Buyers and Sellers'
summary: 'Discover how order books work in financial markets, how they match buyers and sellers, and why understanding price levels, book depth, and the bid-ask spread is essential for traders and investors.'
tags: ['finance', 'order book', 'market structure']
---

# Introduction

An order book is the list of orders (manual or electronic) that a trading venue (in particular stock exchanges) uses to record the interest of buyers and sellers in a particular financial instrument. A matching engine uses the book to determine which orders can be fully or partially executed.

<BTCOrderBook />

## Price Levels

When several orders contain the same price, they are referred to as being on a price level. Practically, this means that if a bid comes at that price level, all the sell orders on that price level could potentially fulfill that.

## Crossed Book

When the order book is part of a matching engine, orders are matched as the interest of buyers and sellers can be satisfied. When there are orders where the bid price is equal or higher than the lowest ask, those orders can be immediately fulfilled and will not be part of the open orders book. If this situation remains, due to an error or a condition of the market, the order book is said to be crossed.

## Top of the Book

The highest bid and the lowest ask are referred to as the top of the book. They are interesting because they signal the prevalent market and the bid and ask price that would be needed to get an order fulfilled. The difference between the highest bid and the lowest ask is called the bid–ask spread.

## Book Depth

The book depth refers simply to the number of price levels available at a particular time in the book. Sometimes the book is represented to a fixed depth, and orders beyond that depth are ignored or rejected, and in other cases the book can contain unlimited levels.

## Multi Specialist Book

In most practical applications, an order book contains bid and offer for one security, contract or good, with a specialist matching orders for the specific item.

# Conclusion
