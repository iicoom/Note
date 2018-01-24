/*
This method is like _.defaults except that it recursively assigns default properties.

_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
*/


var _ = require('lodash');

var defaultsDeep = _.defaultsDeep;

const functionalConfig = {
  logdir: __dirname + '/logs/', // 日志文件夹
  redis: {
    port: 6379,
    host: '101.201.197.163',
    auth_pass: 'eGd3cEn38tYCQiDBzx7PTWwO'
  },
  memberServer: {
    protocol: 'http',
    hostname: 'localhost',
    port: 18880
  }
};

const defaultconfig = {
  session_secret: 'cH38wtQAj9X672QgNUR0L7x5n1MNIh',

  taskConsumeDB: 5,

  ranchServerPath: {
    sendGiveExperienceMsg: 'ranch_server/api/msgs/sendGiveExperience' // 发送赠送经验值消息
  }
}
const cfgs = [functionalConfig, defaultconfig];
const config = defaultsDeep.apply(_, cfgs);
console.log(config)

/*
=>
{ logdir: '/Users/mxj/repo/Note/Lodash/logs/',
  redis:
   { port: 6379,
     host: '101.201.197.163',
     auth_pass: 'eGd3cEn38tYCQiDBzx7PTWwO' },
  memberServer: { protocol: 'http', hostname: 'localhost', port: 18880 },
  session_secret: 'cH38wtQAj9X672QgNUR0L7x5n1MNIh',
  taskConsumeDB: 5,
  ranchServerPath:
   { sendGiveExperienceMsg: 'ranch_server/api/msgs/sendGiveExperience' } }
*/


