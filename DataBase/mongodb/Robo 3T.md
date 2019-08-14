## robo 3t GUI

1. insert()
```
#########################################
#############  insert()  ################
#########################################
db.getCollection('accounts').insert({
    "uid" : "5a28d8877d72587761cae36a",
    "balance" : 1000000,
    "income" : 1.0,
    "isRebuild" : true,
    "create_at" : 1429789134274.0,
    "__v" : 0})
```

2. find() sort()
```
#########################################
############   find()  sort() ###########
#########################################
db.getCollection('users').find({ "_id" : ObjectId("54af3b6a48e6cd1c1be333e8") })
db.getCollection('msgs').find({'to_user':'5a28d8877d72587761cae36a', "create_time":{ $gt:1521417600000}})

按create_time降序
*********** 排序 **************************
在MongoDB中使用使用sort()方法对数据进行排序，sort()方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而-1是用于降序排列。

db.getCollection('msgs').find({'to_user':'5a28d8877d72587761cae36a', "create_time":{ $gt:1521417600000}}).sort( { "create_time": -1 } )

db.getCollection('jifens').find({ uid: {'$in': [ '54df318e1c701cc40b708d89', '54df318e1c701cc40b708d89' ]} })

```

3. remove()
```
#########################################
#############   remove()  ################
#########################################

db.getCollection('batches').remove({"batch_code" : "030503"})

```

4. update()
```
#########################################
#############   update()  ################
#########################################

db.getCollection('users').update({"mobile":"18231088178"},{$set:{"username":"嘿嘿嘿"}})

更新操作
Then, the following update() operation will set the sale field value to true where the tags field holds an array with at least one element matching either "appliances" or "school".

db.inventory.update(
                     { tags: { $in: ["appliances", "school"] } },
                     { $set: { sale:true } }
                   )


去掉某个字段：
db.getCollection('products').update({"_id" : ObjectId("5b2cba4252ea765316f1ca7a")}, { $unset: {"market_price_id":""} })

db.inventory.find( { qty: { $in: [ 5, 15 ] } } )


简单写法，如下，匹配到，只更新第一条记录
db.swxx.update({"ZJHM":"xxxxxxxxxxxxxxxxxx"},{"ZJHM":"23060419730523301X"})

后面加上可以更新多条的第四个参数，这时候需要用$set操作才能更新多条
db.swxx.update({"ZJHM":"xxxxxxxxxxxxxxxxxx"},{$set:{"ZJHM":"23060419730523301X"}},false,true)

update参数1：筛选条件

参数2：更新哪些字段

参数3：如果没有筛选到符合条件的记录，是否需要将参数2插入到集合中，默认false，不插入

参数4：默认false，一次更新一条；true一次更新多条，此时参数2需要使用$set操作


"mongoose": "^4.13.6",需要下面的写法：更新多条
const oo = await ProductService.update({ name: { $in: MPname } }, { is_set_market_price: true }, { multi: true });
console.log(oo);

```




