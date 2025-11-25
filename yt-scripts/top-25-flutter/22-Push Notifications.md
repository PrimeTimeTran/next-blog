# 22 — Push Notifications

Push notification patterns and best practices.

- Firebase Cloud Messaging basics
- Notification channels and importance on Android
- Handling foreground vs background messages
- Deep links and notification action handling

Testing and privacy considerations.

```dart
// Firebase messaging onMessage example
FirebaseMessaging.onMessage.listen((RemoteMessage message) {
	print('Received message: ${message.notification?.title}');
});
```
