---
tags:
---

![[SQL Cheatsheet.jpeg | 700]]

## Queries

- `SELECT`
- `WHERE`
  - Filter results.
- `GROUP BY`
  - Create summary rows
- ## `ORDER BY`
- `HAVING`
  - Filter after grouping
- Aggregates
- Advanced Functions
  - `IF`
  - `IFNULL`
  - `ISNULL`
  - `CASE WHEN THEN END`

### [[Select]]

- Return all with `*`.
- Specify fields to return by naming.
- Alias fields with `AS`.
- Remove duplicates with `DISTINCT`.
- Create fields with `AS` and aggregates.
- Limit with `TOP`.

### [[From]]

- Identify which table we want to pull data from
- Can alias from
- Can select from multiple tables

### [[Join]]

- Grab fields from any table.
- Combine records of multiple tables.
- Can join & join again:
  - First join then left join

#### [[On]]

- Specify field to match records of differing tables with.
- If not used then SQL will map all records from right table to each record in left table.
- Can also use aggregates here
  - `AND`:
    - Helpful when a primary key is missing.

#### [[Inner]]

- Default type
  - Returns records if there's a match in both tables.

#### [[Left Join]]

- Keep all records of left/first table regardless of missing companion record in right/second table.

#### [[Right Join]]

- Keep all records of right/second table regardless of missing companion record in left/first table.

#### [[Outer Join]]

-

### [[Where]]

- Filter select results.
- Use `IS` when searching for null specifically
- Length can be used to check length of string
- Comparison Operators
  - =
  - `>`
  - `<`
  - `>=`
  - `<=`
  - `<>`
- Logical Operators
  - `AND`
  - `OR`
  - `NOT`
  - `BETWEEN`
  - `EXISTS`
  - `LIKE`
  - `ILIKE`
  - `IN`
- "Before" aggregation:
  - Similar to `having` but acts before.

### [[Group By]]

- Create summary rows.
- Return single values for each group of records.

### [[Having]]

- Filter/where clause of `group by`.

### [[Aggregates]]

- `COUNT`
  - Must be used with `group by`.
- `MIN`
- `MAX`
- `AVG`
- `SUM`

### [[Update]]

- `UPDATE` & `SET` to update records.

### [[Delete]]

- `DELETE` `FROM` _table_name_ `WHERE` _condition_.

### [[With]]

    - Common Table Expression(C.T.E.)
    - Allows you to create a select statement that returns a temp result

### [[Window functions]]

- Perform a calculation across a set of table rows that are somehow related.
- Similar to aggregate but doesn't combine results.
- Maintains seperate identify for result.
- Examples:
  - `OVER`:
    - Defines how to partition the results for this row
  - [[LAG]]:
    - How many rows behind to grab
  - `LEAD`:
    - How many rows ahead to grab

### Advanced Functions

- Case, when, then, else, end
  - Instead of `is` must use "=".

### Subqueries

- Nest queries within each other.

### [[Union]]

- Combine two `SELECT` into one result
- Removes duplicates

### [[Union All]]

- Combine & keep results of both queries(leave duplicates)
