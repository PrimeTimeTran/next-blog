# 14 — Theming + Styling

Design systems and consistent theming in Flutter.

- ThemeData and Theme extensions
- Light/dark themes and dynamic colors
- Typography and design tokens
- Reusable style primitives

How to keep themes consistent across large apps.

```dart
// ThemeData example
final ThemeData appTheme = ThemeData(
	primarySwatch: Colors.indigo,
	textTheme: TextTheme(bodyText1: TextStyle(fontSize: 16)),
);

// Using Theme
// Text('Hello', style: Theme.of(context).textTheme.bodyText1)
```
