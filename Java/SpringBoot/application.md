## 配置内容
1. 服务端口，servlet context-path: api 前缀
2. spring profiles active:当前默认环境

## 完整的api路径
application context-path + Controller @RequestMapping("/admin") + @PostMapping("/list")