// axio参数传递
import axios from '../utils/axios';

export const addComments = async params => axios.post('/snippets/comments/create', params);
export const getCommentsList = async params =>
  axios.get('/snippets/comments', { params });

/*
console.log('ctx.query', ctx.query)
getList-param { snippet_id: '8', page: 1, limit: 20 }
*/