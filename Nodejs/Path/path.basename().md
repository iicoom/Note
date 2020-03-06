[官方](http://nodejs.cn/api/path/path_basename_path_ext.html)

path.basename() 方法返回 path 的最后一部分，类似于 Unix 的 basename 命令。 尾部的目录分隔符将被忽略，参阅 path.sep。

## 参数
- path <string>
- ext <string> 可选的文件扩展名。
- 返回: <string>

```
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```
