// The path.join() method joins all given path segments together using the platform specific separator 
// as a delimiter, then normalizes the resulting path.
console.log("path.join(__dirname,'index.html')",path.join(__dirname,'index.html'))
console.log("path.resolve(__dirname,'index.html')",path.resolve(__dirname,'index.html'))

// path.resolve总是返回一个以相对于当前的工作目录（working directory）的绝对路径。
// 上边的例子中都有__dirname（就是绝对路径）所以join和resolve的返回是一样的
console.log(path.join('db.js'))
console.log(path.resolve('db.js'))
// db.js
// /Users/guitar/Repo/koa-mysql/db.js


// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
console.log("path.resolve(__dirname, '..'):",path.resolve(__dirname, '..'))
console.log("path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'):",
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))

/**
自动加载路由文件
**/
const path = require('path')
const fs = require('fs')

let dir = path.resolve(__dirname, './routes/')
console.log(dir)
console.log(fs.readdirSync(dir))
// E:\Joy\express\routes
// [ 'index.js', 'mysqlDump.js', 'users.js' ]



