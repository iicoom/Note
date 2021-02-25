## 开放型问题
### 遇到过得有挑战性的问题，怎么解决的？

### 对网站优化性能提升有什么经验

### 微服务、容器、服务治理
容器技术的成熟为微服务的落地提供了基础

1. 服务开发
2. 服务无Docker化：调整配置，制作镜像
3. Docker-compose：Docker容器，容器通讯
4. Docker 仓库
5. 服务编排框架Kubernetes,Mesos,Swarm
6. CICD和Devops

软件建构的进化：
考虑业务需求，技术栈，开发成本，公司组织架构，软件的可扩展性和可维护性

Java Web架构
1. 单体架构：功能、业务集中在一个发布包里，部署运行在一个进程中。单体架构的优势：易于开发容易部署；面临挑战：代码膨胀难以维护，构建部署成本大，可扩展性差
2. 微服务架构：庞大的业务服务拆分，每个服务运行在独立进程，一般采用轻量级的通讯机制，可以通过自动化方式部署

微服务的特征：
1. 单一职责
2. 轻量级通信
3. 隔离性

虚构一个业务场景：
- 一个在线教育网站
- 用户登录注册，获取用户信息
- 有发邮件发短信功能

问题：微服务键如何通讯？如何发现？如何部署、更新、扩容？

uname -a 查看当前操作系统版本

### 通讯
1. REST API
2. RPC(微服务中使用最广泛)：dubbo（基于kv存储实现发布订阅，如Zookeeper）,dubbox,Apache Thfrit,gRPC
3. MQ

### RPC
1. I/O 线程调度模型
2. 序列化方式
3. 服务治理

#### 服务发现
1. 服务注册
1. 客户端发现：查询服务注册中心
2. 服务端发现

### 3.0 微服务开发

### Docker化
1. 拉去Docker镜像，编写Dockerfile  

### Docker服务之间通讯
1. Link: 在docker-compose中建立连接-在services:中建立links

### 搭建自己的Docker镜像仓库
harbor

### 好的的代码是什么样的？
1. lib/sdk/middleware/util/const目录结构清晰，代码注释清晰明了(api-doc)，代码层次划分清晰(api, controller, service) 各司其职
2. 变量，常量 命名规范 驼峰命名便于识别
3. 完备的测试用例
4. 安全性/稳定性/兼容性(对恶意请求的处理，参数合法性校验)
5. 错误处理，发生错误时友好好的报错信息(错误码，错误信息便于排查和错误定位)，完备的日志记录
6. 代码性能的提升，算法的改进

## 1. Show us what makes you unique
* GitHub/Stackoverflow账号
* 有无自己的网站


> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

1. Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
2. Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
3. Node.js 的包管理器 npm，是全球最大的开源库生态系统。

个人感觉称 Node 为 JavaScript runtime 也不是很准确，因为 JavaScript 除了 ECMAScript 还包括了其在浏览器端的实现 BOM、DOM，这些在 Node 中是不存在的，叫 ERE 会更贴切一些，但是 Node 因为运行在服务器端，虽然缺失的 BOM、DOM，但是多了很多针对服务器编程常用的封装，我们来简单了解一下 Node 的组成
1. ECMAScript 解释器
2. npm—— node package manager
3. CommonJS module system：NodeJS 诞生在 JavaScript 没有官方模块系统的年代，只能自己做一个规范并且内置实现（最新的已经开始支持 ES6 modules）
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
  
## 什么是错误优先的回调函数？
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

## 如何避免回调地狱你可以有如下几个方法： Architecture/流程控制

模块化：将回调函数分割为独立的函数
使用yield来计算生成器
Promise then
控制流程的库 Q
async/await

## 如何用Node监听80端口：Note/Nginx
如何用Node监听80端口这题有陷阱！在类Unix系统中你不应该尝试去监听80端口，因为这需要超级用户权限。 因此不推荐让你的应用直接监听这个端口。

目前，如果你一定要让你的应用监听80端口的话，你可以有通过在Node应用的前方再增加一层反向代理 （例如nginx）来实现，如下图所示。否则，建议你直接监听大于1024的端口。

反向代理指的是以代理服务器来接收Internet上的连接请求，然后将请求转发给内部网络上的服务器， 并且将服务器返回的结果发送给客户端。

## 什么是事件循环
Node采用的是单线程的处理机制（所有的I/O请求都采用非阻塞的工作方式），至少从Node.js开发者的角度是这样的。 而在底层，Node.js借助libuv来作为抽象封装层， 从而屏蔽不同操作系统的差异，Node可以借助livuv来来实现多线程。下图表示了Node和libuv的关系。

