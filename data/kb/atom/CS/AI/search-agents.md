# Search in AI

Do something intelligent such as finding a solution to a problem.

- Play a game.
- Recognizing a face.
- Understand human language.
- Get driving directions from A to B.
  Fundamental components include initial state, actions, transition models, goal test, path cost function.

## Keywords

- **Agent**: Perceives an environment & acts on it.
- **State**: Configuration of agent and it's environment.
- **Action**: Choices we can make in a given state.
- **Transition Model**: A description of what state results from performing any applicable action in any state.
- **State Space:** Set of all states reachable from initial state by any sequence of actions. Back propagation. Represented as a graph.
- **Goal Test:** Way to determine if a given state is a goal state.
- **Path Cost:** Numerical cost associated with a given path. Fastest route possible. Want to reduce this value. Some problems might be djisktras algorithm where we want to minimize the search path.
- **Optimal Solution:** Best path to take given the state, actions, paths available.

Transition model:
f(s,a) -> newState
Encoding of state and action returning state after performing action. Defines what's happened after taking action on state.

State space:
Set of all states reachable from initial stare by any sequence of actions. Back propagation. Search problems often look like this, states and arrows connecting, a graph

Goal Test:
Way to determine whether a given state is a goal state.
Can be 1 goal, can be many.
Maze with exiting vs maze with exiting faster, fewer steps.

Path Cost:
Numerical cost associated with a given path. Fastest route possible. Want to reduce this value.
Some problems might be djisktras algorithm where we want to minimize the search path.

Optimal Solution:
Best path to take given the state, actions, paths available.

## Sliding Puzzle

Sequentially sort number tiles in a grid of cells.
Actions are moving left, right, up, down tiles which have an empty cells as one of their neighbors.

The problem space is a graph where neighbors are the subsequent states given a state and action taken.

**Node**

- A state:
- A parent: State that generated this node
- An action: Action applied to parent to get node
- A path cost: From initial state to node
  **Approach:**
- Start with initial state and explore. Consider all available options. Store everything inside of a frontier. Frontier contains initial state. Loop. Frontier empty && nothing left to explore? No solution.
- Remove node. If it contains a goal state, return the solution.
- Expand node, add resulting nodes to the frontier
  **Gotchas:**
- Repeating states. Infinite loops. Keep track of what we've explored
- Solution: Maintain explored set. Add before removing and check before adding.
  Logic for choosing from Frontier:
- Depth First Search(DFS): Stack
- Breath First Search(BFS): Queue

## Maze Search

Find the path from A to B in a maze which includes walls & empty cells.

### Considerations

**Uninformed Search**
Search strategies that use no problem specific knowledge.
Didn't consider the structure of the maze.

**Informed Search**
Use knowledge specific to a problem.
Does consider the structure of the maze. Knows that we should move "closer" to the goal at each step.

Greedy Best First Search(GBFS)
Search expands the node that is closest to the goal as estimated by a heuristic function _h(n)_.

**Manhattan Distance**
How many steps to reach goal?

**A\* Search**
Algorithm that expands node with lowest value of _g(n)_ + _h(n)_.

    g(n) = cost to reach node
    h(n) =  estimated cost to goal

Search with expand nodes with lowest value of g(n) + h(n)

- Is optimal if heuristic is admissible(never overestimates the true cost) and
- h(n) is consistent(for every node n and successor n' with step c, h(n) < h(n')+c)

## Adversarial Search

Another agent who's fighting me, who's trying to beat me.

**Minimax Algorithm**
max player aims to max the score
min player wants to min the score

## Tic Tac Toe

- **s0:** Initial State
- **player(s):** returns which player to move in state s
- **action(s):** returns legal moves in state s
- **result(s,a):** returns state after action a taken in state s
- **terminal(s):** check if state s is a terminal state
- **utility(s):** find numercial value for terminal state s

### Alpha Beta Pruning

Given what we've already seen, we can preemptively discard branches of the graph because we know their result won't give us our sought goal state.

**Depth Limited Minimax:** Limit the depth in which minmax algorithm.
**Evaluation Function**: Assign a score even though game state is not over.

## Summary

We've learned how search problems are handled by AIs.
State, actions, heuristics, solutions, optimization are all considerations.

We consider the state of the problem space, actions we can take, the resulting state of our action, and the cost of each path which we might take when multiple actions are available. Depending on the type of problem we're given we have to choose the a heuristic which gives us an optimal solution.

## 🌐 References

https://www.youtube.com/watch?v=5NgNicANyqM&ab_channel=freeCodeCamp.org
