// A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
// 构造器使得实例化对象调用方法之前 自定义初始化参数成为可能
class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();

// If you don't provide your own constructor, then a default constructor will be supplied for you. 
// If your class is a base class, the default constructor is empty:
// constructor() {}

// If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:
// constructor(...args) {
//   super(...args);
// }
// 如果是派生类默认的constructor调用父类的constructor

class ValidationError extends Error {

  constructor(message) {
    super(message);  // call parent class constructor
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}

// There can be only one special method with the name "constructor" in a class.
// 在类里只能存在一个constructor方法