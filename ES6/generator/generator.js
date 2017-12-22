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