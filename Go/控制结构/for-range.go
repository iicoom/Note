package main

import (
	"fmt"
)

// type Room struct {
// 	Players []*Player
// }
// type Player struct {
// 	id   int
// 	name string
// }

// func (room *Room) setPlayer() {
// 	room.Players = append(room.Players)
// }

func main() {
	str := "Go is a beautiful language!"
	fmt.Printf("The length of str is: %d\n", len(str))
	for pos, char := range str {
		fmt.Printf("Character on position %d is: %c \n", pos, char)
	}

	// var Players = make([]int, 5)

	// for _, p := range Players {
	// 	fmt.Printf("p.name %v, p.id %d", p.name, p.id)
	// }
}

// 目前还无法把结构体放入数组中
