/**
 * Created by feng on 2016/11/25.
 */
import requestFn from 'request';
import querystring from 'querystring';

/**
 * 获取请求信息
 * @param server
 * @param path
 * @returns {{url: string, headers: {content-type: string}}}
 */
export const initOptions = (server, path) => {
  return {
    url: `${server.protocol}://${server.hostname}:${server.port}/${path}`,
    json: true,
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    }
  };
};

/**
 * Promise化request
 * @param opts
 * @returns {Promise}
 */
export const request = (opts) => {
  opts = opts || {};
  return new Promise((resolve, reject) => {
    requestFn(opts, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      if (response.statusCode < 200 || response.statusCode > 299) {
        return reject({...body, status: response.statusCode});
      }
      resolve({data: body});
    });
  });
};

/**
 * 发送get请求
 * Promise化request
 * @param opts   请求信息
 * @param params 请求参数
 * @returns {Promise}
 */
export const requestGet = (opts, params) => {
  opts = opts || {};
  opts = {
    ...opts,
    method: 'GET',
    url: `${opts.url}?${querystring.stringify(params)}`
  };
  return new Promise((resolve, reject) => {
    requestFn(opts, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      if (response.statusCode < 200 || response.statusCode > 299) {
        return reject({...body, status: response.statusCode});
      }
      const result = {
        data: body
      };
      const headLink = response.headers.link;
      let linkMap = {};
      // 解析link，找到总条目数。放到result.count 里面
      if (headLink !== null && headLink !== undefined) {
        const str = headLink.split(',');
        for (const i in str) {
          const s = str[i].split(';');
          if (s.length === 2) {
            const t = s[1].split('=');
            linkMap[t[1].substring(1, t[1].length - 1)] = s[0].substring(1, s[0].length - 1);
          }
        }
        result.count = linkMap.count || 0;
      }

      resolve(result);
    });
  });
};
