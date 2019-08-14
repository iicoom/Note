# sass

世界上最成熟、最稳定、最强大的专业级CSS扩展语言！ [https://www.sass.hk/guide/](https://www.sass.hk/guide/)

## 混合器

网站中有几处小小的样式类似，使用变量来统一处理这种情况是非常不错的选择 要大段大段的重用样式的代码，可以通过sass的混合器实现大段样式的重用

混合器使用@mixin标识符定义，下边的这段sass代码，定义了一个非常简单的混合器，目的是添加跨浏览器的圆角边框。

```text
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

然后就可以在你的样式表中通过@include来使用这个混合器，放在你希望的任何地方。@include调用会把混合器中的所有样式提取出来放在@include被调用的地方。如果像下边这样写：

```text
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

//sass最终生成：
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

### 给混合器传参

混合器并不一定总得生成相同的样式。可以通过在@include混合器时给混合器传参，来定制混合器生成的精确样式。

```text
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

当混合器被@include时，你可以把它当作一个css函数来传参。如果你像下边这样写：

```text
a {
  @include link-colors(blue, red, green);
}

//Sass最终生成的是：

a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```

