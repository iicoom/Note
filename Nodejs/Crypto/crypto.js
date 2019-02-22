// The crypto module provides cryptographic functionality that includes a set of wrappers for 
//OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e


const cert1 = new crypto.Certificate();
const cert2 = crypto.Certificate();
console.log('cert1:',cert1)
console.log('cert2:',cert2)

/*
cert1: Certificate {}
cert2: Certificate {}
*/


// 科大讯飞音频转写 签名加密算法
const axios = require('axios');
const crypto = require('crypto');
const querystring = require('querystring');

// 生成时间戳与签名
const ts = Date.now().toString().substr(0,10); // 获取10位时间戳
const tmp = config.app_id + ts;
const md5 = crypto.createHash('md5');
// md5.update(tmp).digest('hex') md5 hash运算得到一个16进制字符串

const signa = crypto.createHmac('sha1', config.secret_key)
.update(md5.update(tmp).digest('hex')).
digest().toString('base64');


const client = axios.create({
    baseURL: 'https://raasr.xfyun.cn/api/',
    timeout: 1000,
    headers: config.base_header
});

// this.generate_request_param(config.api_prepare) 数据结构为 { foo: 'bar' }
// 注意下面两种传值方式的区别
client.post(config.api_prepare, querystring.stringify(this.generate_request_param(config.api_prepare)))
            .then((res) => {
                console.log('============', res.data)
            })
// => 'https://raasr.xfyun.cn/api/signa=EYYq5J21shLb%2fgchzSM6x8TfzHg%3d&app_id=123456' 
// querystring.stringify() 会对参数 encode

client.post(config.api_prepare, { params: this.generate_request_param(config.api_prepare)})
            .then((res) => {
                console.log('============', res.data)
            })
// => 这种方式数据会以body形式传送



