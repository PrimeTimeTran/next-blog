---
draft: false
date: 2025-11-01
title: 'Mobile Navigation with Flutter'
summary: 'Drawer, Tab & Stack Navigators are fundamental build blocks to all large dynamic mobile apps. Here I demo some of the nuances of working with them.'
tags: ['flutter']
---

# Introduction

<img src="/static/gifs/datelendar-navigators.gif" alt="preview" />

Most applications make use of the following navigators in some form.

- Drawer Navigator
- Tab Navigator
- Stack Navigator

The hard part is using them together seamlessly where accompanying widgets behave as we expect. For example:

- Replacement of the header on certain screens can be done.
- Back button displays when we've added a screen on the stack.
- Navigation state on different tabs are maintained across toggling of screens.
