---
draft: true
date: '2022-09-04'
title: 'Shell Scripts'
tags: ['Shell']
summary: 'Shell Scripts'
---

# Introduction

## Basic shell c

- Change permissions to allow execution of a file

```sh
chmod +x example.sh
```

- Search history for command and yank an entire line

```sh
fc -ln 0 | grep 'docker run' | yank -l
```

- View most used commands

```sh
history|awk '{print $2}'|awk 'BEGIN {FS="|"} {print $1}'|sort|uniq -c|sort

# Reverse
history|awk '{print $2}'|awk 'BEGIN {FS="|"} {print $1}'|sort|uniq -c|sort -r
```
