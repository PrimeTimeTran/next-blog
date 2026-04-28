Define Person class and initialize an instance.

```dart
class Person {
  Person() {
	  print('New Person');
  }
}

void main() {
  Person p = Person();
  print(p);
}

// New Person
// Instance of 'Person'
```

Define Person class with role property & initialize it with a value.

```dart
class Person {
  String? role;
  Person(String role) {
	  this.role = role;
  }
}

void main() {
  Person p = Person('developer');
  print(p.role);
}
// developer
```

Make role optional. Assign default value to role.

```dart
class Person {
  String? role;
  Person([String? role]) {
      this.role = role ?? 'Fight';
  }
}

void main() {
  Person p = Person();
  print(p.role);
}
```

Add a second optional property to Person.

```dart
class Person {
	int? age;
	String? role;

	Person([String? role, int? age]) {
      this.role = role ?? 'Fight';
      this.age = age ?? 21;
	}
}

void main() {
  Person p = Person();
  print(p.role);
  print(p.age);
}
```
