# 17 — Testing

Testing pyramid and practical testing strategies.

- Unit tests for business logic
- Widget tests for UI components
- Integration (end-to-end) tests
- Mocking, dependency injection for testability

CI tips for running Flutter tests.

```dart
// Unit test (example)
void main() {
	test('sum', () {
		expect(1 + 2, equals(3));
	});
}

// Widget test skeleton
/*
testWidgets('counter increments', (tester) async {
	await tester.pumpWidget(MyApp());
	expect(find.text('0'), findsOneWidget);
	await tester.tap(find.byIcon(Icons.add));
	await tester.pump();
	expect(find.text('1'), findsOneWidget);
});
*/
```
