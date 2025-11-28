### 1️⃣ **Next / Previous**

- next greater element
- previous smaller element
- closest taller building
- nearest warmer day

➡️ **Monotonic stack**

---

### 2️⃣ **Maximum / Minimum over a range**

- sliding window maximum/minimum
- max in every subarray of size k
- range minimum queries (online)

➡️ **Monotonic queue**

---

### 3️⃣ **Span / duration / until**

- stock span
- days until warmer temperature
- how long until something happens

➡️ **Monotonic stack**

---

### 4️⃣ **Remove dominated elements**

- “while something is smaller than current, discard it”
- “elements that will never be useful again”

➡️ **Monotonic structure**

This line is the giveaway:

```python
while stack and current >= stack[-1]:
    stack.pop()
```
