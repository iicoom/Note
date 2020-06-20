console.log(`This process is pid ${process.pid}`);
console.log(`This platform is ${process.platform}`);
console.log(`The parent process is pid ${process.ppid}`);
console.log(`Version: ${process.version}`);
console.log('process.memoryUsage()\n', process.memoryUsage());
console.log('process.env\n', process.env)

setInterval(() => {
	console.log(`The process uptime ${process.uptime()}`);
},10000)

/*
This process is pid 15628
This platform is win32
The parent process is pid 16280
Version: v12.13.1
The process uptime 10.0340879
The process uptime 20.034674299
The process uptime 30.0349411
The process uptime 40.035231199
*/