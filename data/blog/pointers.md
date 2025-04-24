---
title: 'Data Structures: Pointers in C'
date: '2020-04-24'
tags: ['Data-Structures', 'C']
draft: false
summary: 'Developing a better intuition on pointers & '
bibliography: references-data.bib
canonicalUrl:
---

# Introduction

Pointers are found when working with lower level programming languages(languages 'closer' to machine code).

In the following examples you'll use a `main.c` which is compiled & then run.

- `gcc main.c -o main`
- `./main`

## Pass a variable

What do you expect `x` to print?

```c
#include <stdio.h>

void update(int p) {
    p = 42;
}

int main() {
    int x = 10;
    update(x);
    printf("%d\n", x); // 10
    return 0;
}
```

We invoke `update()` which reassigns it's local `p` and then print the value of `x` after `update()()` returns. `10` prints because `x`'s value wasn't changed

## Pass a pointer

How might we change the value of `x` from `update()`?

```c
#include <stdio.h>

void update(int *p) {
    *p = 42;
}

int main() {
    int x = 10;
    update(&x);
    printf("%d\n", x); // 42
    return 0;
}
```

## Copying

If we wanted to swap two variables we could use a `struct` to store the values we want to `swap`.
After we invoke `swap()` we then use the it's fields/members `a` & `b` to update `x` & `y`.

```c
#include <stdio.h>

typedef struct {
    int a;
    int b;
} Pair;

Pair swap(int a, int b) {
    Pair p;
    p.a = b;
    p.b = a;
    return p;
}

int main() {
    int x = 5, y = 10;
    printf("Before swap: x = %d, y = %d\n", x, y);

    Pair result = swap(x, y);
    x = result.a;
    y = result.b;

    printf("After swap: x = %d, y = %d\n", x, y);
    return 0;
}
```

## Swapping Values

A better approach would be to swap in place using references(`&`) & pointers(`*`).

We pass the references of `x` & `y` to `swap()` and then update it using the pointer syntax, `*`.

```c
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    printf("Before swap: x = %d, y = %d\n", x, y);

    swap(&x, &y);

    printf("After swap: x = %d, y = %d\n", x, y);
    return 0;
}
```
