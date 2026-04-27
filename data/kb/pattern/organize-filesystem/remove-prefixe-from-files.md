```sh
for d in 0.*; do
  mv "$d" "${d#0.}"
done
```
