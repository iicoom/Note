const EventEmitter = require('events').EventEmitter;
const redis = require('redis');

let RedisStore = module.exports = function (options) {
	
	if (!(this instanceof RedisStore)) {
		return new RedisStore(options)
	}

	EventEmitter.call(this);

	if (!options.client) {
		debug('Init redis new client')
		client = redis.createClient(options)
	} else {
		debug('Using provided client');
		client = options.client;
	}

	client.on('connect', this.emit.bind(this, 'connect'));
	client.on('ready', this.emit.bind(this, 'ready'));

	this.on('connect', function() {
		debug('connected to redis'); 
		this.connected = client.connected;       
	})

	this.on('ready', function() {
		debug('redis ready');
	})
}