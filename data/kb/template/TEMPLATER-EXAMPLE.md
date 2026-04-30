---
draft: true
date: <% tp.date.now("YYYY-MM-DD") %>
title: ''
summary: ''
created_at: <% tp.file.creation_date() %>
tags: []
---

# Introduction

<% tp.system.prompt("Title?") %>

## Clipboard

<% tp.system.clipboard() %>

## Selected Text

<% tp.file.selection() %>

# Conclusion
