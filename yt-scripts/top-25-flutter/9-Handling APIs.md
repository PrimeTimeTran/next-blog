# 9 — Handling APIs

Best practices for HTTP and API integration.

- Using `dio` or `http`
- JSON parsing and data models
- Error handling, retries, and exponential backoff
- Pagination and incremental loading

Security: token storage and secure transport.

```dart
// Using http package
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> fetchPosts() async {
	final res = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
	if (res.statusCode == 200) {
		final List data = jsonDecode(res.body);
		print('Got ${data.length} posts');
	} else {
		throw Exception('API error');
	}
}
```
