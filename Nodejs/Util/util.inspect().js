const util = require('util');

let payInfo = {
        uid: 'openId',
        jifen: 'reqContent.jifen' || 0, // 一个羊角抵扣一元
        balance: 'reqContent.balance' || 0,
        pay_pwd: 'reqContent.pay_pwd' || '',
        other_pay: {
            //type: reqContent.other_pay_type,
            amount: 'reqContent.other_pay_amount' || 0
        },
        payer_ip: 'payer_ip',
        client_ua: 'client_ua',
        //wxopen_id: req.session.wx_openid || ''
    };


console.log("typeof payInfo:", typeof(payInfo)) // object
console.log("util.inspect(payInfo):\n", util.inspect(payInfo))

// util.inspect(object[, options])
console.log("util.inspect(payInfo):\n", util.inspect(payInfo, {colors: true}))
