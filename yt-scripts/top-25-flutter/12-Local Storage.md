# 12 — Local Storage

When and how to persist data locally in Flutter apps.

- SharedPreferences for simple key/value
- Hive for lightweight NoSQL storage
- SQLite via `drift` for relational needs
- SecureStorage for sensitive data

Data migration and schema versioning notes.

```dart
// SharedPreferences example
final prefs = await SharedPreferences.getInstance();
await prefs.setString('token', 'abc');
final token = prefs.getString('token');

// Hive example (simplified)
// await Hive.initFlutter();
// var box = await Hive.openBox('settings');
// box.put('darkMode', true);
```
