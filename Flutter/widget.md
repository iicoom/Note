> widgets takes inspiration from React. 灵感来源于React，When a widget’s state changes, the widget rebuilds its description.

最小Flutter APP 只需调用runApp()
```
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
### Text

### Row, Column
Its design is based on the web’s flexbox layout model.

### Stack
Instead of being linearly oriented (either horizontally or vertically), a Stack widget lets you stack widgets on top of each other in paint order. 

z轴方向的

### Container
The Container widget lets you create a rectangular visual element. A container can be decorated with a BoxDecoration, such as a background, a border, or a shadow. 

```
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

### Scaffold
提供默认的AppBar，body

### 