# 2 — Flutter Widget Tree Mental Model

Explains the "everything is a widget" philosophy and why composition beats inheritance.

- Widgets, Elements, RenderObjects (overview)
- Building UIs by composing small widgets
- Immutability of widget configuration vs mutable state in State objects

Short example and best-practice notes included in the master checklist.

```dart
// Compose small widgets into bigger ones
class AvatarLabel extends StatelessWidget {
	final String label;

	const AvatarLabel(this.label, {Key? key}) : super(key: key);

	@override
	Widget build(BuildContext context) {
		return Row(
			children: [
				CircleAvatar(child: Icon(Icons.person)),
				SizedBox(width: 8),
				Text(label),
			],
		);
	}
}

// Using composition keeps widgets small, testable and reusable.
```
