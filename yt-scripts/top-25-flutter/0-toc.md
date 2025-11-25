## **1. Dart Fundamentals (Master This First)**

- Variables, types, functions
- Classes, inheritance, mixins
- Futures, Streams, async/await
- Null safety
  If Dart confuses you, Flutter will destroy you. Know Dart well.

---

## **2. Flutter Widget Tree Mental Model**

Understand _everything is a widget._
Composition > inheritance.
If this concept clicks, most of Flutter will feel easy.

---

## **3. Stateless vs Stateful Widgets**

- When to choose which
- How state rebuilds work
- How build() should be cheap and _pure_

---

Understanding state is central to building Flutter apps. Below are concrete examples showing three common patterns:

- Stateless widgets (no mutable state)
- Stateful widgets using local state (`setState`)
- Externalized state using a `ChangeNotifier` (Provider) — recommended for app-wide or shared state

---

## **4. Layout & Rendering**

You must know:

- Column, Row, Stack, Align
- Expanded, Flexible
- Constraints → Sizes → Positions
  Flutter layout is constraint-based; understand it deeply.

---

## **5. Navigation**

Know all three approaches:

1. `Navigator.push()` / `pop()` (basic)
2. Named routes
3. Declarative routing (`go_router` or `beamer`)

Declarative routing is what real apps use.

---

## **6. State Management**

Learn these in order:

1. **Provider**
2. **Riverpod** (preferred in 2025)
3. **Bloc** (enterprise apps)

Don’t touch `setState()` for app-wide data.

---

## **7. Forms & Validation**

- TextEditingController
- Form + TextFormField
- Real-time validation
- Focus management

---

## **8. Asynchronous Programming**

- Handling loading states
- Futures, async/await
- Streams
- Canceling subscriptions

---

## **9. Handling APIs**

You should confidently:

- Use `dio` or `http`
- Understand REST, JSON
- Create data models
- Error handling & retries
- Pagination

---

## **10. JSON Serialization**

Know at least one method:

- `json_serializable` (industry standard)
- Manual factory constructors

---

## **11. Dependency Injection**

- Provider
- Riverpod
- GetIt (service locator)

DI makes testing and scaling easier.

---

## **12. Local Storage**

Learn:

- SharedPreferences
- Hive
- SQLite (via `drift`)
- Secure storage

---

## **13. Animations**

At least understand:

- Implicit animations (AnimatedContainer)
- Explicit animations (AnimationController)
- Hero animations

Great UI requires animations.

---

## **14. Theming + Styling**

- Light + dark themes
- Custom colors
- Typography
- Theme extensions

Consistency is everything.

---

## **15. Responsive Design**

- MediaQuery
- LayoutBuilder
- Breakpoints
- `flutter_screenutil` or similar
  Mobile → Tablet → Desktop → Web all require different thinking.

---

## **16. Error Handling**

You need a plan for:

- API errors
- Exceptions
- Fallback UI
- Debug vs release behavior

---

## **17. Testing**

You don’t need to be perfect, just know basics:

- Unit tests
- Widget tests
- Integration tests

---

## **18. Project Structure & Architecture**

Know one well:

- MVVM
- Clean Architecture
- Feature-first folder structure

Avoid “everything in one folder” apps.

---

## **19. Performance Optimization**

- Avoid unnecessary rebuilds
- Use const constructors
- Lazy loading lists
- Profile using DevTools
- RepaintBoundary

---

## **20. Platform Integration**

You should be able to:

- Write platform channels (Swift/Kotlin)
- Use packages that bridge to native code
- Understand how Flutter engine talks to the OS

---

## **21. Build & Deployment**

Know how to:

- Create release builds
- Code sign iOS + Android
- Deploy to TestFlight + Play Store
- Handle versioning

---

## **22. Push Notifications**

Using:

- Firebase Messaging
- Notification channels (Android)
- Foreground/Background handling

---

## **23. Firebase Ecosystem**

Common tools:

- Auth
- Firestore
- Crashlytics
- Analytics
- Cloud Storage

Most consumer apps use Firebase.

---

## **24. Debugging & DevTools**

Be fluent with:

- Hot reload vs hot restart
- DevTools: inspector, memory, performance
- Logging and breakpoints

---

## **25. Understanding Flutter’s Render Pipeline**

At a minimum:

- Widgets → Elements → RenderObjects
- How the rebuild, layout, and paint phases work
  This is what separates juniors from seniors.
