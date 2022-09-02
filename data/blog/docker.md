---
title: 'Micro services'
date: '2021-10-01'
tags: ['Docker', 'Node', 'Express']
draft: false
summary: 'How to create a containerized rest API and web app following the microservice pattern'
layout: PostSimple
bibliography: references-data.bib
---

## How to create full stack rest API and web app micro services

Create working directory

```bash
mkdir microservices
cd microservices
```

Create client microservice directory

```bash
mkdir client
cd client
```

Generate project files

```bash
npx express-generator .
npm install
```

Implement looping request for an outside service's resources

```js
// ./requester/views/layout.jade
script((type = 'text/javascript')).setInterval(() => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => {
      console.log('JSON:', json)
      document.getElementsByTagName('p')[0].innerHTML = new Date(Date.now())
    })
}, 1500)
```

Run application to check it works

```bash
npm start
```

Begin containerization

```bash
touch Dockerfile
```

Define containerization strategy

```docker
FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json ./

RUN yarn
COPY . .

CMD ["yarn", "start"]
```

Build local image for client service

```bash
docker build -t client .
```

Check client image exists locally

```bash
docker images
```

Run container using client image mapping host post 80 to container's internal 3000 port

```bash
docker run -dp 80:3000 client
```

Check running containers

```bash
docker ps
```

Create api service

```bash
cd ..
mkdir api
cd api
```

Generate api project files

```bash
npx express-generator --no-view .
```

Define custom business logic

```js
// ./api/routes/index.js
const wizards = [
  'Harry Potter',
  'Hermione Granger',
  'Ronald Weasley',
  'Neville Longbottom',
  'Mad-Eye Moody',
  'Bartemius Crouch Sr.',
  'Newt Scamander',
  'Sirius Black',
  'Kingsley Shacklebolt',
  'Draco Malfoy',
  'Albus Dumberdore',
  'Thomas Riddle',
  'Salazar Slytherin',
  'Godric Gryffindor',
  'Gellert Grindelwald',
]

router.get('/magic', function (req, res, next) {
  const wizard = wizards[Math.floor(Math.random() * wizards.length)]
  res.json(wizard)
})
```

Run api on different port in order to avoid port number collision

```bash
PORT=3001 npm start
```

Refactor client business logic

```js
// ./client/views/layout.jade
script((type = 'text/javascript')).setInterval(() => {
  fetch('http://localhost:3001/magic')
    .then((response) => response.json())
    .then((json) => {
      console.log('JSON:', json)
      const p = document.getElementsByTagName('p')[0]
      const br = document.createElement('br')
      p.appendChild(br)
      p.append(new Date(Date.now()) + ' ' + json)
    })
}, 1500)
```

Resolve CORS issue

```bash
npm install cors
```

Update api service config

```js
// ./api/app.js
var cors = require('cors')

var app = express()
app.use(cors())
```

Start api service

```bash
PORT=3001 npm start
```

Define api service containerization strategy

```docker
FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json ./

RUN yarn
COPY . .

CMD ["yarn", "start"]
```

Build api service docker image

```bash
docker build -t api .
```

Run api service container mapping host machine port 3001 to docker container port 3000

```bash
docker run -dp 3001:3000 api
```

We should now see docker running both of our containers.

We can use a docker compose file to run multiple containers if we want.

Create docker-compose.yml file and define two services

```docker
version: "3.9"
services:
  web-app-service:
    build: ./client
    ports:
      - 80:3000

  rest-api-service:
    build: ./api
    ports:
      - 3001:3000
    depends_on:
      - web-app-service
```

Install nodemon

```bash
cd api
npm i nodemon
```

Run api service using nodemon

```json
{
  "name": "responder",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "cors-anywhere": "^0.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "morgan": "~1.9.1",
    "nodemon": "^2.0.19"
  }
}
```

Define volumes inside of dockerfile

```docker
version: "3.9"
services:
  web-app-service:
    build: ./client
    ports:
      - 80:3000

  rest-api-service:
    build: ./api
    ports:
      - 3001:3000
    depends_on:
      - web-app-service

    volumes:
    - ./api:/usr/src/app

volumes:
  api:
```
