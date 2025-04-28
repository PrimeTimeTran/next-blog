---
title: 'System Design: Light & Dark Mode in Flutter using Provider & Notify Listeners'
date: '2025-04-19'
tags: ['System Design', 'Flutter']
draft: false
summary: "How to add Light/Dark mode to a Flutter application quick and easy using Flutter's built in Provider & Notification modules."
---

## Theme & Light/Dark mode in Flutter

<img src="/static/gifs/flutter-theme.gif" alt="Completed" />

[Github Repo](https://github.com/PrimeTimeTran/flutter_theme_changer)

<div className="tab-group">
  <div className="tab">
    <button id="#1" className="tablinks">Theme Provider</button>
    <button id="#2" className="tablinks">Theme</button>
    <button id="#3" className="tablinks">Main.dart</button>
  </div>
  <div id="#1" className="tabcontent">
    ```dart {} showLineNumbers
    import 'package:flutter/material.dart';
    import 'package:theme_demo/theme.dart';

    class ThemeProvider extends ChangeNotifier {
    ThemeMode themeMode = ThemeMode.system;

        ThemeData theme = AppTheme.lightBlue;
        ThemeData darkTheme = AppTheme.darkBlue;

        void changeTheme(ThemeType themeType) {
            theme = AppTheme.getTheme(themeType);
            darkTheme = AppTheme.getDarkTheme(themeType);
            notifyListeners();
        }

        void toggleTheme() {
            themeMode = themeMode == ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
            notifyListeners();
        }
    }
    ```

  </div>
    <div id="#2" className="tabcontent">
  ```dart {} showLineNumbers
  import 'package:flutter/material.dart';

class AppTheme {
static ThemeData lightBlue = ThemeData(
brightness: Brightness.light,
colorScheme: ColorScheme.fromSeed(seedColor: ColorConstants.blue));

    static ThemeData darkBlue = ThemeData(
        brightness: Brightness.dark,
        colorScheme: ColorScheme.fromSeed(
          seedColor: ColorConstants.blue,
          brightness: Brightness.dark,
        ));

    static ThemeData lightRed = ThemeData.from(
        colorScheme: ColorScheme.fromSeed(seedColor: ColorConstants.red));

    static ThemeData darkRed = ThemeData.from(
        colorScheme: ColorScheme.fromSeed(
      seedColor: ColorConstants.red,
      brightness: Brightness.dark,
    ));
    static ThemeData lightGreen = ThemeData.from(
        colorScheme: ColorScheme.fromSeed(seedColor: ColorConstants.green));

    static ThemeData darkGreen = ThemeData.from(
        colorScheme: ColorScheme.fromSeed(
      seedColor: ColorConstants.green,
      brightness: Brightness.dark,
    ));
    AppTheme._();

    static ThemeData getDarkTheme(ThemeType themeType) {
      switch (themeType) {
        case ThemeType.red:
          return darkRed;
        case ThemeType.blue:
          return darkBlue;
        case ThemeType.green:
          return darkGreen;
      }
    }

    static ThemeData getTheme(ThemeType themeType) {
      switch (themeType) {
        case ThemeType.red:
          return lightRed;
        case ThemeType.blue:
          return lightBlue;
        case ThemeType.green:
          return lightGreen;
      }
    }

}

class ColorConstants {
static const blue = Color(0xFF0000FF);

    static const red = Color(0xFFFF0000);
    static const green = Color.fromARGB(255, 15, 147, 66);
    static const orange = Color.fromARGB(255, 238, 119, 0);
    ColorConstants._();

}

enum ThemeType { red, blue, green }

````
</div>
<div id="#3" className="tabcontent">
```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:theme_demo/menu_icon.dart';
import 'package:theme_demo/theme.dart';
import 'package:theme_demo/theme_provider.dart';

void main() {
runApp(const MyApp());
}

class MyApp extends StatelessWidget {
const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => ThemeProvider(),
      builder: (context, _) {
        final themeProvider = Provider.of<ThemeProvider>(context);

        return MaterialApp(
          title: 'Theme Demo',
          theme: themeProvider.theme,
          darkTheme: themeProvider.darkTheme,
          themeMode: themeProvider.themeMode,
          home: const MyHomePage(title: 'Theme Demo'),
        );
      },
    );
  }

}

class MyHomePage extends StatefulWidget {
  final String title;
  const MyHomePage({super.key, required this.title});
  @override
  State<MyHomePage> createState() => _MyHomePageState();

}

class \_MyHomePageState extends State<MyHomePage> {
  int \_counter = 0;
  late ThemeProvider themeProvider;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
        actions: const [
          MenuIcon(),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 60),
            Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: ThemeType.values.map((e) {
                return ElevatedButton(
                  onPressed: () {
                    themeProvider.changeTheme(e);
                  },
                  child: Text(e.toString()),
                );
              }).toList(),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    themeProvider = Provider.of<ThemeProvider>(context);
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });

    themeProvider.toggleTheme();
  }

}

````

</div>
</div>
```
