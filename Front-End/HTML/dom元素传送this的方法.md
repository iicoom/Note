## 两种方法
```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div id="root">
	<div class="wrap">
		<input type="text" name="id" placeholder="id">
		<input type="text" name="count" placeholder="count">
		<button onclick="$(this).parent().detach()">remove</button>
		<button onclick="handler($(this))">confirm</button>
	</div>
	<div id="rawjs" onclick="rowJsHandler(this)" fuckAttr="Ha ha, it's fuck attr!">Click me!</div>
</div>
<div id="preview"></div>
<button onclick="addRow()">andRow</button>
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript">
	let arr = []
	function addRow() {
		const str = '<div class="wrap"><div class="wrap"><input type="text" name="id" placeholder="id"><input type="text" name="count" placeholder="count"></div><button onclick="$(this).parent().detach()">remove</button><button onclick="handler($(this))">confirm</button></div>';
		$("#root").append(str)
	}

	function handler(e) {
		console.log(e)
		console.log($(e).parent().find("input[name=id]").val())
		console.log($(e).parent().find("input[name=count]").val())
		arr.push({ id: $(e).parent().find("input[name=id]").val(), count: $(e).parent().find("input[name=count]").val()})
		$("#preview").text()
	}

	function rowJsHandler(elem) {
		alert(elem.getAttribute("fuckAttr"))
	}

	// jQuery可以更方便的获取父级元素
</script>
</body>
</html>
```
