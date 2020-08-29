### Logical Query Operators
Name	Description
$and	Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
$not	Inverts the effect of a query expression and returns documents that do not match the query expression.
$nor	Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
$or	Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

```
db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
```
This query will select all documents in the inventory collection where:

the price field value is not equal to 1.99 and
the price field exists.
等同于
```
db.inventory.find( { price: { $ne: 1.99, $exists: true } } )
```

多条件
```
db.inventory.find( {
    $and : [
        { $or : [ { price : 0.99 }, { price : 1.99 } ] },
        { $or : [ { sale : true }, { qty : { $lt : 20 } } ] }
    ]
} )
```
This query will select all documents where:

the price field value equals 0.99 or 1.99, and
the sale field value is equal to true or the qty field value is less than 20.
This query cannot be constructed using an implicit AND operation, because it uses the $or operator more than once.


## Update
```
db.getCollection.get('batches').update({ batch_type: { $exist: false }}, { $set: { batch_type: 2 }})
```
### Field Update Operators
Name	Description
$currentDate	Sets the value of a field to current date, either as a Date or a Timestamp.
$inc	Increments the value of the field by the specified amount.
$min	Only updates the field if the specified value is less than the existing field value.
$max	Only updates the field if the specified value is greater than the existing field value.
$mul	Multiplies the value of the field by the specified amount.
$rename	Renames a field.
$set	Sets the value of a field in a document.
$setOnInsert	Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.
$unset	Removes the specified field from a document.

#### $inc
The $inc operator accepts positive and negative values.

Consider a collection products with the following document:

```
{
  _id: 1,
  sku: "abc123",
  quantity: 10,
  metrics: {
    orders: 2,
    ratings: 3.5
  }
}
```
The following update() operation uses the $inc operator to decrease the quantity field by 2 (i.e. increase by -2) and increase the "metrics.orders" field by 1:

```
db.products.update(
   { sku: "abc123" },
   { $inc: { quantity: -2, "metrics.orders": 1 } }
)
```
=>
```
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

#### $min
Use $min to Compare Dates
```
{
  _id: 1,
  desc: "crafts",
  dateEntered: ISODate("2013-10-01T05:00:00Z"),
  dateExpired: ISODate("2013-10-01T16:38:16Z")
}
```
The following operation compares the current value of the dateEntered field, i.e. ISODate("2013-10-01T05:00:00Z"), with the specified date new Date("2013-09-25") to determine whether to update the field:
```
db.tags.update(
   { _id: 1 },
   { $min: { dateEntered: new Date("2013-09-25") } }
)
```
The operation updates the dateEntered field:
```
{
  _id: 1,
  desc: "crafts",
  dateEntered: ISODate("2013-09-25T00:00:00Z"),
  dateExpired: ISODate("2013-10-01T16:38:16Z")
}
```

#### $set
If the field does not exist, $set will add a new field with the specified value, provided that the new field does not violate a type constraint.
```
Given a books collection that includes the following documents:
{
  _id: 5,
  item: "EFG222",
  stock: 18,
  info: { publisher: "0000", pages: 70 },
  reorder: true
}
{
  _id: 6,
  item: "EFG222",
  stock: 15,
  info: { publisher: "1111", pages: 72 },
  reorder: true
}
```
The following operation specifies both the multi option and the upsert option. If matching documents exist, the operation updates all matching documents. If no matching documents exist, the operation inserts a new document.
```
db.books.update(
   { item: "EFG222" },
   { $set: { reorder: false, tags: [ "literature", "translated" ] } },
   { upsert: true, multi: true }
)

The operation updates all matching documents and results in the following:
{
   "_id" : 5,
   "item" : "EFG222",
   "stock" : 18,
   "info" : { "publisher" : "0000", "pages" : 70 },
   "reorder" : false,
   "tags" : [ "literature", "translated" ]
}
{
   "_id" : 6,
   "item" : "EFG222",
   "stock" : 15,
   "info" : { "publisher" : "1111", "pages" : 72 },
   "reorder" : false,
   "tags" : [ "literature", "translated" ]
}
```