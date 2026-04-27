---
tags:
  - calculus
  - calc-2
  - polar-coordinates
  - geometry
---

# 📘 Polar Coordinates

Polar coordinates represent points in the plane using a **distance and an angle**, instead of $x$ and $y$.

---

# 🧠 Core Idea

> Instead of “how far left/right and up/down,” we describe points by “how far from the origin and in what direction.”

---

# 📊 Definition

A point is written as:

$$
(r, \theta)
$$

Where:

- $r$ = distance from origin
- $\theta$ = angle from positive $x$-axis

---

# 🔁 Conversion to Cartesian

## Polar → Cartesian

$$
x = r \cos(\theta)
$$

$$
y = r \sin(\theta)
$$

---

## Cartesian → Polar

$$
r = \sqrt{x^2 + y^2}
$$

$$
\theta = \tan^{-1}\left(\frac{y}{x}\right)
$$

---

# 📈 Geometric Meaning

- $r$ controls how far from the origin
- $\theta$ controls direction

So a single point can be seen as:

> “walk out $r$ units at angle $\theta$”

---

# 🔄 Non-uniqueness

Polar coordinates are not unique:

- $(r, \theta)$ is equivalent to $(r, \theta + 2\pi)$
- $(r, \theta)$ is equivalent to $(-r, \theta + \pi)$

---

# 📊 Why Polar Coordinates Matter

They simplify problems involving:

- circles
- spirals
- rotational symmetry
- radial motion

---

# 📈 Polar Curves

A function in polar form:

$$
r = f(\theta)
$$

represents a curve traced as $\theta$ changes.

---

# 🧮 Area in Polar Coordinates

Area element:

$$
dA = \frac{1}{2} r^2 d\theta
$$

Used to compute:

$$
\text{Area} = \int \frac{1}{2} r^2 \, d\theta
$$

---

# 🧠 Key Insight

> Polar coordinates describe geometry in terms of rotation instead of position.

---

# 🧭 Mental Model

Think of it as:

> “distance + direction” instead of “grid position”

---

# 📌 Summary

- Uses $(r, \theta)$ instead of $(x, y)$
- $r$ = distance, $\theta$ = angle
- Converts via trig relationships
- Best for circular or radial symmetry problems
