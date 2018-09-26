// 整体为一个立即执行表达式

/*
	（1）分情况暴露出Q API 
		在Node.js环境下
		
		在浏览器环境下
		typeof window
		=> "object"
		typeof self
		=> "object"

*/

(function (definition) {
	"use strict";

	// This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

     // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }
})(function () {

})



// https://github.com/kriskowal/q
/*
On the first pass, promises can mitigate the “Pyramid of Doom”: 
the situation where code marches to the right faster than it marches forward. 
*/
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

//  (Here promisedStepN is a version of stepN that returns a promise.)

// Chaining
// There are two ways to chain promises. You can chain promises either inside or outside handlers. 
// The next two examples are equivalent.
return getUsername()
.then(function (username) {
    return getUser(username)
    .then(function (user) {
        // if we get here without an error,
        // the value returned here
        // or the exception thrown here
        // resolves the promise returned
        // by the first line
    })
});

return getUsername()
.then(function (username) {
    return getUser(username);
})
.then(function (user) {
    // if we get here without an error,
    // the value returned here
    // or the exception thrown here
    // resolves the promise returned
    // by the first line
});

// The only difference is nesting. 
// It’s useful to nest handlers if you need to capture multiple input values in your closure.
function authenticate() {
    return getUsername()
    .then(function (username) {
        return getUser(username);
    })
    // chained because we will not need the user name in the next event
    .then(function (user) {
        return getPassword()
        // nested because we need both user and password next
        .then(function (password) {
            if (user.passwordHash !== hash(password)) {
                throw new Error("Can't authenticate");
            }
        });
    });
}

// Using Q.fcall *********************************************************************/
// You can create a promise from a value using Q.fcall. This returns a promise for 10.
return Q.fcall(function () {
    return 10;
});

// You can also use fcall to get a promise for an exception.
return Q.fcall(function () {
    throw new Error("Can't do it");
});

// Using Deferreds ******************************************************************/
// If you have to interface with asynchronous functions that are callback-based instead of promise-based, 
// Q provides a few shortcuts (like Q.nfcall and friends).
//  But much of the time, the solution will be to use deferreds.










