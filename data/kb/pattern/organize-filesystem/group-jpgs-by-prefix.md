### 🧠 How it works

- `*_*.jpg` → matches files like `name_1.jpg`
- `${f%_*}` → strips `_1.jpg`, `_20.jpg`, etc.
- `mkdir -p` → creates folder only if needed
- `mv --` → safely moves files (handles weird filenames)

### ✅ Preview (safe)

```bash
for f in *_*.jpg; do
  base="${f%_*}"   # remove _N.jpg
  echo mkdir -p "$base"
  echo mv "$f" "$base/"
done
```

---

### 🚀 Actual script

```bash
for f in *_*.jpg; do
  base="${f%_*}"
  mkdir -p "$base"
  mv -- "$f" "$base/"
done
```
