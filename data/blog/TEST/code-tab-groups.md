---
draft: true
date: '2030-01-01'
title: 'TEST: Code Tab Groups'
summary: 'TESTING of Code Tab Groups rendering'
isDev: true
tags: ['test']
---

## Tab Group

```tabgroup
...py
def hello_world():
    print("Hello world")
...

...js
function helloWorld() {
  console.log('Hi world')
}
...

...go
func climbStairs(n int) int {
  if n == 1 {
    return n
  }

  one := 1
  two := 2

  for i := 3; i < n + 1; i++ {
    tmp := one + two
    one = two
    two = tmp
  }
  return two
}
...
```

```tabgroup
...js
function helloWorld() {
  console.log('Hi world')
}
...
...py
def hello_world():
    print("Hello world")
...
...go
func climbStairs(n int) int {
  if n == 1 {
    return n
  }

  one := 1
  two := 2

  for i := 3; i < n + 1; i++ {
    tmp := one + two
    one = two
    two = tmp
  }
  return two
}
...
```

```tabgroup
...go
func climbStairs(n int) int {
  if n == 1 {
    return n
  }

  one := 1
  two := 2

  for i := 3; i < n + 1; i++ {
    tmp := one + two
    one = two
    two = tmp
  }
  return two
}
...
...js
function helloWorld() {
  console.log('Hi world')
}
...
...py
def hello_world():
    print("Hello world")
...
```
