---
title: Expo Cheat Sheet
date: '2023-05-1'
tags: ['Shortcuts', 'Hotkeys', 'Cheat Sheet', 'Expo']
draft: false
summary: ''
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Expo Cheat Sheet

Commands I often use developing [React Native](https://reactnative.dev/)
apps.

### Development

- Start expo client(managed workflow).

  ```sh
  npx expo start
  ```

- Start dev client bundler(bare workflow).

  ```sh
  npx expo start --dev-client
  ```

### Bare Workflow

- Build then run Android and Dev dev clients on devices respectively.

  ```sh
  npx expo run:ios -d
  npx expo run:android --device
  ```

  Specify product flavor development build type debug.

  `npx expo run:android --device --variant=developmentDebug`

### Build

- Create iOS build. By default kicks off the build on [EAS](https://expo.dev/eas)
  with production profile.

  ```sh
  eas build -p ios
  ```

- Create an iOS build using the development profile defined in `eas.json`

  ```sh
  eas build -p ios -e development
  ```

- Create an iOS build on local machine.

  ```sh
  eas build -p ios --local
  ```

- View status of the last EAS build.

  ```sh
  eas build:view
  ```
