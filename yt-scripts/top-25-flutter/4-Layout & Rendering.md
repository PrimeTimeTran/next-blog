# 4 — Layout & Rendering

Core layout primitives and the constraint-based layout model.

- Row, Column, Stack, Align
- Expanded, Flexible, SizedBox
- Constraints → Sizes → Positions
- Render pipeline basics to reason about performance

Practical tips for common layout problems.

```dart
// Simple layout using Row/Column and Expanded
class SampleLayout extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
		return Column(
			children: [
				Row(
					children: [
						Expanded(child: Container(color: Colors.red, height: 64)),
						Expanded(child: Container(color: Colors.green, height: 64)),
					],
				),
				SizedBox(height: 8),
				Align(alignment: Alignment.centerRight, child: Text('Aligned Right')),
			],
		);
	}
}
```
