---
title: Flask
date: '2022-08-20'
tags: ['Flask', 'Python']
draft: false
summary: How to setup a new Flask project which serves as a MVP HTTP server
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

## Create project directory

```bash
deactivate
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
