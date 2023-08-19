---
title: 'React Native vs Flutter: Why Flutter is better than React Native'
date: '2023-08-06'
tags: ['Flutter', 'React Native']
draft: false
summary: 'Flutter development simplifies mobile & web development in many ways. In this post I explain why with a few examples and sources. Learn the things which make Flutter superior to React Native.'
bibliography: references-data.bib
canonicalUrl:
---

### How I feel using React Native(RN) and Javascript(JS)/TypeScript(TS)

![demo](https://s11.gifyu.com/images/Scj1d.gif)

"The best thing we can do today to JavaScript is to retire it"

> -- [JSON creator Douglas Crockford][1]

## Preface

I aim to explain why Flutter will one day make JS frameworks look outdated the same way JS frameworks did jQuery.

I'm going to use the word component/widget interchangeably because they share the same desired result, a
rendered piece of UI.

But there are differences.

Namely that widgets are instances classes whereas components are functions(mostly).

## Intro

Every program is a collection of variables, functions, classes, and modules.

Different programming languages and frameworks have taken different approaches to defining and organizing these constructs.

The following are the instances in which I see Dart/Flutter have done a better job than JS/React Native(RN).

### Language/Tooling

- Type safety
- Param definitions
- Go to definition

#### Type safety

Get warnings immediately when passing a wrong param/prop to a component/widget.

RN doesn't warn us when we use a prop that doesn't exist on a component.

![demo](/static/assets/why-not-rn.png)

Whereas Flutter warns us immediately if we try to do so with a widget.

![demo](/static/assets/why-flutter.png)

#### Param definitions

Param definitions & descriptions are superior in Flutter.

##### RN component props & descriptions are terse to a fault.

![demo](/static/assets/why-not-rn-0.png)

##### Whereas Flutter params & descriptions are helpfully concise.

![demo](/static/assets/why-flutter.gif)

#### Go to definition

Out of the box go to definition "just works", no need for additional configuration(more on that later).

### Simplified export/import syntax

- No ES5 vs ES6 syntax
- No default vs named export
- No longer need to export
- No missing imports

#### No need to explicitly name each export/import

Anyone who has worked with JS for some time has seen a file filled with many exports.

It contains Redux selectors, reducers, or actions; or perhaps it's a controller for a Node API.

It looks something like this.

Repeated, verbose code.

![demo](/static/assets/why-flutter-5.png)

##### In Flutter, all variables defined in one file are immediately available in the importing file.

![demo](https://s11.gifyu.com/images/SgHWj.gif)

#### No missing imports

We've all been there, we've imported something that we thought was "there", or perhaps misspelled what we wanted to import.

##### In RN/JS nothing prevents us from importing non existent variables.

![demo](https://s11.gifyu.com/images/Scj1W.gif)

##### Whereas in Flutter if we try to do that it'll complain immediately.

![demo](/static/assets/why-flutter-missing-import.png)

### Less jerry rigging to build

- app.config.js, eas.json, metro.config.js, babel.config.js, etc
  - Know what each of these files do?
  - Sorta?
  - Could you explain it in detail for a new team member?

![demo](/static/assets/why-not-rn-jerry-rigging.png)

- What about these?
- eslintrc.js, markdownlint.json, jsconfig.json, next.config.js, postcss.config.js, prettier.config.js, tailwind.config.js, vite.config.js?

  ![demo](/static/assets/more-configs.png)

### Style common UI elements in one place

There have been so many patterns for styling evangelized over the years.

Thus it's hard to pick which pattern to cite as an example.

That being said, we all know RN doesn't provide style by default.

How grueling it is to have to style each and every screen, ui component, container, card...

When we have to style each component/screen individually, we end up with styles scattered everywhere in our codebase.

That leads to the problem of having repeating the same styles in multiple places because we/new team members aren't aware they exist elsewhere.

![demo](/static/assets/why-flutter-6.png)

##### In Flutter the solution is to use a set of commonly used theme elements styled in one place, the theme

![demo](https://s11.gifyu.com/images/Scj1u.gif)

### Performance

There have been many case studies over the years on the speed of Dart vs JS.

- [Benchmarks are better](https://www.orientsoftware.com/blog/flutter-vs-react-native-performance/#:~:text=Similar%20to%20the%20Android%20performance,GPU%20usage%20of%2019.56%20percent.)

### Community

Flutter now has more stars than RN on Github.

- Flutter more [popular than RN now](https://www.frontendmag.com/insights/flutter-vs-react-native/)

### Closing thoughts

- Some might argue that the tooling problem in JS is solved with TS. I'd argue that introduces config complexity. Magnifying the "jerry rigging" problem mentioned.

- Dart code is more verbose. See above named/default export syntax as well as the corresponding import/export syntax.

- "Learning Dart can be daunting task for beginners". Checkout [this repo](https://github.com/denysdovhan/wtfjs) for examples of less than steller JS behaviors.

Just a few examples, not going to dive into async/await, then/catch, prototypes, etc.

```js
parseInt(0.000001) // 0
parseInt(0.0000001) // 1

parseInt('f*ck') // NaN
parseInt('f*ck', 15) // NaN
parseInt('f*ck', 16) // 15
parseInt('f*ck', 17) // 15
parseInt('f*ck', 18) // 15
```

[1]: https://devclass.com/2022/08/04/retire_javascript_says-json-creator-douglas-crockford/
