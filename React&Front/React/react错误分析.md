## import PropTypes from 'prop-types' 的作用
用于验证传入的props是否符合预期类型

## constructor(props) {
    super(props);
    this.state = { Info: {} };
  }

## 模块导出和引入方式不正确
```
warning.js?6327:33 Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```
