package main

import (
	"fmt"
	"net/http"
	"time"
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

// func main() {
// 	jobs := make(chan int, 100)
// 	results := make(chan int, 100)

// 	go worker(jobs, results)
// 	go worker(jobs, results)
// 	go worker(jobs, results)
// 	go worker(jobs, results)

// 	for i := 0; i < 100; i++ {
// 		jobs <- i
// 	}

// 	close(jobs)

// 	for j := 0; j < 100; j++ {
// 		fmt.Println((<- results))
// 	}
// }

// func worker(jobs <-chan int, results chan <- int) {
// 	for n := range jobs {
// 		results <- fib(n)
// 	}
// }

// func fib(n int) int {
// 	if n <= 1 {
// 		return n
// 	}

// 	return fib(n - 1) + fib(n - 2)
// }
