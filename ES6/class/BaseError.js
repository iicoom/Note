/*
在一个类中只能有一个名为 “constructor” 的特殊方法。 一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。

在一个构造方法中可以使用super关键字来调用一个父类的构造方法。

如果没有显式指定构造方法，则会添加默认的 constructor 方法。

如果不指定一个构造函数(constructor)方法, 则使用一个默认的构造函数(constructor)。
*/
class BaseError {
  constructor(code, resource, filed) {
    this.code = code;
    this.resource = resource;
    this.filed = filed;
  }
}


class MissingFiledError extends BaseError {
  constructor(resource, filed) {
    super('missing_field', resource, filed);
  }
}

class InvalidError extends BaseError {
  constructor(resource, filed) {
    super('invalid', resource, filed);
  }
}

class AlreadyExistsError extends BaseError {
  constructor(resource, filed) {
    super('already_exists', resource, filed);
  }
}

let berror = new BaseError('BaseError', 'system', 'stack')
console.log(berror)
console.log(typeof berror)
let aerror = new AlreadyExistsError('custom','name')
console.log(aerror)
// BaseError { code: 'BaseError', resource: 'system', filed: 'stack' }
// object
// AlreadyExistsError { code: 'already_exists', resource: 'custom', filed: 'name' }


