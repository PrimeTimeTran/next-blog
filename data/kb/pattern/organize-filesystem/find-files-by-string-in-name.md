## Search files/dirs for string literals

- recursive
- case insensitive

```sh
find . -iname '**'
```

- Accent markers matter.

```sh
find . -iname '*Tây*'
find . -iname '*Tay*'
```

- specific dirs

```sh
find dir1 dir2 dir3 -iname '**'
```
