> New in version 4.2.
Writes the results of the aggregation pipeline to a specified collection. The $merge operator must be the last stage in the pipeline.

https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge

The $merge stage:

- Can output to a collection in the same or different database.
- Creates a new collection if the output collection does not already exist.
- Can incorporate合并 results (insert new documents, merge documents, replace documents, keep existing documents, fail the operation, process documents with a custom update pipeline) into an existing collection.
- Can output to a sharded collection. Input collection can also be sharded.

## 初始化测试数据
```
show dbs;

AggreDB    0.000GB
NextJoyDB  0.000GB
RECOVERY   0.000GB
admin      0.000GB
config     0.000GB
koa-test   0.002GB
local      0.000GB
```
假如当时所处数据库为AggreDB，可以不用切换数据库 直接使用db.getSiblingDB方法 创建一个ZooDB 并新建 salaries 数据集 插入数据：
```
db.getSiblingDB("ZooDB").salaries.insertMany([
   { "_id" : 1, employee: "Ant", dept: "A", salary: 100000, fiscal_year: 2017 },
   { "_id" : 2, employee: "Bee", dept: "A", salary: 120000, fiscal_year: 2017 },
   { "_id" : 3, employee: "Cat", dept: "Z", salary: 115000, fiscal_year: 2017 },
   { "_id" : 4, employee: "Ant", dept: "A", salary: 115000, fiscal_year: 2018 },
   { "_id" : 5, employee: "Bee", dept: "Z", salary: 145000, fiscal_year: 2018 },
   { "_id" : 6, employee: "Cat", dept: "Z", salary: 135000, fiscal_year: 2018 },
   { "_id" : 7, employee: "Gecko", dept: "A", salary: 100000, fiscal_year: 2018 },
   { "_id" : 8, employee: "Ant", dept: "A", salary: 125000, fiscal_year: 2019 },
   { "_id" : 9, employee: "Bee", dept: "Z", salary: 160000, fiscal_year: 2019 },
   { "_id" : 10, employee: "Cat", dept: "Z", salary: 150000, fiscal_year: 2019 }
])

show dbs;

AggreDB    0.000GB
NextJoyDB  0.000GB
RECOVERY   0.000GB
ZooDB      0.000GB
admin      0.000GB
config     0.000GB
koa-test   0.002GB
local      0.000GB
```

## 使用聚合查询把结果在$merge stage 插入到 ReportingDB
```
// 第一步
// 处理document 使用{ fiscal_year: "$fiscal_year", dept: "$dept" } 年度部门分组作为 _id 并使用$sum操作符对此分组中的员工薪资求和
db.salaries.aggregate( [
   { $group: { _id: { fiscal_year: "$fiscal_year", dept: "$dept" }, salaries: { $sum: "$salary" } } }
] )

{ "_id" : { "fiscal_year" : 2017, "dept" : "Z" }, "salaries" : 115000 }
{ "_id" : { "fiscal_year" : 2019, "dept" : "A" }, "salaries" : 125000 }
{ "_id" : { "fiscal_year" : 2018, "dept" : "A" }, "salaries" : 215000 }
{ "_id" : { "fiscal_year" : 2019, "dept" : "Z" }, "salaries" : 310000 }
{ "_id" : { "fiscal_year" : 2017, "dept" : "A" }, "salaries" : 220000 }
{ "_id" : { "fiscal_year" : 2018, "dept" : "Z" }, "salaries" : 280000 }


// 第二步
// 把第一步得到的结果 $merge 到 其他指定库 ReportingDB
db.getSiblingDB("zoo").salaries.aggregate( [
   { $group: { _id: { fiscal_year: "$fiscal_year", dept: "$dept" }, salaries: { $sum: "$salary" } } },
   { $merge : { into: { db: "ReportingDB", coll: "budgets" }, on: "_id",  whenMatched: "replace", whenNotMatched: "insert" } }
] )

// 因为mongodb当前版本为4.0x,而$merge 是4.2 版本新增，所以报错了
2020-07-06T16:57:17.012+0800 E QUERY    [js] Error: command failed: {

	"ok" : 0,

	"errmsg" : "Unrecognized pipeline stage name: '$merge'",

	"code" : 40324,

	"codeName" : "Location40324"

} : aggregate failed :
```