---
draft: false
date: 2016-11-04
title: 'Guide: Over The Wire - Natas'
tags: ['guide', 'info-sec', 'linux']
summary: "Walkthrough of each level of Over the Wire's Natas series. Its a game which helps players master web server vulnerabilities testing"
---

## Natas

Natas teaches the basics of server side web-security.
Each level of natas consists of its own website located
`http://natasX.natas.labs.overthewire.org`.

The server is a PHP server.

Topics range from searching through resource files to command injection as a means
compromising the victim machine.

## Level 0

natas0

Search HTML for pw.

## Level 1

Pw in HTML, but must open source with hotkeys

## Level 2

h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7

Pw isn't on the page but a resource file, `users.txt`.

http://natas2.natas.labs.overthewire.org/files/users.txt

## Level 3

G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q

Pw isn't inside that file but robots.txt, a disallowed route

`http://natas3.natas.labs.overthewire.org/robots.txt`

`http://natas3.natas.labs.overthewire.org/s3cr3t/users.txt`

## level 4

natas4:tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm

Use Burp & ProxyFoxy to intercept requests and change them before forwarding to
the server.

The response will include the pw.

## level 5

Z0NsrtIkJoKALBCLi5eqFfcRN82Au2oD

Use JS console to change document cookie and refresh.

document.cookie="loggedin=1"

## level 6

fOIvE0MDtPTgRhqmmvvAOt2EfXR6uQgR

Checkout a file that is included in the source code that the page points to.
`http://natas6.natas.labs.overthewire.org/includes/secret.inc`

## level 7

jmxSiH3SP6Sonf8dv66ng8v1cIEdjXWr

We can trick the server into showing us the page at that path using a query parameter.

`http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8`

## level 8

a6bZCNYwdKqN5cGP11ZdtPg0iImQQhAB

Use tehplayground.com to reverse engineer the encoded password thats being compared.

## level 9

Sda6t0vkOPkM8YeOZkAGVhFoaplvlJFd

`https://www.alevsk.com/2020/01/ctf-overthewire-natas9/`

Use command injection

;ls -la;
To see files on the server

;cat /etc/natas_webpass/natas10;

To read from a file on the server

## level 10

D44EcsFkLxPIkAAKLosx8z3hxX1Z4MCE

Search for this value
a /etc/natas_webpass/natas11

Use the logic of the function to invoke grep command and search for pw in a file
on the server

## level 11

1KFqoJXi6hRaPluAmk8ESDW4fSysRoIg
