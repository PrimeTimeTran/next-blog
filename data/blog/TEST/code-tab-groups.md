---
draft: true
date: '2030-01-01'
title: 'TEST: Code Tab Groups'
summary: 'TESTING of Code Tab Groups rendering'
isDev: true
tags: ['test']
---

```tabgroup showLineNumbers
!!!!!py
def hello_world():
    print("Hello world")
py!!!!!

!!!!!js
function helloWorld() {
  console.log('Hi world')
}
js!!!!!

!!!!!go
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
go!!!!!
```

```tabgroup

!!!!!js {1-5, 5-10}
function helloWorld() {
  console.log('Hi world')
}
js!!!!!

!!!!!py 1
def hello_world():
    print("Hello world")
py!!!!!



!!!!!go {1-3, 5-7, 9-10}
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
go!!!!!
```
