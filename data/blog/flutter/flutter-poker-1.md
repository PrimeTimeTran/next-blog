---
draft: true
date: '2022-08-07'
title: How to build Poker with Flutter
summary: 'The steps I took to built a poker game with Flutter'
tags: ['project', 'flutter', 'tutorial']
---

## How to build Poker with Flutter?

[Github Repo](https://github.com/PrimeTimeTran/flutter-TikTok)

- Initialize new project
- Collect card assets
- Add flutter_svg
- Update pubspec.yaml with assets/cards
- Render card to app as example
- Define structure of data of app, Game & Table widgets
- Create table using 5 rows
- Create placeholder for seats, playinghands, board & prompt,
- Create Deck of cards logic
- Deal cards

```dart
return Center(
  child: Column(
    children: <Widget>[
      Container(
        color: Colors.pink,
        height: 100,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text('Hi 6'),
            Text('Dealer 5'),
            Text('Hi 4'),
          ],
        ),
      ),
      Expanded(
        child: Container(
          color: Colors.white,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Hi 3'),
                Text('Hi 7'),
              ],
            ),
          ),
        ),
      ),
      Expanded(
        child: Container(
          color: Colors.amber,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Hi 2'),
                Text('Hi 8'),
              ],
            ),
          ),
        ),
      ),
      Container(
        color: Colors.blue,
        height: 100,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text('Hi 1'),
            Text('Player 0'),
            Text('Hi 9'),
          ],
        ),
      ),
    ],
  ),
);
```

- Playhand in each spot for the players
