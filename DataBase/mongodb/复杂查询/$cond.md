## $project $cond
```js
// 统计 首访完成度
db.firstVisit.aggregate([
    { 
        $project: 
        { 
            serviceman: 1, 
            status: { $cond: {if:{$eq:['$status', 'done']}, then: 1, else: 0 }}
        }
    },
    {
        $group: { _id: '$serviceman.no', count: {$sum: 1},  complete: {$sum: '$status'}}
    }
])
```