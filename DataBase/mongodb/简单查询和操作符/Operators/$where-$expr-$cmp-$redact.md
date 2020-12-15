## $where 不能再 aggregate $match中使用 只能用在 find中
```js
async timeoutStat () {
        return await model.crmDb.c(name).aggregate([
            // { $match: { $expr: { $gt: ['$visitTime', '$visitTimeLimit'] } } }, // 3.6 以下用不了
            { $match: { $where: { $gt: ['$visitTime', '$visitTimeLimit'] } } },
            { $project:
                    {
                        serviceman: 1,
                        status: { $cond: {if:{$eq:['$status', 'done']}, then: 1, else: 0 }}
                    }
            },
            { $group: { _id: '$serviceman.no', count: {$sum: 1},  complete: {$sum: '$status'}} }
        ]).toArray();
    }
```
{ MongoError: $where is not allowed inside of a $match aggregation expression
    at MessageStream.messageHandler (/opt/crm-api-devpd/20201215173628/node_modules/mongodb/lib/cmap/connection.js:263:20)
    at MessageStream.emit (events.js:182:13)
    at processIncomingData (/opt/crm-api-devpd/20201215173628/node_modules/mongodb/lib/cmap/message_stream.js:144:12)
    at MessageStream._write (/opt/crm-api-devpd/20201215173628/node_modules/mongodb/lib/cmap/message_stream.js:42:5)
    at doWrite (_stream_writable.js:410:12)


```js
db.where.insertMany([
    {name: 'jack', math: 90, english: 80},
    {name: 'tom', math: 70, english: 60},
    {name: 'Harry', math: 30, english: 60}
])

> db.where.find({$where: "this.math < this.english"})
{ "_id" : ObjectId("5fcdc2dac6f2b44c1c4bce4f"), "name" : "Harry", "math" : 30, "english" : 60 }
```

[Evaluation Query Operators > $where 注意事项](https://docs.mongodb.com/manual/reference/operator/query/where/index.html)

The use of BSON type JavaScript with scope for $where has been deprecated since MongoDB 4.2.1.

The use of $expr with aggregation operators that do not use JavaScript (i.e. non-$function and non-$accumulator operators) is faster than $where because it does not execute JavaScript and should be preferred if possible.

## $expr 在大于3.6的版本中使用 能在find 和aggregate 中使用
[Evaluation Query Operators > $expr](https://docs.mongodb.com/manual/reference/operator/query/expr/)

$expr can build query expressions that compare fields from the same document in a $match stage.

```js
db.where.find( { $expr: { $lt: [ "$math" , "$english" ] } } )
{ "_id" : ObjectId("5fcdc2dac6f2b44c1c4bce4f"), "name" : "Harry", "math" : 30, "english" : 60 }

db.where.aggregate([
    {$match: { $expr: { $lt: [ "$math" , "$english" ] } }},
    {$group: { _id: '$status', count: {$sum: 1}}}
])
```

## $redact
```js
db.where.aggregate([
    {
        "$redact": {
            "$cond": [
                { "$gt": [ "$math", "$english" ] },
                "$$KEEP",
                "$$PRUNE"
            ]
        }
    }
])
```
{ "_id" : ObjectId("5fd88e631ec18abb5ddf5110"), "name" : "jack", "math" : 90, "english" : 80 }
{ "_id" : ObjectId("5fd88e631ec18abb5ddf5111"), "name" : "tom", "math" : 70, "english" : 60 }


## 在低版本的mongodb中比较同一文档的不同字段 不方便
Compares two values and returns:

-1 if the first value is less than the second.
1 if the first value is greater than the second.
0 if the two values are equivalent.

{ $cmp: [ <expression1>, <expression2> ] }
```js
db.where.aggregate([
    {$project: {ab: {$cmp: ['$math','$english']}}},
    {$match: {ab: {$eq: 1}}}
])

//或者
db.where.aggregate([
    {
        "$addFields": {
            "ab": { "$cmp": [ "$math", "$english" ] }
        }
    },
    { "$match": { "ab": 1 } }
])
```
{ "_id" : ObjectId("5fd88e631ec18abb5ddf5110"), "name" : "jack", "math" : 90, "english" : 80, "ab" : 1 }
{ "_id" : ObjectId("5fd88e631ec18abb5ddf5111"), "name" : "tom", "math" : 70, "english" : 60, "ab" : 1 }