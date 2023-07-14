---
title: 'Django 101'
date: '2022-10-07'
tags: ['Django', 'Python']
draft: false
summary: 'How to setup a new Django project with from the CLI and initialize a new app.'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Starting a new role

### Intro

`pip3 install Django`

`django-admin startproject helloworld`

`cd helloworld`

```sh
.
├── helloworld
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py
```

Start server on `http://127.0.0.1:8000`

`python manage.py runserver`

Create a new app.

`python manage.py startapp hello`

Creates a new app

```sh
.
├── hello
│ ├── **init**.py
│ ├── admin.py
│ ├── apps.py
│ ├── migrations
│ │ ├── **init**.py
│ ├── models.py
│ ├── tests.py
│ ├── urls.py
│ └── views.py
├── helloworld
│ ├── asgi.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── manage.py
├── tests.py
├── urls.py
└── views.py
```

Add new app hello to list of apps inside of helloworld.

`./helloworld/settings.py`

```py
INSTALLED_APPS = [
    'hello',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

Eventually we'll define views insiide of templates with view partials.

```sh
.
├── hello
│ ├── templates
│ │ └── hello
│ │ ├── greet.html
│ │ └── index.html
│ ├── tests.py
│ ├── urls.py
│ └── views.py
├── helloworld
│ ├── asgi.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── manage.py
├── requirements.txt
├── tests.py
├── urls.py
└── views.py
```
