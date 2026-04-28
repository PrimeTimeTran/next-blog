# Dynamic Programming

## Memoization

### Fibonacci

```python
# No memoization
def fib(n):
    if n <= 2: return 1
    return fib(n-1) + fib(n-2)

print(fib(1))
print(fib(2))
print(fib(6))
print(fib(7))
print(fib(8))
print(fib(50))
```

##### Time & Space Complexity

```python
def dib(n):
    if n <= 1: return
    return dib(n-1) + dib(n-1)

def fib(n):
    if n <= 1: return
    return fib(n-1) + fib(n-2)

def lib(n):
    if n <= 1: return
    return dib(n-2) + dib(n-2)
```

Time
O(dib) <= O(fib) <= O(lib)
O(2^n) <= O(2^n) <= O(2^n)

Space
O(dib) <= O(fib) <= O(lib)
O(N) <= O(N) <= O(N)

#### Memo

```python
# def twoSum(a, b):
#     return a + b

# result = twoSum(1, 2)
# print(result)

def fib(n, store = {}):
    if n <= 2: return 1
    if store.get(n): return store[n]
    store[n] =  fib(n-1, store) + fib(n-2, store)
    return store[n]

result = fib(50)
print(result)
```

##### Time & Space Complexity

Time
O(N)

Space
O(N)

### Grid Traveler

```python
def gridTraveler(m, n):
    if m == 1 and n == 1:
        return 1
    if m == 0 or n == 0:
        return 0
    return gridTraveler(m-1, n) + gridTraveler(m, n-1)

print(gridTraveler(1, 1)) # 1
print(gridTraveler(2, 3)) # 3
print(gridTraveler(3, 2)) # 3
print(gridTraveler(3, 3)) # 6
print(gridTraveler(18,18)) # Timeout... but 2333606220
```

##### Time & Space Complexity

Time
O(2^(n+m))

Space
O(N+M)

#### Memo

```python
def gridTraveler(m, n, store={}):
    if store.get((m,n)):
        return store[(m,n)]
    if m == 1 and n == 1:
        store[(m, n)] = 1
        return 1
    if m == 0 or n == 0:
        return 0
    store[(m, n)] = gridTraveler(m-1, n, store) + gridTraveler(m, n-1, store)
    return store[(m,n)]

print(gridTraveler(1, 1)) # 1
print(gridTraveler(2, 3)) # 3
print(gridTraveler(3, 2)) # 3
print(gridTraveler(3, 3)) # 6
print(gridTraveler(18,18)) # 2333606220
```

### Can Sum

```python

```

### How Sum

```python

```

### Best Sum

```python

```

### Can Construct

```python

```

### Count Construct

```python

```

### All Construct

```python

```

## Tabulation

### Fibonacci

```python

```

### Grid Traveler

```python

```

### Can Sum

```python

```

### How Sum

```python

```

### Best Sum

```python

```

### Can Construct

```python

```

### Count Construct

```python

```

### All Construct

```python

```
