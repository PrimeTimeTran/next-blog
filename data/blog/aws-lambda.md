---
title: 'Serverless CRUD app with AWS Lambda and DynamoDB'
date: '2023-02-14'
tags: ['AWS', 'Serverless', 'Lambda', 'DynamoDB']
draft: false
summary: 'How to use AWS Lambda and DynamoDB'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## AWS Lambda and Dynamo

![Demo](https://i.imgur.com/8nRo6Mu.png)

How to use AWS Lambda and DynamoDB as the backend for client web and mobile applications.

Summary of this [tutorial](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html)

### Steps

- Create DynamoDB table
- Create Lambda function
- Create routes
- Create Integration
- Attach integrations to routes

## Test the API endpoints

API Gateway url/entry point.
`https://pmojoazrx3.execute-api.us-east-1.amazonaws.com/`

API Gateway ID
`pmojoazrx3`

Region
`us-east-1`

CREATE

```
curl -X "PUT" -H "Content-Type: application/json" -d "{\"id\": \"1\", \"price\": 0.99, \"name\": \"my next item\"}" https://pmojoazrx3.execute-api.us-east-1.amazonaws.com/items
curl -X "PUT" -H "Content-Type: application/json" -d "{\"id\": \"2\", \"price\": 10.99, \"name\": \"my next item\"}" https://pmojoazrx3.execute-api.us-east-1.amazonaws.com/items
curl -X "PUT" -H "Content-Type: application/json" -d "{\"id\": \"3\", \"price\": 100.99, \"name\": \"my next item\"}" https://pmojoazrx3.execute-api.us-east-1.amazonaws.com/items
```

GET

```
curl https://pmojoazrx3.execute-api.us-east-1.amazonaws.com/items
```

DELETE item

```
curl -X "DELETE" https://pmojoazrx3.execute-api.us-east-1.amazonaws.com/items/123
```
