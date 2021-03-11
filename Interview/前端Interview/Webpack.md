[Webpack 5 release (2020-10-10)](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)

This release focus on the following:
- Improve build performance with Persistent Caching. 提升编译性能
- Improve Long Term Caching with better algorithms and defaults. 算法改进Long Term Caching
- Improve bundle size with better Tree Shaking and Code Generation. 打包体积优化
- Improve compatibility with the web platform. 
- Clean up internal structures that were left in a weird state while implementing features in v4 without - introducing any breaking changes.
- Prepare for future features by introducing breaking changes now, allowing us to stay on v5 for as long - as possible.

## webpack了解多少，自己做了哪些配置
### loader和plugins的区别，有没有手写过loader

## page.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    ...
  </head>
  <body>
    ...
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

## webpack.config.js
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

### Asset Management (Loading CSS /Loading Images/Loading Fonts/Loading Data)
npm install --save-dev style-loader css-loader
```js
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };
```