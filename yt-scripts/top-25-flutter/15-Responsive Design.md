# 15 — Responsive Design

Approaches for building apps across form factors.

- MediaQuery and LayoutBuilder
- Breakpoints and adaptive layouts
- Packages like `flutter_screenutil`
- Handling touch vs mouse and different input methods

Testing responsive behavior across devices.

```dart
// Example using LayoutBuilder
class ResponsiveBox extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
		return LayoutBuilder(builder: (context, constraints) {
			if (constraints.maxWidth > 600) return Text('Tablet/Desktop layout');
			return Text('Mobile layout');
		});
	}
}
```
