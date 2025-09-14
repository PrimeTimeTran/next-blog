---
draft: false
date: '2025-08-15'
title: 'How Do I Clone a Remote PostgreSQL Database to Another Remote Database?'
summary: 'Step-by-step guide to cloning tables or data from one remote PostgreSQL database to another using pg_dump and psql.'
tags: ['postgres', 'sql', 'database', 'devops', 'cloud']
---

# Introduction

Cloning a remote PostgreSQL database (or selected tables) to another remote database is a common task for migrations, backups, or syncing environments. This guide walks you through the process using `pg_dump` and `psql`, with practical examples for copying specific tables and restoring them to a target database.

# Steps

## Step 1: Dump Data from the Source Database

Use `pg_dump` to export the desired tables from your source (dev/staging) database. Replace `[DB-PASSWORD]`, `[IP-ORIGINAL]`, and table names as needed.

```sh
PGPASSWORD=[DB-PASSWORD] pg_dump -h [IP-ORIGINAL] -U postgres \
  -t cerberus.chart_premiums_paid \
  -t cerberus.chart_premiums_paid_aggregate \
  -t cerberus.chart_iv_term \
  -t cerberus.chart_iv_heatmap \
  -t cerberus.historical_combined_metrics \
  -t cerberus.historical_volume_pcr_metrics \
  -t cerberus.historical_oi_pcr_metrics \
  -t cerberus.chart_iv_smile \
  --data-only --no-owner --no-privileges \
  -f /tmp/db_dump.sql
```

## Step 2: Truncate Target Tables in the Destination Database

Before restoring, clear out the target tables to avoid duplicate data. This example uses `psql` to connect to the destination (production) database and truncate the tables.

```sql
PGPASSWORD=[DB-PASSWORD] psql -h [IP-CLONE] -U postgres -d postgres <<EOF
TRUNCATE TABLE cerberus.chart_premiums_paid,
               cerberus.chart_premiums_paid_aggregate,
               cerberus.chart_iv_term,
               cerberus.chart_iv_heatmap,
               cerberus.historical_combined_metrics,
               cerberus.historical_volume_pcr_metrics,
               cerberus.historical_oi_pcr_metrics,
               cerberus.chart_iv_smile
RESTART IDENTITY CASCADE;
EOF
```

## Step 3: Restore Data to the Target Database

Finally, use `psql` to restore the dumped data to the destination database.

```sh
PGPASSWORD=[DB-PASSWORD] psql -h [IP-CLONE] -U postgres -d postgres -f /tmp/db_dump.sql
```

# Tips

- Always verify table names and connection details before running destructive commands.
- Use `--data-only` to copy just the data, not the schema.
- For full database clones, omit the `-t` flags and dump the entire database.
- Consider using transaction blocks for safety in production environments.

# Conclusion

With these steps, you can efficiently clone tables or data from one remote PostgreSQL database to another, supporting migrations, environment syncs, and disaster recovery workflows.
