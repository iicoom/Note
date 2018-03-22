/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/

var schedule = require('node-schedule');

var j = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});

// Execute a cron job when the minute is 42 (e.g. 19:42, 20:42, etc.).