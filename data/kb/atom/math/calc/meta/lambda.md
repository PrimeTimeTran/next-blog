## Defining syntax of lambda calculus

"Apply the function on the left to the argument on the right"

> λa.b

![[Lambda Calculus.png|300]]
λ
fa
JS
f(a)

λ
fab
f(a)(b)

(fa)b
(f(a))(b)
Function application is left associative.

f(ab)
f(a(b))
First apply a to b, result of that will be the argument to f.

Abstractions
Function abstraction is greedy. Swallows up body

λ
λa.b
JS
a => b

---

These two are the same

λ
λa.(b x)
JS
a => (b(x))

They're ommited by convention

λ
λa.b x
JS
a => b(x)

---

This changes the funtion though
λ
(λa.b) x
JS
(a => b)(x)

---

## Currying

λ
λa.λb a
JS
a => b => a

### Clarified

λ
λa.(λb a)
JS
a => (b => a)

---

Beta Reduction

![[BReduction.png|300]]

## Mocking bird

M := λf.ff

λ
MM = ?
JS
M(M) === ?

AKA Stackoverflow
Theory
Divergence
Halting problem

MM == MM == MM = Ω

Ω
Omega Combinator
ω
The mocking bird is called little omega

ωω == ωω == ωω = Ω

## Abstractions again

λa.λb.λc.b
a => b => c => b

λabc.b != (a,b,c) => b

## Kite Combinator

Ibis
Kestrel
Starling
Cardinal
Bluebird

## The formalization( )

1889
Peano numbers
Formal Notation

1891
Frege
Quantified Axiomatic Logic - fn notation

1920
Russel
Principial Mathematica
Russels Paradox

1920
Schonfinkel
Combinatory Logic - Currying

1925
Von Neumann
Functional System of Set Theory

1926
Curry
Combinatory Logic

1931
Godel
Incompleteness Theorems

1931
Church
λ-Calculus

1931-1936
Kleene-Rosser
Inconsistency of Specialized λ

1936
Church
Solves the decision problem

1936
Turing
Defeated in decision problem but invented the Turing machine.
Goes to princeton and gets a PHD
1st fixed point combinator

## Combinator

Function with no free variables
λb.b - combinator

λb.a - not a combinator
λabc.c(λe.b) - combinator

## Cardinal

λfab.fba

Switches parameters

λ
C K I M = ?

JS
C(K)(I)(M) = ?

λ
C K I M = M

JS
C(K)(I)(M) = M

λ
KI I M = M

JS
KI(I)(M) = M

https://www.youtube.com/watch?v=3VQ382QG-y4
