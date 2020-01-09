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

## 模板内插入函数
```html
<form class="form-horizontal" name="parkingLotForm" id="parkingLotForm" action="/player/edit/parkingLot" method="post">
    <input type="hidden" class="form-control" id="id" name="uid" value="<%= id %>">
    <input type="hidden" class="form-control" id="sid" name="sid" value="<%= sid %>">
    <%
        function getRow(obj) {
            if(!obj || typeof obj !== 'object'){
                return 1;
            }
            let str = JSON.stringify(obj);
            return Math.ceil(str.length / 100);
        }
    %>
    <% if(ParkingLot){ %>
        <table class="table row table-hover table-condensed">
            <tbody>  
            <tr>
                <th><%= localizationData.hostParkVehicles %></th>
                <td>
                    <label for="hostParkVehicles"></label>
                    <textarea class="form-control" id="hostParkVehicles" name="hostParkVehicles" cols="30" rows="<%= getRow(ParkingLot.hostParkVehicles)%>"><%= JSON.stringify(ParkingLot.hostParkVehicles) %></textarea>
                </td>
            </tr>
        </table>
    <% } %>
</form>
```
