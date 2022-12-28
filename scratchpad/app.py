import heapq

heap = [10, 1, 2, 3, 4, 5]

heapq._heapify_max(heap)
print('Loi', heap[0])
heapq._heappop_max(heap)
print(heap[0])



