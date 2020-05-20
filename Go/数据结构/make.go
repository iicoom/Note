package main

import "fmt"

func main() {
	map1 := make(map[int]float32)
	map1[1] = 1.0
	map1[2] = 2.0
	map1[3] = 3.0
	map1[4] = 4.0
	for key, value := range map1 {
		fmt.Printf("key is: %d - value is: %f\n", key, value)
	}
}

// 输出结果：

// key is: 3 - value is: 3.000000
// key is: 1 - value is: 1.000000
// key is: 4 - value is: 4.000000
// key is: 2 - value is: 2.000000

/**
golang 分配内存主要有内置函数new和make，今天我们来探究一下make有哪些玩法。

map只能为slice, map, channel分配内存，并返回一个初始化的值。首先来看下make有以下三种不同的用法：
1. make(map[string]string)

2. make([]int, 2)

3. make([]int, 2, 4)

1. 第一种用法，即缺少长度的参数，只传类型，这种用法只能用在类型为map或chan的场景，例如make([]int)是会报错的。这样返回的空间长度都是默认为0的。

2. 第二种用法，指定了长度，例如make([]int, 2)返回的是一个长度为2的slice

3. 第三种用法，第二参数指定的是切片的长度，第三个参数是用来指定预留的空间长度
**/
