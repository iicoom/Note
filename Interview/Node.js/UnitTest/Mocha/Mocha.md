Mocha 是一个功能丰富的Javascript测试框架，它能运行在Node.js和浏览器中，支持BDD、TDD、QUnit、Exports式的测试，本文主要示例是使用更接近与思考方式的BDD

Mocha的BDD接口有：

- describe()
- it()
- before()
- after()
- beforeEach()
- afterEach()

## 测试模块 方法测试
// lib.js
```
exports.limit = function(num) {
    if (num < 0) {
        return 0;
    }
    return num;
}
```

测试
```
var lib = require('lib')

describe('module', function() {
    describe('limit', function() {
        it('limit should success', function() {
            lib.limit(10)
        })
    })
})
```
上面的代码只是运行了代码，并没有对结果进行检查，这时候就要用到断言库了，Node.js中常用的断言库有：

should.js
expect.js
chai

加入断言库，改写如下：
```
var lib = require('lib')

describe('module', function() {
    describe('limit', function() {
        it('limit should success', function() {
            lib.limit(10).should.be.equal(10)
        })
    })
})
```

## API测试

```
var express = require("express");
var request = require("supertest");
var app = express();

// 定义路由
app.get('/user', function(req, res){
  res.send(200, { name: 'jerryc' });
});

describe('GET /user', function(){
  it('respond with json', function(done){
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err){
          done(err);
        }
        res.body.name.should.be.eql('jerryc');
        done();
      })
  });
});
```

