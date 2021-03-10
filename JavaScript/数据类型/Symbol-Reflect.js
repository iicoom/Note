// https://www.freecodecamp.org/news/how-did-i-miss-javascript-symbols-c1f1c0e1874a/

/**
 * Symbols are new primitive type introduced in ES6. 
 * Symbols are completely unique identifiers. 
 * Just like their primitive counterparts (Number, String, Boolean), 
 * they can be created using the factory function Symbol() which returns a Symbol.
 */

const symbol = Symbol('description');

// Every symbol returned by Symbol() is unique, so every symbol has its own identity:
// 我们需要重点记住的一点是：每个Symbol实例都是唯一的。因此，当你比较两个Symbol实例的时候，将总会返回false：
Symbol() === Symbol()
false


// Do we really need symbols?
// Use symbols when your requirement is one of these:

// 1. Enum  使用Symbol来替代常量
// To allow you to define constants with semantic语义的,语义化的 names and unique values.
// 
const directions = 
{  
    UP   : Symbol('UP'),  
    DOWN : Symbol('DOWN'),  
    LEFT : Symbol('LEFT'),  
    RIGHT: Symbol('RIGHT')
};


const TYPE_AUDIO = 'AUDIO'
const TYPE_VIDEO = 'VIDEO'
const TYPE_IMAGE = 'IMAGE'

function handleFileResource(resource) {
  switch(resource.type) {
    case TYPE_AUDIO:
      playAudio(resource)
      break
    case TYPE_VIDEO:
      playVideo(resource)
      break
    case TYPE_IMAGE:
      previewImage(resource)
      break
    default:
      throw new Error('Unknown type of resource')
  }
}
// 现在有了Symbol，我们大可不必这么麻烦了：
const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = Symbol()

// 2. Name Clashes: when you wanted to prevent collisions with keys in objects


// 3. Symbol类型的key是不能通过Object.keys()或者for...in来枚举的，
// 它未被包含在对象自身的属性名集合(property names)之中
let obj = {
    [Symbol('name')]: '一斤代码',
    age: 18,
    title: 'Engineer'
}
 
Object.keys(obj)   // ['age', 'title']

for (let p in obj) {
    console.log(p)   // 分别会输出：'age' 和 'title'
}
 
 Object.getOwnPropertyNames(obj)   // ['age', 'title']
//  因为这样一个特性，当使用JSON.stringify()将对象转换成JSON字符串的时候，Symbol属性也会被排除在输出内容之外
// 我们可以利用这一特点来更好的设计我们的数据对象，让“对内操作”和“对外选择性输出”变得更加优雅。

// 我们就没办法获取以Symbol方式定义的对象属性了么？非也
// 使用Object的API
Object.getOwnPropertySymbols(obj) // [Symbol(name)]

// 使用新增的反射API
Reflect.ownKeys(obj) //  ["age", "title", Symbol(name)]