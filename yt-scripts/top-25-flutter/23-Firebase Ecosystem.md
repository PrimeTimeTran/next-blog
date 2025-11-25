# 23 — Firebase Ecosystem

Common Firebase tools used in Flutter apps.

- Authentication and user management
- Firestore and Realtime Database
- Crashlytics and performance monitoring
- Cloud Functions and storage

When Firebase fits and when to consider alternatives.

```dart
// Firebase Auth example (email/password)
final userCredential = await FirebaseAuth.instance.signInWithEmailAndPassword(
	email: 'alice@example.com',
	password: 'password123',
);

// Firestore simple read
final snapshot = await FirebaseFirestore.instance.collection('posts').get();
print('Got ${snapshot.docs.length} docs');
```
