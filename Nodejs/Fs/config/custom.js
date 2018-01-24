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

module.exports = functionalConfig;