## CORS
Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器  让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。

## Same-origin policy 同源策略
the same-origin policy is an important concept in the web application security model. Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin. An origin is defined as a combination of URI scheme, host name, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.
同源策略在web应用安全模型中是一个重要的概念。在这个政策下，浏览器允许第一个网页中包含的脚本可以获取第二个网页的数据，前提是这两个网页在同一个源下。

同源：需要URI、主机名、端口都相同。

这个策略可以防止一个网页上的恶意脚本通过DOM获取其他网页的敏感数据。

It is very important to remember that the same-origin policy applies only to scripts. This means that resources such as images, CSS, and dynamically-loaded scripts, can be accessed across origins via the corresponding HTML tags
需要牢记的一点就是同源策略只应用于脚本，这意味着像images、css和其他动态加载的脚本可以跨域访问通过对应的标签。

## Origin determination rules
Compared URL	                                            Outcome	Reason
http://www.example.com/dir/page2.html	                    Success	Same scheme, host and port
http://www.example.com/dir2/other.html	                    Success	Same scheme, host and port
http://username:password@www.example.com/dir2/other.html	Success	Same scheme, host and port
http://www.example.com:81/dir/other.html	                Failure	Same scheme and host but different port
https://www.example.com/dir/other.html	                    Failure	Different scheme
http://en.example.com/dir/other.html	                    Failure	Different host
http://example.com/dir/other.html	                        Failure	Different host (exact match required)
http://v2.www.example.com/dir/other.html	                Failure	Different host (exact match required)
http://www.example.com:80/dir/other.html	                Depends	Port explicit. Depends on implementation in browser.

scheme: http https

## JSONP
Since HTML <script> elements are allowed to retrieve and execute content from other domains, a page can bypass the same-origin policy and receive JSON data from a different domain by loading a resource that returns a JSONP payload. J
HTML的script标签允许检索和执行其他域名下的内容，一个网页可以通过这个标签绕过同源策略。

## CORS与JSONP
CORS与JSONP的使用目的相同，但是比JSONP更强大。

JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

## Node中对CORS设置
```JavaScript
// responseJson.js
module.exports = () => {
    return async function(ctx, next) {

        ctx.set('Content-Type', 'application/json');
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT');
        ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, content-type, X-Authorization, X-uuid');

        ctx.json = json.bind(ctx);
        ctx.halt = halt.bind(ctx);

        try {
            await next();
        } catch (e) {
            return ctx.halt(e.code, e.message);
        }
    };
};
```