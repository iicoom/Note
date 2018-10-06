## 创建角色
```
> db.createUser({user: "imooc", pwd: "imooc", roles:[{role:"userAdmin", db:"admin"},{role: "read", db: "students"}]})
Successfully added user: {
	"user" : "imooc",
	"roles" : [
		{
			"role" : "userAdmin",
			"db" : "admin"
		},
		{
			"role" : "read",
			"db" : "students"
		}
	]
}
```