package main

import (
	"fmt"
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