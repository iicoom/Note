## 客户端(浏览器端)数据存储技术概览
> 客户端(浏览器端)存储数据有诸多益处，最主要的一点是能快速访问(网页)数据。目前常见的浏览器端数据存储方法有：Cookies，Local Storage，Session Storage，IndexedDB。

https://www.cnblogs.com/reaf/p/6897193.html

### Cookies
> Cookies 是一种在文档内存储字符串数据最典型的方式。一般而言，cookies 会由服务端发送给客户端，客户端存储下来，然后在随后让请求中再发回给服务端。这可以用于诸如管理用户会话，追踪用户信息等事情。
此外，客户端也用使用 cookies 存储数据。因而，cookies 常被用于存储一些通用的数据，如用户的首选项设置。

Cookies 的 基本CRUD 操作
通过下面的语法，我们可以创建，读取，更新和删除 cookies:

// Create 
document.cookie = "user_name=Ire Aderinokun";   
document.cookie = "user_age=25;max-age=31536000;secure"; 

// Read (All) 
console.log( document.cookie ); 
 
// Update 
document.cookie = "user_age=24;max-age=31536000;secure";  
 
// Delete 
document.cookie = "user_name=Ire Aderinokun;expires=Thu, 01 Jan 1970 00:00:01 GMT"; 

**Cookies 的优点**

* 能用于和服务端通信
* 当 cookie 快要自动过期时，我们可以重新设置而不是删除

**Cookies 的缺点**

* 增加了文档传输的负载
* 只能存储少量的数据
* 只能存储字符串
* 潜在的 安全问题
* 自从有 Web Storage API (Local and Session Storage)，cookies 就不再被推荐用于存储数据了


> Web storage can be viewed simplistically as an improvement on cookies, providing much greater storage capacity (10 MB per origin in Google Chrome(https://plus.google.com/u/0/+FrancoisBeaufort/posts/S5Q9HqDB8bh), Mozilla Firefox, and Opera; 10 MB per storage area in Internet Explorer) and better programmatic interfaces.

### Local Storage
> Local Storage 是 Web Storage API 的一种类型，能在浏览器端存储键值对数据。Local Storage 因提供了更直观和安全的API来存储简单的数据，被视为替代 Cookies 的一种解决方案。
从技术上说，尽管 Local Storage 只能存储字符串，但是它也是可以存储字符串化的JSON数据。这就意味着，Local Storage 能比 Cookies 存储更复杂的数据。

Local Storage 的 基本CRUD 操作

通过下面的语法，我们可以创建，读取，更新和删除 Local Storage:
```js
// Create 
const user = { name: 'Ire Aderinokun', age: 25 }   
localStorage.setItem('user', JSON.stringify(user)); 
 
// Read (Single) 
console.log( JSON.parse(localStorage.getItem('user')) )  
 
// Update 
const updatedUser = { name: 'Ire Aderinokun', age: 24 }   
localStorage.setItem('user', JSON.stringify(updatedUser)); 
 
// Delete 
localStorage.removeItem('user');  
```
Local Storage 的优点

相比于Cookies：

其提供了更直观地接口来存储数据
更安全
能存储更多数据
Local Storage 的缺点
只能存储字符串数据



