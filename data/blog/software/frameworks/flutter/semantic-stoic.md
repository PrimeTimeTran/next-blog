---
draft: false
date: 2023-01-29
title: 'Project: Semantic Stoic'
summary: 'Building a Duolingo/Quizlet/Leetcode/TikTok side project because I thought these apps were all awesome and wanted to combine attributes of each one of them into a single learning platform.'
tags: ['flutter']
---

# Introduction

[Demo: Semantic Stoic](https://semantic-stoic.web.app)

Duolingo/Quizlet/Leetcode/TikTok are all apps I've used in the past and thought
were kinda cool but could be improved.

I decided to build an app which will combine elements of all of these apps
into a self improvement platform.

I know that sounds all over the place, but don't startup founders and VC's always
say we should be ready to pivot depending on product market fit?

In any case, I figured it'd be a nice opportunity to take a break from Leetcode during
my free time.

The MVP is built using Flutter & Firebase.

![Data](https://s3.gifyu.com/images/ss-data.gif)

Here using Google Analytics I've found that four days after launching the site,
we have 110 users from 24 different countries. Yay!

Read code [here](https://github.com/PrimeTimeTran/semantics).

### Translations

I found a list of Stoic quotes on [Github](https://gist.github.com/miharekar/d57b58b017c457cd18062a1c36d82e02).

I wrote a [python script](https://github.com/PrimeTimeTran/semantics/blob/main/python/translate.py)
which reads the json file and uses googletrans to produce the translations.
