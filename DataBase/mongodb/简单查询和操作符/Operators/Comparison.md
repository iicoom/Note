### Comparison Query Operators
```
$eq		Matches values that are equal to a specified value.
$gt		Matches values that are greater than a specified value.
$gte	Matches values that are greater than or equal to a specified value.
$in		Matches any of the values specified in an array.
$lt		Matches values that are less than a specified value.
$lte	Matches values that are less than or equal to a specified value.
$ne		Matches all values that are not equal to a specified value.
$nin	Matches none of the values specified in an array.
```

不小于 其实就是 $gt 下边这个反而很蠢
```js
'fallIntoOceanTime':{$not: {$lt: moment().toDate()}}
```

{ _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] }

```js
db.inventory.find( { qty: { $eq: 20 } } )

// 等价
db.inventory.find( { qty: 20 } )
```
