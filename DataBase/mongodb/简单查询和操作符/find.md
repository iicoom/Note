> db.collection.find(query, projection)

- query: Optional. Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}).
- projection: Optional. Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. For details, see Projection.

**cursor**
Returns:A cursor to the documents that match the query criteria. When the find() method “returns documents,” the method is actually returning a cursor to the documents.

#### find
```
> db.users.find()
{ 
    "_id" : ObjectId("5efc3ca79a4816c93b72841b"), 
    "name" : "a", 
    "age" : 15.0, 
    "status" : "pending"
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5efc3ca79a4816c93b72841c"), 
    "name" : "b", 
    "age" : 18.0, 
    "status" : "pending"
}
// ----------------------------------------------
{ 
    "_id" : ObjectId("5efc3ca79a4816c93b72841d"), 
    "name" : "c", 
    "age" : 20.0, 
    "status" : "pending"
}

> db.users.find({age: {$gt: 15}}, {name: 1, age: 1}).limit(1)
{ 
    "_id" : ObjectId("5efc3ca79a4816c93b72841c"), 
    "name" : "b", 
    "age" : 18.0
}
```