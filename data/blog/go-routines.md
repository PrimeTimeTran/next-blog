---
title: What is concurrency in Go?
date: '2022-08-20'
tags: ['Go', 'Go Routines']
draft: false
summary: Concurrency is the ability of program to handle multiple tasks simultaneously. Go uses go routines to achieve this, also known as concurrency.
---

## Introduction

Modern personal computers have multiple cores and servers on cloud providers such as AWS or GCP can have hundreds. ^[Nearly 200 cores on AWS instances https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html ]

Older programming languages under utilize these multiple cores, wasting computing resources.

[Go](<https://en.wikipedia.org/wiki/Go_(programming_language)>) was designed with [concurrency](<https://en.wikipedia.org/wiki/Concurrency_(computer_science)#:~:text=In%20computer%20science%2C%20concurrency%20is,without%20affecting%20the%20final%20outcome>) in mind

## Tutorial

Inspiration draw from this more academic blog post! ^[Concurrency in Go https://www.golang-book.com/books/intro/10 ]

Each go application has a main function. This main function is the applications entry point. It is also a go [routine](https://gobyexample.com/goroutines).

### When we start our app, we spin up a Go routine

```go
package main

func main() {
  // 👨‍💻
}

```

### Process concurrently

Whether it's a list of movies a user might want to watch, conversations a user might want to continue, or list of websites a user might want to visit; each application we build will probably have a list of item's we'll need to process.

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

Typically we process each item asynchronously using a loop

```go
// 👨‍💻

func main() {
  // 👨‍💻

  for _, link := range links {
    fmt.Println(link)
  }
}
```

We see that every item is printed to the screen almost immediately

### Blocking Operations

Each item will take some time to process by an external API. In this case, an http request which depends on the network and will take some amount of time.

```go
// Code

func main() {
	// Code

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

Although our program doesn't throw an error, processing the items asynchronously results in slower performance.

Ideally, the app should be able to process the elements concurrently.

In other words, we should be able to begin processing each item in our list regardless of whether or not the previous item is done processing in the "external" api.

### Processing concurrently

We can process each item concurrently by adding the `go` call before each invocation of `checkLink`.

This is us spinning up 5 routines for each element.

```go
func main() {
	for _, link := range links {
		go checkLink(link)
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

If we run the program now, we'll see that the program exits without anything printing to the screen.

This is because our main routine started, spun up 5 subroutines, and saw nothing else left to do inside the body of the main program so immediately exited.

```go
func main() {
	for _, link := range links {
		go checkLink(link)
	}

	fmt.Println("Main routine done!")
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

We can prove this by adding a `fmt.Println` after the loop.

### Speed bump main routine

If we add a `fmt.Scanln(&input)` to the main function we'll see that the sub routines complete their processing whilst the main function is waiting for user input.

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
	_, err := http.Get(l)

	if err != nil {
		fmt.Println(l, " looks to be down!")
		return
	}

	fmt.Println(l, "is up!")
}
```

This approach will not work in production environments because we cannot depend on a user or admin being available to input to the program in order to continue processing.

### Practical approach

Using [channels](https://medium.com/nerd-for-tech/learning-go-concurrency-goroutines-channels-8836b3c34152) we can tell our main function to wait to exit while the channel processes.

In other words, By using a channel we can block our main function from exiting.

```go
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

### Processing each subroutine

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

```go

func main() {
	c := make(chan string)

	for _, link := range links {
		go checkLink(link, c)
	}

	for {
		go checkLink(<- c, c)
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

```go
func main() {
	c := make(chan string)

	for _, link := range links {
		go checkLink(link, c)
	}

	for l := range c{
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

```go

```
