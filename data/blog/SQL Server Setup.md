---
title: 'SQL Server setup using Azure SQL Edge Docker image'
date: '2023-05-26'
tags: ['SQL Server']
draft: false
summary: 'How to setup SQL Server using Azure SQL Edge docker image and check its working correctly. Also info on SQL vs TSQL'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Intro

Because SQL Server is the preferred DB in the .NET world here's
a quick walk through of how to set it up and ensure it's working
properly.

Use [Docker SQL Server](https://github.com/microsoft/mssql-docker/issues/668)

An important thing to keep in mind is that SQL Server is a TSQL db.
[Learn the differences of TSQL vs SQL](https://www.dataquest.io/blog/sql-vs-t-sql/).

For now, understand after each SQL query we need to run `GO` on the next line for
the query to run.

Shout out this [blog post](https://www.mssqltips.com/sqlservertip/7432/sql-cheat-sheet-sql-server-tsql-commands/).

## Instructions

- Run container

```sh
docker run -d --name mssql-server --platform linux/arm64/v8 -e ACCEPT_EULA=Y -e SA_PASSWORD=reallyStrongPwd123 -p 1433:1433 mcr.microsoft.com/azure-sql-edge
```

- SSH into db

```sh
sqlcmd -U sa -P reallyStrongPwd123 -S 127.0.0.1,1433 -C
```

- Create database

create database RSE;
GO

- Switch to database context

use RSE;
GO

- View tables

SELECT name FROM sys.tables;
GO

- Create database table

CREATE TABLE [dbo].[Employees](
[EmpNum] [int] PRIMARY KEY,
[FirstName] [nvarchar](30) NOT NULL,
[LastName] [nvarchar](30) NOT NULL,
[MiddleInitial] [nchar](1) NULL,
[Job] [int] NOT NULL
);
GO

- Seed table with data

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

- View tables again to confirm table has data

SELECT name FROM sys.tables;
GO
