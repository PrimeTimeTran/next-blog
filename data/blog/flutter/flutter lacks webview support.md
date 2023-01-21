---
title: How to build Poker with Flutter
date: '2023-01-20'
tags: ['Flutter', 'TIL']
draft: false
summary: 'Some of the things that suck about Flutter'
---

## Lack of webview support

I wanted to add HCaptcha to a project using a Webview and found out it doesn't
work on web; only Android and iOS!

"webview_flutter package does not support macOS target which is the reason why you see the error"

https://stackoverflow.com/questions/70906118/flutter-webview-ios-error-default-webview-implementation-for-targetplatform-mac

https://github.com/flutter/flutter/issues/41725

https://stackoverflow.com/questions/58150503/webview-in-flutter-web
