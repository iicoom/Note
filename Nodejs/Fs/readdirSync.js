var fs = require('fs');

// const cfgs = [];
// fs.readdirSync(__dirname+'/config').map(filename => {
//   if (filename === 'index.js') {
//     return false;
//   }
//   //console.log(filename)
//   try {
//     const cfg = require('./config/' + filename);
//     //console.log(cfg)
//     if (cfg) {
//       cfgs.push(cfg);
//     }
//   } catch (e) {
//   	throw e;
//   }
// });
// console.log(cfgs);

/*
[ { logdir: '/Users/mxj/repo/Note/Nodejs/Fs/config/logs/',
    redis:
     { port: 6379,
       host: '101.201.197.163',
       auth_pass: 'eGd3cEn38tYCQiDBzx7PTWwO' },
    memberServer: { protocol: 'http', hostname: 'localhost', port: 18880 } },
  { session_secret: 'cH38wtQAj9X672QgNUR0L7x5n1MNIh',
    taskConsumeDB: 5,
    ranchServerPath:
     { sendGiveExperienceMsg: 'ranch_server/api/msgs/sendGiveExperience' } } ]
*/

const wtf = fs.readdirSync(__dirname)
console.log(wtf)
/*

[ 'config',
  'fs.rmdir.js',
  'fs.stat.js',
  'fs.unlink.js',
  'readFile.js',
  'readdirSync.js' ]
*/