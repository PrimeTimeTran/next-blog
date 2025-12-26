class Solution:
    def goodNodes(self, n, minimum = -inf) -> int:
        if not n: return 0
        newMin = max(minimum, n.val)
        l, r = self.goodNodes(n.left, newMin), self.goodNodes(n.right, newMin)
        return l + r + (n.val >= minimum)
