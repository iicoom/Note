```
<form name="myForm" id="formid" action="/e:">
	<input type="text" name="name">
	<input type="text" name="age">
	<input type="submit" value="submitBtn">
	<input type="button" value="Click Me" onclick="formHandler()">
</form>

<script>

function checkUser(){ 
var result = document.getElementById(“userid”).value; 
var password = document.getElementById(“passid”).value;
 
if(result == “” ){ 
alert(“用户名不能为空”); 
return false; 
} 
if(password == “” ){ 
alert(“密码不能为空”); 
return false; 
} 
document.getElementById(“formid”).submit(); 

</script>
```
