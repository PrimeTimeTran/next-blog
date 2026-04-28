# Tools

- [PostgresApp](https://postgresapp.com/)
- [PGAdmin](https://www.pgadmin.org/download/)
- [CLI]
  - [pg]
  - [pqsql]

Install
cd /usr/local/bin

Configure data path
initdb -D ~/pg

Start PG
pg_ctl -D /Users/future/pg -l logfile start

Create DB
createdb mydatabase

View DBs
psql -l

Connect to your DB
psql -d mydatabase

You should enter PG REPL

## REPL

View available databases
\l

Display all tables
\dts

View available commands
\?

Exit PG
\q

# Querying

```sql
select * from public."VisaSelectorPrefModels" WHERE "email" = 'loi@gmail.comtilal';
```

### PSQL

- Connect using postgres username and password
  psql -U postgres -d postgres

- Create db with name 1loi_dev
  createdb -U postgres 1loi_dev

### PG
