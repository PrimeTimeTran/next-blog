---
title: 'Expo Cheat Sheet'
date: '2023-05-31'
tags: ['Expo', 'React Native', 'iOS', 'Android']
draft: false
summary: ''
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Expo Cheat Sheet

Commands I use often developing [React Native](https://reactnative.dev/)
development with [Expo](https://expo.dev/).

## Development

- Start dev client(bare workflow).

  ```sh
  npx expo start --dev-client
  ```

- Start dev client(bare workflow).

  ```sh
  npx expo start --dev-client
  ```

## Build

- Create iOS build. By default kicks off the build on [EAS](https://expo.dev/eas)
  with production profile.

      ```sh
      eas build -p ios
      ```

- Create an iOS build using the development profile defined in `eas.json`

  ```sh
  eas build -p ios -e development
  ```

- Create an iOS build on my local machine.

  ```sh
  eas build -p ios --local
  ```

- View status of the last EAS build.

  ```sh
  eas build:view
  ```

## Android

- Run Android and with option to select device.

  ```sh
  npx expo run:android --device
  ```
