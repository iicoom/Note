// arguments 是一个对应于传递给函数的参数的类数组对象。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments

function testArg() {
	console.log(arguments)
}

testArg('qq',123,[4,5,6],{'key':'value'})

/**
Arguments(4) ["qq", 123, Array(3), {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]

0: "qq"
1: 123
2: (3) [4, 5, 6]
3: {key: "value"}
*/



// arguments is an Array-like object accessible inside functions that contains 
// the values of the arguments passed to that function.

// 例1
function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3

    console.log('arguments', arguments)

    console.log('arguments.length', arguments.length)
  }
  
  func1(1, 2, 3);

/*
1
2
3
arguments [Arguments] { '0': 1, '1': 2, '2': 3 }
arguments.length 3
*/

// 例2
function trigger(...args) {
    console.log(args)
    console.log(args.shift())
}

trigger("start")
// ["start"]
// start

// 例2.1
function print(a) {
  console.log(...a)
  // { mobile: 1 } { unique: true }
  const o = [...a]
  console.log(o)
  // [ { mobile: 1 }, { unique: true } ]
  inner(...a)
  // [ { mobile: 1 }, { unique: true } ]

  // print中的...a就如同直接传a一样, 如果要重新组合参数为一个更大的数组, 这种方式可能比较方便：
  inner([1, 2, {}, ...a])
  // [ [ 1, 2, {}, { mobile: 1 }, { unique: true } ] ]
}

const arr = [{mobile:1},{unique:true}]
function inner(...args) {
  console.log(args)
}
print(arr)

// 传入print的参数必须是可迭代的，因为内部要执行 ...a, 可以传入 const arr = 'string1'  => ['s', 't', 'r','i', 'n', 'g','1'] 但不能传入对象（报错）



// 例3 处理不定数量的参数
function createRedisKey(key, serverId, guid) {
  console.log('arguments', arguments)
  let str = '';
  do {
    if (key) {
      str += key;
    }
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] === undefined || arguments[i] === null || arguments[i] === '') {
        continue;
      }
      str += ':' + arguments[i];
    }
  } while (false);

  // console.log(typeof arguments)  // object
  for (let key in arguments) {
     console.log(`arguments[${key}]`, arguments[key])
  }
	
  return str;
}

const rkey = createRedisKey('mysql-queue', '1001', 'uid:10002221', 'password')
console.log(rkey)

// arguments [Arguments] {
//   '0': 'mysql-queue',
//   '1': '1001',
//   '2': 'uid:10002221',
//   '3': 'password'
// }
// arguments[0] mysql-queue
// arguments[1] 1001
// arguments[2] uid:10002221
// arguments[3] password
// mysql-queue:1001:uid:10002221:password
