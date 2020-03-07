// Takes a function following the common error-first callback style, i.e. taking an (err, value) => ... callback as the last argument

/*
Node.js中的回调函数，根据约定具有统一形式，(err, value)=>{}，
因此，我们可以用统一的办法，将接受这种回调函数作为参数的函数，转换为返回promise的函数，
Node.js v8.0.0版本增加了util.promisify函数，用以实现这个功能。
*/

const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

async function read() {
    const content = await readFileAsync('./test.js', 'utf-8');
    return content;
}

read().then(v => {
    console.log(v);
});
