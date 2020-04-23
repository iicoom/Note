package main

import (
	"fmt"
	"io/ioutil"

	"./trans"
)

var twoPi = 2 * trans.Pi

func main() {
	fmt.Printf("2*Pi = %g\n", twoPi) // 2*Pi = 6.283185307179586

	file, err := ioutil.ReadFile("test.txt")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(file)
}
