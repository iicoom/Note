[Query Optimization](https://docs.mongodb.com/manual/core/query-optimization/)

## Create an Index to Support Read Operations

## Query Selectivity: 
Query selectivity refers to how well the query predicate excludes or filters out documents in a collection. 

## Covered Query: 
A covered query is a query that can be satisfied entirely using an index and does not have to examine any documents. An index covers a query when all of the following apply:
- query中所有的fields are part of an index
- all the fields returned in the results are in the same index.
- no fields in the query are equal to null (i.e. {"field" : null} or {"field" : {$eq : null}} ).

For example, a collection inventory has the following index on the type and item fields:
```
db.inventory.createIndex( { type: 1, item: 1 } )
```

该索引将覆盖以下操作，这些操作查询type和item字段，并只返回item字段:
```
db.inventory.find(
   { type: "food", item:/^c/ },
   { item: 1, _id: 0 }
)
```
For the specified index to cover the query, the projection document must explicitly specify _id: 0 to exclude the _id field from the result since the index does not include the _id field.

为了避免返回索引中不包含的_id，要指定 _id: 0

这种做法叫做: the specified index to cover the query 指定索引要覆盖你的查询条件

## Multikey Covering

## Performance
Querying only the index can be much faster than querying documents outside of the index. Index keys are typically smaller than the documents they catalog【为…编目录】, and indexes are typically available in RAM or located sequentially on disk.

只查询索引要比查索引外filed快的多, 因为索引keys通常要比整个文档小得多，他们可以被放在RAM中或者disk的连续区域。

## explain