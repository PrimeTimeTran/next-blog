---
title: 'Object Oriented Programming'
date: '2021-10-07'
tags: ['OOP']
draft: false
summary: 'The principles which guide object oriented programming'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

### Intro

Four OOP principles:

## Decomposition

It's not always the right answer to decompose. Sometimes the best answer is to wait; learn more.

### Negatives

- Software/requirements will change. Thus we cannot anticipate where we'll need to "cut". Do not draw boundaries too early.

  - Wrong abstraction is worse than no abstraction.
  - Programs evolve and tech debt builds up. Wrong decisions get magnified over time.
  - Waiting and seeing, learning more has a lot of value.

- Decomposing requires naming of all steps. It's really hard when we don't know the entire list of requirements.
  - If we name it incorrectly, people might begin to use it incorrectly.

## Encapsulation

Objects should know about themselves and no more than what they need to to collaborate with others.

Encapsulation refers to the idea to only showing essential details and keeping everything else hidden.
The classes you create should act like your car. Users of your classes should not worry
about the inner details of those classes. \* This is very important when working on your program incrementally.

> Why is this bad?

```js
const bike = {
  wheels: [
    { psi: 200, diameter: 22 },
    { psi: 200, diameter: 22 },
    { psi: 200, diameter: 22 },
    { psi: 200, diameter: 22 },
  ],
}

bike.inflateWheels = function () {
  this.forEach((wheel) => (wheel.psi += 50))
}
```

Data inconsistency when something outside of class can change a property of an object

What if other team is in control of wheels and they switch from imperial to metric?
What if we need to have side effects when wheels are inflated?

```js
const bike = {
  wheels: [
    { psi: 200, diameter: 22 },
    { psi: 200, diameter: 22 },
    { psi: 200, diameter: 22 },
    { psi: 200, diameter: 22 },
  ],
}

bike.inflateWheels = function () {
  this.forEach((wheel) => wheel.inflate())
}
```

- Send message
- Allows wheel to define anything that will ever happen when it's inflated(callbacks, validatations, rescues.)

- Refers to bundling data with methods that can operate on that data within a class.
- It’s the idea of hiding data within a class, preventing anything outside that class directly interacting with it.
- Keeps the programmer in control of access to data.
- Prevents the programmer from ending up in any strange or unwanted states.

## Inheritance

## Polymorphism

- Describes methods that are able to take on many forms.
- Allows methods to take on many different forms.
- Be sure that you are calling the correct form of the method.
- There are two types of polymorphism:
  ** Dynamic polymorphism: - Occurs during the runtime of the program. - Describes when a method signature is in both subclass and a superclass. - The methods share the same name but have different implementation. - The implementation of the subclass that the object is an instance of
  overrides that of the superclass.
  ** Static polymorphism: - Occurs during compile-time rather than during runtime. - Refers to when multiply methods with the same name but different arguments
  are defined in the same class. - The parameters are different type or taken in different order. - This is known as method overloading.
