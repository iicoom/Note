
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
