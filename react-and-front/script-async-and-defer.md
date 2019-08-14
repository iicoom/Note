# script async&defer

> Efficiently load JavaScript with defer and async

[https://flaviocopes.com/javascript-async-defer/](https://flaviocopes.com/javascript-async-defer/)

When loading a script on an HTML page, you need to be careful not to harm the loading performance of the page. Depending on where and how you add your scripts to an HTML page will influence the loading time

## The position matters

```text
<html>
  <head>
    <title>Title</title>
    <script src="script.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```

This is bad because there is a lot of delay introduced. A very common solution to this issue is to put the script tag to the bottom of the page, just before the closing &lt;/body&gt; tag.

## Async and Defer \(异步和延迟加载\)

Both async and defer are boolean attributes. Their usage is similar:

```text
<script async src="script.js"></script>

<script defer src="script.js"></script>
```

