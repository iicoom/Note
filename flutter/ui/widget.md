# widget

> widgets takes inspiration from React. 灵感来源于React，When a widget’s state changes, the widget rebuilds its description.

最小Flutter APP 只需调用runApp\(\)

```text
import 'package:flutter/material.dart';

void main() {
  runApp(
    Center(
      child: Text(
        'Hello, world!',
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```

这个应用包括2个widgets Center 和 他的 child Text

A widget’s main job is to implement a build function

## 组成APP的2大类widget

### StatelessWidget

### StatefulWidget

## Basic widgets

### Scaffold

Scaffold是实现Material Design的布局结构。也就是说， MaterialApp 的 child 是 Scaffold Widget。

在Material设计中定义的单个界面上的各种布局元素，在 Scaffold 中都有支持，比如 左边栏（Drawers）、snack bars、以及 bottom sheets。

Scaffold 有下面几个主要属性：

appBar body floatingActionButton persistentFooterButtons 固定在下方显示的按钮，比如对话框下方的确定、取消按钮 drawer：侧边栏控件 backgroundColor： 内容的背景颜色 bottomNavigationBar

## layout widget

### “Expanded”，“Flexible”

Flutter常用widget “Expanded”，“Flexible”, Expanded 这是个用来让子项具有伸缩能力的widget, Expanded继承自Flexible，但是它们两个的区别并不大

### SizedBox

A box with a specified size.

The new SizedBox.expand constructor can be used to make a SizedBox that sizes itself to fit the parent. It is equivalent to setting width and height to double.infinity.

### Text

### Row, Column

Its design is based on the web’s flexbox layout model.

### Stack

Instead of being linearly oriented \(either horizontally or vertically\), a Stack widget lets you stack widgets on top of each other in paint order.

z轴方向的

### Container

The Container widget lets you create a rectangular visual element. A container can be decorated with a BoxDecoration, such as a background, a border, or a shadow.

```text
Center(
  child: Container(
    margin: const EdgeInsets.all(10.0),
    color: Colors.amber[600],
    width: 48.0,
    height: 48.0,
  ),
)
```

### Divider

