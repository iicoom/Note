[ Diagnostic Commands > db.stats()](https://docs.mongodb.com/manual/reference/method/db.stats/)

## 可以用在复制集查询
```
mgset-500004965:PRIMARY> db.stats()
{
	"db" : "fakao",
	"collections" : 188,
	"views" : 0,
	"objects" : 579773938,
	"avgObjSize" : 2582.7723417381344,
	"dataSize" : 1497424091527,
	"storageSize" : 604541902848,
	"numExtents" : 0,
	"indexes" : 643,
	"indexSize" : 82288963584,
	"ok" : 1
}
```

### The db.stats() method has the following optional parameter:
scale - number	Optional. The scale factor for the various size data. The scale defaults to 1 to return size data in bytes. To display kilobytes rather than bytes, specify a scale value of 1024.
```
mgset-500004965:PRIMARY> db.stats(1024*1024*1024)
{
	"db" : "fakao",
	"collections" : 188,
	"views" : 0,
	"objects" : 579776359,
	"avgObjSize" : 2582.7804586716516,
	"dataSize" : 1394.59506648127,
	"storageSize" : 563.0327453613281,
	"numExtents" : 0,
	"indexes" : 643,
	"indexSize" : 76.63763046264648,
	"ok" : 1
}
```

[For an explanation of the output, see Output.](https://docs.mongodb.com/manual/reference/command/dbStats/#dbstats-output)


## collStats
The collStats command returns a variety of storage statistics for a given collection.
```
mgset-500004965:PRIMARY> db.runCommand( { collStats : "order", scale: 1024 } )
{
	"ns" : "crm.order",
	"size" : 146760,
	"count" : 97760,
	"avgObjSize" : 1537,
	"storageSize" : 50388,
	"capped" : false,
	"wiredTiger" : {
		"metadata" : {
			"formatVersion" : 1
		},
    }
    ....
    内容很多
}
```