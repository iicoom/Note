var kue = require('kue')
  , queue = kue.createQueue();
var express = require('express');

var app = express();
const log = require('../log');
const logger = log.getLogger();
logger.level = 'debug';


app.post('/job', function (req, res) {
	var job = queue.create('email', {
		 title: 'welcome email for tj'
	  , to: 'tj@learnboost.com'
	  , template: 'welcome-email'
	}).attempts(3).backoff(true).ttl(5 * 1000).save(function(err) {
      if (err)  throw new Error( 'bad things happen' );
      res.send({jobId: job.id})   
  });
});

queue.process('email', function(job, done){
  //console.log(job);
  logger.debug('====================================job================');
  logger.debug(job.data);
  email(job.data.to, done);
});

function email(address, done) {
  // if(!isValidEmail(address)) {
  //   //done('invalid to address') is possible but discouraged
  //   return done(new Error('invalid to address'));
  // }
  // email send stuff...
  done();
}


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});