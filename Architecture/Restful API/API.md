> “REST就是Representational State Transfer的缩写呀，翻译为中文就是‘表述性状态转移’”

* GET（SELECT）：从服务器取出资源（一项或多项）。
* POST（CREATE）：在服务器新建一个资源。
* PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
* PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
* DELETE（DELETE）：从服务器删除资源。

* GET /zoos：列出所有动物园
* POST /zoos：新建一个动物园
* GET /zoos/ID：获取某个指定动物园的信息
* PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
* PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
* DELETE /zoos/ID：删除某个动物园
* GET /zoos/ID/animals：列出某个指定动物园的所有动物
* DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物

* 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
* 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
* 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
* 204 NO CONTENT - [DELETE]：用户删除数据成功。
* 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
* 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
* 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
* 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
* 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
* 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
* 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
* 500 INTERNAL SERVER ERROR - ：服务器发生错误，用户将无法判断发出的请求是否成功。


[如何给老婆解释什么是RESTful](https://zhuanlan.zhihu.com/p/30396391)
## Level 1 - 面向资源
```
/orders

{
    "addOrder": {
        "orderName": "latte"
    }
}
```
订单是一种资源，我们可以理解为是咖啡厅专门管理订单的人，他可以帮我们处理所有有关订单的操作，包括新增订单、修改订单、取消订单等操作”
“接着还是会返回订单的编号给我们”
```
{
    "orderId": "123456"
}
```
“下面，我们还是要查询会员卡余额，这次请求的资源变成了cards”
```
/cards

{
    "queryBalance": {
        "cardId": "886333"
    }
}
```
“接下来是取消订单”
```
/orders

{
    "deleteOrder": {
        "orderId": "123456"
    }
}
```

## Level 2 - 打上标签
都在请求上面写上大大的‘POST’，表示这是一笔新增资源的请求”

“其他种类的请求，比如查询类的，用‘GET’表示，删除类的，用‘DELETE’表示”
“还有修改类的，修改分为两种，第一种，如果这个修改，无论发送多少次，最后一次修改后的资源，总是和第一次修改后的一样，比如将拿铁改为猫屎，那么用‘PUT’表示；第二种，如果这个修改，每次修改都会让这个资源和前一次的不一样，比如是加一杯咖啡，那么这种请求用‘PATCH’或者‘POST’表示”
```
POST /orders

{
    "orderName": "latte"
}
```
"请求的内容简洁多啦，不用告诉店员是addOrder，看到POST就知道是新增"

“接着是查询会员卡余额，这次也简化了很多”
```
GET /cards

{
    "cardId": "886333"
}
“这个请求我们还可以进一步优化为这样”

GET /cards/886333
```
“没错，接着，取消订单”
```
DELETE /orders/123456
```

## Level 3 - 完美服务
顾客下了单之后，不仅给他们返回订单的编号，还给顾客返回所有可以对这个订单做的操作，比如告诉用户如何删除订单
```
POST /orders

{
    "orderName": "latte"
}
```
“但是这次返回时多了些内容”
```
{
    "orderId": "123456",
    "link": {
        "rel": "cancel",
        "url": "/order/123456"
    }
}
```
“这次返回时多了一项link信息，里面包含了一个rel属性和url属性，rel是relationship的意思，这里的关系是cancel，url则告诉你如何执行这个cancel操作，接着你就可以这样子来取消订单啦”
```
DELETE /orders/123456
```

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


