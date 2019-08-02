function log( ctx ) {
	console.log( ctx.methord,ctx.header.host + ctx.url );
};

module.exports = function () {
	return function * ( next ){

		//执行中间件操作
		log( this )

		if (next) {
			yield next;
		}
	}
};


// 浏览器效果
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
undefined
hw.next()
{value: "hello", done: false}
hw.next()
{value: "world", done: false}
hw.next()
{value: "ending", done: true}
hw.next()
{value: undefined, done: true}