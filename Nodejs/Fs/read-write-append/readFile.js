var fs = require('fs');
var path = require('path');


// var configDir = path.join(__dirname + '/config');  // /Users/mxj/Repo/Note/Nodejs/Fs/config
var configDir = path.join(__dirname + '/config/custom.js');
// console.log(__dirname)
// console.log(configDir)

// 1. 不指定编码方式将返回原生<Buffer 61 64 6d 69 6e 69 73 74 72 61 74 6f 72>
// fs.readFile(configDir,(err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// })


// 2. 使用utf-8
// fs.readFile(configDir,'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data.toString());
// })

// const functionalConfig = {
// 	logdir: __dirname + '/logs/', // 日志文件夹
// 	redis: {
// 	  port: 6379,
// 	  host: '101.201.197.163',
// 	  auth_pass: 'eGd3cEn38tYCQiDBzx7PTWwO'
// 	},
// 	memberServer: {
// 	  protocol: 'http',
// 	  hostname: 'localhost',
// 	  port: 18880
// 	}
//   };
  
//   module.exports = functionalConfig;


// 3. 使用toString() 将Buffer转换为 字符串 
// fs.readFile(configDir,(err, data) => {
// 	if (err) throw err;
// 	console.log(data.toString());
// })
// const functionalConfig = {
// 	logdir: __dirname + '/logs/', // 日志文件夹
// 	redis: {
// 	  port: 6379,
// 	  host: '101.201.197.163',
// 	  auth_pass: 'eGd3cEn38tYCQiDBzx7PTWwO'
// 	},
// 	memberServer: {
// 	  protocol: 'http',
// 	  hostname: 'localhost',
// 	  port: 18880
// 	}
// };
  
//   module.exports = functionalConfig;


// 解析./config/config
// fs.readFile(`${__dirname}/config/config`,'utf-8',(err, data) => {
// 	if (err) throw err;
// 	console.log(data); 
// 	let trimed = data.replace(/\ +/g,"");  // 去掉空格
// 	trimed = trimed.replace(/[\r\n]/g,""); // 去掉 ( \n是换行,英文是New line)(\r是回车,英文是Carriage return)
// 	trimed = trimed.replace(/"/g,"");	   // 第三步
// 	const rightPart = trimed.split(",");
// 	const obj = {};
// 	rightPart.forEach(item => {
// 		let temp = item.split(":")
// 		// obj.temp[0] = temp[1]  		   // 这样赋值会报错 obj.temp是undefined
// 		obj[temp[0]] = temp[1]
// 	})
// 	console.log("obj:", obj)
// })
// 第三步解决的问题：
// obj: { host: '"127.0.0.1"', port: '"3000"', db: '"123.0.44.5"' }
// obj: { host: '127.0.0.1', port: '3000', db: '123.0.44.5' }



/******************************************************************************************************** 
在文件指定行插入新行 加入在倒数第2行插入新行 'pass': '123456'
*********************************************************************/
/*
fs.readFile(path.resolve(__dirname, '../config/config.txt'), 'utf-8', (err, data) => {
	console.log('data:', data)
	const lines = data.split('\n')
	console.log('lines:', lines)
	lines.splice(lines.length-1, 0, 'pass: "123456",')
	// 下面的方法回调是无参数的 所以不用处理参数
	fs.writeFile(path.resolve(__dirname, '../config/config.txt'), lines.join('\n'), 'utf-8', () => {})
})
*/

/**
 * Node.js 读取/写入json file
 */
const users = require('../config/users.json')

console.log("直接require加载\n", users)
// [
//   {
//     name: 'John',
//     age: 21,
//     language: [ 'JavaScript', 'PHP', 'Python' ]
//   },
//   { name: 'Smith', age: 25, language: [ 'PHP', 'Go', 'JavaScript' ] }
// ]

// Read users.json file 
/*
fs.readFile('../config/users.json', function(err, data) { 
      
	// Check for errors 
	if (err) throw err; 
 
	// Converting to JSON 
	const users = JSON.parse(data); 
		
	console.log(users); // Print users  
}); 
*/
// [
//   {
//     name: 'John',
//     age: 21,
//     language: [ 'JavaScript', 'PHP', 'Python' ]
//   },
//   { name: 'Smith', age: 25, language: [ 'PHP', 'Go', 'JavaScript' ] }
// ]


// Defining new user 
let user = { 
	name: "New User", 
	age: 30, 
	language: ["PHP", "Go", "JavaScript"] 
}; 
 
// STEP 2: Adding new data to users object 
users.push(user); 
 
// STEP 3: Writing to a file 
fs.writeFile('../config/users.json', JSON.stringify(users), err => { 
	 
	// Checking for errors 
	if (err) throw err;  
 
	console.log("Done writing"); // Success 
}); 