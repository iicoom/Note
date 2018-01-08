> I18n fro koa, based on i18n-2. NOTE: If want to use koa-i18n, koa-locale must be required!

> Lightweight simple translation middleware for koa, based on i18n-2

```
const Koa = require('koa')
const convert = require('koa-convert')
const locale = require('koa-locale') //  detect the locale
const render = require('koa-swig')   //  swig render
const i18n = require('koa-i18n')

const app = new Koa()

// Required!
locale(app)

app.context.render = render({
  root: __dirname + '/views/',
  ext: 'html'
})

app.use(i18n(app, {
  directory: './config/locales',
  locales: ['zh-CN', 'en'], //  `zh-CN` defualtLocale, must match the locales to the filenames
  modes: [
    'query',                //  optional detect querystring - `/?locale=en-US`
    'subdomain',            //  optional detect subdomain   - `zh-CN.koajs.com`
    'cookie',               //  optional detect cookie      - `Cookie: locale=zh-TW`
    'header',               //  optional detect header      - `Accept-Language: zh-CN,zh;q=0.5`
    'url',                  //  optional detect url         - `/en`
    'tld',                  //  optional detect tld(the last domain) - `koajs.cn`
    function() {}           //  optional custom function (will be bound to the koa context)
  ]
}))
```