package main

import (
	"fmt"
)

func main() {
	dict := map[int]string{
		1: "Python",
		2: "Linux",
		3: "Golang",
	}
	fmt.Println(dict[1]) // Python
	// value := dict[2]
	value, ok := dict[2]
	fmt.Println(value, ok) // Linux true

	if val, ok := dict[3]; ok {
		fmt.Println(val, ok) // Golang true
	}
}
