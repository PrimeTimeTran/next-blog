---
draft: false
date: '2023-05-20'
title: 'Royal Stock Exchange(RSE) - Building a Full Stack Stock Exchange - Part 1'
summary: 'Personal & Professional growth via building a stock exchange with .NET, Entity Framework, Flutter, Azure & more.'
tags: ['flutter', '.NET', 'sql', 'entity framework']
bibliography: references-data.bib
canonicalUrl:
---

# Introduction

I decided to build a stock exchange. I plan to master along the following:

- [.NET](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [Flutter](https://flutter.dev/)
- [Azure](https://azure.microsoft.com/en-us)
- [Rider](https://www.jetbrains.com/rider/)
- [SQL Server](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash)
- [Entity Framework](https://learn.microsoft.com/en-us/aspnet/entity-framework)
- [Azure Data Studio](https://azure.microsoft.com/en-us/products/data-studio)

Most importantly I want to learn about the finance industry. I use to think I'd
make a million dollars by building an app, don't split energy learning about finance
while develop myself as an engineer.

My thinking has evolved. I've come to see that finance is it's own industry
that has a countless use cases for IT.

Not to mention the number of fintech companies that exist. NYSE, Fidelity, Coinbase,
Robinhood, WeBull, Interactive Brokers, E-Trade, Charles Schwab, the list goes on...

### Royal Stock Exchange(RSE) - Part 1

- [Github Server Repo](https://github.com/primetimetran/net-royalstockexchange)

### Initial thoughts

- .NET projects/solutions are collections of smaller "projects".

  - If you're from Node.JS/Rails, this means each project has it's own package.json/Gemfile/dependencies.

  - Notice each project has it's own "Dependencies" directory. API/Common/DataAccess/Services/Tests.

  ![Project structure](https://i.imgur.com/b6vGlJl.png)

- We have to stop and restart the solution on each C# change. This is due to it
  being compiled.

- Defining of Tables/Models/Entities is verbose.

  ```csharp
  namespace DataAccess.Entities;
  public class Stock
  {
      public Stock(string name)
      {
          Name = name;
      }

      public int Id { get; set; }
      public string Name { get; set; }
      public decimal Price { get; set; }
      public int Quantity { get; set; }
  }
  ```

- I'm going to use a few patterns in this project.

  - [MVC](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/getting-started-with-mvc/getting-started-with-mvc-part1)
  - [Service](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/validating-with-a-service-layer-cs)
  - [Repository](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design)
