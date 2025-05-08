---
draft: false
date: '2017-08-20'
title: 'System Design: Build a Backend API with Flask'
summary: 'Create a RESTful web api using Flask, a micro web framework written in Python. Serve data to client side apps using REST & minimal setup thanks to the robust & simple Flask framework.'
tags: ['system design', 'flask', 'python']
---

# Introduction

<img src="/static/gifs/backend-api.gif" alt="Completed" />

[Github Repo](https://github.com/PrimeTimeTran/system_design_backend_api)

Over the years web frameworks of varying complexity have been developed.

Among these are micro frameworks such as Javascripts's [Express](https://expressjs.com/en/starter/installing.html), Ruby's [Sinatra](https://sinatrarb.com/), & Python's [Flask](https://flask.palletsprojects.com/en/stable/).

They're designed to be minimal & flexible compared to more fully featured frameworks like [NestJS](https://nestjs.com/), [Ruby on Rails](https://rubyonrails.org/), [Django](https://www.djangoproject.com/), enabling developers to build & ship products much more quickly.

In this post we'll take a look at [Flask](https://flask.palletsprojects.com/en/stable/).

## 1. Create project directory

```sh
mkdir system_design_flask
cd system_design_flask
```

## 2. Setup virtual environment

```sh
python3 -m venv venv
```

## 3. Source environment

```sh
source venv/bin/activate
```

## 4. Check environment is sourced

```sh
env | grep VIRTUAL_ENV
```

You should see something like the following:

```sh
$ env | grep VIRTUAL_ENV
VIRTUAL_ENV_DISABLE_PROMPT=1
VIRTUAL_ENV=/Users/future/Documents/work/system_design_flask/venv
```

## 5. Install Flask

```sh
pip3 install flask
```

## 6. Create entrypoint file containing source code

```sh
touch app.py
```

## 7. Create single endpoint and run app

```py showLineNumbers
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "<p>Hello World from Flask!</p>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
```

## 8. Run project from command line

```sh
flask run
```

You should not see something like the following:

```sh
$ flask run
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
127.0.0.1 - - [28/Apr/2025 14:07:36] "GET / HTTP/1.1" 200 -
```

## 9. Check App works

Open your browser and navigate to the URL printed in the CLI and your browser should now give you a `Hello World`

## 10. Add Route for Creating Data Server Side

```py showLineNumbers
from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():
    return "<p>Hello World from Flask!</p>"

wizards_list = ['Harry', 'Ron', 'Hermione']

@app.route("/wizards")
def wizards():
    name = request.args.get('name')
    if name:
      wizards_list.append(name)
    wizards_html = ''.join([f"<p>Hello {wizard} is a wizard of system design with Flask!</p>" for wizard in wizards_list])
    return wizards_html

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
```

Now we're reading from our query string the key `name` and it's `value`. If it's there then we'll append that name to our list of wizards.

You may need to restart your server with `ctrl-c` and then running the app again `flask run`.

## 11. Test new endpoint

Navigate to `http://127.0.0.1:5000/wizards` and pass in a query param, `?name=Merlin`

You should now see that `Merlin` is appended to our list of wizards.

## 12. Add JSON API Route

```py showLineNumbers
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "<p>Hello World from Flask!</p>"

wizards_list = ['Harry', 'Ron', 'Hermione']

@app.route("/wizards")
def wizards():
    name = request.args.get('name')
    if name:
      wizards_list.append(name)
    wizards_html = ''.join([f"<p>Hello {wizard} is a wizard of system design with Flask!</p>" for wizard in wizards_list])
    return wizards_html

@app.route('/api/wizards', methods=['GET'])
def get_wizards():
    wizards = [
        {'name': 'Harry', 'house': 'Gryffindor'},
        {'name': 'Hermione', 'house': 'Gryffindor'},
        {'name': 'Ron', 'house': 'Gryffindor'},
    ]

    return jsonify(wizards)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
```

Now when you navigate to `http://127.0.0.1:5000/api/wizards` you'll get a JSON response.

# Additional

## Deactivate environment

Deactivate the environment when you're done working with this project so that python doesn't trip elsewhere.

```sh
deactivate
```

## Add Hot Reload

You'll notice that if you change code and it's not reflected on browser refresh then updating an environment variable might fix the issue.

```sh
export FLASK_DEBUG=1
```

You'll know it works if you see `Debug mode: on` in your console's output.

```sh showLineNumbers {3}
future in ~/Documents/work/system_design_flask (venv)
$ flask run
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
```

# Conclusion

[Flask](https://flask.palletsprojects.com/en/stable/) makes it a piece of cake to develop APIs.

We designed a Backend API using [Flask](https://flask.palletsprojects.com/en/stable/) in the following way

- Creating & sourcing a python environment.
- Defined app entrypoint `app.py`
- Defined 3 routes.
  - `/`: A canonical `Hello World` route.
  - `/wizards`: A route for displaying a list of wizards & adding if passed a `name` key and it's `value`.
  - `/api/wizards`: A route for returning JSON to clients which is more flexible than raw HTML.
