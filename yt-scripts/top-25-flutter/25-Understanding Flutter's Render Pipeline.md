# 25 — Understanding Flutter's Render Pipeline

A conceptual guide to Widgets → Elements → RenderObjects.

- Widget, Element and RenderObject responsibilities
- The rebuild → layout → paint phases
- How to reason about repaint boundaries and repaint cost
- Why this knowledge makes you better at optimization

Recommended reading and exercises.

```dart
// Use RepaintBoundary to reduce repaint scope
class ExpensivePaint extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
		return RepaintBoundary(
			child: CustomPaint(painter: MyPainter()),
		);
	}
}

class MyPainter extends CustomPainter {
	@override
	void paint(Canvas canvas, Size size) {
		// expensive drawing
	}
	@override
	bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
```

Understanding when layout and paint run helps you structure widgets to minimize expensive work.
