package main

import "fmt"

func main() {
	// 例子1
	var slice1 []int = make([]int, 4)

	slice1[0] = 1
	slice1[1] = 2
	slice1[2] = 3
	slice1[3] = 4

	for ix, value := range slice1 {
		fmt.Printf("Slice at %d is: %d\n", ix, value)
	}


	// 例子2
	seasons := []string{"Spring", "Summer", "Autumn", "Winter"}
	for ix, season := range seasons {
		fmt.Printf("Season %d is: %s\n", ix, season)
	}

	var season string
	for _, season = range seasons {
		fmt.Printf("%s\n", season)
	}

}

// $ go run range.go
// Slice at 0 is: 1
// Slice at 1 is: 2
// Slice at 2 is: 3
// Slice at 3 is: 4
// Season 0 is: Spring
// Season 1 is: Summer
// Season 2 is: Autumn
// Season 3 is: Winter
// Spring
// Summer
// Autumn
// Winter


// https://github.com/unknwon/the-way-to-go_ZH_CN/blob/master/eBook/07.3.md
