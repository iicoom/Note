package main

import "fmt"

func main() {
	for i := 0; i < 5; i++ {
		fmt.Printf("This is the %d iteration\n", i)
	}
	// This is the 0 iteration
	// This is the 1 iteration
	// This is the 2 iteration
	// This is the 3 iteration
	// This is the 4 iteration

	str2 := "beautiful"
	fmt.Printf("The length of str2 is: %d\n", len(str2))
	for ix := 0; ix < len(str2); ix++ {
		fmt.Printf("Character on position %d is: %c \n", ix, str2[ix])
	}
	// The length of str2 is: 9
	// Character on position 0 is: b
	// Character on position 1 is: e
	// Character on position 2 is: a
	// Character on position 3 is: u
	// Character on position 4 is: t
	// Character on position 5 is: i
	// Character on position 6 is: f
	// Character on position 7 is: u
	// Character on position 8 is: l

	var arrKeyValue = [5]string{3: "Chris", 4: "Ron"}
	fmt.Printf("The length of arrKeyValue is: %d\n", len(arrKeyValue))
	for j := 0; j < len(arrKeyValue); j++ {
		fmt.Printf("Character on position %d is: %v \n", j, arrKeyValue[j])
	}
	// Character on position 0 is:
	// Character on position 1 is:
	// Character on position 2 is:
	// Character on position 3 is: Chris
	// Character on position 4 is: Ron
}
