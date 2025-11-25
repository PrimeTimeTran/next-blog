# 19 — Performance Optimization

Common performance bottlenecks and how to fix them.

- Avoid unnecessary rebuilds and expensive widgets
- Use const constructors where possible
- List virtualization and lazy building
- Use DevTools to profile and identify jank

Practical checklist for improving render performance.

```dart
// Use const where possible
const Text('Title');

// Virtualized lists
ListView.builder(itemBuilder: (_, i) => ListTile(title: Text('Item $i')));

// RepaintBoundary to isolate expensive paint
RepaintBoundary(child: SomeExpensiveWidget());
```
