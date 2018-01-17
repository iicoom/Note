//Page地址  
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

console.log('========dash========')
for(var value in pageUrl){  
   console.log(value+" : "+ pageUrl[value]);
}  