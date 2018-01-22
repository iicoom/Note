[知乎](https://zhuanlan.zhihu.com/p/26216336)
## 如何使用koa2+es6/7打造高质量Restful API
### 耦合模式
```
# /server/user/login.js   用户登录

const express = require('express');
const router = express.Router();

 router.post('/api/user/login',function(req,res){

  // 逻辑层

 })

# /server/user/register.js  用户注册

const express = require('express');
const router = express.Router();

 router.post('/api/user/register',function(req,res){

  // 逻辑层

 })

# /server/user/put.js   更改用户资料

const express = require('express');
const router = express.Router();

 router.post('/api/user/put',function(req,res){

  // 逻辑层

 })

```
其次，后期并不好维护，当api过多，过于繁杂时，文件深层嵌套，也许你找一个api文件都费神费力。

### 分离模式
```
# /server/router.js

const express = require('express');
const router = express.Router();

 router.post('/api/user/login',require('../controllers/users/login'))         // 用户登录

       .post('/api/user/register',require('../controllers/users/register'))   // 用户注册      

       .put('/api/user/put',require('../controllers/users/put')               // 更改用户资料

       .delete('/api/user/deluser',require('../controllers/users/deluser'))   // 删除用户
       ……

```
很显然，这种api已将接口层和逻辑层分离了，接口层由一个router.js文件来统一定义，而每个接口的逻辑层则由单独的文件来处理，并按不同功能模块用不同文件夹来组织这些逻辑文件。

### 异步处理
我们先来回顾一下历史。

鉴于nodejs的回调机制，很多异步操作都需要回调来完成，如果你的逻辑足够复杂，很可能就会陷进回调地狱，

不得不说，promise是解决异步回调的一大进步，是一个非常优秀的解决方案。而由于promise的强大，生态圈出现了很多基于promise的优秀模块, 比如bluebird, q等等。

然而，promise并非终点，它只是弱化了回调地狱，并不能真正消除回调。使用promise仍然要处理很多复杂的逻辑，以及写很多的逻辑代码

而要消除回调，意味着要实现以同步的方式来写异步编程。

koa1实现同步写异步的关键点就是co。那么，co是如何实现同步写异步的呢？
```
# 正常的异步回调
var request = require('request');
var a = {};
var b = {};
request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        a.response = response;
        a.body = body;
        request('http://www.yahoo.com', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                b.response = response;
                b.body = body;
            }
        });
    }
});


# co异步处理

co(function *(){
  var a = yield request('http://google.com');    // 以同步的方式，直接拿到异步结果，并往下执行
  var b = yield request('http://yahoo.com');
  console.log(a[0].statusCode);
  console.log(b[0].statusCode);
})()
```

### async/await
为此，自nodejs发布到7.x以后，TJ 大神推出了koa2，内置co包，直接支持async/await。并将会在koa3中完全移除对generators的支持。
```
// 查询二级文章分类
  static async get_category(ctx) {                           // async声明这是一个async函数
   const data = await CategoryModel.find();          // await 获取异步结果
   if(!data) return ctx.error({msg: '暂无数据'});
   return ctx.success({ data });
  }

  // 查询分类菜单
  static async getmenu_category(ctx) {
   const data = await CategoryModel.find({}).populate('cate_parent');
   if(!data) return ctx.error({msg: '获取菜单失败!'});
   return ctx.success({ data });
  }
 ```

### 真正的最优方案是koa2+async/await+class的实现
是koa2+async/await+class的实现
```
# /server/router.js     // 组织api的接口层

 const router = require('koa-router')(); 
 const userctrl = require('../controllers/users/UserController');   // 引入用户模块逻辑层

 router
         //  用户模块api
       .post('/api/user/login',userctrl.login)         // 用户登录
       .post('/api/user/register',userctrl.register)   // 用户注册      
       .get('/api/user/logout',userctrl.logout)     // 用户退出      
       .put('/api/user/put',userctrl.put)               // 更改用户资料
       .put('/api/user/resetpwd',userctrl.resetpwd)        // 重置用户密码
       .delete('/api/user/deluser',resetpwd.deluser)   // 删除用户
       ……
```
然后是逻辑层
```
# /server/users/UserController.js  用户模块  

import mongoose from 'mongoose';
import md5 from 'md5';
const UserModel = mongoose.model('User');

class UserController {

  // 用户注册
   async register(ctx) {
      // await ……
   }

  // 用户登录
  async login(ctx) {
   // await ……
  }

   // 用户退出
  async logout(ctx) {
   // await ……
  }

  // 更新用户资料
  async put(ctx) {
   // await ……
  }

  // 删除用户
  async deluser(ctx) {
   // await ……
  }

 // 重置密码
  async resetpwd(ctx) {
   // await ……
  }

  ……

}
export default new UserController();
```
你甚至还可以用extends(继承)来实现更复杂的api。

但是，不知你有没有注意到一个细节，上面的例子用了new实例化。

实例化，意味着会消耗一定内存，消耗性能。虽然在后端这是种消耗不会很大。

但是作为一名优秀的程序员，我们尽量追求极致。

es6的class中，可用static来定义静态方法，甚至可以定义静态属性(es7才实现)。静态方法并不需要实例化就可以访问，也就意味着，使用static，你不需要new，你可以减少内存的损耗。

```
class UserController {

  // 用户注册
   static async register(ctx) {
      // await ……
   }

  // 用户登录
  static async login(ctx) {
   // await ……
  }

   // 用户退出
  static async logout(ctx) {
   // await ……
  }

  // 更新用户资料
  static async put(ctx) {
   // await ……
  }

  // 删除用户
  static async deluser(ctx) {
   // await ……
  }

 // 重置密码
  static async resetpwd(ctx) {
   // await ……
  }

  ……

export default UserController;

}
```


