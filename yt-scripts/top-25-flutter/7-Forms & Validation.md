# 7 — Forms & Validation

Practical form patterns and UX considerations.

- TextEditingController and Form widgets
- TextFormField with validators
- Real-time validation and debouncing
- Focus management and keyboard handling

Accessibility and UX tips for forms.

```dart
final _formKey = GlobalKey<FormState>();

Form(
	key: _formKey,
	child: Column(children: [
		TextFormField(
			validator: (v) => (v == null || v.isEmpty) ? 'Required' : null,
		),
		ElevatedButton(
			onPressed: () {
				if (_formKey.currentState?.validate() ?? false) {
					// submit
				}
			},
			child: Text('Submit'),
		)
	]),
)
```
