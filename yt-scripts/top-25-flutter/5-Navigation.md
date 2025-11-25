# 5 — Navigation

Overview of navigation strategies in Flutter and when to use each.

- Imperative Navigator API (push/pop)
- Named routes
- Declarative routing (go_router, beamer)
- Deep linking and nested routes

Notes on state preservation and handling back gestures.

```dart
// Imperative navigation
Navigator.push(context, MaterialPageRoute(builder: (_) => DetailsPage()));

// go_router (declarative) example - route definition
/*
final GoRouter router = GoRouter(
	routes: [
		GoRoute(path: '/', builder: (_, __) => HomePage()),
		GoRoute(path: '/details', builder: (_, __) => DetailsPage()),
	],
);
*/
```
