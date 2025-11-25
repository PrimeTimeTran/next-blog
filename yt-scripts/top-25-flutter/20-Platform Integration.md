# 20 — Platform Integration

How to integrate Flutter with native platform features.

- Platform channels (MethodChannel) basics
- Using existing plugins vs writing native code
- Handling permissions and platform-specific lifecycle
- Packaging and communicating with native SDKs

When to push logic to native side.

```dart
// Basic platform channel example
static const platform = MethodChannel('com.example/app');

Future<String?> getNativeData() async {
	try {
		final result = await platform.invokeMethod('getData');
		return result as String?;
	} on PlatformException catch (e) {
		return 'Failed: ${e.message}';
	}
}
```
