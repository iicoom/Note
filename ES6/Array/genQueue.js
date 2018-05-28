var runningBatch = ['1','2','3','4'];

function genQueueName(batch_id) {
	// console.log('batch_id',batch_id)
	var queueName = '';
    runningBatch.forEach(function(item, index) {
      if (batch_id === item) {
        queueName = 'task_queue_'+index;
      } else {
        return false;
      }
    })

    if (queueName === '') {
      queueName = 'task_queue_default';
    }
    return queueName;
  }

console.log( genQueueName('1') );