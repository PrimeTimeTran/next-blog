# Unsupervised Learning

## Definition

Unsupervised Learning is a type of machine learning where a model learns patterns from **unlabeled data**, without explicit target outputs.

$$
x ;\rightarrow; \text{discover structure in data}
$$

---

## Core idea

> Instead of predicting labels, the model finds hidden structure, relationships, or groupings in data.

---

## Data structure

Only inputs are provided:

$$
{x_1, x_2, \dots, x_n}
$$

No labels $y$ exist.

---

## Goal

Identify:

- structure
- patterns
- similarity
- latent representations

---

## Main types

### 1. Clustering

Group similar data points together.

Examples:

- customer segmentation
- grouping similar documents

Common algorithms:

- K-means
- hierarchical clustering
- DBSCAN

---

### 2. Dimensionality reduction

Reduce number of features while preserving structure.

Examples:

- visualization
- noise reduction
- compression

Common methods:

- PCA (Principal Component Analysis)
- t-SNE
- UMAP

---

### 3. Density estimation (advanced)

Model probability distribution of data.

Examples:

- anomaly detection
- generative modeling

---

## Key intuition

> The model tries to discover “natural organization” in data without being told what to look for.

---

## Clustering intuition

> “Which points belong together?”

It relies on:

- distance
- similarity
- density

---

## Dimensionality reduction intuition

> “What is the simplest representation that preserves structure?”

It compresses data while retaining important variation.

---

## Evaluation challenge

No ground truth labels → harder to evaluate.

Common approaches:

- internal metrics (e.g., silhouette score)
- visual inspection
- downstream task performance

---

## When to use

- no labeled data available
- need to explore or understand data
- want to compress or visualize data
- detect hidden structure or anomalies

---

## Limitations

- results can be ambiguous
- sensitive to parameter choice
- harder to validate correctness
- may find patterns that are not meaningful

---

## Key intuition

> Unsupervised learning is about discovering structure, not predicting outcomes.

---

## Mental model

> Find patterns in data without being told what the “correct answer” is.

---

## Summary

> Unsupervised learning identifies hidden structure in unlabeled data through clustering, dimensionality reduction, or density modeling.
