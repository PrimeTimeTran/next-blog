---
draft: false
title: Flask
date: '2019-08-20'
tags: ['Flask', 'Python']
summary: Create a web api using Flask, a micro web framework written in Python
---

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
