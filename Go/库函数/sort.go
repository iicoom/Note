package main

import (
	"fmt"
	"sort"
)

func main() {
	d := []int{5, 2, 6, 3, 1, 4} // unsorted
	sort.Sort(sort.IntSlice(d))
	fmt.Println(d)
	// Output:[1 2 3 4 5 6]

	a := []float64{5.5, 2.2, 6.6, 3.3, 1.1, 4.4}
	sort.Sort(sort.Float64Slice(a))
	fmt.Println(a)
	// Output:[1.1 2.2 3.3 4.4 5.5 6.6]

	s := []string{"PHP", "golang", "python", "C", "Objective-C"}
	sort.Sort(sort.StringSlice(s))
	fmt.Println(s)
	// Output:[C Objective-C PHP golang python]
}
