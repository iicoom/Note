## html() text()
<p>Hi!</p><p>Hello!</p>

$('p').text();//返回内容为所有p元素的内容叠加:Hi!Hello!
$('p').html();//返回内容为第一个p元素的内容:Hi!


<p id="pid">
	p的内容
    <strong>Hi!</strong>
</p>

$('#pid').html();//返回p元素的全部内容，包括内容里的标签，返回:<strong>Hi!</strong>
$('#pid').html();//提取出 p的内容Hi!