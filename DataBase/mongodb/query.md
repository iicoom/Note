## $elemMatch
> The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.

If you specify only a single <query> condition in the $elemMatch expression, you do not need to use $elemMatch.

https://docs.mongodb.com/manual/reference/operator/query/elemMatch/index.html

```
{ _id: 1, results: [ 82, 85, 88 ] }
{ _id: 2, results: [ 75, 88, 89 ] }


db.scores.find(
   { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
)

{ "_id" : 1, "results" : [ 82, 85, 88 ] }
```

## $in

```
db.inventory.find( { qty: { $in: [ 5, 15 ] } } )

This query selects all documents in the inventory collection where the qty field value is either 5 or 15. Although you can express this query using the $or operator, choose the $in operator rather than the $or operator when performing equality checks on the same field.

{ _id: 1, item: "abc", qty: 10, tags: [ "school", "clothing" ], sale: false }
```