https://www.html.cn/book/css/properties/positioning/z-index.htm

<!DOCTYPE html>
<html>
<head>
	<title>z-index</title>
	<style type="text/css">
		.masker {
			background-color: rgba(0,0,0, 0.5);
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 10;
		}
		.parent {
			width: 1000px;
			height: 800px;
			background-color: blue;
			position: absolute;
			z-index: 9;
		}
		.parent:before {
			content: "llllllll";
			display: block;
			height: 30px;
		}
		.child {
			width: 500px;
			height: 400px;
			background-color: red;
			position: absolute;
			z-index: 11;
		}
	</style>
</head>
<body>
	<div class="parent">
		<div class="child"></div>
	</div>
	<div class="masker"></div>
</body>
</html>
