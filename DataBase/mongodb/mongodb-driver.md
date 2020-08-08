## find(query, options)
```js
const list = await model.crmDb.c(name).find(query).sort({_id : -1}).skip(skip).limit(limit).toArray();
const total = await model.crmDb.c(name).countDocuments(query);
```

## insertOne, insertMany
insertOneWriteOpCallback(error, result)

[callback]http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#~insertOneWriteOpCallback

- insertOneWriteOpResultObject

- insertedCount	number	The total amount of documents inserted.

- ops	Array.<object>	All the documents inserted using insertOne/insertMany/replaceOne. 

- insertedId	ObjectId	The driver generated ObjectId for the insert operation.

- connection	object	The connection object used for the operation.

- result
    ok	number	Is 1 if the command executed correctly.
    n	number	The total count of documents inserted.
```js
const res = await model.crmDb.c(name).insertOne(ChannelDetail);
return res.insertedId.toString();
```

## findOneAndUpdate
```js
const result = await model.crmDb.c(name).findOneAndUpdate({_id: ObjectID(id)},{$set: {value: label, label}});

{
  lastErrorObject: { n: 1, updatedExisting: true },
  value: {
    _id: 5f27a58fabcd6c0adc50e9c9,
    label: '360PC椤甸潰鏀堕泦',
    value: '360PC椤甸潰鏀堕泦',
    department_no: 100
  },
  ok: 1
}
```

### updateMany
updateMany(filter, update, options, callback)
```js
return await model.crmDb.c(name).updateMany({_id: {$in: ids}}, {$set: field})
```


## findOneAndDelete
```js
const result = await model.crmDb.c(name).findOneAndDelete({_id: ObjectID(id)});

{
  lastErrorObject: { n: 1 },
  value: {
    _id: 5f27a58fabcd6c0adc50e9c9,
    label: '360PC椤甸潰鏀堕泦w',
    value: '360PC椤甸潰鏀堕泦w',
    department_no: 100
  },
  ok: 1
}
```

### deleteMany(filter, options, callback)

Returns:
Promise if no callback passed

### await model.crmDb.c('permission').drop();

