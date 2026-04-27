# 🔷 Linear Algebra — Complete Hub Note

## 1. Core Objects

### Vectors

- Elements of $RR$ (or more general spaces)
- Represent:
  - Points
  - Directions
  - Data

**Operations**

- Addition: ( u + v )
- Scalar multiplication: ( c v )

---

### Matrices

- Rectangular arrays of numbers
- Represent:
  - Linear transformations
  - Systems of equations

**Types**

- Square, diagonal, identity, symmetric, orthogonal

---

## 2. Systems of Linear Equations

### General Form

[
Ax = b
]

- ( A ): coefficient matrix
- ( x ): variable vector
- ( b ): output vector

### Solving Methods

- Gaussian elimination
- Row-reduced echelon form (RREF)
- Matrix inverse (if exists)

---

## 3. Matrix Operations

- Addition: same size
- Multiplication: ( (m \times n)(n \times p) )
- Transpose: ( A^T )

### Special

- Identity matrix ( I )
- Inverse: ( A^{-1} ) (if invertible)

---

## 4. Determinants

- Scalar value from square matrix

### Key meanings:

- Area/volume scaling factor
- Invertibility test:
  - ( \det(A) \neq 0 \Rightarrow ) invertible

---

## 5. Vector Spaces

### Definition

A set closed under:

- Addition
- Scalar multiplication

### Examples

- ( \mathbb{R}^n )
- Polynomial spaces
- Function spaces

---

## 6. Subspaces

- Smaller vector spaces inside larger ones

### Must satisfy:

- Contains zero vector
- Closed under addition & scaling

---

## 7. Span, Basis, Dimension

### Span

All linear combinations of vectors

### Basis

- Minimal set that spans the space
- Linearly independent

### Dimension

- Number of basis vectors

---

## 8. Linear Independence

Vectors are independent if:  
[
c_1 v_1 + c_2 v_2 + \dots + c_n v_n = 0 \Rightarrow c_i = 0
]

---

## 9. Linear Transformations

### Definition

Function:  
[
T(x) = Ax
]

### Properties

- Preserves addition
- Preserves scalar multiplication

### Examples

- Rotations
- Reflections
- Scaling

---

## 10. Kernel and Image

### Kernel (Null Space)

[
{x \mid Ax = 0}
]

- Measures “loss of information”

### Image (Column Space)

- All outputs ( Ax )

---

## 11. Rank and Nullity

[
\text{rank}(A) + \text{nullity}(A) = \text{# of columns}
]

- Rank = dimension of image
- Nullity = dimension of kernel

---

## 12. Eigenvalues & Eigenvectors

### Definition

[
Av = \lambda v
]

- ( \lambda ): eigenvalue
- ( v ): eigenvector

### Meaning

- Directions that don’t change under transformation

---

## 13. Diagonalization

[
A = PDP^{-1}
]

- Simplifies matrix powers
- Works when enough independent eigenvectors exist

---

## 14. Orthogonality

### Dot Product

[
u \cdot v = |u||v|\cos\theta
]

### Orthogonal Vectors

- ( u \cdot v = 0 )

### Orthonormal Basis

- Orthogonal + unit length

---

## 15. Projections

Projection of ( v ) onto ( u ):  
[
\text{proj}_u(v) = \frac{v \cdot u}{u \cdot u} u
]

---

## 16. Least Squares

Used when no exact solution exists:  
[
A^T A x = A^T b
]

---

## 17. Singular Value Decomposition (SVD)

[
A = U \Sigma V^T
]

- Works for all matrices
- Key for:
  - Data compression
  - PCA
  - Machine learning

---

## 18. Key Connections (Big Picture)

- Matrices = transformations
- Systems = transformations solving ( Ax=b )
- Eigenvalues = behavior of transformations
- Rank = information retained
- SVD = ultimate decomposition

---

## 19. How It All Fits Together

- Start: vectors & matrices
- Then: solve systems
- Then: understand structure (spaces, basis)
- Then: analyze transformations (eigenvalues)
- Finally: advanced tools (SVD, least squares)

---

## 20. Quick Study Roadmap

1. Vectors → operations
2. Matrices → multiplication
3. Solve systems (RREF)
4. Vector spaces + basis
5. Linear transformations
6. Eigenvalues/eigenvectors
7. Orthogonality
8. SVD / applications
