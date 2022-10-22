---
title: 'Bitwise operators'
date: '2022-10-07'
tags: ['Python', 'Bitwise']
draft: true
summary: 'Binary bitwise operators'
layout: PostSimple
# bibliography: references-data.bib
canonicalUrl:
---

## 1. Two Sum leetcode

# 1234

Decimal numbers can be thought of in the following ways

```python
print(1234)
print(bin(1234))
print(4*1 + 3*10 + 2*100 + 1*1000)
print(4*10**0 + 3*10**1 + 2*10**2 + 1*10**3)
print(1*10**3 + 2*10**2 + 3*10**1 + 4*10**0)

print(13)
print(bin(13))
print(0b1101)
print(1*2**0 + 0*2**1 + 1*2**2 + 1*2**3)
print(1*2**3 + 1*2**2 + 0*2**1 + 1*2**0)
```

# 13

And operator

```python
def printbottom():
  print('----------------')


print('0b11001011', 0b11001011)
print('0b10101101', 0b10101101)
x = 0b11001011
y = 0b10101101

print(' ', '0b11001011', 0b11001011)
print('+', '0b10101101', 0b10101101)
printbottom()
print(' ', bin(x + y), x + y, '\n')

print(' ', '0b11001011', 0b11001011)
print('&', '0b10101101', 0b10101101)
printbottom()
print(' ', bin(x & y), x & y, '\n')

print(' ', '0b11001011', 0b11001011)
print('|', '0b10101101', 0b10101101)
printbottom()
print(' ', bin(x | y), x | y, '\n')


print(' ', '0b11001011', 0b11001011)
print('^', '0b10101101', 0b10101101)
printbottom()
print(' ', bin(x ^ y), x ^ y, '\n')


```
