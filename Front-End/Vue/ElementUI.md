## 组件事件绑定 @
@click

```html
 <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
```

## 组件接受的变量 :
:visible.sync="visible"

## Button 

