## 和谐(harmony)模式的NodeJS
　　NodeJS使用V8引擎，而V8引擎对ES6中的东西有部分支持，所以在NodeJS中可以使用一些ES6中的东西。但是由于很多东西只是草案而已，也许正式版会删除，所以还没有直接引入。而是把他们放在了和谐(harmony)模式下，在node的运行参数中加入harmony flag才能启用。