// koa
router
    .param('id', async (id, ctx, next) => {
        const userInfo = await getUserById(id);
        if (userInfo) {
            global.user = userInfo;
        } else {
            throw new ClientError(ctx.i18n.__('parameter.error'));
        }

        await next();
    })
    .get('/users', needLogin, needAdmin, async ctx => {
        const condition = {
            keyWord: ctx.request.query.keyWord,
            mobile: ctx.request.query.mobile,
            idCard: ctx.request.query.idCard,
            isRealName: ctx.request.query.isRealName,
            startTime: ctx.request.query.startTime,
            endTime: ctx.request.query.endTime,
            gradeId: ctx.request.query.gradeId,
            page: ctx.request.query.page || 1,
            size: ctx.request.query.size || 15
        };
        ...
        ctx.body = { count: userList.count, data: result };
    })

// needLogin
export async function needLogin(ctx, next) {
  const sessionUserInfo = ctx.session.userInfo;
  if (!!sessionUserInfo) {
    return await next();
  }
  throw new AuthError('请先登录');
}