---
title: 'Java & Springboot'
date: '2022-10-14'
tags: ['Java', 'Spring Boot']
draft: true
summary: 'Requirements for setting up Java working environment using VSCode'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Java & Springboot

### Intro

I had a Bank of America recruiter reach out to me today asking me if I'd be
interested in an opportunity there. He mentioned Java & Spring were requirements
for the role.

I haven't had much experience with Java other than using it to
implement a few native modules in React Native in the past.

Additionally I've used it on Leetcode because it seems to be a popular language
in enterprise applications.

Lastly I've done some simple projects for Android in the past as well(Udemy tutorials).

So I decided to setup Spring Boot on my local and get a throw together a simple
REST API

There are a ton of recommended IDEs but I decided to go with VSCode because it's
what I'm most familiar with and I wanted to move quickly.

I ended up having to install a ton of plugins to be able to run it using VSCode
and find a running web server at `http://localhost:8080`.

I had to take these steps.

- Download and install Java SDK on my local.
  https://www.oracle.com/java/technologies/downloads/

- Define path to the java executable inside bash profile.

`JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk-19.jdk/Contents/Home" PATH="${JAVA_HOME}/bin:${PATH}" export PATH`

- Install Java extension pack for VSCode
  https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack

- Install Spring Initializr for VSCode
  https://code.visualstudio.com/docs/java/java-spring-boot
