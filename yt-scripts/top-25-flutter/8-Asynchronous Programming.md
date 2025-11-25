# 8 — Asynchronous Programming

How to handle async flows in Dart and Flutter.

- Futures and async/await
- Streams and StreamBuilder
- Handling loading/error states
- Canceling subscriptions and avoiding leaks

Practical patterns for robust async code.

```dart
// Future and async/await
Future<String> fetchItem() async {
	await Future.delayed(Duration(milliseconds: 200));
	return 'item';
}

void example() async {
	final item = await fetchItem();
	print(item);
}

// Stream example
Stream<int> counterStream(int to) async* {
	for (var i = 1; i <= to; i++) {
		await Future.delayed(Duration(milliseconds: 100));
		yield i;
	}
}

// Use with StreamBuilder in a widget to show progress
```
