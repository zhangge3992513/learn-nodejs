const Koa = require('koa');
const serverStrtic = require('koa-static');
const { join } = require('path');

const app = new Koa();
const router = require('koa-router')();
const routers = require('./routes/routes');
const routersBlog = require('./routes/blogRoutes');
/*
 错误处理中间件
router.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message;
  }
}); */
app.use(serverStrtic(__dirname + '/public/html', { extensions: ['html'] })); // , { extensions: ['html'] }
app.use(serverStrtic(__dirname + '/public/img', { extensions: ['jpg'] }));
router.use(async (ctx, next) => {
  await next();
  ctx.body.a = 123; // 这个会给body添加属性a,值为123,
});
app.use(router.routes());

/**
 * 处理错误中间件, 出放在这里是不行的,
 */
router.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message;
  }
});

/**
 *router.use 中间件
 *总会执行
 */
router.use(async (ctx, next) => {
  console.log('rouer.use 1.1');
  // throw new Error('此处抛出了一超级错误!');
  await next();
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


/**
 *router.use 中间件
 *不一定会执行, 如果请求是上面的user/1, 这个就不会执行了
 *如果上面的routers路由执行了 next(); 则会执行到这里.如: /user/1
 *如果没有执行next();则不会执行这个如: /users
 */
router.use(async (ctx, next) => {
  console.log('rouer.use 2.1');
  // throw new Error('此处抛出了一超级错误!'); //
  await next();
  console.log('rouer.use 2.2');
});
/**
 *router.use 中间件
 *不一定会执行, 如果请求是上面的user/1, 这个就不会执行了
 *如果上面的routers路由执行了 next(); 则会执行到这里.如: /user/1
 *如果没有执行next();则不会执行这个如: /users
 */
app.use(async (ctx, next) => {
  console.log('rouer.use 3.1');
  // throw new Error('此处抛出了一超级错误!'); //
  await next();
  console.log('rouer.use 3.2');
});
router.use(routersBlog.routes());


if (!module.parent) {
  app.listen(3000);
}
// console.log(__dirname + '/public/a');

