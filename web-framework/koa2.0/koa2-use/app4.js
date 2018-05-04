const Koa = require('koa');
const serverStrtic = require('koa-static');
const { join } = require('path');

const app = new Koa();
const router = require('koa-router')();
const routers = require('./routes/routes');

app.use(serverStrtic(__dirname + '/public/html', { extensions: ['html'] })); // , { extensions: ['html'] }
app.use(serverStrtic(__dirname + '/public/img', { extensions: ['jpg'] }));
router.use((ctx, next) => {
  next();
  ctx.body.a = 123; // 这个会给body添加属性a,值为123,
});
app.use(router.routes());

/**
 *router.use 中间件
 *总会执行
 */
router.use(async (ctx, next) => {
  console.log('rouer.use 1.1');
  next();
  console.log('rouer.use 1.2');
});

/**
 * app.use中间件
 * ???: 需要最后执行next()才会执行这个中间件--why
 */
app.use(async (ctx, next) => {
  let timeout = null;
  await Promise.race([new Promise((resolve, reject) => {
    timeout = setTimeout(() => {
      ctx.status = 408;
      reject(new Error('Request timeout'));
      console.log('超时!');
    }, 5000); // 5s
  }),
  new Promise((resolve, reject) => {
    (async () => {
      await next();
      clearTimeout(timeout);
      // console.log('超时定时器清除!');
      resolve();
    })();
  }),
  ]);
});

// 加载路由
router.use(routers.routes());


if (!module.parent) {
  app.listen(3000);
}
// console.log(__dirname + '/public/a');

