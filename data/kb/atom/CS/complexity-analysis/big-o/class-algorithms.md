---
tags:
---

# Big O

![[big-o-runtimes-unnamed.png]]
How to evaluate the complexity of an algorithm.

### O(log N)

1. **Divide and Conquer Algorithms**: Functions that split the problem into smaller subproblems and solve them recursively often have logarithmic complexity. Classic examples include binary search and certain tree traversal algorithms like binary tree search.
2. **Halving or Logarithmic Reduction**: If a problem size is halved or reduced by a logarithmic factor with each step of the algorithm, it's likely to have logarithmic complexity. Binary search, for instance, halves the search space at each step.
3. **Recursive Algorithms with Constant Work**: Recursive algorithms where each level of recursion does a constant amount of work tend to have logarithmic complexity. For example, in binary search, the size of the problem is halved with each recursive call.
4. **Binary Operations**: Algorithms that operate on data structures with binary characteristics often exhibit logarithmic complexity. This is because, with each operation, the search space or data size is reduced by a factor.
5. **Tree Structures**: Algorithms that traverse balanced binary trees or other tree structures efficiently often have logarithmic complexity. The height of balanced binary trees grows logarithmically with the number of nodes.
6. **Efficient Data Structures**: Certain data structures like heaps and balanced binary search trees maintain their structure in a way that operations have logarithmic complexity. For example, inserting or deleting elements in a balanced binary search tree like AVL tree or Red-Black tree takes O(log n) time.
7. **Logarithmic Number of Operations**: If the number of operations required to solve a problem grows logarithmically with the input size, it might indicate O(log n) complexity.
8. **Logarithmic Space Complexity**: Sometimes, algorithms with O(log n) time complexity also have O(log n) space complexity. This is often seen in recursive algorithms where the space complexity is determined by the depth of recursion.

### O(N log N)

1. **Sorting Algorithms**: Many efficient sorting algorithms, such as mergesort, heapsort, and quicksort, have O(n log n) time complexity on average or worst-case scenarios. These algorithms exploit divide-and-conquer strategies to sort elements, typically dividing the input into smaller subproblems and combining the results efficiently.
2. **Divide and Conquer Algorithms with Linear Work**: Algorithms that split the problem into smaller subproblems and solve them recursively, where each level of recursion involves linear work, often result in O(n log n) complexity. For example, mergesort divides the array into halves recursively and merges them, with each merge operation taking linear time.
3. **Binary Heap Operations**: Operations on binary heaps, such as heap construction or heapify, typically have O(n log n) complexity. Building a heap involves repeatedly inserting elements, which takes O(log n) time per element, resulting in O(n log n) overall complexity.
4. **Balanced Binary Tree Operations**: Operations on balanced binary search trees (e.g., AVL trees, Red-Black trees) like insertion, deletion, and traversal, can have O(n log n) complexity in the worst case. This is because these operations maintain the balance of the tree, ensuring that the height remains logarithmic.
5. **Divide and Conquer Algorithms with Logarithmic Reduction**: If a problem is divided into subproblems, each of which is then solved in O(log n) time, and there are n such subproblems, the overall complexity becomes O(n log n). This can be seen in algorithms like divide-and-conquer matrix multiplication.
6. **Efficient Algorithms with Sublinear Work**: Algorithms that perform sublinear work per element but process all elements in the input, such as certain graph algorithms (e.g., Kruskal's algorithm for minimum spanning tree), can result in O(n log n) complexity.
7. **Efficient Data Structures and Algorithms**: Some data structures, like balanced binary search trees and priority queues implemented using binary heaps, along with associated operations, exhibit O(n log n) complexity for certain operations.
8. **Merge of Sorted Lists or Arrays**: Combining multiple sorted lists or arrays into one sorted list or array typically takes O(n log n) time using algorithms like merge.

Identifying O(n log n) complexity often involves analyzing the structure of the algorithm, the operations performed, and how they scale with the input size. It's important to note that while O(n log n) represents an upper bound on the algorithm's complexity, the actual performance may vary depending on factors like implementation details and input characteristics.

### O(n^2)

1. **Nested Loops**: Algorithms with nested loops where one loop iterates over �n elements and the other loop iterates over the same or a decreasing number of elements typically result in O(n2) complexity. Each iteration of the outer loop triggers �n iterations of the inner loop, resulting in a total of �×�=�2n×n=n2 iterations.
2. **Comparing Pairs of Elements**: Algorithms that compare each element of an array or collection with every other element, such as selection sort or bubble sort, often have O(n2) complexity. In the worst case, every element needs to be compared with every other element, leading to quadratic time complexity.
3. **Matrix Operations**: Certain matrix operations, such as matrix multiplication with the naive approach, have O(n2) complexity. This is because each element of the resulting matrix requires a sum of �n multiplications and additions, resulting in �2n2 operations overall.
4. **Brute Force Search Algorithms**: Brute force algorithms that exhaustively search through all possible pairs or combinations of elements, such as certain types of exhaustive search or backtracking algorithms, often exhibit O(n2) complexity, especially when dealing with nested structures.
5. **Certain Graph Algorithms**: Algorithms that involve traversing or analyzing all pairs of vertices or edges in a graph, such as Floyd-Warshall algorithm for all pairs shortest path, may have O(n2) complexity depending on the size of the graph.
6. **Certain Dynamic Programming Algorithms**: Some dynamic programming algorithms, especially those that involve filling up a table of size �×�n×n with values computed from previous values, can result in O(n2) complexity.
7. **Certain Recursion Patterns**: Recursive algorithms that result in nested calls or subproblems with sizes that are polynomially related can lead to O(n2) complexity. For instance, naive recursive implementations of certain problems like the Tower of Hanoi or generating all permutations may result in O(n2) time complexity.
8. **Certain Sorting Algorithms**: Although most efficient sorting algorithms like quicksort, mergesort, and heapsort have �(�log⁡�)O(nlogn) complexity, inefficient sorting algorithms like insertion sort and bubble sort exhibit O(n2) complexity.

Identifying O(n2) complexity often involves analyzing the structure of the algorithm, the number of iterations, and how they scale with the input size. It's important to note that O(n2) represents an upper bound on the algorithm's complexity, and the actual performance may vary depending on factors like implementation details and input characteristics.

## Cheat Sheets

![[big-o-common-dsa-runtimes.png]]

# Related

- [[asymptotic-analysis|Asymptotic Analysis]]

## Resources

https://flexiple.com/algorithms/big-o-notation-cheat-sheet
