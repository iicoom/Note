## 列表排序可以根据_id 里边包含时间
sort({_id:-1}) 时间倒序,后创建的出现在前边
```js
// mongodb 驱动
const list = await col.find(query).sort({_id:-1}).skip(skip).limit(limit).toArray();
```

[objectid](../objectid.js)