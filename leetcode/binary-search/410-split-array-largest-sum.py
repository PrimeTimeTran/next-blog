class Solution:
    def splitArray(self, nums: List[int], m: int) -> int:
        # Checks whether we can split nums into at most m subarrays
        # such that no subarray has sum greater than max_sum.
        def can_split(max_sum):
            subarrays = 1     # start with one subarray
            current_sum = 0

            for x in nums:
                # If adding x would exceed max_sum,
                # we must start a new subarray.
                if current_sum + x > max_sum:
                    subarrays += 1
                    current_sum = x

                    # Early exit: too many subarrays needed
                    if subarrays > m:
                        return False
                else:
                    current_sum += x

            return True  # we used <= m subarrays

        # Lower bound: the largest single element (must fit somewhere)
        # Upper bound: sum of all elements (one big subarray)
        l, r = max(nums), sum(nums)

        # Binary search for the minimum feasible maximum subarray sum
        while l < r:
            mid = (l + r) // 2

            # If we can split using mid as the maximum allowed sum,
            # try to find a smaller feasible value.
            if can_split(mid):
                r = mid
            else:
                # mid is too small, forcing too many subarrays
                l = mid + 1

        # l == r is the smallest value for which splitting is possible
        return l
