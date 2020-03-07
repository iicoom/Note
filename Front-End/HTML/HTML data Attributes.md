## 获取DOM元素自定义属性
```
如何获取Input标签自定义属性的值?
HTML代码：
<input type="hidden" value="${Name?if_exists}" id='ID' busCode = "${busCode?if_exists}" />

JavaScript代码：

因为busCode不是input标签原生的属性，所以不能使用"点"操作。

非标准属性，要用：obj.getAttribute("busCode");的方式。

错误的用法：var data = obj.busCode;

var data = document.getElementById("ID").getAttribute('busCode');

jQuery 可以使用$(e).attr('busCode')

自定义属性是比较好用的，尤其是表单中用来存放数据信息。
```

## HTML Global Attributes
https://www.w3schools.com/tags/ref_standardattributes.asp

The global attributes below can be used on any HTML element.
```
Attribute	                    Description

class                       	Specifies one or more classnames for an element (refers to a class in a style sheet)

data-*	                      Used to store custom data private to the page or application

draggable	                    Specifies whether an element is draggable or not

dropzone	                    Specifies whether the dragged data is copied, moved, or linked, when dropped

hidden	                      Specifies that an element is not yet, or is no longer, relevant

id	                          Specifies a unique id for an element

spellcheck	                  Specifies whether the element is to have its spelling and grammar checked or not

style	                        Specifies an inline CSS style for an element

title	                        Specifies extra information about an element
```

https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Using_data_attributes
> HTML5是具有扩展性的设计，它初衷是数据应与特定的元素相关联，但不需要任何定义。
data-* 属性允许我们在标准内于HTML元素中存储额外的信息，而不需要使用类似于 classList，标准外属性，DOM额外属性或是 setUserData 之类的技巧。

语法非常简单。所有在元素上以data-开头的属性为数据属性。比如说你有一篇文章，而你又想要存储一些不需要显示在浏览器上的额外信息。请使用data属性：
```
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```
在外部使用JavaScript去访问这些属性的值同样非常简单。你可以使用getAttribute()配合它们完整的HTML名称去读取它们，
但标准定义了一个更简单的方法：DOMStringMap你可以使用dataset读取到数据。

## Use the data-* attribute to embed custom data:

```html
<!DOCTYPE html>
<html>
<head>
<script>
function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
function showCustom(item) {
  var cutType = item.getAttribute("wtf");
  alert("The " + item.innerHTML + " is a " + cutType + ".")
}
</script>
</head>
<body>

<h1>Species</h1>
<p>Click on a species to see what type it is:</p>

<ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
  <li onclick="showCustom(this)" id="tarantula" wtf="pig">Peiqi</li>  
</ul>
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
<script type="text/javascript">
function dataTest() {
  var article = document.getElementById('electriccars');
 
  // alert(article.data-columns) // "3"
  // alert(article.data-index-number) // "12314"
  // alert(article.data-paren) // "cars"  这样是无法调用的
  alert(article.getAttribute("data-columns"))

}
dataTest()
</script>
</body>
</html>
```

