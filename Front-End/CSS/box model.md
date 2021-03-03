> 浏览器渲染引擎会根据CSS的盒子模型来渲染出文档的布局。CSS可以决定矩形box的size position 还有盒子的属性，如颜色，背景、边框等等。 每个box由4个部分构成，分别为它的 margin、border、padding、content

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

![pic](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model/boxmodel-(3).png)

## content area

## padding area

## border area

## margin area

## box-sizing
If the box-sizing property is set to content-box (default) and if the element is a block element, the content area's size can be explicitly defined with the width, min-width, max-width, height, min-height, and max-height properties.

如果css 盒子的box-sizing属性设置为 content-box
.box {
	box-sizing: content-box;
} 
这个盒子元素就是块元素，内容区域的大小就可以直接通过width, min-width, max-width, height, min-height, and max-height属性定义。


https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing

在 CSS 盒子模型的默认定义里，你对一个元素所设置的 width 与 height 只会应用到这个元素的内容区。如果这个元素有任何的 border 或 padding ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

box-sizing 属性可以被用来调整这些表现:

content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。

border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

border-box不包含margin
