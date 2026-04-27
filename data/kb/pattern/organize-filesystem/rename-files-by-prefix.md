## Preview

```sh
for f in z*; do
  echo mv -- "$f" "${f#z}"
done
```

## Rename

```sh
for f in z*; do
  mv -- "$f" "${f#z}"
done
```
