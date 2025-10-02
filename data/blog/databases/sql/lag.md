---
draft: false
date: '2025-10-02'
title: 'Lag Function: Access data in a previous row in the same result set without having to join the table to itself.'
summary: 'How to use the SQL LAG window function to compare current and previous row values, with practical query and table output.'
tags: ['databases', 'window functions', 'sql', 'postgres']
---

# Introduction

A window function that allows us to retrieve the value of a column from a previous row in the result set.

Sometimes we may want to calculate values on a rowing basis. In my experience those times we'll want to compare the previous days values
with the current days values.

In order to do that SQL provides the `LAG` keyword.

Starting:

```sql
SELECT
    ticker,
    trade_date AS current_date
FROM
    cerberus.chart_premiums_paid_aggregate
WHERE
    ticker = 'NKE'
LIMIT 3
```

Results:

| ticker | current_date |
| ------ | ------------ |
| NKE    | 2025-06-30   |
| NKE    | 2025-07-01   |
| NKE    | 2025-07-02   |
| NKE    | 2025-07-03   |

So I have rows that have tickers and dates. To access a previous rows values I'll add a `LAG` to the `SELECT` part of my query.

```sql
SELECT
    ticker,
    trade_date AS current_date,
    LAG(trade_date) OVER (
        ORDER BY trade_date
    ) AS prev_date
FROM
    cerberus.chart_premiums_paid_aggregate
WHERE
    ticker = 'NKE'
LIMIT 3
```

| ticker | current_date | prev_date  |
| ------ | ------------ | ---------- |
| NKE    | 2025-06-30   |            |
| NKE    | 2025-07-01   | 2025-06-30 |
| NKE    | 2025-07-02   | 2025-07-01 |

# Conclusion

Although this example may not seem useful this technique can become powerful when we use it for values which take heavy processing power or time which we want to optimize.
