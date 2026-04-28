# Graph Neural Networks (GNNs) — Atom

## Definition

Graph Neural Networks (GNNs) are deep learning models designed to operate on graph-structured data by learning representations of nodes, edges, or entire graphs through iterative message passing between connected nodes.

---

## Core Idea

> GNNs learn from relationships, not just features—by propagating and aggregating information across a graph structure.

Instead of fixed grids (like images) or sequences (like text), they operate on arbitrary connectivity.

---

## Graph Structure

A graph is defined as:

- Nodes: entities (e.g., users, atoms, pages)
- Edges: relationships (e.g., friendship, bonds, links)

Formally:

$$
G = (V, E)
$$

---

## Core Mechanism: Message Passing

At each layer, nodes update their representation by exchanging information with neighbors.

### Step 1: Message aggregation

Each node gathers information from neighbors:

$$
m_v^{(k)} = \text{AGGREGATE}({h_u^{(k)} : u \in \mathcal{N}(v)})
$$

### Step 2: Update node state

$$
h_v^{(k+1)} = \text{UPDATE}(h_v^{(k)}, m_v^{(k)})
$$

Where:

- $h_v$ = node embedding
- $\mathcal{N}(v)$ = neighbors of node $v$

---

## Core Idea

> Each layer expands a node’s “view” of the graph by one hop.

Deeper layers → broader structural awareness.

---

## Key Components

### 1. Node Embeddings

Vector representations of nodes capturing structural + feature information.

### 2. Message Function

Defines what information is passed between nodes.

### 3. Aggregation Function

Combines incoming messages:

- sum
- mean
- max
- attention-based weighting

### 4. Update Function

Combines old state with aggregated messages (often neural network).

---

## Types of GNNs

### 1. Graph Convolutional Networks (GCN)

- applies convolution-like operations on graphs
- smooths features across neighbors

---

### 2. Graph Attention Networks (GAT)

- uses attention to weight neighbors differently
- learns importance of connections

---

### 3. GraphSAGE

- samples neighbors instead of using full graph
- scalable to large graphs

---

## Learning Tasks

### Node-level tasks

- classify individual nodes (e.g., fraud detection)

### Edge-level tasks

- predict relationships (e.g., recommendation systems)

### Graph-level tasks

- classify entire graphs (e.g., molecule property prediction)

---

## Key Idea

> GNNs generalize deep learning to irregular domains by replacing grid-based operations with relational message passing.

---

## Why GNNs work

They exploit:

- relational structure
- locality of influence
- compositional propagation of information

---

## Strengths

- handles non-Euclidean data
- captures relational dependencies
- flexible across domains (social, biological, chemical)

---

## Limitations

- computationally expensive on large graphs
- oversmoothing in deep layers
- difficulty scaling to dynamic graphs
- sensitive to graph structure quality

---

## Intuition

> A GNN learns by repeatedly asking: “what should I know about my neighbors, and what should I tell them back?”

---

## Relationship to Other Models

- CNNs → grid structure learning
- RNNs → sequence structure learning
- GNNs → graph structure learning

---

## Summary

Graph Neural Networks are deep learning models that operate on graph-structured data by iteratively passing and aggregating information between connected nodes, enabling representation learning over relational structures rather than fixed spatial or sequential formats.
