# 16 — Error Handling

Strategies for reliable error handling and recovery.

- Catching and surfacing API errors
- Global error handlers (FlutterError.onError)
- Fallback UI and user-friendly messages
- Debug vs release behavior and reporting

Integrate with crash reporting (Crashlytics).

```dart
// try/catch for API call
try {
	final data = await fetchData();
} catch (e, st) {
	// log and surface user-friendly message
	debugPrint('Error: $e');
}

// Global handler
FlutterError.onError = (details) {
	FlutterError.dumpErrorToConsole(details);
	// send to reporting service
};
```
