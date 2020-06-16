package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	const name, age = "Kim", 22
	s := fmt.Sprintf("%s is %d years old.\n", name, age) // 本身不会输出，只是格式化。使用os.Stdout输出到控制台

	io.WriteString(os.Stdout, s) // Ignoring error for simplicity.
}

// PS E:\Joy\Note\Go\日志系统> go run .\Sprintf.go
// Kim is 22 years old.
