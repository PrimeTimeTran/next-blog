# 10 — JSON Serialization

Options and patterns for serializing and deserializing JSON.

- Manual `fromJson`/`toJson`
- `json_serializable` and build_runner
- Freezed for immutable data classes (optional)
- Trade-offs between convenience and control

Examples for typical API models.

```dart
// Manual fromJson
class User {
	final int id;
	final String name;
	User({required this.id, required this.name});
	factory User.fromJson(Map<String, dynamic> j) => User(id: j['id'], name: j['name']);
}

// json_serializable (annotation-based) is preferred for larger projects to avoid boilerplate.
```