### 哪些工具可以用来保证一致性的代码风格你可以选择如下的工具：
JSLint
JSHint
ESLint 可以检查JSX语法

在团队开发中，这些工具对于编写代码非常的有帮助，能够帮助团队开发者强制执行规定的风格指南， 还能够通过静态分析捕获常见的错误。

解析：用于检查被面试者是否有大型项目开发经验。

## 使用NPM有哪些好处？
通过NPM，你可以安装和管理项目的依赖，并且能够指明依赖项的具体版本号。 对于Node应用开发而言，你可以通过package.json文件来管理项目信息，配置脚本， 以及指明项目依赖的具体版本。

解析：它能考察面试者使用npm命令的基础知识和Node.js开发的实际经验。

## 什么是Stub？这个应该是软件测试的内容
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

## 什么是测试金字塔？
测试金字塔指的是： 当我们在编写测试用例时，底层的单元测试应该远比上层的端到端测试要多。

当我们谈到HTTP API时，我们可能会涉及到：

有很多针对模型的底层单元测试
但你需要测试模型间如何交互时，需要减少集成测试
解析：本文主要考察被面试者的在测试方面的经验。

## 事件驱动编程风格
### 典型的阻塞式I/O编程，对数据库的查询
```
result = query('SELECT * FROM posts WHERE id = 1');
do_something_with(result)
```
当前的线程或进程要一直等待查询结果

### 时间驱动的查询方式
```js
// 先定义查询完成的回调函数
query_finished = function(result) {
	do_something_with(result);
}
query('SELECT * FROM posts WHERE id = 1', query_finished);
```
查询事件结束后，会调用query_finished

### 闭包
闭包是函数，特殊的是他可以继承并访问他自身声明的那个作用域里的变量
就如查询I/O操作事件完成，调用的query_finished
```js
(function() {
	var clickCount = 0;
	$('#myBtn').click(funciton() {
		clickCount ++;
		alert('balbala')
	})
})
```
闭包的作用是可以避免全局变量的污染，闭包可以维护状态变量

## 2. 文档阅读和代码能力 
来源于日常的积累


> 常见数据结构的处理能力
## 提示 可以使用 lodash 或 bluebird 或任何你觉得可以方便的东西 加上测试脚本会更好哟

collection数据结构
```js
const originalData = [
  { name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }, 
  { name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }, 
  { name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }
];
```

### Q1:  age = x, return all data whose age is greater than x

```js
import _ from 'lodash';

_.filter(originalData, function(o) { return o.age > x; })


// ES6 中已经具备了 filter 方法
> originalData.filter(item => item.age > 29)

// [ { name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
//   { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' },
//   { name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' } ]

// 注意collection.filter()与collection.find()的区别
originalData.find(o => o.age > 29)

// {name: "bo", age: 30, score: 90, gender: 1, lesson: "math"}

// filler返回所有匹配，类型是数组。 find只返回第一个匹配到的 返回对象。
```

### Q2: Return the average scores group by `lesson` and `gender`;
返回平均成绩，以lesson 和 gender 分组 如下：math 

// returns { math: { 0: 73, 1: 82 }, english: { 0: 65, 1: 43 } }

```js
// 按gender分组
_.groupBy(originalData, 'gender')

=>
{
	0: [{ name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }],
	1: [{ name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  		{ name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }, 
  		{ name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }]
}

// 按lesson分组
_.groupBy(originalData, 'lesson')

=>
{
	english: [{ name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }],
	math: [{ name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  		   { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }, 
   	 	   { name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }]
}


// 先按 lesson 分类，再按 gender 计算 average score

const result = { math:{}, english:{} };
const { math, english } = _.groupBy(originalData, 'lesson')

const mbg = _.groupBy(math, 'gender')
=>
{ 
	0: [{ name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }],
	1: [{ name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  		   { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }]
}
const ebg = _.groupBy(english, 'gender')
=>
{ 1: [{ name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }]}

result.math.0 = _.sumBy(mbg.0, 'score')/mbg.0.length;
result.math.1 = _.sumBy(mbg.1, 'score')/mgb.1.length;

result.english.1 = _.sumBy(ebg.1, 'score')/ebg.1.length;
```

#### Q3 Return all data whose `name` property appears more than once in `originalData`

找出名字在集合中出现大于一次的数据, name: 'bo' 的两条数据

