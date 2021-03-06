## SSR：server side render
SSR（Server-Side Rendering）并不是什么新奇的概念，前后端分层之前很长的一段时间里都是以服务端渲染为主（JSP、PHP），在服务端生成完整的 HTML 页面

### SSR的优势
1. 更利于SEO:不同爬虫工作原理类似，只会爬取源码，不会执行网站的任何脚本（Google除外，据说Googlebot可以运行javaScript）。使用了React或者其它MVVM框架之后，页面大多数DOM元素都是在客户端根据js动态生成，可供爬虫抓取分析的内容大大减少
2. 首屏的渲染是node发送过来的html字符串，并不依赖于js文件了，这就会使用户更快的看到页面的内容。尤其是针对大型单页应用，打包后文件体积比较大，普通客户端渲染加载所有所需文件时间较长，首页就会有一个很长的白屏等待时间。

### CSR（Client-side rendering）
与CSR模式相比，SSR 的性能优势体现在 2 方面：
1. 网络链路:省去了客户端二次请求数据的网络传输开销
服务端的网络环境要优于客户端，内部服务器之间通信路径也更短

2. 内容呈现:首屏加载时间（FCP）更快,浏览器内容解析优化机制能够发挥作用

### 如何利用存量 CSR 代码实现同构
为了降级、复用、降低迁移成本等目的，通常会采用一套 JavaScript 代码跨客户端、服务端运行的同构方式来实现 SSR，然而，要让现有的 CSR 代码在服务端跑起来，先要解决诸多问题，例如：

客户端依赖：分为 API 依赖和数据依赖两种，比如window/document之类的 JS API、设备相关数据信息（屏幕宽高、字体大小等）

生命周期差异：例如 React 中，componentDidMount在服务端不执行

异步操作不执行：服务端组件渲染过程是同步的，setTimeout、Promise之类的都等不了

依赖库的适配：React、Redux、Dva 等等，甚至还有第三方库等不确定能否跑在 universal 环境，是否需要跨环境共享状态，以状态管理层为例，SSR 要求其 store 必须是可序列化的

两边共享状态：每一份需要共享的状态都要考虑（服务端）如何传递、（客户端）如何接收

http://www.ayqy.net/blog/ssr-pros-and-cons/
