---
title: What is concurrency in Go?
date: '2022-08-20'
tags: ['Go', 'Go Routines']
draft: false
summary: Concurrency is the ability of program to handle multiple tasks simultaneously. Go uses go routines to achieve this, also known as concurrency.
---

## Introduction

Modern personal computers have multiple cores and servers on cloud providers such as AWS or GCP can have hundreds. ^[Nearly 200 cores on AWS instances https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html ]

[Go](<https://en.wikipedia.org/wiki/Go_(programming_language)>) was designed with [concurrency](<https://en.wikipedia.org/wiki/Concurrency_(computer_science)#:~:text=In%20computer%20science%2C%20concurrency%20is,without%20affecting%20the%20final%20outcome>) in mind in a way which many older programming languages were not.

## Tutorial

Inspiration draw from this more academic blog post! ^[Concurrency in Go https://www.golang-book.com/books/intro/10 ]

### When we start our app, we spin up a Go routine

The main function/entrypoint of every go application is a [go routine](https://go.dev/tour/concurrency/1).

```go
package main

func main() {
  // 👨‍💻
}

```

### Process concurrently

Whether it's a list of movies a user might want to watch, conversations a user might want to continue, or list of websites a user might want to visit; each application we build will probably have a list of item's we'll need to process.

As with all applications, the faster we process items the better.

```go
package main

func main() {
  links := []string {
    "http://www.facebook.com",
    "http://www.amazon.com",
    "http://www.apple.com",
    "http://www.netflix.com",
    "http://www.google.com",
  }
}
```

### We can process the items using a loop

If we run the code now, we'll see that each print is asynchronously handled and that each item is printed to the screen almost immediately.

```go
// Code 👨‍💻

func main() {
  // Code 👨‍💻

  for _, link := range links {
    fmt.Println(link)
  }
}
```

### Blocking Operations

Typically, each item will take some time to process though, perhaps by an external API; in this case an HTTP request.

```go
// Code 👨‍💻

func main() {
    // Code 👨‍💻

    for _, link := range links {
        checkLink(link)
    }
}

func checkLink(l string) {
    _, err := http.Get(l)

    if err != nil {
        fmt.Println(l, " looks to be down!")
        return
    }

    fmt.Println(l, "is up!")
}
```

The program doesn't throw an error. Excellent.

However the processing of each item is handled asynchronously, waiting for the completion of one call to `checkLink` before the start of the subsequent call.

Ideally, the app should be able to process the elements concurrently.

In other words, we should be able to begin processing each item in our list regardless of whether or not the previous item is done processing, the previous API call has **returned**.

### Processing concurrently

We can process the items concurrently by adding the `go` call before each invocation of `checkLink`, telling Go that this function call is a go subroutine.

This is us spinning up 5 routines for each element.

```go
func main() {
    // Code 👨‍💻

    for _, link := range links {
        go checkLink(link)
    }
}

func checkLink(l string) {
    // Code 👨‍💻
}
```

We now see that the program exits without anything printing to the screen.

This is because our main routine started, spun up 5 subroutines, and saw nothing else left to do inside the body of the main program so immediately exited.

This happened within a fractions of a second.

```go
func main() {
    for _, link := range links {
        go checkLink(link)
    }

    fmt.Println("Main routine done!")
}

func checkLink(l string) {
    // Code 👨‍💻
}
```

We can prove this by adding a `fmt.Println` after the loop.

### Speed bump main routine

We want our subroutines to complete their processing before we finish our program.

If we add a `fmt.Scanln(&input)` which waits for user input we accomplish this.

The main function only exits after the user has interacted with the program.

```go
func main() {
    for _, link := range links {
        go checkLink(link)
    }

    var input string
    fmt.Scanln(&input)

    fmt.Println("Main routine done!")
}

func checkLink(l string) {
    // Code 👨‍💻
}
```

This approach will not work in production environments because we cannot depend on a user or admin being available to input to the program in order to continue processing.

### Channels

Using [channels](https://medium.com/nerd-for-tech/learning-go-concurrency-goroutines-channels-8836b3c34152) we can tell our main function to wait to exit while the channel processes.

In other words, channels are blocking

```go {17, 21} showLineNumbers
func main() {
    c := make(chan string)

    for _, link := range links {
        go checkLink(link, c)
    }

    fmt.Println(<- c)
    fmt.Println("Main routine done!")
}

func checkLink(l string, c chan string) {
    _, err := http.Get(l)

    if err != nil {
        fmt.Println(l, " looks to be down!")
        c <- l
    }

    fmt.Println(l, "is up!")
    c <- l
}
```

We've updated `checkLink` to send data back to the main routine with the lines `c <- l` on line's 17 & 21.

If we run the program now, we'll see that the app exits after processing one of the go subroutines.

We need a way to make sure that every subroutine has an opportunity to broadcast it's message to the channel before the main routine exits.

### Processing each subroutine

We can fix the immediate exit by producing `fmt.Println(<- c)` for each item we need processed using a loop.

```go
func main() {
    c := make(chan string)

    for _, link := range links {
        go checkLink(link, c)
    }

    for i := 0; i < len(links); i++ {
        fmt.Println(<- c)
    }
}

func checkLink(l string, c chan string) {
    _, err := http.Get(l)

    if err != nil {
        fmt.Println(l, " looks to be down!")
        c <- l
    }

    fmt.Println(l, "is up!")
    c <- l
}
```

### Process

Although that works, a more elegant way of ensuring all subroutines complete their execution is like this

```go {} showLineNumbers
func main() {
    c := make(chan string)

    for _, link := range links {
        go checkLink(link, c)
    }

    for {
        fmt.Println(<- c)
    }
}

func checkLink(l string, c chan string) {
    _, err := http.Get(l)

    if err != nil {
        fmt.Println(l, " looks to be down!")
        c <- l
    }

    fmt.Println(l, "is up!")
    c <- l
}
```

### Refactor

Clean up the `<-` syntax by using a range keyword which will

```go {} showLineNumbers
func main() {
    c := make(chan string)

    for _, link := range links {
        go checkLink(link, c)
    }

    for l := range c {
        go checkLink(l, c)
    }
}

func checkLink(l string, c chan string) {
    _, err := http.Get(l)

    if err != nil {
        fmt.Println(l, " looks to be down!")
        c <- l
    }

    fmt.Println(l, "is up!")
    c <- l
}
```

### Slow down execution by using a sleep method

This will result in our main routine backing up and lining up all the results from our channel

At most, we can only ever run 1 routine at a time.

```go {} showLineNumbers
func main() {
    // ...

    for l := range c {
        time.Sleep(time.Second * 5)
        go checkLink(l, c)
    }
}

func checkLink(l string, c chan string) {
    // ...
}
```

### Using a function literal which

We use a function literal to slow down the execution of our go subroutines.

When we do this, we see that our routines execute concurrently.

Thus, we can continue processing their return values as soon as the subroutine has completed.

```go {} showLineNumbers
package main

import (
    "fmt"
    "net/http"
    "time"
)

func main() {
    // ...

    for l := range c {
        go func() {
          time.Sleep(time.Second * 5)
          checkLink(l, c)
        }()
    }
}

func checkLink(l string, c chan string) {
    // ...
}
```

However when we look closely at our output, we'll see that every subroutine is now making a request to only one of our sites.

We're passing by reference when we invoke the anonymous function this way.

### Pass by value to anon function

```go {} showLineNumbers
// ...

func main() {
    // ...

    for l := range c {
        go func(link string) {
          time.Sleep(time.Second * 5)
          checkLink(link, c)
        }(l)
    }
}

func checkLink(l string, c chan string) {
    // ...
}
```
