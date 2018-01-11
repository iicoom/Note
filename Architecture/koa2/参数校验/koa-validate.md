## 用法
import koaValidate from 'koa-validate';

koaValidate(app);

## method

ctx.checkBody('check').isIn(['Y', 'N', 'IGNORE'], ctx.i18n.__(ErrorCode.ACCOUNT_HAS_EXIST_FORMAT_ERROR));