## html() text() val()
```html
<p>Hi!</p><p>Hello!</p>

$('p').text();//返回内容为所有p元素的内容叠加:Hi!Hello!
$('p').html();//返回内容为第一个p元素的内容:Hi!


<p id="pid">
	p的内容
    <strong>Hi!</strong>
</p>

$('#pid').html();//返回p元素的全部内容，包括内容里的标签，返回:<strong>Hi!</strong>
$('#pid').html();//提取出 p的内容Hi!

// val() 通常用于设置input的value，不传参数取input的值
$("button").click(function(){
    $("input:text").val("Glenn Quagmire");
});
```

## remove() empty() detach()
remove() - 删除被选元素（及其子元素）
empty() - 从被选元素中删除子元素
detach() - 从DOM中移除被选中元素

## hide() show() toggle()
```
$("#hide").click(function(){
  $("p").hide();
});
 
$("#show").click(function(){
  $("p").show();
});

$("button").click(function(){
  $("p").toggle();
});
```

## css() attr()
```
$("p").css("background-color","yellow");

$("p").css("display","none");
```
