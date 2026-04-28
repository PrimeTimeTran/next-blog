## Purpose

From index start, how far do I need to go left or right (circularly) to first find target?

```python
class Solution:
    def closest_distance(self, arr, start, target):
        n = len(arr)
        for d in range(1, n):
            left = (start - d) % n
            right = (start + d) % n
            if arr[left] == target or arr[right] == target:
                return d
        return -1
```

## 3. circular left/right movement

```py
left = (start - d) % n
right = (start + d) % n
```

> This creates a ring traversal:
