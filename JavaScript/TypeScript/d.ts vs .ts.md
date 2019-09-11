/*
* What is the difference between *.d.ts vs *.ts in typescript?
 * 
 * TypeScript: *.ts and *d.ts extensions
 * https://stackoverflow.com/questions/40840821/typescript-ts-and-d-ts-extensions
 * 
 * d.ts [are declaration files]
 * 
 * I'll answer with the example that shows why you need these files.
 * Suppose, you have a lib.js library with f function.
 * 
    "use strict";
    function f() {
    }
    exports.f = f;

    This library works well with other js files. For example. using from main.js:

    var f = require('./lib').f;
    f();  
    
    
    But you're developing in TypeScript, and you need to use this function, 
    so in your index.ts you write the following:

    import {f} from './lib';

    But typescript compiler will give you an error:
    Error:(1, 17) TS2307:Cannot find module './lib'.

    This is because typescript can't read js files. So you need to tell a typescript compiler about 
    your module and a function. Certainly, you don't want to rewrite the entire lib in typescript. 
    But there is a solution - declaration files. 
    You can use the function f in index.ts by creating a declaration file for the lib.js by 
    putting the following into lib.d.ts file:

    export declare function f(): void;

    Now it will all compile correctly. 
 */