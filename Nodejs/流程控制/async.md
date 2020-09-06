## control flow
### parallel(tasks, callbackopt)
> Run the tasks collection of functions in parallel, without waiting until the previous function has completed. If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error. Once the tasks have completed, the results are passed to the final callback as an array.

Note: parallel is about kicking-off I/O tasks in parallel, not about parallel execution of code. If your tasks do not use any timers or perform any I/O, they will actually be executed in series. Any synchronous setup sections for each task will happen one after the other. JavaScript remains single-threaded.

```
async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'tw1o');
        }, 100);
    }
],
// optional callback
function(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
});
```

### series(tasks, callbackopt)
> Run the functions in the tasks collection in series, each one running once the previous function has completed. If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error. Otherwise, callback receives an array of results when tasks have completed.
```
async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
});
```

### retry(optsopt, task, callbackopt)
> Attempts to get a successful response from task no more than times times before returning an error. 
If the task is successful, the callback will be passed the result of the successful task. 
If all attempts fail, the callback will be passed the error and result (if any) of the final attempt.

```
// The `retry` function can be used as a stand-alone control flow by passing
// a callback, as shown below:

// try calling apiMethod 3 times
async.retry(3, apiMethod, function(err, result) {
    // do something with the result
});


// try calling apiMethod 3 times, waiting 200 ms between each retry
async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
    // do something with the result
});


// try calling apiMethod only when error condition satisfies, all other
// errors will abort the retry control flow and return to final callback
async.retry({
  errorFilter: function(err) {
    return err.message === 'Temporary error'; // only retry on a specific error
  }
}, apiMethod, function(err, result) {
    // do something with the result
});
```
