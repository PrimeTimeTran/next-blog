---
title: Flask
date: '2022-08-20'
tags: ['Flask', 'Python']
draft: true
summary: Concurrency is the ability of program to handle multiple tasks simultaneously. Go uses go routines to achieve this, also known as concurrency.
---

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

```bash
env | grep VIRTUAL_ENV
```

```bash
deactivate
```

```bash
pip install flask requests
```

```py
from flask import Flask, Response
import requests

app = Flask(__name__)

@app.route("/")
def hello_world():
    # # r = requests.get("http://localhost:3000/api/medias")
    # return Response(
    #     "hi",
    #     # status=r.status_code,
    #     # content_type=r.headers['content-type'],
    # )
    return "<p>Hello, World!</p>"


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
```
