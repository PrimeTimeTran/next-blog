---
title: 'Object Oriented Programming'
date: '2022-10-07'
tags: ['OOP']
draft: true
summary: 'The principles which guide object oriented programming'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## 1. Four OOP principles:

### Intro

Four OOP principles:

Encapsulation:
_ Refers to bundling data with methods that can operate on that data within a class.
_ It’s the idea of hiding data within a class, preventing anything outside that class directly interacting with it.
_ Keeps the programmer in control of access to data.
_ Prevents the programmer from ending up in any strange or unwanted states.

Abstraction:
_ Refers to the idea to only showing essential details and keeping everything else hidden.
_ The classes you create should act like your car. Users of your classes should not worry
about the inner details of those classes. \* This is very important when working on your program incrementally.

Inheritance: \* Is the principle that allows classes to derive from other classes.

Polymorphism:
_ Describes methods that are able to take on many forms.
_ Allows methods to take on many different forms.
_ Be sure that you are calling the correct form of the method.
_ There are two types of polymorphism:
** Dynamic polymorphism: - Occurs during the runtime of the program. - Describes when a method signature is in both subclass and a superclass. - The methods share the same name but have different implementation. - The implementation of the subclass that the object is an instance of
overrides that of the superclass.
** Static polymorphism: - Occurs during compile-time rather than during runtime. - Refers to when multiply methods with the same name but different arguments
are defined in the same class. - The parameters are different type or taken in different order. - This is known as method overloading.
