# 6 — State Management

Compare popular state-management approaches and recommended learning order.

- Provider (start here)
- Riverpod (modern, recommended)
- Bloc (enterprise patterns)
- When to use setState vs external state

Trade-offs and simple migration tips.

```dart
// Provider example
class CounterModel extends ChangeNotifier {
	int _count = 0;
	int get count => _count;
	void inc() { _count++; notifyListeners(); }
}

// Riverpod example (simple)
/*
final counterProvider = StateNotifierProvider<CounterNotifier, int>((ref) => CounterNotifier());
class CounterNotifier extends StateNotifier<int> { CounterNotifier(): super(0); void inc() => state++; }
*/
```
