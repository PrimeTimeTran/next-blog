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

Iterate list using iterator.

```python
animals = ['cat', 'dog', 'bat']

for i in range(len(animals)):
  print(animals[i])
```

Iterate list `in` keyword.

```python
animals = ['cat', 'dog', 'bat']

for animal in animals:
  print(animal)
```

Iterate list using `enumerate` to get iterator and element.

```python
animals = ['cat', 'dog', 'bat']

for i, animal in enumerate(animals):
  print(i, animal)
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

Sort a dict on keys.

```python
leaders = {4: "Yang Zhou", 2: "Elon Musk", 3: "Tim Cook", 1: "Warren Buffett"}
leaders = sorted(leaders.items(), key=lambda x: x[0])
print(leaders)
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
