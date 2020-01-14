const start = require('./pveConf')
const { otherFunc } = require('./pveConf')

console.log('main', start)
console.log('main{otherFunc}', otherFunc)
console.log('typeof main{otherFunc}', typeof(otherFunc))

/*
PS F:\Documents> node main.js
DefaultPveProgress { lastPveTime: 0, statisticData: [] }
main { otherFunc: [Function: otherFunc] }
main{otherFunc} [Function: otherFunc]
typeof main{otherFunc} function
*/
