"use strict";
exports.__esModule = true;
var export_1 = require("./export");
var strings = ["Hello", "89995", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new export_1.ZipCodeValidator();
validators["Letters only"] = new export_1.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
});
// At the command line, run the TypeScript compiler:
// tsc test.ts

/*
➜  Modules git:(master) ✗ node test.js
"Hello" - does not match ZIP code
"Hello" - matches Letters only
"89995" - matches ZIP code
"89995" - does not match Letters only
"101" - does not match ZIP code
"101" - does not match Letters only

 */