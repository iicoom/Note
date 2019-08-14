module.exports = function(app) {
	/**
	 * [checkQuery description]
	 * @param  {[type]} key     [description]
	 * @param  {[type]} transFn [description]
	 * @return {[type]}         [description]
	 */
	app.context.checkQuery = function(key, transFn) {
		return new Validator(this, key, getValue(this.request.query, key, transFn), hasKey(), this.request.query);
	}

	/**
	 * [checkBody description]
	 * @param  {[type]} key    [description]
	 * @param  {[type]} tranFn [description]
	 * @return {[type]}        [description]
	 */
	app.context.checkBody = function(key, tranFn) {
		var body = this.request.body;

		if(!body) {
			return new Validator(this, null, null, false, null, false)
		}
		var body = body.fileds || body;
		return new Validator(this, key, getValue(body, key, tranFn), hasKey(body, key, transFn), body);
	}


}


function Validator(context, key, value, exists, params, goOn) {
	this.params = params;
	this.context = context;
	this.key = key;
	this.value = value;
	this.exists = exists;
	this.goOn = (false === goOn?false:true);
	if(this.value && this instanceof FileValidator && 'goOn' in this.value) {
		this.goOn = this.value.goOn;
	}
}


Validator.prototype.notEmpty = function(tip) {
	if (this.goOn && (null==this.value || 'undefined'==typeof(this.value) || 
		('string' == typeof(this.value) && !this.value))) {
		this.addError(tip || this.key + " can not be empty.")
	}
	return this;
}

Validator.prototype.addError = function(tip) {
	this.goOn = false;
	var e = {};
	e[this.key] = tip;
	this.context.errors.push(e);
}

/**
 * const J = '/asdf';
   J.indexOf('/')
   0
 * @param  {[type]} obj     [description]
 * @param  {[type]} key     [description]
 * @param  {[type]} transFn [description]
 * @return {[type]}         [description]
 */
function getValue(obj, key, transFn) {
	if((0 == key.indexOf('/') || 0 == key.indexOf('#/')) && transFn) {
		return jpath.resolve(obj, key)
	}
	return obj[key]
}

/**
 * const obj = { 'key1': 123, 'key2': 456}
  'key1' in obj
   true

 * @param  {[type]}  obj     [description]
 * @param  {[type]}  key     [description]
 * @param  {[type]}  transFn [description]
 * @return {Boolean}         [description]
 */
function hasKey(obj, key, transFn) {
	return key in obj;
}






