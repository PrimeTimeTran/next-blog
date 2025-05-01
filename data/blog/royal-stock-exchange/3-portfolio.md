---
draft: false
date: '2020-06-11'
title: 'Project: Royal Stock Exchange(RSE) - First "Demo-able" Work - Part 3'
summary: 'Basic functionality of a stock exchange including Carousel Ticker, Line & Candlestick Charts, Portfolio page/screen & more.'
tags: ['projects', 'flutter', '.NET', 'sql']
bibliography: references-data.bib
canonicalUrl:
---

# Introduction

I've found a passion for learning about finance/trading recently.

Trying to kill two birds with one stone whilst studying the industry/field/skill, I decided to build an app.

By doing so I hope to absorb the knowledge of more deeply than I would have otherwise.

A 10,000-foot overview of technologies chosen:

- Flutter
- .NET 7
- SQL Server
- Azure

The order I've done things(more or less):

- Write scripts for seeding the DB so I can quickly drop and populate with new schemas and structures. I've found this to be profoundly helpful long term because it forces me to contemplate the relationships between my resources deeply.
  https://shorturl.at/jGIK6

- Define a service on the backend with appropriate routes, controllers, services, repositories, models, and database as a smoke test and future reference. I've found this helps because it's a way to make sure our "basic" architecture "works".
  https://rb.gy/a467p

- Piece together a low-fidelity navigation and flow of the UI with core functionalities of the app because diving deep into nice to haves like internalization, theming, responsive layouts, analytics, etc.
  I think it's most important we understand how data will flow through our apps for the lifetime of an app as opposed to one-off things like configuring light and dark modes.
  https://rb.gy/a467p

- Creating a service flow where the app fails "gracefully". If a request fails, grab data from the cache; but before that write to it so we have it! What if the cache had nothing and the request fails? Could we fetch it from disk? Absolutely yes! It helps us not only prevent blank screens but also improve performance tremendously(load from disk before requests return valid data). Check any big apps by turning off your wifi and opening them and you'll see FB, Instagram, Robinhood, and Tiktok, they all save data to the user's devices to improve the aforementioned cases.
  https://shorturl.at/diEG9

- And most recently, I've been forcing myself to write documentation on not only my local machine but on a blog as an exercise in developing my writing skills. I hope to one day be/feel qualified to write a book on software development so I figured a blog is a great way to start. If you'd like to read more about things such as seeding a DB and more then have a look.
  https://lnkd.in/e_fB2nP6

Thanks for your time reading and stay safe~!

#net, #sql, #flutter, #azure, #git, #csharp, #dart, #entityframework , #reactnative, #programmer, #programming, #coder, #dev, #developer, #learning, #softwaredevelopment, #softwareengineering, #softwareengineer, #engineer, #finance, #tradingstrategies, #crypto, #btc, #stocks, #stockmarket, #options, #optionstrading, #optionstrader, #database, #data
