---
draft: false
date: 2025-10-15
title: 'Handling Nullable Fields in Dart: Cleaner Models for Lists and Details'
summary: 'Learn how to avoid messy nullable fields in Dart models by using inheritance and composition. Discover best practices for structuring your data classes for both list and detail views, improving code clarity and maintainability.'
tags: ['dart', 'architecture', 'best practices', 'nullable']
---

# Introduction

Strongly typed languages like Dart help us to prevent bugs by demanding we provide necessary parameters
when we initialize a new instance of a class.

However this an be cumbersome in a few situations.

Imagine you have a list view screen for articles. Articles come with title, subtitle, caption, date and possibly more on this screen.

However on the detailed view page(viewing an individual article) the articles come with more fields(comments[], related_articles[], etc)

If we want to reuse our class definition for the resource(along with the many other CLEAN Architecture pillars) we'd find ourselves
in a difficult situation.

1. Allow nullable fields(for list view page). This sprinkles `?` throughout our code and makes it less elegant/maintainable.
2. Use composition. We define base classes which are extended in detail views.

```dart
class Article {
  final String id;
  final String title;
  // ...other list fields

  Article({required this.id, required this.title});
}

class ArticleDetail extends Article {
  final String body;
  final List<String> tags;
  // ...other detail fields

  ArticleDetail({
    required String id,
    required String title,
    required this.body,
    required this.tags,
  }) : super(id: id, title: title);
}
```

Personally, I find that option 2 is the best.

1. Use a Base Class + Extension/Detail Class

   - Define a base Article entity/model for the common fields (used in lists).
   - Define an ArticleDetail class that extends Article and adds extra fields (used in detail views).
   - This avoids lots of nullable fields and keeps your code clear.

2. Use Composition (Optional)

   - Have a base Article and a separate ArticleExtra class for details.
   - The detail page fetches and attaches the extra info as needed.

3. Use Factory Constructors for Parsing

   - When parsing from JSON, use a factory to decide which class to instantiate based on available fields.

## Why not just use nullable fields?

- Too many ? fields make code harder to read and maintain.
- You lose type safety and clarity about which fields are always present.

## Why not just one class?

- It blurs the contract: you don’t know which fields are always available.
- It makes bugs more likely (accessing a field that’s not loaded).

# Conclusion

Nullable fields feel like an anti-pattern in strongly typed languages. It's best to avoid them altogether by using a composition approach.
