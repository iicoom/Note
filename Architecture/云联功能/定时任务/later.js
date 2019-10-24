const later = require('later');

// will fire every 5 minutes
var textSched = later.parse.text('every 1 min');

// execute logTime one time on the next occurrence of the text schedule
var timer = later.setTimeout(logTime1, textSched);

// execute logTime for each successive occurrence of the text schedule
var timer2 = later.setInterval(logTime, textSched);

// function to execute
function logTime() {
console.log(new Date());
}

function logTime1() {
console.log('later.setTimeout',new Date());
}

// clear the interval timer when you are done
// timer2.clear();

var sched = later.parse.text('every 5 mins'),
      occurrences = later.schedule(sched).next(10);

  for(var i = 0; i < 10; i++) {
    console.log(occurrences[i]);
  }


// Basic schedules
// a basic schedule that is valid every day at 10:15am and 10:45am
var basic = {h: [10], m: [15,45]};

// Composite schedules
// a composite schedule that is valid every day at 10:15am and 10:45am
// and every day at 5:30pm
var composite = [
	{h: [10], m: [15,45]},
	{h: [17], m: [30]}
];

// Exception schedules
// an exception schedule that makes any date in March as
// well as any Monday of any month invalid
var exception = [
	{M: [3]},
	{dw: [2]}
];