```js
const ReadPreference = require('mongodb').ReadPreference;


const total = await model.usDb.c('orders').countDocuments(query,{readPreference:ReadPreference.SECONDARY_PREFERRED});
```