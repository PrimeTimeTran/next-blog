---
draft: false
date: '2025-07-19'
title: 'How to enable hot reloading in Flask?'
summary: 'Restarting a server to see changes reflected call kill velocity when working. Enable Hot Reloading to see changes to the app reflected from your code without the need for a server Restart'
tags: ['flask', 'question']
---

# Introduction

Enable hot reloading to speed up your development speed when working with Flask.

## Environment Configuration

The following environment variables need to be set before running the Flask app.

```sh
export FLASK_APP=app.py
export FLASK_ENV=development
export FLASK_DEBUG=1
flask run
```

If everything went well, the following output should be printed to your console

```sh
$ flask run
 * Serving Flask app 'app.py'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
```

You're looking for `* Debug mode: on` & `* Debugger is active!`

# Conclusion

With this configuration your workflow should be improved dramatically.
