---
draft: true
date: '2025-08-10'
title: 'How do I alter table columns?'
summary: 'Step-by-step guide to cloning tables or data from one remote PostgreSQL database to another using pg_dump and psql.'
tags: ['postgres', 'sql', 'databases', 'devops', 'cloud', 'question', 'guide']
---

- Remove a column

```sql
ALTER TABLE cerberus.chart_premiums_paid
DROP COLUMN open_frac CASCADE;
```

- Change a columns data type

```sql
ALTER TABLE cerberus.chart_premiums_paid
ALTER COLUMN delta TYPE NUMERIC(12,6),
ALTER COLUMN vega  TYPE NUMERIC(12,6);
```

✅ In your case (delta, vega):

These are usually reported to 4–6 decimal places in trading systems.

Since small differences matter (especially for hedging), you should almost always go with fixed decimal (NUMERIC(12,6) or higher).
