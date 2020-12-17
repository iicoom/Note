## aggregate - $push
```js
{ "_id" : ObjectId("1"), "courseId" : "123", "type" : "studyProgress", "userId" : "111", "updatedAt" : ISODate("2020-06-22T06:20:28.464Z"), "learnedLessonCount" : 0, "targetLessonCount" : 0, "lessonCount" : 233, "progressStats" : 0, "rank" : 1, "date" : ISODate("2020-06-22T06:35:10.277Z"), "dateStr" : "2020-06-22" }
{ "_id" : ObjectId("2"), "courseId" : "234", "dateStr" : "2020-06-22", "type" : "userStudyDayRank", "userId" : "222", "total" : 420000, "rank" : 2, "date" : ISODate("2020-06-22T15:55:10.252Z"), "yearMonth" : "2020-06", "yearWeek" : "2020-26" }
{ "_id" : ObjectId("3"), "courseId" : "2345", "type" : "userStudyWeekRank", "userId" : "333", "yearMonth" : "2020-06", "yearWeek" : "2020-26", "total" : 420000, "rank" : 2, "date" : ISODate("2020-06-22T15:55:10.255Z"), "dateStr" : "2020-06-22" }
{ "_id" : ObjectId("4"), "courseId" : "111", "type" : "userStudyAllRank", "userId" : "44", "yearMonth" : "2020-06", "yearWeek" : "2020-26", "total" : 420000, "rank" : 2, "date" : ISODate("2020-06-22T15:55:09.826Z"), "dateStr" : "2020-06-22" }


db.userstudydetail.aggregate([
    { $match: { type: 'studyProgress' }},
    { $group: { _id: '$courseId', students: { $push: '$$ROOT' }}}
])


db.userstudydetail.aggregate([
    { $match: { type: 'studyProgress' }},
    { $group: { _id: '$courseId', students: { $push: '$$ROOT.userId' }}}
])
{ "_id" : "5ef04c285e0bf70dcd3c1e2e", "students" : [ "1", "2", "3" ] }
{ "_id" : "5d89e9be2d35645b994c22b3", "students" : [ "4", "5", "6", "7"] }
```

'$$ROOT' 用于收集整个文档  '$$ROOT.userId' 也可以取整个文档某个字段
