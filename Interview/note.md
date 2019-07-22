> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

1. Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
2. Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
3. Node.js 的包管理器 npm，是全球最大的开源库生态系统。

个人感觉称 Node 为 JavaScript runtime 也不是很准确，因为 JavaScript 除了 ECMAScript 还包括了其在浏览器端的实现 BOM、DOM，这些在 Node 中是不存在的，叫 ERE 会更贴切一些，但是 Node 因为运行在服务器端，虽然缺失的 BOM、DOM，但是多了很多针对服务器编程常用的封装，我们来简单了解一下 Node 的组成
1. ECMAScript 解释器
2. npm—— node package manager
3. CommonJS module system：NodeJS 诞生在 JavaScript 没有官方模块系统的年代，只能自己做一个规范并且内置实现（最新的 8.5 4. 已经开始支持 ES6 modules）
4. debugger：方便开发者进行代码调试
5. fs、Stream、http、util 等常用内置模块

* 什么是错误优先的回调函数？
* 如何避免回调地狱？
* 如何用Node来监听80端口？
* 什么是事件循环？
* 哪些工具可以用来保证一致的编程风格？
* 运算错误与程序员错误的区别？
* 使用NPM有哪些好处？
* 什么是stub？举个使用场景？
* 什么是测试金字塔？对于HTTP API，如何利用测试金字塔？
* 你最喜欢的HTTP框架，并说明原因？

### 什么是错误优先的回调函数？
Node.js 约定，回调函数的第一个参数，必须是错误对象err（如果没有错误，该参数就是 null）？原因是执行分成两段，在这两段之间抛出的错误，程序无法捕捉，只能当作参数，传入第二段。

错误优先的回调函数用于传递错误和数据。第一个参数始终应该是一个错误对象， 用于检查程序是否发生了错误。其余的参数用于传递数据
```
fs.readFile(filePath, function(err, data) { 
    if (err) { 
        //handle the error 
    } 
    // use the data object 
});
```

### 如何避免回调地狱你可以有如下几个方法： Architecture/流程控制

模块化：将回调函数分割为独立的函数
使用yield来计算生成器
Promise then
控制流程的库 Q
async/await

### 如何用Node监听80端口：Note/Nginx
如何用Node监听80端口这题有陷阱！在类Unix系统中你不应该尝试去监听80端口，因为这需要超级用户权限。 因此不推荐让你的应用直接监听这个端口。

目前，如果你一定要让你的应用监听80端口的话，你可以有通过在Node应用的前方再增加一层反向代理 （例如nginx）来实现，如下图所示。否则，建议你直接监听大于1024的端口。

反向代理指的是以代理服务器来接收Internet上的连接请求，然后将请求转发给内部网络上的服务器， 并且将服务器返回的结果发送给客户端。

### 什么是事件循环
Node采用的是单线程的处理机制（所有的I/O请求都采用非阻塞的工作方式），至少从Node.js开发者的角度是这样的。 而在底层，Node.js借助libuv来作为抽象封装层， 从而屏蔽不同操作系统的差异，Node可以借助livuv来来实现多线程。下图表示了Node和libuv的关系。

### 哪些工具可以用来保证一致性的代码风格你可以选择如下的工具：
JSLint
JSHint
ESLint 可以检查JSX语法

在团队开发中，这些工具对于编写代码非常的有帮助，能够帮助团队开发者强制执行规定的风格指南， 还能够通过静态分析捕获常见的错误。

解析：用于检查被面试者是否有大型项目开发经验。

### 使用NPM有哪些好处？
通过NPM，你可以安装和管理项目的依赖，并且能够指明依赖项的具体版本号。 对于Node应用开发而言，你可以通过package.json文件来管理项目信息，配置脚本， 以及指明项目依赖的具体版本。

解析：它能考察面试者使用npm命令的基础知识和Node.js开发的实际经验。

### 什么是Stub？这个应该是软件测试的内容
举个使用场景Stub是用于模拟一个组件或模块的函数或程序。在测试用例中， 简单的说，你可以用Stub去模拟一个方法，从而避免调用真实的方法， 使用Stub你还可以返回虚构的结果。你可以配合断言使用Stub。

举个例子，在一个读取文件的场景中，当你不想读取一个真正的文件时：
```
var fs = require('fs'); 

var readFileStub = sinon.stub(fs, 'readFile', function (path, cb) { 
    return cb(null, 'filecontent'); 
});

expect(readFileStub).to.be.called;  
readFileStub.restore(); 
```
在单元测试中：Stub是完全模拟一个外部依赖，而Mock常用来判断测试通过还是失败。

stub
trampoline
ricochet
thunk

[Node.js单元测试](https://segmentfault.com/a/1190000002921481)

### 什么是测试金字塔？
测试金字塔指的是： 当我们在编写测试用例时，底层的单元测试应该远比上层的端到端测试要多。

当我们谈到HTTP API时，我们可能会涉及到：

有很多针对模型的底层单元测试
但你需要测试模型间如何交互时，需要减少集成测试
解析：本文主要考察被面试者的在测试方面的经验。

### 事件驱动编程风格
#### 典型的阻塞式I/O编程，对数据库的查询
```
result = query('SELECT * FROM posts WHERE id = 1');
do_something_with(result)
```
当前的线程或进程要一直等待查询结果

#### 时间驱动的查询方式
```
先定义查询完成的回调函数
query_finished = function(result) {
	do_something_with(result);
}
query('SELECT * FROM posts WHERE id = 1', query_finished);
```
查询事件结束后，会调用query_finished

#### 闭包
闭包是函数，特殊的是他可以继承并访问他自身声明的那个作用域里的变量
就如查询I/O操作事件完成，调用的query_finished
```
(function() {
	var clickCount = 0;
	$('#myBtn').click(funciton() {
		clickCount ++;
		alert('balbala')
		})
})
```
闭包的作用是可以避免全局变量的污染，闭包可以维护状态变量





