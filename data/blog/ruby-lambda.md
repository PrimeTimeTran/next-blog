---
draft: false
date: '2022-10-24'
title: 'How to create a closure in Ruby'
tags: ['functional programming', 'programming fundamentals', 'ruby']
summary: 'How to create a function which has access to variables defined outside its block scope'
bibliography: references-data.bib
canonicalUrl:
---

## How to create a closure using Ruby Lambdas

### Intro

The following code throws an error because ruby's scoping.

```ruby {4} showLineNumbers
def outer()
  foo = 42
  def inner()
    puts foo
  end
  inner
end
```

`NameError (undefined local variable or method 'foo' for main:Object)`

To fix it we can use a lambda. We define the lambda using a `do/end` block.
We then call it with `.call`.

```ruby {3, 6} showLineNumbers
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

```ruby {3, 6} showLineNumbers
def outer(x)
  foo = 42
  inner = lambda do |x|
    puts foo, x
  end
  inner.call(x)
end
```

And finally, if you want to pass a value into your closure, you do the following.

```ruby {1, 6} showLineNumbers
def outer(y)
  foo = 42
  inner = lambda do |x|
    puts foo + x
  end
  inner.call(y)
end
```

This technique is useful in situations where we want to define functions
which have access to variables without having to pass the variables explicitly.

For example, in solving [Leetcode problem #200 number of Islands](https://loi-tran-blog.netlify.app/blog/leetcode/leetcode-7)
