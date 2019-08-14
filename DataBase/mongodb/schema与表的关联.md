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
