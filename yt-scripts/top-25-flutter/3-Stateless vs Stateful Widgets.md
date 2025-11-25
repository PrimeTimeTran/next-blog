# 3 — Stateless vs Stateful Widgets

When to use StatelessWidget vs StatefulWidget and examples of local vs shared state.

- StatelessWidget: UI driven by constructor inputs
- StatefulWidget: private ephemeral state (use setState for simple cases)
- When to lift state up and externalize (Provider / Riverpod / Bloc)

Includes short code examples for each pattern.

```dart
// Stateless example
class Greeting extends StatelessWidget {
	final String name;
	const Greeting({required this.name, Key? key}) : super(key: key);
	@override
	Widget build(BuildContext context) => Text('Hello, $name');
}

// Stateful example
class Counter extends StatefulWidget {
	const Counter({Key? key}) : super(key: key);
	@override
	_CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
	int _n = 0;
	void _inc() => setState(() => _n++);
	@override
	Widget build(BuildContext context) => Column(children: [Text('$_n'), ElevatedButton(onPressed: _inc, child: Text('+'))]);
}

// Externalized state (Provider) - skeleton example
/*
final cart = ChangeNotifierProvider((_) => CartModel());
class CartWidget extends ConsumerWidget {
	@override
	Widget build(BuildContext context, ref) {
		final items = ref.watch(cart).items;
		return Text('Items: ${items.length}');
	}
}
*/
```
