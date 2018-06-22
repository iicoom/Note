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



```