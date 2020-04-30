package main

import (
	"bytes"
	"encoding/json"
	"fmt"
)

type RedisConfig struct {
	IP   string
	PORT string
	AUTH int
	PASS string
}

type DbConfig struct {
	Host   string
	Port   int
	Uid    string
	Pwd    string
	DbName string
}

type Config struct {
	ServerId int
	Port     int //端口号

	Redis     *RedisConfig
	DbConfigs map[string]*DbConfig //如果配置多个数据库源，则用逗号分隔源的名字
	callbacks []func()
}

func (conf *Config) String() string {
	b, err := json.Marshal(*conf)
	if err != nil {
		return fmt.Sprintf("%+v", *conf)
	}
	var out bytes.Buffer
	err = json.Indent(&out, b, "", "    ")
	if err != nil {
		return fmt.Sprintf("%+v", *conf)
	}
	return out.String()
}

func main() {

	conf := Config{
		ServerId: 1,
		Port:     8080,
		Redis:    &RedisConfig{},
		DbConfigs: map[string]*DbConfig{
			"maindb": &DbConfig{
				Host: "127.0.0.1",
			},
		},
	}
	fmt.Println("Config:", conf)
	// Config: {1 8080 0xc000044040 map[maindb:0xc000048050] []}
	fmt.Println("Config:", conf.String())
	// Config: {
	//   "ServerId": 1,
	//   "Port": 8080,
	//   "Redis": {
	//       "IP": "",
	//       "PORT": "",
	//       "AUTH": 0,
	//       "PASS": ""
	//   },
	//   "DbConfigs": {
	//       "maindb": {
	//           "Host": "127.0.0.1",
	//           "Port": 0,
	//           "Uid": "",
	//           "Pwd": "",
	//           "DbName": ""
	//       }
	//   }
	// }
}
