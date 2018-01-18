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