const Koa = require('koa');
module.exports = new Koa();
const app = module.exports;
app.use(async (ctx) => {
  ctx.state.user = '123'; // view需要使用
});
/* app.use(async (ctx) => {
  await ctx.render('user', { user });
}); */

if (!module.parent) app.listen(3000);
