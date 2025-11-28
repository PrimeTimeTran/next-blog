class Solution:
    def minDistance(self, w1: str, w2: str, cache = {}) -> int:
        if not w1 and not w2:
            return 0
        if not len(w1) or not len(w2):
            return len(w1) or len(w2)
        if w1[0] == w2[0]:
            return self.minDistance(w1[1:], w2[1:])
        if (w1, w2) not in cache:
            insert = 1 + self.minDistance(w1, w2[1:])
            delete  = 1 + self.minDistance(w1[1:], w2)
            replace = 1 + self.minDistance(w1[1:], w2[1:])
            cache[(w1, w2)] = min(insert, delete, replace)
        return cache[(w1, w2)]
        