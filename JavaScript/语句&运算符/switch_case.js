/*
switch(n)
{
case 1:
  执行代码块 1
  break;
case 2:
  执行代码块 2
  break;
default:
  n 与 case 1 和 case 2 不同时执行的代码
}
*/

// 工作原理：首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。
// 如果存在匹配，则与该 case 关联的代码块会被执行。请使用 break 来阻止代码自动地向下一个 case 运行。

// 显示今日的周名称。请注意 Sunday=0, Monday=1, Tuesday=2, 等等：
var day=new Date().getDay();
console.log(day)
switch (day)
{
case 0:
  x="Today it's Sunday";
  break;
case 1:
  x="Today it's Monday";
  break;
case 2:
  x="Today it's Tuesday";
  break;
case 3:
  x="Today it's Wednesday";
  break;
case 4:
  x="Today it's Thursday";
  break;
case 5:
  x="Today it's Friday";
  break;
case 6:
  x="Today it's Saturday";
  break;
}
console.log(x)


// 合并case类型
switch (prizeInfo.prize_id)
{
  case 1:
    msg_code="RANCH_ACTIVITY_PRIZE_ANNUAL_CARD"; // 会员卡
    msg_content = "恭喜小主，贺喜小主！您抽中了 <%=name%>！请及时在“发现”板块-活动页面填写地址。";
    break;
  case 2:
  case 3:
  case 4:
  case 5:
    msg_code = "RANCH_ACTIVITY_PRIZE_ENTITY_NOTIFY"; // 抽中实物
    msg_content = "恭喜小主，贺喜小主！您抽中了 <%=name%>！请及时在“发现”板块-活动页面填写地址。";
    break;
  case 8:
    msg_code="RANCH_ACTIVITY_PRIZE_E_CARD"; // 抽中京东E卡
    msg_content = "恭喜小主，贺喜小主！您抽中了 <%=name%>！请及时在“发现”板块-活动页面填写地址。";
    break;
}

/*
x 的结果：

Today it's Friday
亲自试一试
default 关键词
请使用 default 关键词来规定匹配不存在时做的事情：

实例
如果今天不是周六或周日，则会输出默认的消息：
*/

var day=new Date().getDay();
switch (day)
{
case 6:
  x="Today it's Saturday";
  break;
case 0:
  x="Today it's Sunday";
  break;
default:
  x="Looking forward to the Weekend";
}
console.log(x)