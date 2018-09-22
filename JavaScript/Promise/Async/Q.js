// A promise library for JavaScript http://documentup.com/kriskowal/q/

/*
If a function cannot return a value or throw an exception without blocking, 
it can return a promise instead. 
A promise is an object that represents the return value or the thrown exception that the function may eventually provide.
A promise can also be used as a proxy for a remote object to overcome latency.
*/

// On the first pass, promises can mitigate the “Pyramid of Doom”: 
// the situation where code marches to the right faster than it marches forward.
step1(function (value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});

// With a promise library, you can flatten the pyramid.
Q.fcall(promisedStep1)
.then(promisedStep2)
.then(promisedStep3)
.then(promisedStep4)
.then(function (value4) {
    // Do something with value4
})
.catch(function (error) {
    // Handle any error from all above steps
})
.done();
/*
With this approach, you also get implicit error propagation, 
just like try, catch, and finally. 
An error in promisedStep1 will flow all the way to the catch function, 
where it’s caught and handled. (Here promisedStepN is a version of stepN that returns a promise.)
*/

/*
Note that if you have a method that uses the Node.js callback pattern, 
as opposed to just a function, you will need to bind its this value before passing it to nfbind, 
like so:
*/
var Kitty = mongoose.model("Kitty");
var findKitties = Q.nfbind(Kitty.find.bind(Kitty));

// 再如
var Batch = require("../models").Batch;
Batch.qFindOne = q.nbind(Batch.findOne, Batch);

exports.findById = function(id, cb) {
	const batchInfo = {};
	Batch.qFindOne({_id: id})
		.then(function(data) {
			if (data) {
				batchInfo = data;
				return q.resolve();
			} else {
				batchInfo = null;
				return q.resolve();
			}
		})
		.then(function(data) {
			if (data && data.name) {
				batchInfo.yield = data.yield;
			}
			cb && cb(null,batchInfo);
		})
		.catch(function(err) {
			cb && cb(err);
		})
}

var batchService = require("../../service/batch");

Q.nfcall(batchService.findById, batch_id)
	.then(function(batch) {
		if (!batch) {
			throw err;
		}
		return batch;
	})
	.then(function(batch) {
		var deferred = q.defer();
		if (batch && batch.limit) {
			if (err) return deferred.reject(err);
			deferred.resolve(batch);
		} else {
			deferred.resolve(batch);
		}
		return deferred.promise;
	})

// Using Deferreds
// If you have to interface with asynchronous functions that are callback-based instead of promise-based, 
//Q provides a few shortcuts (like Q.nfcall and friends). But much of the time, the solution will be to use deferreds.
var deferred = Q.defer();
FS.readFile("foo.txt", "utf-8", function (error, text) {
    if (error) {
        deferred.reject(new Error(error));
    } else {
        deferred.resolve(text);
    }
});
return deferred.promise;

// Note that a deferred can be resolved with a value or a promise. 
// The reject function is a shorthand for resolving with a rejected promise.
// this:
deferred.reject(new Error("Can't do it"));

// is shorthand for:
var rejection = Q.fcall(function () {
    throw new Error("Can't do it");
});
deferred.resolve(rejection);

/*
Adapting Node
If you're working with functions that make use of the Node.js callback pattern, 
where callbacks are in the form of function(err, result), 
Q provides a few useful utility functions for converting between them. 
The most straightforward are probably Q.nfcall and Q.nfapply ("Node function call/apply") 
for calling Node.js-style functions and getting back a promise:
*/
return Q.nfcall(FS.readFile, "foo.txt", "utf-8");
return Q.nfapply(FS.readFile, ["foo.txt", "utf-8"]);

