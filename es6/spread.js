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
**********************************************************/