## [Schema-options](https://mongoosejs.com/docs/guide.html#options)

### [timestamps](https://mongoosejs.com/docs/guide.html#timestamps)

> If you use toJSON() or toObject() mongoose will not include virtuals by default. This includes the output of calling JSON.stringify() on a Mongoose document, because JSON.stringify() calls toJSON(). Pass { virtuals: true } to either toObject() or toJSON()
### [toObject](https://mongoosejs.com/docs/guide.html#toObject)
Documents have a toObject method which converts the mongoose document into a plain JavaScript object. 
```js

```

### toJSON 
Exactly the same as the toObject option but only applies when the document's toJSON method is called.
```js
// model
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({});

UserSchema.set('toJSON', {
  virtuals: true,
  transform(doc, ret) {
    delete ret.pay_pwd;
    delete ret.history;
    delete ret.password;
    delete ret.wxopenid;
    delete ret.salt;
    delete ret._id;
    delete ret.__v;
    delete ret.idcard;
    return ret;
  },
});


// service
export const getUserByName = async (condition) => {
  try {
    const user = await User.findOne(condition);
    if (user) {
      return user.toJSON();
    }
    return null;
  } catch (e) {
    throw new ServerError(e.toString());
  }
};
```

### [virtuals](https://mongoosejs.com/docs/guide.html#virtuals) 
```js
UserSchema.virtual('idcard2')
  .get(function () {
    if (this.idcard) {
      if (this.idcard.length === 18) {
        return `${this.idcard.substr(0, 6)}********${this.idcard.substr(14)}`;
      } else if (this.idcard.length === 15) {
        return `${this.idcard.substr(0, 6)}*****${this.idcard.substr(11)}`;
      }
    }
  });
```

### [capped](https://mongoosejs.com/docs/guide.html#capped)