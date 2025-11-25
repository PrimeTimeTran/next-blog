# 1 — Dart Fundamentals (Master This First)

A concise reference to the core Dart language features every Flutter developer should know.

- Variables and types
- Functions and higher-order functions
- Classes, constructors, inheritance and mixins
- Futures, Streams, async/await
- Null safety and sound types

Why it matters: Dart fundamentals are the foundation — poor understanding makes Flutter development much harder.

## Basic types (Hogwarts-themed examples)

```dart
int houses = 4;           // Gryffindor, Hufflepuff, Ravenclaw, Slytherin
double platform = 9.75;   // Platform 9 3/4

// Strings
String school = 'Hogwarts';
String spell = 'Expelliarmus';

// Boolean
bool isWizard = true;

// Runes and symbols (for completeness)
final Runes wandRunes = Runes('\u{1F52E}');

// Const vs final
const String castleType = 'Stone';
final DateTime createdAt = DateTime.now();
```

## Collections

```dart
// Lists
List<String> students = ['Harry', 'Hermione', 'Ron'];
students.add('Luna');

// Sets (unique values)
Set<String> housesSeen = {'Gryffindor', 'Slytherin'};

// Maps
Map<String, int> points = {'Gryffindor': 482, 'Slytherin': 400};
points['Ravenclaw'] = 350;
```

## Null safety

```dart
// Non-nullable by default
String headmaster = 'McGonagall';

// Nullable type
String? owlName; // might be null until assigned

// late for lazy initialization when you guarantee assignment before use
late String secretPassage;
```

## Classes, constructors and inheritance

```dart
class Wizard {
	final String name;
	int powerLevel;

	Wizard(this.name, {this.powerLevel = 10});

	void cast(String spell) {
		print('$name casts $spell');
	}
}

class Auror extends Wizard {
	Auror(String name) : super(name, powerLevel: 15);

	void arrest(String villain) {
		print('$name arrests $villain');
	}
}

void exampleClasses() {
	final harry = Wizard('Harry', powerLevel: 12);
	final madam = Auror('Madam Taskin');
	harry.cast('Expelliarmus');
	madam.arrest('Dark wizard');
}
```

## Mixins and Interfaces

```dart
mixin Flying {
	void fly() => print('Soaring above the grounds');
}

class MagicalCreature with Flying {
	final String name;
	MagicalCreature(this.name);
}

abstract class Potion {
	String brew();
}

class Polyjuice implements Potion {
	@override
	String brew() => 'A complicated potion';
}
```

## Enums and pattern usage

```dart
enum House { Gryffindor, Hufflepuff, Ravenclaw, Slytherin }

void sortStudent(House h) {
	switch (h) {
		case House.Gryffindor:
			print('Bravery');
			break;
		default:
			print('Other traits');
	}
}
```

## Generics and typedefs

```dart
class Vault<T> {
	final List<T> _items = [];
	void store(T item) => _items.add(item);
	List<T> get items => List.unmodifiable(_items);
}

typedef Spell = String Function(String target);

Spell makeSpell(String incantation) => (target) => '$incantation at $target';
```

## Async: Futures and Streams (magical event stream)

```dart
// Periodic stream of owl deliveries
Stream<String> owlDeliveries() async* {
	final names = ['Letter from Dumbledore', 'Parcel', 'Howler'];
	for (final n in names) {
		await Future.delayed(Duration(milliseconds: 200));
		yield n;
	}
}

Future<void> listenOwl() async {
	await for (final msg in owlDeliveries()) {
		print('Owl delivered: $msg');
	}
}
```

## Useful tips

- Prefer `final` for variables that don't change; use `const` for compile-time constants.
- Keep functions small and prefer pure functions when possible.
- Use immutable data structures for predictable UI code.

---
