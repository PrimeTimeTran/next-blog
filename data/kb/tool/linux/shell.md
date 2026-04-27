## 🧪 Atom Note: Shell Functions + `$@`, `$1`, `$`, `local`

---

# 🧠 Core idea: what a function is in shell

A shell function is just a **named block of commands**:

```shell id="f1"
print() {
  echo "hello"
}
```

Call it like:

```shell id="c1"
print
```

---

# 📌 Function arguments model

When you call:

```shell id="c2"
search hello world
```

shell assigns:

| Symbol | Meaning         | Value here                |
| ------ | --------------- | ------------------------- |
| `$0`   | script name     | `search` (or script file) |
| `$1`   | first argument  | `hello`                   |
| `$2`   | second argument | `world`                   |
| `$@`   | all arguments   | `hello world`             |
| `$#`   | number of args  | `2`                       |

---

# 🔥 `$1` vs `$@` (core confusion point)

## `$1`

> first argument only

```shell id="a1"
echo $1
```

Call:

```shell id="r1"
search hello world
```

Output:

```text id="o1"
hello
```

---

## `$@`

> all arguments (as separate items)

```shell id="a2"
echo $@
```

Output:

```text id="o2"
hello world
```

BUT important:

- `$@` preserves argument boundaries
- `"foo bar"` stays one argument if quoted properly

---

# ⚠️ Why quoting matters

## ❌ unsafe

```shell id="bad"
grep $@
```

Breaks on spaces.

## ✅ correct

```shell id="good"
grep "$@"
```

Now it behaves safely.

---

# 🧠 `$` itself (what it means)

The `$` symbol means:

> “expand a variable or special shell value”

Examples:

| Expression | Meaning                |
| ---------- | ---------------------- |
| `$1`       | argument 1             |
| `$@`       | all arguments          |
| `$PATH`    | environment variable   |
| `$?`       | last command exit code |
| `$(...)`   | command substitution   |

---

# 🧩 `local` keyword

```shell id="l1"
local query="$1"
```

## Meaning:

> create a variable that exists only inside the function

---

### Why it matters

Without `local`:

```shell id="g1"
query="hello"
```

→ leaks into global shell state

With `local`:

```shell id="g2"
local query="hello"
```

→ safe, scoped to function

---

# 📌 Your example pattern explained

## Pattern 1

```shell id="p1"
fn() {
  "$@"
}
```

### Meaning:

> “run whatever commands were passed in”

⚠️ Rare and usually unsafe unless carefully controlled.

---

## Pattern 2 (your real use case)

```shell id="p2"
fn() {
  local query="$1"
  local path="${2:-.}"
}
```

### Breakdown:

| Expression | Meaning                        |
| ---------- | ------------------------------ |
| `$1`       | first argument                 |
| `${2:-.}`  | second argument OR default `.` |

---

# 🧠 `${2:-.}` explained

> “use `$2`, but if it doesn’t exist, use `.`”

Example:

```shell id="d1"
search hello
```

→ path becomes `.`

```shell id="d2"
search hello /tmp
```

→ path becomes `/tmp`

--

# 🚀 Mental model summary

| Concept   | Meaning                     |
| --------- | --------------------------- |
| `$1`      | first input                 |
| `$@`      | all inputs                  |
| `$#`      | number of inputs            |
| `$`       | variable expansion operator |
| `local`   | function-only variable      |
| `${x:-y}` | default value               |

---

# 🧭 One-line intuition

> `$1` = single input
> `$@` = all inputs
> `$` = “expand this value”

---

If you want, I can turn this into a **CLI Zettelkasten card system** where each symbol (`$1`, `$@`, `"$@"`, `${:-}`) becomes a reusable mental node linked to real commands like `grep`, `ssh`, `find`, and `sed`.
