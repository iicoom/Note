## field 为数组类型查询
### $in
```
> db.arrayField.find()
{ "_id" : ObjectId("5f8d0ed998f6197ac190170f"), "dep" : [ 1, 2 ], "label" : "flowOp" }


> db.arrayField.find({dep: {$in: [1]}})
{ "_id" : ObjectId("5f8d0ed998f6197ac190170f"), "dep" : [ 1, 2 ], "label" : "flowOp" }
> db.arrayField.find({dep: {$in: [2]}})
{ "_id" : ObjectId("5f8d0ed998f6197ac190170f"), "dep" : [ 1, 2 ], "label" : "flowOp" }
> db.arrayField.find({dep: {$in: [3]}})

> db.arrayField.find({dep: {$in: [1,2]}})
{ "_id" : ObjectId("5f8d0ed998f6197ac190170f"), "dep" : [ 1, 2 ], "label" : "flowOp" }
> db.arrayField.find({dep: {$in: [1,2,3]}})
{ "_id" : ObjectId("5f8d0ed998f6197ac190170f"), "dep" : [ 1, 2 ], "label" : "flowOp" }
```

### _id 数组匹配 ObjectId
```
const productIds = pStudentCount.map(v => ObjectID(v._id))
const products = await req.service.product.fetchProductList({_id: {$in: productIds}})
```
