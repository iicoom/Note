```js
db.serveRecords.aggregate([
	{ $match: { 'consultant.no': 11264 } },
	{ $group: { _id: '$productId', studentCount: { $sum: 1 }, students: { $addToSet: '$userId' }}},
	{
      $count: "pcount"
    }
])
```
{ "pcount" : 4 }