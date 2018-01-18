const log4js = require('log4js');
const path = require('path');
const mkdirp = require('mkdirp');

const logdir = 'logger';
mkdirp.sync(logdir);

// const logConfig = [{
//     type: 'console'
//   },{
//     type: 'dateFile',
//     filename: path.join(logdir, '/error.log'),
//     pattern: '-yyyy-MM-dd',
//     alwaysIncludePattern: true,
//     category: 'error'
//   },{
//     type: 'dateFile',
//     filename: path.join(logdir, '/task_consume.log'),
//     pattern: '-yyyy-MM-dd',
//     alwaysIncludePattern: true,
//     category: 'task_consume'
//   }];

// log4js.configure({
//   appenders: logConfig
// });

module.exports = log4js;