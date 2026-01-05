# This is a boundary-converging binary search.
#
# We are searching for the **smallest feasible speed**.
# The feasibility predicate is monotonic:
#   speed too small  -> infeasible (False)
#   speed large enough -> feasible (True)
#
# Invariant:
#   The answer is always within the closed interval [l, r].
#
# At each step:
# - If m is feasible, we KEEP m (it might be the answer) and shrink right.
# - If m is infeasible, we DISCARD m and everything left of it.
#
# The loop terminates when l == r, which is the first feasible value.
# No sentinels, no special return logic — both pointers converge naturally.
#
# This pattern is ideal when:
# - the domain is discrete and valid everywhere
# - the answer is guaranteed to exist
# - we want the first True / minimal feasible value
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
        while l < r:
            m = (l+r) // 2
            if sum(ceil(p/m) for p in piles) <= h:
                r = m          # keep m (feasible)
            else:
                l = m + 1      # discard m (infeasible)
        return r  # l == r == smallest feasible speed


# This is a sentinel-based binary search.
#
# We maintain two SENTINELS:
#   l = last known infeasible value
#   r = first known feasible value
#
# Invariant:
#   l is always infeasible
#   r is always feasible
#
# The actual answer lies strictly between l and r.
#
# We do NOT allow l and r to cross or meet.
# Instead, we stop when they are adjacent (l + 1 == r).
#
# This pattern requires:
# - artificial sentinel values
# - a special loop condition (l + 1 < r)
# - an asymmetric return (always r)
#
# This style is useful when:
# - part of the domain may be invalid or unsafe
# - feasibility is not well-defined everywhere
# - you explicitly want to track false vs true boundaries
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 0, max(piles)
        while l + 1 < r:
            m = (l+r) // 2
            if sum(ceil(p/m) for p in piles) > h:
                l = m          # m is infeasible → move false boundary
            else:
                r = m          # m is feasible → move true boundary
        return r  # r is the first feasible value
