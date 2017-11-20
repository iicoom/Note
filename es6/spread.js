const productionConfig = {
    session_secret: 'cH38wtQAj9X672QgNUR0L7x5n1MNIh',
    cookie_max_age: 10 * 24 * 3600 * 1000,
    session_max_age: 10 * 24 * 3600,

    db: 'mongodb://Ranch:yunfarm_000@master.mongodb.aliyun.yunfarm.net/Ranch',

    redis: {
        port: 6379,
        host: 'redis.systemserver.aliyun.yunfarm.net',
        auth_pass: 'xcfjliQeWP'
    },
    wechat_store: {
        appid: 'wx35548ff0c793bc98',
        appsecret: '0b0e59db80aedcab7dea2e3e07601d59',
        ACCESSTOKEN_KEY: 'store_weixin_accessToken',
        JSAPITICKET_KEY: 'store_weixin_jsapiticket',
        token: 'store'
    }
}

const functionalConfig = {
    db: 'mongodb://Ranch:yunfarm_000@101.201.197.163/Ranch1',
    redis: {
        port: 6379,
        host: '101.201.197.163',
        auth_pass: 'eGd3cEn38tYCQiDBzx7PTWwO'
    }
}

const finalConfig = {...productionConfig, ...functionalConfig}
console.log(finalConfig)

/*******************
const finalConfig = {...productionConfig, ...functionalConfig}
                     ^^^

SyntaxError: Unexpected token ...
 这个是ES7的提案，将rest参数、扩展运算符（...）引入对象
**********************************************************/

//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
//Object.assign(target, ...sources)
//如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
//Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
//注意，Object.assign 会跳过那些值为 null 或 undefined 的源对象。
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

/*************************/
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。

/************合并具有相同属性的对象***************/
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

/****************查询条件*********************/
if (endTime) {
     condition.create_at = Object.assign({}, condition.create_at || {}, { $lte: endTime });
}
