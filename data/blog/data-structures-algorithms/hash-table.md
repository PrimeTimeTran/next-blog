---
draft: false
date: '2022-08-20'
title: 'Data Structures & Algorithms: How to create a Hash Table?'
summary: 'How to implement a custom Hash Table, analogous to a dict, using simpler data types & a hash function.'
tags: ['data-structures-algorithms', 'python']
---

```python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(self.size)]

    def _hash(self, key):
        val = sum(ord(char) for char in str(key)) % self.size
        print(val)
        return val

    def insert(self, key, value):
        index = self._hash(key)
        bucket = self.table[index]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))

    def get(self, key):
        index = self._hash(key)
        bucket = self.table[index]
        for k, v in bucket:
            if k == key:
                return v
        return None

    def remove(self, key):
        index = self._hash(key)
        bucket = self.table[index]

        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket.pop(i)
                return True
        return False

    def resize(self):
        new_size = self.size * 2
        new_table = [[] for _ in range(new_size)]
        for bucket in self.table:
            for k, v in bucket:
                index = hash(k) % new_size
                new_table[index].append((k, v))

        self.table = new_table
        self.size = new_size

    def __str__(self):
        return str(self.table)

ht = HashTable()
ht.insert("name", "Alice")
ht.insert("age", 25)
ht.insert("city", "Wonderland")

print(ht.get("name"))
print(ht.get("age"))

ht.remove("age")
print(ht.get("age"))
print(ht)
```
