---
title: 'Python 101'
date: '2021-7-22'
tags: ['Python']
draft: true
summary: 'Awesome Python techniques'
layout: PostSimple
# bibliography: references-data.bib
# canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/new-features-in-v1/
---

## Python

### Intro

Looping over items.

```python
# String
sentence = "Hello World"
sentences = "Hi " + "there you go"
# Number
# List
# Dict
# Conditionals
# Comprehensions
```

```python
animals = ['cat', 'dog', 'bat']


for i in range(len(animals)):
  print(animals[i])
```

Prefer using

```python
animals = ['cat', 'dog', 'bat']

for animal in animals:
  print(animal)
```

```python
student = { 'name': 'Harry', 'house': 'Gryffindor' }

if student['name']:
  print(student['name'])
```

```python
people = [
  { 'name': 'Harry', 'house': 'Gryffindor' },
  { 'name': 'Ron', 'house': 'Gryffindor' },
  { 'name': 'Draco', 'house': 'Slytherin' },
]

if people[0]['ss']:
  print(people[0]['name'])
```

```python

```

```python

```

```python

```

```python

```

```python

```

```python

```

Generate a 2d matrix

```python
m = 10
n = 10
matrix = [[0 for j in range(n)] for i in range(m)]
```

Generate the alphabet

```python
import string
print(string.ascii_lowercase)
```
