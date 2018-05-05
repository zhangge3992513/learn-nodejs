const router = require('koa-router')();

router.get('/login', (ctx, next) => {
  ctx.body = 'login!';
});
module.exports = router;
