https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/#projection

> A document given to a query that specifies which fields MongoDB returns in the result set. See Project Fields to Return from Query. For a list of projection operators, see Projection Operators.

> By default, queries in MongoDB return all fields in matching documents. To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return.

```
db.inventory.insertMany( [
  { item: "journal", status: "A", size: { h: 14, w: 21, uom: "cm" }, instock: [ { warehouse: "A", qty: 5 } ] },
  { item: "notebook", status: "A",  size: { h: 8.5, w: 11, uom: "in" }, instock: [ { warehouse: "C", qty: 5 } ] },
  { item: "paper", status: "D", size: { h: 8.5, w: 11, uom: "in" }, instock: [ { warehouse: "A", qty: 60 } ] },
  { item: "planner", status: "D", size: { h: 22.85, w: 30, uom: "cm" }, instock: [ { warehouse: "A", qty: 40 } ] },
  { item: "postcard", status: "A", size: { h: 10, w: 15.25, uom: "cm" }, instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);
```

The following example returns all fields from all documents in the inventory collection where the status equals "A":

```
db.inventory.find( { status: "A" } )
```

The operation corresponds to the following SQL statement:

```
SELECT * from inventory WHERE status = "A"
```

> You can remove the _id field from the results by setting its exclusion <field> to 0 in the projection, as in the following example:

```
db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )
```


