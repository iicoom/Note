## db.collection.count()
https://docs.mongodb.com/manual/reference/method/db.collection.count/#db.collection.count

### count 性能优化
还是要和find采取一样的 索引优化


## db.collection.estimatedDocumentCount() 
does not take a query filter and instead uses metadata to return the count for a collection.

## Accuracy and Sharded Clusters
```
db.collection.aggregate( [
   { $count: "myCount" }
])
```