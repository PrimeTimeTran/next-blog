---
title: How to build TikTok with Flutter? Part 1
date: '2021-07-22'
tags: ['Flutter', 'Tutorial']
draft: false
summary: 'The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!'
---

## How to build TikTok with Flutter?

In this tutorial series we'll clone TikTok using [Flutter](https://flutter.dev/).

Along the way we'll learn how to use the core widgets of Flutter.

- [Col](https://api.flutter.dev/flutter/widgets/Column-class.html)
- [Row](https://api.flutter.dev/flutter/widgets/Row-class.html)
- [Material](https://api.flutter.dev/flutter/material/Material-class.html)
- [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html)
- [AppBar](https://api.flutter.dev/flutter/material/AppBar-class.html)
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
- **Line 14** Render `DrawerNav` on the home of `MaterialApp`.
- **Line 15** Hide the debug banner.

Create project structure and file where we'll define the custom `DrawerNav` widget.

```bash
.
├── ...
├── pubspec.yaml
└── lib/
    ├── navigation/ # Create this folder
    │   └── DrawerNav.dart # Create this file
    └── main.dart
```

The path matches the import statement we used a moment ago, where `lib` is the name of our project, `fluttok`.

```dart
import 'package:fluttok/navigation/DrawerNav.dart';
```

Define `DrawerNav` as a stateful widget. We need it to be stateful so we can navigate between the multiple pages/screens using the [BottomNavigationBar](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html)

```dart showLineNumbers
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

We should see our app works with and has a bottom navigation bar, **awesome**.

![Bottom Tab Nav](/static/gifs/BottomTabNav.gif)

There's a lot going on though so let's review.

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

This widget is a placeholder. The interesting part of this widget is that it takes a prop color

- **Line 2:** Define `color` property which `TikTokPage` must receive.
- **Line 4:** Require `color` parameter when instantiating a new instance of widget.
- **Line 2:** Consume the `color` parameter within the **build** method of `TikTokPage`, allowing for dynamic background colors.

This pattern/technique is common with other JS frameworks such as React & Vue as well.

## Create Drawer Navigator

## Create Bottom Navigator Bar

## Create Vertical Page Scroll

## Create PageView
