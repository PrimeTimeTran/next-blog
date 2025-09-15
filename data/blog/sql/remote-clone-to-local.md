---
draft: false
date: '2025-08-09'
title: 'How Do I Dump and Restore a Remote PostgreSQL Database to a Local Database?'
summary: 'Step-by-step guide to dumping a remote PostgreSQL database or schema and restoring it to a local database using pg_dump and pg_restore.'
tags: ['postgres', 'sql', 'database', 'devops', 'cloud', 'question', 'guide']
---

# Introduction

Working with databases often requires you to copy data from a remote environment to your local machine. Whether you're debugging, testing, or developing new features, having a local copy of your production or staging database can be invaluable. PostgreSQL makes this process straightforward with its built-in tools: `pg_dump` for exporting and `pg_restore` for importing. This guide walks you through the essential steps to dump a remote PostgreSQL database (or schema) and restore it locally.

```sh
pg_dump -h remote_host -U remote_user -p remote_port -d remote_db -F c -f remote_db.dump
```

# Understanding the Flags

Here are the key flags used in the `pg_dump` and `pg_restore` commands:

- `-h` : Specifies the host (IP address or hostname) of the PostgreSQL server.
- `-U` : The username to connect as.
- `-p` : The port number (default is 5432 for PostgreSQL).
- `-d` : The name of the database to connect to.
- `-F c` : Sets the output format to "custom". This format is recommended for use with `pg_restore`.
- `-f` : The file path to write the dump output to.
- `-n` : Dumps only the specified schema (e.g., `-n cerberus`).

For restoring:

- `pg_restore` uses similar flags to specify the host, user, database, and file to restore from.

Refer to the [PostgreSQL documentation](https://www.postgresql.org/docs/current/app-pgdump.html) for more details on available flags and options.

## Dump the Entire Remote Database

```sh
pg_dump -h [DB-IP-ADDRESS] -U postgres -p 5432 -d postgres -F c -f dev_db.dump
```

## Dump a Specific Schema from the Remote Database

```sh
pg_dump -h [DB-IP-ADDRESS] -U postgres -p 5432 -d postgres -F c -f dev_db.dump -n cerberus
```

## Create a Local Database

```sh
createdb -h localhost -U postgres cerberus_local
```

## Restore the Dumped File to Your Local Database

```sh
pg_restore -h localhost -U postgres -d cerberus_local -F c dev_db.dump
```

# Conclusion

Dumping and restoring a remote PostgreSQL database is a simple but powerful workflow for developers and DBAs. With just a few commands, you can replicate production or staging data locally, enabling safer development and troubleshooting. Always double-check your connection details and database names before running these commands to avoid accidental data loss. With these steps, you can confidently manage your PostgreSQL data across environments.
