---
title: 'Log JSON file load time in Flutter using Firebase - Unsolved Mysteries'
date: '2023-07-02'
tags: ['dart', 'flutter']
draft: false
summary: "Usually an easy process but not always. 
With Flutter & Firebase logging hasn't been straight forward. 
The steps I've taken and the behavior I'm observing logging the duration of rootBundle.load() to Firebase."
bibliography: references-data.bib
canonicalUrl:
---

## Log Function Execution Duration

A function that works perfectly in debug is acting up in release.

I have a helper `loadJsonFile()` which loads a local json file
from disk at `path` and returns it.

The function works great in iOS, Android & Web debug but only iOS & Web in release.

On Android I'm experiencing [this problem](https://stackoverflow.com/questions/64214102/is-it-slow-to-read-data-from-a-json-file-with-rootbundle-loadstring).

```dart
Future<dynamic> loadJsonFile(String path) async {
  try {
    final ByteData data = await rootBundle.load(path);
    String jsonContent = utf8.decode(data.buffer.asUint8List());
    final decoded = json.decode(jsonContent);
    return decoded;
  } catch (e) {
    if (kDebugMode) {
      debugPrint('Error loading JSON file: $e');
    }
  }
}
```

To troubleshoot I add a logging function `logJsonLoadTime()` to the body of `loadJsonFile()`.

```dart
Future<dynamic> loadJsonFile(String path) async {
  try {
    DateTime startTime = DateTime.now();
    final ByteData data = await rootBundle.load(path);
    String jsonContent = utf8.decode(data.buffer.asUint8List());
    final decoded = json.decode(jsonContent);
    DateTime endTime = DateTime.now();

    logJsonLoadTime(formatTime(startTime, endTime));
    return decoded;
  } catch (e) {
    if (kDebugMode) {
      debugPrint('Error loading JSON file: $e');
    }
  }
}
```

The Firebase event `load_time_json_file` is sent within
that function `logJsonLoadTime()` and sends a few params to it; most
importantly `duration`.

```dart
void logJsonLoadTime(String duration) async {
  var platform = kIsWeb ? "web" : Platform.operatingSystem;

  await FirebaseAnalytics.instance.logEvent(
    name: "load_time_json_file",
    parameters: {
      "platform": platform,
      "duration": duration,
      "env": kReleaseMode ? "release" : "debug",
    },
  );
}
```

I see the event `load_time_json_file` logged to Firebase here.
![preview1](https://i.imgur.com/3KjHh9I.png)

I see the parameters here.
![preview1](https://i.imgur.com/UVKWMzT.png)

Yet I see the duration is always `0:00:00`.
![preview1](https://i.imgur.com/coI0NnJ.png)

Here's `formatTime()` implemented with both `then` & `async/await` syntax to test.

```dart
// main.dart
void main() async {
  String _twoDigits(int n) {
    if (n >= 10) {
      return "$n";
    }
    return "0$n";
  }

  String formatTime(DateTime startTime, DateTime endTime) {
    Duration difference = endTime.difference(startTime);
    int hours = difference.inHours;
    int minutes = difference.inMinutes.remainder(60);
    int seconds = difference.inSeconds.remainder(60);
    return '$hours:${_twoDigits(minutes)}:${_twoDigits(seconds)}';
  }

  Future<String> getWeatherForecast() {
    return Future.delayed(Duration(seconds: 2), () => "Partly cloudy");
  }

  DateTime startTime = DateTime.now();
  getWeatherForecast().then((value) {
    DateTime endTime = DateTime.now();
    print(formatTime(startTime, endTime));
  });

  DateTime startTime2 = DateTime.now();
  await getWeatherForecast();
  DateTime endTime2 = DateTime.now();
  print(formatTime(startTime2, endTime2));
}
```

And here's the ouput.

```sh
$ dart run main.dart
0:00:02
0:00:02
```

It's an **unsolved mystery** why I see `0:00:00` logged on Firebase.