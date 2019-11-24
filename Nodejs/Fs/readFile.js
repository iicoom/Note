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
//   };
  
//   module.exports = functionalConfig;


// 解析对象
// 解析./config/index.js-const config
// fs.readFile(`${__dirname}/config/index.js`,'utf-8',(err, data) => {
// 	if (err) throw err;
// 	// console.log(typeof data);  // string
// 	// console.log(data); 
// 	const rightPart = data.split("= ")[1];
// 	console.log(rightPart)
// 	console.log(JSON.parse(rightPart));

// })

// 解析./config/config
fs.readFile(`${__dirname}/config/config`,'utf-8',(err, data) => {
	if (err) throw err;
	console.log(data); 
	let trimed = data.replace(/\ +/g,"");  // 去掉空格
	trimed = trimed.replace(/[\r\n]/g,""); // 去掉 ( \n是换行,英文是New line)(\r是回车,英文是Carriage return)
	trimed = trimed.replace(/"/g,"");	   // 第三步
	const rightPart = trimed.split(",");
	const obj = {};
	rightPart.forEach(item => {
		let temp = item.split(":")
		// obj.temp[0] = temp[1]  		   // 这样赋值会报错 obj.temp是undefined
		obj[temp[0]] = temp[1]
	})
	console.log("obj:", obj)
})
// 第三步解决的问题：
// obj: { host: '"127.0.0.1"', port: '"3000"', db: '"123.0.44.5"' }
// obj: { host: '127.0.0.1', port: '3000', db: '123.0.44.5' }
