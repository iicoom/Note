/**
 * [MemoryStore description]
 */
const MemoryStore = function() {
	this.sessions = {};
} 

MemoryStore.prototype.get = function *(sid) {

}

MemoryStore.prototype.set = function *(sid, val) {
  	debug('set value %j for key %s', val, sid);
  	this.sessions[sid] = val;
}

MemoryStore.prototype.destroy = function *(sid) {
	delete this.sessions[sid];
}


var EventEmitter = require('events').EventEmitter;

/**
 * [Store description]
 * @param {[type]} client  [description]
 * @param {[type]} options [description]
 */
const Store = function(client, options) {
	this.client = client;
	this.options = {};
	copy(options).and(defaultOptions).to(this.options);

	EventEmitter.call(this);

	// TODO...
}

Store.prototype.set = function *(sid, sess) {
	var ttl = this.options.ttl;

	// TODO..
	
	sid = this.options.prefix + sid;
	debug('SET key: %s, value: %s, ttl: %d', sid, sess, ttl);
	yield this.client.set(sid, sess, ttl);
  	debug('SET complete');
}


/**
 * koa-generic-session
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * 如果options中没有提供 store 就会使用 MemoryStore() 导致内存泄漏
 */
module.exports = function (options) {

	let client = options.store || new MemoryStore();

	let store = new Store(client, {
		ttl: options.ttl,
		prefix: options.prefix,
	})

	// 生成sid
	let genSid = options.genSid || uid.sync;

	store.on('disconnect', function() {
	    if (storeStatus !== 'available') return;
	    storeStatus = 'pending';
	    waitStore = new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        if (storeStatus === 'pending') storeStatus = 'unavailable';
	        reject(new Error('session store is unavailable'));
	      }, reconnectTimeout);
	      store.once('connect', resolve);
	    });

	  });

	store.on('connect', function() {
	    storeStatus = 'available';
	    waitStore = Promise.resolve();
	});

	return options.defer ? deferSession : session;
}


function *session(next) {
	this.sessionStore = store;
	
}

// 使用 redisStore    import redisStore from 'koa-redis';




