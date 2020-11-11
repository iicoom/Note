const axios = require("axios");
const qs = require("qs");
const dataMethod = ['post', 'put', 'patch'];
const paramMethod = ['get', 'delete'];

class HttpUtil {

    constructor() {}

    static Instance () {
        if (!HttpUtil.Instance) {
            HttpUtil.Instance = new HttpUtil()
        }
    }

    async sendRequest(method, url, data = {}, headers = {}) {
        const config = {
            method,
            url,
            headers
        }

        if (dataMethod.includes(method.toLowerCase())) {
            config.data = data
        }
        
        if (paramMethod.includes(method.toLowerCase())) {
            config.params = data
        }

        const content_type = headers['Content-Type'] && headers['Content-Type'].split(';')[0] || null;
        if (content_type === 'application/x-www-form-urlencoded') {
            config.transformRequest = [function (data) {
                return qs.stringify(data);
            }]
        }

        return new Promise((resolve, reject) => {
            axios(config).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
     }
}

module.exports = HttpUtil.Instance()