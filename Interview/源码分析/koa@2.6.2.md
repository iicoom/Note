## 模块构成

4个 module, application/context/request/response

以 application 模块导出

```
const Emitter = require('events');
const context = require('./context');
const request = require('./request');
const response = require('./response');


module.exports = class Application extends Emitter {
	/**
	 * Initialize a new `Application`
	 */
	
	constructor() {
		super();

		this.proxy = false;
		this.middleware = [];
		this.subdomainOffset = 2;
		this.env = process.env.NODE_ENV || 'development';
		this.context = Object.create(context);
		this.request = Object.create(request);
		this.response = Object.create(response);

	}

	listen(...args) {
		const server = http.createServer(this.callback())
		return server.listen(...args);
	}

	callback() {
		const fn = compose(this.middleware);

		const handleRequest = (req, res) => {
			const ctx = this.createContext(req, res);
			return this.handleRequest(ctx, fn)
		}

		return handleRequest;
	}

	/**
	   * Handle request in callback.
	   *
	   * @api private
	   */
	handleRequest(ctx, fnMiddleware) {
		const res = ctx.res;
		res.statusCode = 404;
		const onerror = err => ctx.onerror(err);
		const handleResponse = () => respond(ctx);
		onFinished(res, onerror);
		return fnMiddleware(ctx).then(handleResponse).catch(onerror);
	}

	/**
	   * Initialize a new context.
	   *
	   * @api private
	   */
    createContext(req, res) {
    	const context = Object.create(this.context);
    	const request = context.request = Object.create(this.request);
    	const response = context.response = Object.create(this.response);
    	context.app = request.app = response.app = this;
    	context.req = request.req = response.req = req;
    	context.res = request.res = response.res = res;
    	request.ctx = response.ctx = context;
    	request.response = response;
	    response.request = request;
	    context.originalUrl = request.originalUrl = req.url;
	    context.state = {};
	    return context;
    }
}

```























