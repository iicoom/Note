## initializeOrderedBulkOp
```
let bulk = dbUs.collection('products').initializeOrderedBulkOp();
        for (let i = 0; i < newSchoolDatas.length; i++) {
            let p = newSchoolDatas[i];
            p.showPlatform = ["zha","scl"];
            bulk.find({_id: p._id})
                .upsert()
                .updateOne({$set: p});
        }

        let ret = await
            bulk.execute();
```