[Data Use and Performance](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

When designing a data model, consider how applications will use your database. For instance, if your application only uses recently inserted documents, consider using Capped Collections. Or if your application needs are mainly read operations to a collection, adding indexes to support common queries can improve performance.

## Capped Collections
db.createCollection("cappedLogCollection",{capped:true,size:10000,max:1000})
还可以指定文档个数,加上max:1000属性：
```js
db.createCollection("cappedLogCollection",{capped:true,size:10000,max:1000})

// 判断集合是否为固定集合:
db.cappedLogCollection.isCapped()

//固定集合文档按照插入顺序储存的,默认情况下查询就是按照插入顺序返回的,也可以使用$natural调整返回顺序。
db.cappedLogCollection.find().sort({$natural:-1})
```
属性: 
属性1:对固定集合进行插入速度极快
属性2:按照插入顺序的查询输出速度极快
属性3:能够在插入最新数据时,淘汰最早的数据

用途1:储存日志信息
用途2：存储一些统计数据
Capped collections are useful for niche use cases where:

You want to limit the amount of data retained in a FIFO (First In, First Out) order
You want to guarantee data is stored in insertion order
You do not have updates that cause documents to grow in size
You do not need to delete documents manually
You may want to use a tailable cursor to trigger some activity based on inserts into a collection


## indexes
improve performance

## 关联查询 $lookup  Document References
[MongoDB also provides referencing to join data across collections.](https://docs.mongodb.com/manual/core/data-model-design/)

## Schema生成

## Schema的关联
ucenter access-token schema

## ref做关联
```
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  
var PersonSchema = new Schema({
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var StorySchema = new Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'Person' },
  title    : String,
  fans     : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

var Story  = mongoose.model('Story', StorySchema);
var Person = mongoose.model('Person', PersonSchema);
#关联查询
Story
.findOne({ title: /timex/ })
.populate('_creator')
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The creator is %s', story._creator.name); // prints "The creator is Aaron"
})
```

## update 参数
Model.update()
Parameters:
* conditions «Object»
* doc «Object»
* [options] «Object» optional see Query.prototype.setOptions()
* [callback] «Function»

```
MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);
MyModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, function (err, raw) {
  if (err) return handleError(err);
  console.log('The raw response from Mongo was ', raw);
});
```

https://docs.mongodb.com/manual/reference/method/db.collection.findAndModify/#db.collection.findAndModify
```
db.collection.findOneAndUpdate(
   <filter>,
   <update>,
   {
     projection: <document>,
     sort: <document>,
     maxTimeMS: <number>,
     upsert: <boolean>,
     returnNewDocument: <boolean>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ]
   }
)
```


## 更新ObjectID字段
```
 await ProductService.findByIdAndUpdate(product_id, { stages_id: ObjectId(result.id) }, { new: true });
```
