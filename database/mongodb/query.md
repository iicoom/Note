# query

## Comparison Query Operators

```text
db.inventory.find( { qty: { $ne: 20 } } )

condition.number = { $exists: true, $ne: null };
```

## $elemMatch

> The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.

If you specify only a single  condition in the $elemMatch expression, you do not need to use $elemMatch.

[https://docs.mongodb.com/manual/reference/operator/query/elemMatch/index.html](https://docs.mongodb.com/manual/reference/operator/query/elemMatch/index.html)

```text
{ _id: 1, results: [ 82, 85, 88 ] }
{ _id: 2, results: [ 75, 88, 89 ] }


db.scores.find(
   { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
)

{ "_id" : 1, "results" : [ 82, 85, 88 ] }
```

## $in

```text
db.inventory.find( { qty: { $in: [ 5, 15 ] } } )

This query selects all documents in the inventory collection where the qty field value is either 5 or 15. Although you can express this query using the $or operator, choose the $in operator rather than the $or operator when performing equality checks on the same field.

{ _id: 1, item: "abc", qty: 10, tags: [ "school", "clothing" ], sale: false }
```

## $inc

The $inc operator accepts positive and negative values.

```text
{
  _id: 1,
  sku: "abc123",
  quantity: 10,
  metrics: {
    orders: 2,
    ratings: 3.5
  }
}


db.products.update(
   { sku: "abc123" },
   { $inc: { quantity: -2, "metrics.orders": 1 } }
)

{
   "_id" : 1,
   "sku" : "abc123",
   "quantity" : 8,
   "metrics" : {
      "orders" : 3,
      "ratings" : 3.5
   }
}
```

