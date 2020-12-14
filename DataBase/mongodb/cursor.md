```js
const cursor = model.usDb.c('orders').find(query,{readPreference: ReadPreference.SECONDARY_PREFERRED});

let i = 0;
while (await cursor.hasNext()) {
    i++;
    const order = await cursor.next();
    const tradeNo = order.tradeNo;
}
```