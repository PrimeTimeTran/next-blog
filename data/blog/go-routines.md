---
title: What is concurrency in Go?
date: '2022-08-20'
tags: ['Go']
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

Typically each item will take some time to process due to some external dependency; in this case an HTTP request inside the body of `checkLink`.

```go {3, 15} showLineNumbers
import (
	"fmt"
	"net/http"
)

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

The processing of each item is handled asynchronously, meaning we wait for the completion of one call to `checkLink` before the start of the subsequent call.

Ideally, the app should be able to process the elements at the same time, not needing to wait for the response from the dependency.

In other words, we should be able to begin processing each item in our list regardless of whether or not the previous request is done, the previous API call has **returned**.

This is the concurrency we want.

### Processing concurrently

We can process the items concurrently by adding a `go` call before each invocation of `checkLink`, telling Go that this function call is a subroutine.

This is us spinning up 5 routines for each element.

```go {5} showLineNumbers
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

This is because our main routine started, spun up 5 subroutines, saw nothing else left to do inside the body of the main program; so immediately exited.

This happened within fractions of a second.

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

```go {7} showLineNumbers
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

By using [channels](https://medium.com/nerd-for-tech/learning-go-concurrency-goroutines-channels-8836b3c34152) we block the app from exiting on line 8.

On lines 17 & 21 we return data from our routine to the main routine.

```go {8, 17, 21} showLineNumbers
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

If we run the program now, we'll see that the app exits after processing one of the go subroutines.

We need a way to make sure that every subroutine broadcasts it's message to the channel before the main routine exits.

### Processing each subroutine

If we use one `fmt.Println(<- c)` for each item, we'll process each item.

```go {8-10} showLineNumbers
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
    // Code 👨‍💻
}
```

### Process

Although that works, a more elegant way of ensuring all subroutines complete their execution is like this:

```go {8-10} showLineNumbers
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
    // Code 👨‍💻
}
```

### Refactor

Clean up the `<-` syntax by using the [range](https://gobyexample.com/range) keyword which behaves like [range](https://www.w3schools.com/python/ref_func_range.asp) in python.

Each channel message becomes an enumerated item in the loop.

```go {8-10} showLineNumbers
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
    // Code 👨‍💻
}
```

### Slow down execution by using a sleep method

If we add a sleep to our main function, we'll see that our go routines become blocked again.

This is because we're blocking inside our main function.

```go {} showLineNumbers
import (
    "fmt"
    "net/http"
    "time"
)

func main() {
    // Code 👨‍💻

    for l := range c {
        time.Sleep(time.Second * 5)
        go checkLink(l, c)
    }
}

func checkLink(l string, c chan string) {
    // Code 👨‍💻
}
```

### Using a function literal which

We can use an [immediately invoked anonymous function](https://golangbyexample.com/immediately-invoked-function-go/#:~:text=IIF%20or%20Immediately%20Invoked%20Function%20are%20those%20function%20which%20can,end%20brace%20of%20the%20function) to unblock our main function.

If we wrap `Sleep` with the immediately

When we do this, we see that our routines execute concurrently.

Thus, our individual routines are no longer blocked.

```go {5-8} showLineNumbers
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

Unfortunately however, when we look at our output, we'll see that every subroutine is now processing the same item, the same url, the same `l`.

This occurs because we're passing by reference when we invoke the anonymous function this way.

In other words, our subroutine is looking at the latest value of `l` instead of the value of `l` when it was invoked.

### Pass by value to anon function

In order to store the value of `l` at the time we invoked the routine we need to refactor to pass `l` to our immediately invoked anonymous function.

```go {7, 9, 10} showLineNumbers
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

We update the function to receive a `link` and the call to `checkLink` to consume it.

### Conclusion

We've seen achieve multi tasking in Go. By using sub routines we can

- Concurrently process items in our application by using multiple threads.
- Leverage the multi core processes of modern computers.
- Speed up the overall run time of our application.

```go
import (
  "fmt"
  "time"
  "net/http"
)

func main() {
	links := []string{
		"http://www.facebook.com",
		"http://www.amazon.com",
		"http://www.apple.com",
		"http://www.netflix.com",
		"http://www.google.com",
	}
	c := make(chan string)

	for _, link := range links {
		go checkLink(link, c)
	}

    for l := range c {
        go func(link string) {
          time.Sleep(time.Second * 5)
          checkLink(link, c)
        }(l)
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
