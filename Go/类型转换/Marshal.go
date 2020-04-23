package main

import (
	"encoding/json"
	"fmt"
)

type Stu struct {
	Name string `json:"name"`
	Age  int
	HIgh bool
	sex  string
	role string
}

func main() {
	//实例化一个数据结构，用于生成json字符串
	stu := Stu{
		Name: "张三",
		Age:  18,
		HIgh: true,
		sex:  "男",
		role: "author",
	}
	//Marshal失败时err!=nil
	jsonStu, err := json.Marshal(stu)
	if err != nil {
		fmt.Println("生成json字符串错误")
	}

	fmt.Println(stu)
	//jsonStu是[]byte类型，转化成string类型便于查看
	fmt.Println(string(jsonStu))
}

// 输出：
// {张三 18 true 男}
// {"name":"张三","Age":18,"HIgh":true}
