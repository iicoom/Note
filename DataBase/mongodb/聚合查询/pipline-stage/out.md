> $out
Takes the documents returned by the aggregation pipeline and writes them to a specified collection. The $out operator must be the last stage in the pipeline. The $out operator lets the aggregation framework return result sets of any size.

https://docs.mongodb.com/manual/reference/operator/aggregation/out/

$out 
Available starting in MongoDB 2.6

- Can output to a collection in the same database only.
- Cannot output to a sharded collection. Input collection, however, can be sharded.

$merge
Available starting in MongoDB 4.2

- Can output to a collection in the same or different database.

If the collection specified by the $out operation already exists, then upon completion of the aggregation, the $out stage atomically replaces the existing collection with the new results collection. Specifically, the $out operation:

可以用来实现merge中4.0版本无法实现的例子
```
db.salaries.aggregate( [
   { $group: { _id: { fiscal_year: "$fiscal_year", dept: "$dept" }, salaries: { $sum: "$salary" } } },
   { $out : "budgets"}
] )
```