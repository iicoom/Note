# koa-validate

## 用法

import koaValidate from 'koa-validate';

koaValidate\(app\);

## method

ctx.checkBody\('check'\).isIn\(\['Y', 'N', 'IGNORE'\], ctx.i18n.\_\_\(ErrorCode.ACCOUNT\_HAS\_EXIST\_FORMAT\_ERROR\)\);

