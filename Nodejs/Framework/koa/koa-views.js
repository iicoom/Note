var views = require('koa-views');

// Must be used before any router is used
app.use(views(__dirname + '/views', {
  map: {
    html: 'underscore'
  }
}));

app.use(async function (ctx) {
  ctx.state = {
    session: this.session,
    title: 'app'
  };

  await ctx.render('user', {
    user: 'John'
  });
});


// 或者
// Must be used before any router is used
app.use(views(`${__dirname}/view`, {
  map: {
    html: 'ejs',
  },
}));

router
	.get('/comments', async (ctx) => {
	      const ip = Utility.getClientIp(ctx.request);
	      const result = await (new CommentService()).findList(
	        { reply_to: { $exists: false } },
	        { page: 1, size: 20, sort: { create_at: 1 }, 
	        });
	      console.log(result);
	      await ctx.render('comment', { ip, data: result.list });
	    })