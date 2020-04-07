https://docs.mongodb.com/manual/reference/command/getCmdLineOpts/

```
db.adminCommand( { getCmdLineOpts: 1  } )

{
   "argv" : [
      "/usr/bin/mongod",
      "--config",
      "/etc/mongod.conf"
   ],
   "parsed" : {
      "config" : "/etc/mongod.conf",
      "net" : {
         "bindIp" : "127.0.0.1",
         "port" : 27017
      },
      "processManagement" : {
         "fork" : true
      },
      "storage" : {
         "dbPath" : "/data/db"
      },
      "systemLog" : {
         "destination" : "file",
         "logAppend" : true,
         "path" : "/var/log/mongodb/mongod.log"
      }
   },
   "ok" : 1
}
```

使用
```
tail -100f /var/log/mongodb/mongod.log  
```
查看日志