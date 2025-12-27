'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. Big O
Time:   O()
Space:  O()
'''
class ListNode:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.next = None
        self.prev = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = {}
        self.cap = capacity
        self.left, self.right = ListNode(0,0), ListNode(0,0)
        self.left.next, self.right.prev = self.right, self.left

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1
        
    def remove(self, n) -> None:
        prev, nxt = n.prev, n.next
        prev.next, nxt.prev = nxt, prev

    def insert(self, n) -> None:
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = n
        n.prev, n.next = prev, nxt

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = ListNode(key, value)
        self.insert(self.cache[key])
        if len(self.cache) > self.cap:
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]



'''
1. Understand
OrderedDict

5. Big O
'''

from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)   # mark as most recently used
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value

        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)  # remove LRU
