// V8 内置了一个性能分析工具——Tick Processor，可以记录 JavaScript/C/C++ 代码的堆栈信息，该功能默认是关闭的，可以通过添加命令行参数 --prof 开启。

const crypto = require('crypto')
/*
function hash (password) {
  const salt = crypto.randomBytes(128).toString('base64')
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512')
  return hash
}

let i = 0
console.time('pbkdf2Sync')
for (let i = 0; i < 100; i++) {
  hash('random_password')
}
console.log(i++) // 上边的hash为同步代码, for执行完才会向下执行
console.timeEnd('pbkdf2Sync')
*/
// 运行 node --prof app
// 0
// pbkdf2Sync: 738.553ms


// 早期我们需要借助 node-tick-processor 这样的工具解析 v8.log，但 Node.js 在 v5.2.0 之后包含了 v8.log 处理器，添加命令行参数 --prof-process 开启。
// 运行
// node --prof-process isolate-0x103000000-v8.log
/*
Statistical profiling result from isolate-000001B8262F1FE0-12168-v8.log, (408 ticks, 0 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
    395   96.8%          D:\software\nodejs\node.exe  
     13    3.2%          C:\Windows\SYSTEM32\ntdll.dll

 [JavaScript]:
   ticks  total  nonlib   name

 [C++]:
   ticks  total  nonlib   name

 [Summary]:
   ticks  total  nonlib   name
      0    0.0%    NaN%  JavaScript
      0    0.0%    NaN%  C++
      2    0.5%  Infinity%  GC
    408  100.0%          Shared libraries

 [C++ entry points]:
   ticks    cpp   total   name

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 1.0% are not shown.

   ticks parent  name
    395   96.8%  D:\software\nodejs\node.exe
    387   98.0%    D:\software\nodejs\node.exe
    354   91.5%      LazyCompile: ~pbkdf2Sync internal/crypto/pbkdf2.js:45:20
    354  100.0%        LazyCompile: ~hash E:\Joy\Note\Nodejs\Debugging\Tick Processor\app.js:5:15
    354  100.0%          Eval: ~<anonymous> E:\Joy\Note\Nodejs\Debugging\Tick Processor\app.js:1:1
    354  100.0%            LazyCompile: ~Module._compile internal/modules/cjs/loader.js:868:37
     15    3.9%      LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
     15  100.0%        LazyCompile: ~nativeModuleRequire internal/bootstrap/loaders.js:183:29
      2   13.3%          Eval: ~<anonymous> tty.js:1:1
      2  100.0%            LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
      2   13.3%          Eval: ~<anonymous> internal/bootstrap/node.js:1:1
      2   13.3%          Eval: ~<anonymous> crypto.js:1:1
      2  100.0%            LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
      1    6.7%          LazyCompile: ~setupProcessObject internal/bootstrap/node.js:319:28
      1  100.0%            Eval: ~<anonymous> internal/bootstrap/node.js:1:1
      1    6.7%          LazyCompile: ~setupPrepareStackTrace internal/bootstrap/node.js:300:32
      1  100.0%            Eval: ~<anonymous> internal/bootstrap/node.js:1:1
      1    6.7%          LazyCompile: ~setupBuffer internal/bootstrap/node.js:403:21
      1  100.0%            Eval: ~<anonymous> internal/bootstrap/node.js:1:1
      1    6.7%          LazyCompile: ~getColorDepth internal/tty.js:94:23
      1  100.0%            LazyCompile: ~Console.<computed> internal/console/constructor.js:251:49
      1    6.7%          Eval: ~<anonymous> timers.js:1:1
      1  100.0%            LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
      1    6.7%          Eval: ~<anonymous> internal/source_map/source_map_cache.js:1:1
      1  100.0%            LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
      1    6.7%          Eval: ~<anonymous> internal/modules/cjs/loader.js:1:1
      1  100.0%            LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
      1    6.7%          Eval: ~<anonymous> internal/console/global.js:1:1
      1  100.0%            LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
      1    6.7%          Eval: ~<anonymous> fs.js:1:1
      1  100.0%            LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42

     13    3.2%  C:\Windows\SYSTEM32\ntdll.dll
      2   15.4%    D:\software\nodejs\node.exe
      1   50.0%      LazyCompile: ~prepareMainThreadExecution internal/bootstrap/pre_execution.js:9:36
      1  100.0%        Eval: ~<anonymous> internal/main/run_main_module.js:1:1
      1   50.0%      Eval: ~<anonymous> internal/streams/lazy_transform.js:1:1
      1  100.0%        LazyCompile: ~NativeModule.compile internal/bootstrap/loaders.js:272:42
      1  100.0%          LazyCompile: ~nativeModuleRequire internal/bootstrap/loaders.js:183:29
			1  100.0%            Eval: ~<anonymous> internal/crypto/cipher.js:1:1
		*/


// 将同步的 pbkdf2Sync 改为异步的 pbkdf2
function hash (password, cb) {
	const salt = crypto.randomBytes(128).toString('base64')
	crypto.pbkdf2(password, salt, 10000, 64, 'sha512', cb)
}

let count = 0
console.time('pbkdf2')
for (let i = 0; i < 100; i++) {
	hash('random_password', () => {
		count++
		if (count === 100) {
			console.timeEnd('pbkdf2')
		}
	})
}
// node --prof app
// pbkdf2: 222.907ms   速度提升了2倍
