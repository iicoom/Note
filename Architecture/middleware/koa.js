const app = new Koa();

app.use(api());
app.use(ctx => {
    ctx.status = 404;
    ctx.body = { message: 'not found' };
});