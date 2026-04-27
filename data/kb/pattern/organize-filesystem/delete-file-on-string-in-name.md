## Delete Duplicate Files

Look for duplicate files. Files containing (1-9) in name.

## Preview Files (1) - (9)

```sh
for f in *\ \([1-9]\).*; do
  echo rm "$f"
done
```

## Delete Matches of (1) - (9)

```sh
for f in *\ \([1-9]\).*; do
  rm "$f"
done
```
