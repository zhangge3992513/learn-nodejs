const router = require('koa-router')();

router.post('/delete/blog/:blogId', async(ctx, next) => {
  ctx.body = 123;
  await next();
});

router.get('/modify/blog/:blogId/:kindName', async (ctx, next) => {
  ctx.body = 1234;
  await next();
});
module.exports = router;
