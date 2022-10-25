---
title: 'How to create a closure in Ruby'
date: '2022-10-24'
tags: ['Ruby']
draft: false
summary: 'Lambda'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## How to create a closure using Ruby Lambdas

### Intro

The following code throws an error because ruby's scoping.

```ruby
def outer()
  foo = 42
  def inner()
    puts foo
  end
  inner
end
```

`NameError (undefined local variable or method 'foo' for main:Object)`s

To fix it we can use a lambda

```ruby
def outer()
  foo = 42
  inner = lambda do
    puts foo
  end
  inner.call
end
```

Define the lambda and call it.

If we need to pass it an argument we use the following syntax.

```ruby
def outer(x)
  foo = 42
  inner = lambda do |x|
    puts foo, x
  end
  inner.call(x)
end
```

And finally, if you want to pass a value into your closure, you do the following.

```ruby
def outer(y)
  foo = 42
  inner = lambda do |x|
    puts foo + x
  end
  inner.call(y)
end
```
