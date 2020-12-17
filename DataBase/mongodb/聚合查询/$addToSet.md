```js
// 统计负责课程种类
db.serveRecords.aggregate([
    { $group: {_id: '$headteacher.no',  products: { $addToSet: '$productId'}} }
])

{ "_id" : 10000001, "products" : [ "5d43d16a2e48e64db81407b6" ] }
{ "_id" : null, "products" : [ "5d43d16a2e48e64db81407b6" ] }
{ "_id" : 10000000, "products" : [ "5d43d16a2e48e64db81407b6" ] }

db.serveRecords.aggregate([
    { $match: { serviceRole: 'headteacher' } },
    { $group: {_id: '$headteacher.no',  products: { $addToSet: '$productId'}} },
    { $project: { productCount: {$size: '$products'} }}
])

{ "_id" : 10000001, "productCount" : 1 }
{ "_id" : null, "productCount" : 1 }
{ "_id" : 10000000, "productCount" : 1 }
```