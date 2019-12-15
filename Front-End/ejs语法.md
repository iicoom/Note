## <%= 变量名 %>
```
<!-- ejs文件 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <%=name%>
</body>
</html>
```

## <% Javascript代码 %>
```
<!-- ejs文件 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <%for(var i=0;i<json.arr.length;i++){%>
    <div>user:<%=json.arr[i].user%> pass:<%=json.arr[i].pass%><div>
  <%}%>
</body>
</html>
```

## <%- include('header'); -%>
```
<%- include('header'); -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer'); -%>
```
