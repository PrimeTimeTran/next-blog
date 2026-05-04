# 📋 Cheat Sheet — RG

| 👨🏻‍💻 Command            | 🆔 Name             | ℹ️ Desc                                |
| --------------------- | ------------------- | -------------------------------------- |
| `rg "term"`           | basic search        | search recursively for a string        |
| `rg -n "term"`        | line numbers        | show matches with line numbers         |
| `rg -i "term"`        | case-insensitive    | ignore uppercase/lowercase             |
| `rg -l "term"`        | file list           | show only files containing match       |
| `rg -L "term"`        | inverse file search | files WITHOUT the match                |
| `rg -c "term"`        | count matches       | number of matches per file             |
| `rg -w "term"`        | whole word          | match exact word only                  |
| `rg -C 2 "term"`      | context search      | show 2 lines before/after match        |
| `rg -A 2 "term"`      | after context       | show lines after match only            |
| `rg -B 2 "term"`      | before context      | show lines before match only           |
| `rg -g "*.js" "term"` | file filter         | search only specific file types        |
| `rg --hidden "term"`  | hidden files        | include dotfiles                       |
| `rg -F "term"`        | literal search      | treat input as plain string (no regex) |
| `rg -e "abc"`         | multiple patterns   | match any regex pattern                |
| `rg "term" lib/`      | directory search    | limit search to a folder               |

## 🔍 Search (basic text search)

Search for a string across all files recursively.

```sh
rg "buildPipeline"
```

---

## 📁 Search in specific file types

Limit search to certain extensions.

```sh
rg "log" -g "*.js"
```

---

## 🔤 Case-insensitive search

Ignore uppercase/lowercase differences.

```sh
rg -i "registry"
```

---

## 📍 Search in a specific directory

Only search inside a folder.

```sh
rg "terms" lib/
```

---

## 🚫 Exclude directories

Skip folders like `node_modules`.

```sh
rg "build" --glob '!node_modules/*'
```

---

## 📄 Show line numbers (usually default, but explicit is fine)

Useful for jumping directly to matches.

```sh
rg -n "backlinks"
```

---

## 🎯 Match whole word only

Avoid partial matches.

```sh
rg -w "log"
```

---

## 🔎 Show only filenames (no match lines)

Good for quickly locating where something exists.

```sh
rg -l "buildPipeline"
```

---

## ❌ Invert match (show files WITHOUT pattern)

Find files that do NOT contain something.

```sh
rg -L "log.content"
```

---

## 📦 Count matches per file

See frequency instead of raw matches.

```sh
rg -c "registry"
```

---

## 🧠 Search multiple patterns (OR logic)

Match any of the terms.

```sh
rg "registry|backlinks|terms"
```

---

## 🧭 Show context around matches

Include surrounding lines.

```sh
rg -C 2 "buildPipeline"
```

---

## ⚡ Search hidden files too

Includes dotfiles.

```sh
rg "DEBUG" --hidden
```

---

## 🧾 Search for literal strings (no regex)

Avoid regex interpretation.

```sh
rg -F "a.b.c"
```
