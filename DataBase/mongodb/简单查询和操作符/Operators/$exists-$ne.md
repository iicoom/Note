https://docs.mongodb.com/manual/reference/operator/query/exists/index.html
## 文档中比较特殊的null字段
filed: {$exists: true}   可以筛出 null 的
filed: {$exists: false}

```
{ a: 5, b: 5, c: null }
{ a: 3, b: null, c: 8 }
{ a: null, b: 3, c: 9 }
{ a: 1, b: 2, c: 3 }
{ a: 2, c: 5 }
{ a: 3, b: 2 }
{ a: 4 }

db.records.find( { b: { $exists: false } } )
{ a: 2, c: 5 }
{ a: 4 }
{ c: 6 }
```