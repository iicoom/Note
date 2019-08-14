# Debug

在 Flutter 里有几种调试方式。

* 断点调试。
* debugger 调试。
* rendering 调试。
* 日志调试。
* 运行状态调试。
* 真机调试。

## rendering 调试

rendering 即开启布局线，当打开 rendering 时，会在界面上看到一些布局线，以便于修复布局效果。

```text
import 'package:flutter/rendering.dart';

void main() {
  debugPaintSizeEnabled=true;
  runApp(MyApp());
}
```

