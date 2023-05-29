---
title: 'SQL Server setup using Azure SQL Edge Docker image'
date: '2023-05-26'
tags: ['SQL Server']
draft: false
summary: 'How to setup SQL Server using Azure SQL Edge docker image and check its working correctly. Snippets of TSQL'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Intro

SQL Server setup guide.

> SQL Server is TSQL. [Learn the differences of SQL and TSQL](https://www.dataquest.io/blog/sql-vs-t-sql/).

## Tools

- Docker
- [Azure SQL Edge(SQL Server)](https://hub.docker.com/_/microsoft-azure-sql-edge)

Shout out this [blog post](https://www.mssqltips.com/sqlservertip/7432/sql-cheat-sheet-sql-server-tsql-commands/).

## Instructions

- Run SQL Sever container using Docker image.

```ssh
docker run -d --name mssql-server --platform linux/arm64/v8 -e ACCEPT_EULA=Y -e SA_PASSWORD=reallyStrongPwd123 -p 1433:1433 mcr.microsoft.com/azure-sql-edge
```

- SSH into db.

```sh
sqlcmd -U sa -P reallyStrongPwd123 -S 127.0.0.1,1433 -C
```

- Create database. In TSQL world we have run run `GO` [after each query](https://stackoverflow.com/questions/2299249/what-is-the-use-of-go-in-sql-server-management-studio-transact-sql).

```sql
create database RSE;
GO
```

- Switch to database context, RSE, the database we just created.

```sql
use RSE;
GO
```

- View tables.

```sql
SELECT name FROM sys.tables;
GO
```

- Create database table `Employees`.

```sql
CREATE TABLE [dbo].[Employees](
[EmpNum] [int] PRIMARY KEY,
[FirstName] [nvarchar](30) NOT NULL,
[LastName] [nvarchar](30) NOT NULL,
[MiddleInitial] [nchar](1) NULL,
[Job] [int] NOT NULL
);
GO
```

- Seed employee data.

```sql
INSERT [dbo].[Employees]([EmpNum], [FirstName], [LastName], [MiddleInitial], [Job])
VALUES(1001, 'Robert', 'Smith', '', 1);
INSERT [dbo].[Employees]([EmpNum], [FirstName], [LastName], [MiddleInitial], [Job])
VALUES(1002, 'Sue', 'Jones', '', 5);
INSERT [dbo].[Employees]([EmpNum], [FirstName], [LastName], [MiddleInitial], [Job])
VALUES(1003, 'Alan', 'Doe', 'A', 3);
INSERT [dbo].[Employees]([EmpNum], [FirstName], [LastName], [MiddleInitial], [Job])
VALUES(1004, 'Tim', 'Kelly', '', 2);
INSERT [dbo].[Employees]([EmpNum], [FirstName], [LastName], [MiddleInitial], [Job])
VALUES(1005, 'Louis', 'Sullivan', '', 2);
GO
```

- View all employee rows.

```sql
SELECT * From Employees;
GO
```

- Voila!

![previews](https://d1ro8r1rbfn3jf.cloudfront.net/ms_580754/Ecm3OtY0Kxml0eCK6GZFFJdwLfl9hL/Monosnap%2BStatusIndicator%2B2023-05-29%2B18-39-07.png?Expires=1685401200&Signature=zQPiPV6W2S7dbuHDbd8d1h25PONvCZVWIWSdUlCask40RmctDDKJylT0vpCqrLUADpSP90XjeBLqk-hpQbFROqq0kRZ8Z0DlG1BBysv5VAfXA2gIVdOs3ncXh9bXnXlVG5zxOvtwOzivYIWrEdXouU3hHgHX-bE9rdpLQ1jtZlMvgq~6qu~YoG7ke13RfRCijtbavPn-YtQnlWzf1CxCR5mgqejjOBOPnBMbpiF~T5rwXVzmYSYbTuZ2EkdkE1XEYXAx73-~ZG9kGBVqFFK8IWJ-AWCQHerUuxnKWWRDUn4tFzPslfJV~n~CFH0T7Lumv1kIHDtm7pFYNfozn-C0XA__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)
