'''
Diagram
n       = 5
binary  = 101

1. Right Shift n >> 1
n        = 101
n >> 1   = 010

2. XOR: x = n ^ (n >> 1)
same bits → 0
different → 1

  n       = 101
  n >> 1  = 010
----------------
  x       = 111
  x       = 7

3. XOR: x = n ^ (n >> 1)
x     = 111
x + 1 = 1000

4. Final Check
x & (x + 1) == 0   ✅ True
'''

class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        x = n ^ (n >> 1)
        return x & (x+1) == 0
