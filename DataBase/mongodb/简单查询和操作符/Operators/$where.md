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