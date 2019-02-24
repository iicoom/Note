// axio参数传递
import axios from '../utils/axios';

export const addComments = async params => axios.post('/snippets/comments/create', params);
export const getCommentsList = async params =>
  axios.get('/snippets/comments', { params });

/*
console.log('ctx.query', ctx.query)
getList-param { snippet_id: '8', page: 1, limit: 20 }
*/

//axios POST提交数据的三种请求方式写法
// https://segmentfault.com/a/1190000015261229
/*
1. Content-Type: application/json

2. Content-Type: multipart/form-data
https://www.npmjs.com/package/form-data

3. Content-Type: application/x-www-form-urlencoded
*/