# Convolutional Neural Networks (CNNs) — Atom

## Definition

Convolutional Neural Networks (CNNs) are deep learning models designed to process grid-like data (such as images) by learning spatial hierarchies of features through convolution operations.

---

## Core Idea

> CNNs learn visual patterns by sliding small learnable filters over input data to detect local features, then progressively combining them into higher-level representations.

---

## Why CNNs exist

Fully connected networks fail on images because:

- too many parameters
- ignore spatial structure
- lose locality information

CNNs fix this by exploiting:

> **spatial locality + parameter sharing**

---

## Core Operation: Convolution

A filter (kernel) slides over the input and computes:

$$
y(i, j) = \sum_{m,n} x(i+m, j+n) \cdot w(m,n)
$$

Where:

- $x$ = input image
- $w$ = filter (kernel)
- output = feature map

---

## Key Components

### 1. Filters (Kernels)

- small learnable matrices
- detect patterns (edges, textures, shapes)

---

### 2. Feature Maps

- output of convolution operation
- represent detected patterns

---

### 3. Stride

- step size of filter movement
- controls spatial downsampling

---

### 4. Padding

- adds borders to preserve spatial size
- helps retain edge information

---

### 5. Activation Function

- usually ReLU
- introduces non-linearity:
  $$
  \max(0, x)
  $$

---

## Core Architecture Flow

1. Input image
2. Convolution layers (feature extraction)
3. Nonlinear activation
4. Pooling layers (downsampling)
5. Fully connected layers (decision making)

---

## Pooling

Reduces spatial dimensions while preserving key information.

Common types:

- Max pooling (most common)
- Average pooling

---

## Key Idea

> CNNs build hierarchical feature detectors: early layers detect edges, mid layers detect shapes, and deep layers detect complex objects.

---

## Why CNNs work well

They exploit:

### 1. Local connectivity

- nearby pixels are related

### 2. Parameter sharing

- same filter used across image

### 3. Translation invariance

- object recognition works regardless of position

---

## Strengths

- efficient for image data
- fewer parameters than fully connected networks
- strong spatial feature learning
- widely applicable in vision tasks

---

## Limitations

- less effective on non-grid data
- weak at modeling long-range relationships
- replaced in some domains by vision transformers

---

## Applications

- image classification
- object detection
- facial recognition
- medical imaging
- video analysis

---

## Intuition

> A CNN is a system of learned pattern detectors that scan across an image and build increasingly abstract representations of what is present.

---

## Relationship to Other Models

- Transformers → global attention instead of local filters
- GNNs → graph structure instead of grid structure
- RNNs → sequence structure instead of spatial structure
- Fully connected networks → no spatial inductive bias

---

## Summary

Convolutional Neural Networks are deep learning architectures that process spatial data by applying learnable filters across local regions of input data, enabling hierarchical feature extraction from simple patterns like edges to complex structures like objects, while efficiently leveraging spatial locality and parameter sharing.
