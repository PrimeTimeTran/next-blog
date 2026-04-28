# Knowledge Agents

Agents that reason by operating on internal representations of knowledge

Given:

> If it didn't rain, Harry visited Hagrid today.
> Harry visited Hagrid or Dumbledore today, but not both.
> Harry visited Dumbledore today.

Inference:

> Harry did not visit Hagrid today.
> It rained today.

**Sentence**: An assertion about the world in a knowledge representation language.
**Propositional Logic**:
_P, Q, R_

Individual facts
We need some way of connecting them.

---

## Logical Connectives

| Symbol  | Meaning       |                |
| ------- | ------------- | -------------- |
| **¬**   | not           |                |
| **⌃**   | and           |                |
| **v**   | or            |                |
| **->**  | implication   |                |
| **<->** | biconditional | if and only if |

---

**Model**: assignment of truth value to every propositional symbol(a "possible world")
P: It is raining
Q: Is is Tuesday
{ P = true, Q = false }
**Knowledge Base**: Set of sentences known by a knowledge-based agent
**Entailment**: "Alpha entails Beta". in every model in which sentence alpha is true then sentence beta is also true.
**⍺ |= β**
"It's Tuesday in January" |= "We're in January"

We need to teach ai how to use/generate entailments.

**Inference:** Deriving new sentences from old sentences.

module ponens:
application of a -> b

and elimnatuion:
a ^ b

¬ (¬ a)
double negation elimination

a-> b
implication elimination
¬ a v b

De Morgans Law
And to Or
¬ (a ^ b )
¬ a v ¬ b

¬ (a v b)
¬ a ^ ¬ b

distributive law
(a v (b v y))

(a ^ B) v (a ^ y)

Theorem proving

Unit resolution rule
p v q
¬ p
Q

conjunctive normal form
logical snetence that is a conjunction of clauses
