# 11 — Dependency Injection

Why DI matters and common approaches in Flutter.

- Provider-based injection
- Riverpod's providers as DI primitives
- GetIt service locator
- Testability and decoupling benefits

Quick examples for wiring services and repositories.

```dart
// GetIt example
final getIt = GetIt.instance;

void setup() {
	getIt.registerLazySingleton<ApiClient>(() => ApiClient());
}

// Usage
// final api = getIt<ApiClient>();
```
