[Built-in Promises](http://mongoosejs.com/docs/promises.html#built-in-promises)
> Mongoose async operations, like .save() and queries, return ES6 promises. This means that you can do things like MyModel.findOne({}).then() and await MyModel.findOne({}).exec() (if you're using async/await.)

## Queries are not promises

Mongoose queries are not promises. However, they do have a .then() function for yield and async/await. If you need a fully-fledged promise, use the .exec() function.

## Plugging in your own Promises Library

If you're an advanced user, you may want to plug in your own promise library like bluebird. Just set mongoose.Promise to your favorite ES6-style promise constructor and mongoose will use it.

## Promises for the MongoDB Driver
The mongoose.Promise property sets the promises mongoose uses. However, this does not affect the underlying MongoDB driver. If you use the underlying driver, for instance Model.collection.db.insert(), you need to do a little extra work to change the underlying promises library. Note that the below code assumes mongoose >= 4.4.4.

### Mongoose 自带的  Promise 不提供 catch。

I have a mongoose schema and am calling Model.create().
```
var mySchema = Mongoose.Schema({
     name: String,
});

// Works:
KarmaModel.create({
            "name": "ss,
        })
        .then(function() {
            //do somthing
        },function()=>{
            //do somthing
        });

// Does not work:
KarmaModel.create({
            "name": "ss,
        })
        .then(function() {
            //do somthing
        }).catch(function()=>{
            //do somthing
        });
```
After going over it, it looks like .catch isn't actually part of the Promises/A+ specification. 


最好用
```
mongoose.Promise = global.Promise;
// or
mongoose.Promise = require('bluebird');
```