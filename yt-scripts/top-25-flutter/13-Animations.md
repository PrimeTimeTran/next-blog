# 13 — Animations

Animation techniques that make apps feel polished.

- Implicit animations (AnimatedContainer, AnimatedOpacity)
- Explicit animations with AnimationController
- Tween, Curves, and AnimationBuilder
- Hero animations and physics-based motion

Performance tips for smooth animations.

```dart
// Implicit animation
AnimatedContainer(
	duration: Duration(milliseconds: 300),
	width: selected ? 200 : 100,
	height: 50,
	color: selected ? Colors.blue : Colors.grey,
);

// Explicit animation skeleton
class MyAnimated extends StatefulWidget { @override _MyAnimatedState createState() => _MyAnimatedState(); }
class _MyAnimatedState extends State<MyAnimated> with SingleTickerProviderStateMixin {
	late AnimationController _ctrl;
	@override void initState() { super.initState(); _ctrl = AnimationController(vsync: this, duration: Duration(seconds:1)); }
	@override void dispose() { _ctrl.dispose(); super.dispose(); }
	@override Widget build(BuildContext context) => FadeTransition(opacity: _ctrl, child: Text('Hello'));
}
```
