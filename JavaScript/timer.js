// setInterval()与setTimeout()计时器
/*
JavaScript是单线程语言，但是它可以通过设置超时值和间歇时间值来指定代码在特定的时刻执行。
超时值是指在指定时间之后执行代码，间歇时间值是指每隔指定的时间就执行一次代码。
*/

var Timer = setTimeout(function(){
    console.log(Timer);
},1000);

// 1818  Timer 是定时器的标号，过时变为undefined

const timer = setInterval(async function(){
  const { data: { status } } = await (new Transfer()).getProgress(ctx.request.body.taskid)
  console.log('progress:', status)
  if (status===9) {
    clearInterval(timer)
  }
}, 10*1000)