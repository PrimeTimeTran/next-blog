---
title: How to build TikTok with Flutter? Part 1
date: '2022-08-07'
tags: ['Flutter', 'Tutorial']
draft: false
summary: 'The steps I would take to clone TikTok using Flutter. Including project structure, navigation, code snippets & more.'
---

## How to build TikTok with Flutter?

In this tutorial series we'll clone TikTok using [Flutter](https://flutter.dev/).

![TikTok Demo](https://s8.gifyu.com/images/demo97fa6857e6769736.gif)

Along the way we'll learn how to use the core widgets of Flutter.

- [Col](https://api.flutter.dev/flutter/widgets/Column-class.html)
- [Row](https://api.flutter.dev/flutter/widgets/Row-class.html)
- [Material](https://api.flutter.dev/flutter/material/Material-class.html)
- [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html)
- [AppBar](https://api.flutter.dev/flutter/material/AppBar-class.html)
- [PageView](https://api.flutter.dev/flutter/widgets/PageView-class.html)
- [Drawer](https://api.flutter.dev/flutter/material/Drawer-class.html)
- [BottomNavigationBar](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html)
  - [BottomNavigationBarItem](https://api.flutter.dev/flutter/widgets/BottomNavigationBarItem-class.html)
- [SafeArea](https://api.flutter.dev/flutter/widgets/SafeArea-class.html)
- [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)
- [GestureDetector](https://api.flutter.dev/flutter/widgets/GestureDetector-class.html)

## Create New Project

Instantiate a new project and run it.

```bash
flutter create fluttok
cd fluttok
flutter run
```

We're using Flutter `3.0.2`, Dart `2.17.3` • DevTools `2.12.2`

Replace everything inside of `main.dart`

```dart {2, 14, 15} showLineNumbers
import 'package:flutter/material.dart';
import 'package:fluttok/navigation/DrawerNav.dart';

main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: DrawerNav(),
      debugShowCheckedModeBanner: false,
    );
  }
}
```

We remove all the comments and do the following.

- **Line 2** Import a custom widget, `DrawerNav`.
- **Line 14** Pass the `DrawerNav` widget as a parameter to `MaterialApp`, specifically the `home` parameter.
- **Line 15** Hide the debug banner by passing `false` to the `debugShowCheckedModeBanner` parameter of `MaterialApp`.

## Create Drawer Navigator

Structure/place project folders and files following best practice.

```bash
.
├── ...
├── pubspec.yaml
└── lib/
    ├── navigation/ # Create this folder
    │   └── DrawerNav.dart # Create this file
    └── main.dart
```

The path **matches** the import statement we used a moment ago, where `lib` is the name of our project, `fluttok`.

```dart
import 'package:fluttok/navigation/DrawerNav.dart';
```

Define `DrawerNav` as a stateful widget inside of `DrawerNav.dart`. We need it to be stateful so we can navigate between the multiple pages/screens using the [BottomNavigationBar](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html)

```dart showLineNumbers
// ./lib/navigation/DrawerNav.dart
import 'package:flutter/material.dart';

class TikTokPage extends StatefulWidget {
  final MaterialColor color;

  const TikTokPage({Key? key, required this.color}) : super(key: key);

  @override
  State<TikTokPage> createState() => _TikTokPageState();
}

class _TikTokPageState extends State<TikTokPage> {
  @override
  Widget build(BuildContext context) {
    return Container(color: widget.color);
  }
}

class DrawerNav extends StatefulWidget {
  const DrawerNav({Key? key}) : super(key: key);

  @override
  State<DrawerNav> createState() => _DrawerNav();
}

class _DrawerNav extends State<DrawerNav> {
  int _selectedIndex = 0;

  static List<Widget> get _widgetOptions => <Widget>[
    const TikTokPage(color: Colors.yellow),
    const TikTokPage(color: Colors.blue),
    const TikTokPage(color: Colors.green),
    const TikTokPage(color: Colors.teal),
    const TikTokPage(color: Colors.pink),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _widgetOptions.elementAt(_selectedIndex),
      bottomNavigationBar: BottomNavigationBar(
        elevation: 0,
        onTap: _onItemTapped,
        showUnselectedLabels: true,
        currentIndex: _selectedIndex,
        type: BottomNavigationBarType.fixed,
        selectedItemColor: Colors.black87,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            label: 'Home',
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
            label: 'Discover',
            icon: Icon(Icons.arrow_circle_up_sharp),
          ),
          BottomNavigationBarItem(
            label: '',
            icon: Icon(Icons.add)
          ),
          BottomNavigationBarItem(
            label: 'Inbox',
            icon: Icon(Icons.inbox),
          ),
          BottomNavigationBarItem(
            label: 'Profile',
            icon: Icon(Icons.account_box_rounded),
          ),
        ],
      ),
    );
  }
}
```

Refresh and we'll our app works and has a bottom navigation bar, **awesome**.

![Bottom Tab Nav](https://s4.gifyu.com/images/BottomTabNav.gif)

There's a lot going on so let's review.

```dart {2, 4, 13} showLineNumbers
class TikTokPage extends StatefulWidget {
  final MaterialColor color;

  const TikTokPage({Key? key, required this.color}) : super(key: key);

  @override
  State<TikTokPage> createState() => _TikTokPageState();
}

class _TikTokPageState extends State<TikTokPage> {
  @override
  Widget build(BuildContext context) {
    return Container(color: widget.color);
  }
}
```

The `TikTokPage` widget is a placeholder. The interesting part of this widget is that it requires a parameter `color` when created.

- **Line 2:** Define `color` property which `TikTokPage` must receive.
- **Line 4:** Require `color` parameter when instantiating a new instance of widget.
- **Line 2:** Consume the `color` parameter within the **build** method of `TikTokPage`, allowing for dynamic background colors.

This pattern/technique is common with other JS frameworks such as React & Vue as well.

## Create Bottom Navigator Bar

Key use of the [Bottom Navigation Bar](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html) and it's required parameters/properties.

```dart {2, 4-10, 12-16, 21, 24, 29-50} showLineNumbers
class _DrawerNav extends State<DrawerNav> {
  int _selectedIndex = 0;

  static List<Widget> get _widgetOptions => <Widget>[
    const TikTokPage(color: Colors.yellow),
    const TikTokPage(color: Colors.blue),
    const TikTokPage(color: Colors.green),
    const TikTokPage(color: Colors.teal),
    const TikTokPage(color: Colors.pink),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _widgetOptions.elementAt(_selectedIndex),
      bottomNavigationBar: BottomNavigationBar(
        elevation: 0,
        onTap: _onItemTapped,
        showUnselectedLabels: true,
        currentIndex: _selectedIndex,
        type: BottomNavigationBarType.fixed,
        selectedItemColor: Colors.black87,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            label: 'Home',
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
            label: 'Discover',
            icon: Icon(Icons.arrow_circle_up_sharp),
          ),
          BottomNavigationBarItem(
            label: '',
            icon: Icon(Icons.add)
          ),
          BottomNavigationBarItem(
            label: 'Inbox',
            icon: Icon(Icons.inbox),
          ),
          BottomNavigationBarItem(
            label: 'Profile',
            icon: Icon(Icons.account_box_rounded),
          ),
        ],
      ),
    );
  }
}
```

- **Line 2:** Define `_selectedIndex` property which defaults to 0. This is which tab is selected.
- **Lines 4-10:** Define array of page widgets which will be the pages/screens in the bottom navigation bar. Notice how each instance of TikTokPage is passed a different `color` parameter.
- **Lines 12-16:** Define handler for when a tab bar item is tapped by the user.
- **Lines 21:** Select one page/screen inside of, `_widgetOptions`, to pass to the `Scaffold` widget's `body` parameter. We use the `_selectedIndex` state variable to identify which element/item/page/screen to pass.
- **Lines 24:** Pass `_onItemTapped` to the parameter `onTap` of `Scaffold. Once again this handles changing the page/screen viewed/focused.
- **Lines 29-50:** Define the bottom navigation bar items including their label and icon.

## Refactor TikTokPage

Let's extract the `TikTokPage` widget to it's own file so we can follow best practices.

```bash
.
├── ...
├── pubspec.yaml
└── lib/
    ├── navigation/
    │   └── DrawerNav.dart
    ├── pages/ # Create this folder
    │   └── TikTokPage.dart # Create this file
    └── main.dart
```

Cut and paste the `TikTokPage` widget to the `TikTokPage.dart` file.

```dart
import 'package:flutter/material.dart';

class TikTokPage extends StatefulWidget {
  final MaterialColor color;

  const TikTokPage({Key? key, required this.color}) : super(key: key);

  @override
  State<TikTokPage> createState() => _TikTokPageState();
}

class _TikTokPageState extends State<TikTokPage> {
  @override
  Widget build(BuildContext context) {
    return Container(color: widget.color);
  }
}
```

Import the `TikTokPage` file into the `DrawerNav.dart` file

```dart
// ./lib/navigation/DrawerNav.dart
import 'package:flutter/material.dart';
import 'package:fluttok/pages/TikTokPage.dart';
```

## Create Media Content Widget

Above the `TikTokPage` widget, create a new `MediaContent` widget which will contain the logic for each of our videos.

```dart {12, 13} showLineNumbers
class MediaContent extends StatefulWidget {
  const MediaContent({Key? key}) : super(key: key);

  @override
  State<MediaContent> createState() => _MediaContentState();
}

class _MediaContentState extends State<MediaContent> {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      margin: const EdgeInsets.all(5),
    );
  }
}
```

- **Line 12:** Give the screen a red background so we can more easily identify it.
- **Line 13:** Give the screen margin so we can more easily identify it.

## Create Vertical Scroll through the list of videos

Refactor `TikTokPage` to have a [PageView](https://api.flutter.dev/flutter/widgets/PageView-class.html) in it's build method. This widget implements vertical scroll with the use of a `controller`.

```dart {11, 16, 19} showLineNumbers
class TikTokPage extends StatefulWidget {
  final MaterialColor color;

  const TikTokPage({Key? key, required this.color}) : super(key: key);

  @override
  State<TikTokPage> createState() => _TikTokPageState();
}

class _TikTokPageState extends State<TikTokPage> {
  PageController controller = PageController(initialPage: 0);

  @override
  Widget build(BuildContext context) {
    return PageView(
      controller: controller,
      scrollDirection: Axis.vertical,
      children: [
        for (var i = 0; i < 5; i++) const MediaContent(),
      ],
    );
  }
}
```

- **Line 11:** Instantiate a `PageController` with an `initialPage` of 0 which we'll use to control the `PageView`.

- **Line 16:** Pass the `PageController` to the `controller` parameter of `PageView`.
- **Line 19:** Use a loop to create several instances of `MediaContent` for testing.

![Bottom Tab Nav](https://s4.gifyu.com/images/PageView.gif)

We should now see that we can scroll vertically, **excellent**.
