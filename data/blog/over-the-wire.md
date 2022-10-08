---
title: 'Over the Wire'
date: '2022-09-27'
tags: ['Security']
draft: false
summary: 'A fun tool for learning information security practices'
# layout: PostSimple
bibliography: references-data.bib
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/new-features-in-v1/
---

## Information Security Practices & Linux

I discovered this [Over The Wire](https://overthewire.org/wargames/) a while back
and have been working on their problems.

It's a online tool where we play a quasi capture the flag game.

We are tasked to find a password on a remote server. We SSH into a remote server
and get a password which gives us access to the next server/level.

In each server the password/level becomes increasingly difficult to find and we
learn some cool concepts such as linux, encryption, decryption, file compression,
and so much more.

## Example 1

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="python" className="tablinks">python</button>
    <button id="dart" className="tablinks">tokyo</button>
  </div>

  <div id="js" className="tabcontent" style={{ display: 'block' }}>
    
    ```js
    console.log('gogogo)
    ```
  </div>

  <div id="python" className="tabcontent">
    ```python
    print('Hi)
    ```
  </div>

  <div id="dart" className="tabcontent">
    ```dart
    void main() {
      print('Hello, World!');
    }
    ```
  </div>
</div>

## Example 2

<div className="tab-group">
  <div className="tab">
    <button id="js" className="tablinks">javascript</button>
    <button id="python" className="tablinks">python</button>
    <button id="dart" className="tablinks">dart</button>
  </div>

  <div id="js" className="tabcontent" style={{ display: "block" }}>
    ```js
    console.log('gogogo)
    ```
  </div>

  <div id="python" className="tabcontent">
    ```python
    print('Hi)
    ```
  </div>

  <div id="dart" className="tabcontent">
    ```dart
    void main() {
      print('Hello, World!');
    }
    ```
  </div>
</div>
