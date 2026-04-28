Set the Set

Functional Programming Languages

- Function

  - Lambda Calculus

    - Construct Lambda terms and perform reductions on them.

  - To apply a compound procedure to arguments, evaluate the body of the procedure with each formal parameter replaced by the corresponding argument.

  - Point Free Expression
    Expression where we avoid bound variables
    Using combinators to define a function without specifying bound variables

  - Combinator Calculus
    A set of combinators thatcan be used to represent any program

  - Combinator
    A function without free variables that takes functions as arguments, and returns a function

- Interaction Combinators
  - [Interaction Combinators](https://www.semanticscholar.org/paper/Interaction-Combinators-Lafont/6cfe09aa6e5da6ce98077b7a048cb1badd78cc76)
    Graph Reduction Machine
    A virtual machine for functional languages that works by repeatedly modifying a graph data structure in place

Lazy evaluation, currying, pure functions

"Computing by Rewriting"

COMBINATOR COMPILER
A compiler that rewrites functional programs into a version that only uses a reduced set of functions

Virtual Machines
