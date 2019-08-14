# JS-immediate function

> An immediate function is one that executes as soon as it is defined. Creating an immediate function is simple: you add the open/close parentheses after the closing curly bracket, and then wrap the entire function in parentheses. That’s it!

[https://blog.kevinchisholm.com/javascript/javascript-immediate-functions-basics/](https://blog.kevinchisholm.com/javascript/javascript-immediate-functions-basics/)

## Example \# 1:

In Example \# 1, we have a very simple function. If you were to paste this function into your code and run it, nothing would happen. This is because the function is assigned to a variable, and that is it. We have only the function declaration here, but we never call the function. But if you were to add the line “myFunc\(\);” to this code and run it, the output would be: “I am a simple function”.

```text
var myFunc = function(){
    console.log('I am a simple function');
}
```

## Example \# 2:

In order to turn this function into an immediate function, we add the open/close parentheses after the closing curly bracket and then wrap the entire function in parentheses. After we do this, we run the code and whatever happens in that function is executed immediately after the function declaration is complete.

```text
(function(){
    console.log('hello, I am an immediate function');
}())
```

So the output for Example \# 2 would be: hello, I am an immediate function

## Example \# 3:

In Example \# 3, we first declare a variable called “myName” before declaring our function. When declaring our immediate function, we take one argument: “thisName”. At the end of the immediate function declaration, the open/close parentheses pass the variable “myName” to our immediate function. So, not only does this set of open/close parentheses execute the function, it also allows you to pass an argument to that function.

```text
var myName = 'bart Simpson';

(function(thisName){
    console.log( 'hello, my name is: ' + thisName );
}(myName))
```

The output for Example \# 3 would be: “hello, my name is: bart Simpson”

## Summary:

In this article, we touched on what immediate functions in JavaScript are, how to construct one, and how to pass parameters into them. But immediate functions in JavaScript can get very deep, very quickly. There is a world of power and subtlety that is available to you via immediate functions. Since that is out of the scope of this post, however, it will be covered in more detail in later posts.

## 借此分析Q

```text
(function (definition) {
    // Turn off strict mode for this function so we can assign to global.Q
    /* jshint strict: false */

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else {
        Q = definition();
    }

})(function () {
    "use strict";

    /**
     * Constructs a promise for an immediate reference, passes promises through, or
     * coerces promises from different systems.
     * @param value immediate reference or promise
     */
    function Q(value) {
        // If the object is already a Promise, return it directly.  This enables
        // the resolve function to both be used to created references from objects,
        // but to tolerably coerce non-promises to promises.
        if (isPromise(value)) {
            return value;
        }

        // assimilate thenables
        if (isPromiseAlike(value)) {
            return coerce(value);
        } else {
            return fulfill(value);
        }
    }
    Q.resolve = Q;

    return Q;
})
```

与上边的立即表达式结构还不太一样 这种写法同样可以把 function作为参数传到上边的方法里

```text
(function(definition) {
    alert(definition());
})(function (){
    function sayName() {
        console.log('打死你个龟孙')
    }
    return sayName;
})
```

浏览器会弹出

function sayName\(\) { console.log\('打死你个龟孙'\) }

