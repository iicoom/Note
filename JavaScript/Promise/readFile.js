// 1. Promise 读取文件
const fs = require('fs');
/**
 * 公用的异步读取文件方法
 * @param {*} path 
 */
const readFile = function(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function(err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
const p = "/Users/mxj/Repo/Note/JavaScript/Promise/sleep.js";
const err_p = "/Users/mxj/Repo/Note/JavaScript/Promise/sleep.j";
/*
readFile(p).then(res => {
    // console.log(res)
    // <Buffer 66 75 6e 63 74 69 6f 6e 20 73 6c 65 65 70 28 73 65 63 6f 6e 64 29 20 7b 
    // 0a 20 20 20 20 72 65 74 75 72 6e 20 6e 65 77 20 50 72 6f 6d 69 73 65 28 28 72 ... 238 more bytes>
    console.log(res.toString())
    // 打印出具体的文件内容
    // ...
}).catch(console.error)
// 如果给错误路径，且没有catch 会给出提示 有未处理的Reject
// (node:78750) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, open '/Users/mxj/Repo/Note/JavaScript/Promise/sleep.j'

// 使用catch捕获错误
// [Error: ENOENT: no such file or directory, open '/Users/mxj/Repo/Note/JavaScript/Promise/sleep.j'] {
//     errno: -2,
//     code: 'ENOENT',
//     syscall: 'open',
//     path: '/Users/mxj/Repo/Note/JavaScript/Promise/sleep.j'
//   }
*/

// 2. generator函数读取文件
/*
function * serial() {
    yield readFile(p);
    yield readFile(err_p);
}

const s = serial();
s.next().value.then(res => {
    console.log(res.toString())
    // 如果这里不返回 s.next().value; 下一个then 接收到的res 是undefined
    return s.next().value;  
}).then(res => {
    console.log(res)
}).catch(console.error)
*/

// 3. async
async function readWithAsync () {
    try{
        await readFile(p);
        await readFile(err_p);
    } catch(e) {
        console.error(e);
    }
}

readWithAsync()