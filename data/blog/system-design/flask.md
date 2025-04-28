---
draft: false
date: '2019-08-20'
title: 'System Design: Build a Backend API with Flask'
summary: 'Create a web api using Flask, a micro web framework written in Python'
tags: ['system design', 'flask', 'python']
---

# Introduction

Over the years web frameworks of varying complexity have been developed.

Among these are micro frameworks such as Javascripts's [Express](https://expressjs.com/en/starter/installing.html), Ruby's [Sinatra](https://sinatrarb.com/), & Python's [Flask](https://flask.palletsprojects.com/en/stable/).

They're designed to be minimal & flexible compared to more fully featured frameworks like [NestJS](https://nestjs.com/), [Ruby on Rails](https://rubyonrails.org/), [Django](https://www.djangoproject.com/), enabling developers to build & ship products much more quickly.

In this post we'll take a look at [Flask](https://flask.palletsprojects.com/en/stable/).

## Create project directory

```bash
mkdir flaskproject
cd flaskproject
```

## Setup virtual environment

```bash
python3 -m venv venv
```

## Source environment

```bash
source venv/bin/activate
```

## Check environment is sourced

```bash
env | grep VIRTUAL_ENV
```

## Install Flask

```bash
pip install flask
```

## Create entrypoint file containing source code

```bash
touch app.py
```

## Create single endpoint and run app

```py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    print('Hi')
    return "<p>Hello, Flask World!</p>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
```

## Run project from command line

```bash
flask run
```

## Deactivate environment

```bash
deactivate
```

## Debug

```bash
export FLASK_DEBUG=true
```
