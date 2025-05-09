---
draft: False
date: 2022-04-19
title: 'Cheat Sheet: Big O Notation'
summary: "Big O Notation's common complexity cases to familiarize oneself with."
tags: ['cheat sheet', 'big o']
---

# Introduction

The following are the most common cases of Big O a programmer should be aware of.

They're sorted from best to worse case.

## 1. Constant - O(1)

No matter how much data there is, it only takes one operation.

## 2. Logarithmic - O(log n)

Every step/action you take, you cut out half of the work.

## 3. Linear - O(n)

Complexity grows in direct proportion to the size of the input data.

## 4. Linearithmic - O(n log n)

Often is a nested iteration where within each operation done in linear time, there are actions being done in logarithmic time over the same size of data.

## 5. Quadratic - O(n²)

Nested loops over the same or similarly sized dataset.

## 6. Cubic — O(n³)

Triple nested loops over the same or similarly sized dataset.
The number of operations grows with the cube of the input size.

## 7. Exponential — O(2ⁿ)

The number of operations doubles with each additional input.
Often seen in recursive problems that branch into two or more calls per step.

## 8. Factorial — O(n!)

The number of operations doubles with each additional input.
Often seen in recursive problems that branch into two or more calls per step.

# Conclusion

Checkout [this cheatsheet](https://www.bigocheatsheet.com/) for more details.
