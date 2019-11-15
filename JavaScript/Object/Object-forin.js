// 例1：Page地址  
var pageUrl = {  
        menu            :   "loadPage.htm?url=/collect/menu.page",          // 进入菜单页面  
        guangfaPage     :   "loadPage.htm?url=/collect/menu.page",          // 进入广发信息收集页面  
        pinganPage      :   "loadPage.htm?url=/collect/menu.page",          // 进入平安信息收集页面  
        nuonuoPage      :   "loadPage.htm?url=/collect/menu.page",          // 进入诺诺信息收集页面  
        youbangPage     :   "loadPage.htm?url=/collect/menu.page",          // 进入友邦信息收集页面  
        inputMobileNo  : "loadPage.htm?url=/collect/inputMobileNo.page",    // 进入输入手机号页面  
        readIdCard     : "loadPage.htm?url=/collect/readIdCard.page",       // 进入读取身份证页面  
        member         : "loadPage.htm?url=/collect/member.page",           // 进入输入会员卡号页面  
        bankCard       : "loadPage.htm?url=/collect/bankCard.page",         // 进入插入银行卡页面  
        url            : "loadPage.htm?url=/collect/url.page"               // 进入跳转url页面  
    }
  
for(var key in pageUrl){  
   console.log(key+" : "+ pageUrl[key]);  
}  

/**
 * 例2：
 * 在js中经常需要知道Object中的所有属性及值，然而若是直接弹出Object，则是直接显示一个对象，它的属性和值没有显示出来，
   不是我们想要的结果，从而需要遍历Object的所有属性。
 */
var obj = { name: "Jack", age: 28, sex: "man" }

var str="";
for (var key in obj){
	// console.log(key)
	str += (key +": "+obj[key] + "\n");	
}
console.log(str);

// 也可以用 JSON.stringify()
var temp = JSON.stringify(obj)
// "{"name":"Jack","age":28,"sex":"man"}"
JSON.parse(temp)
// {name: "Jack", age: 28, sex: "man"}


/**
 * for in 操作数组
 */
for(item in arr) {console.log(item)}
// 0
// 1
// 2
// 3
// 4