```js
// 方法一：
// 使用lodash.groupBy("name")  
const groups =_.groupBy(originalData, "name")
/*
{bo: Array(2), hou: Array(1), jian: Array(1)}
*/
const result = []
Object.values(groups).forEach(arr => {
	if (arr.length > 1) {
		result.push(arr)
	}
})
// console.log(result)
// [{name: "bo", age: 30, score: 90, gender: 1, lesson: "math"},{name: "bo", age: 30, score: 80, gender: 1, lesson: "english"}]


// 方法二：
// 先把originalData的名字提取出来
let names = originalData.map(o => o.name)
=>
["bo", "hou", "jian", "bo"]
let uniqname = Array.from(new Set(names))
=>
["bo", "hou", "jian"]

function notOnce(collection, names, times) {
	let cache;
	let result = []
	names.forEach(function(name) {
		cache = collection.filter( o => o.name == name)
		if (cache.length > times){
			result.push(cache);
		}
	})
	return result;
}

let target = notOnce(originalData, uniqname, 1)
console.log(target)
```

## 2.2 Bluebird

下面是几个 promise factories
```
person.giveBirthTo(name) // returns Promise.<person>
person.giveFoodTo(person) // returns Promise.<food>
person.eat(food) // returns Promise.<Boolean>
person.excrete() // returns Promise.<food>
person.findMates() // returns Promise.<Array.<person>>
person.dateWith(person) // returns Promise.<Boolean>
person.makeLoveWith(person) // returns Promise.<Boolean>
```
通过上面的方法请完成下面问题，使用 `coroutine` 或者 ES2017 `async function` 会有加分，注意，以下问题的序号不是要把此题目要拆分成5个问题。

 1. 名叫 `Daniel` 的 person 生了一个名字为 `Alice`的person，如果有任何异常，exit
 2. 在接下来18年里的每一天，
	* `Daniel` gives food to `Alice`
	* `Alice` then eats food
	* `Alice` then excretes, if necessary, into food of natural mother
	* If anything goes wrong, ignore that and continue to another day
 3. `Alice` 找男朋友（finds mates）, then she will date with everyone until the date is successful. If she has no mates or every date is failed, exit.
 4. `Alice` makes love with the successful dated person. If anything goes wrong, exit.
 5. `Alice` give birth to `Bob`. If anything goes wrong, exit.
 
2.2答：

```js
async function () {
	try {
		await Daniel.giveBirthTo(Alice);
		await Daniel.giveFoodTo(Alice);
		await Alice.eat(food);
		await Alice.excrete();
		await Alice.findMates();
		await Alice.dateWith(person);
		await Alice.makeLoveWith(person);
		await Alice.giveBirthTo(Bob);
	} catche(e) {
	 	throw e;
	}
}
```

## 3 Git 相关操作

### 3.1  分支的切换
Suppose you have been working on a branch `foo` for several days, in the middle of break you reformat some code style in a series of commit, then you continue working for another days. After all you raise a pull request and your deadhead reviewer tell you to split your branch into one containing the necessary commits and the other containing ONLY the code style reformat. What should you do in git?
假设你已经在一个分支“foo”上工作了好几天，期间你重新格式化一些代码风格的一系列提交，然后你继续工作了几天。 最终你提出了一个拉动请求，你的deadhead审查者告诉你把你的分支分成一个包含必要的提交，另一个只包含代码样式重新格式化。 你应该在git中做什么？
```
git checkout -b style_reformat 作为样式修改的分支，把其他与样式无关的提交都删除掉 然后重新pull request

git checkout foo  作为非样式提交的分支，把样式修改全部还原 然后重新提交
```


### 3.2  Remote is god
Suppose you have been working on a branch `foo` tracking the remote branch `origin/foo`, you make a mess in the working directory, do some unnecessary commits and finally you feel like starting from remote branch again. The remote branch also have some commits ahead. What should you do in git?
假设你一直在跟踪远程分支“origin / foo”的分支“foo”，你会在工作目录中发生混乱，做一些不必要的提交，最后你再想从远程分支开始。 远程分支还有一些提前。 你应该在git中做什么？

```
git-reset - Reset current HEAD to the specified state
git reset [<mode>] [<commit>]
```

### 3.3 Resolving conflicts
Which software do you use to resolve conflicts?
您通常怎么解决冲突？

```
sourceTree 中 解决冲突
```

### 其他
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN("37");      // false: 可以被转换成数值37
isNaN("37.37");   // false: 可以被转换成数值37.37
isNaN("");        // false: 空字符串被转换成0
isNaN(" ");       // false: 包含空格的字符串被转换成0

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

isNaN("blabla")   // true: "blabla"不能转换成数值




