const Koa = require('koa');

const fs = require('fs');
const { join, extname } = require('path');
const serverStrtic = require('koa-static');

const app = new Koa();
const router = require('koa-router')();
const routers = require('./routes/routes');

app.use(serverStrtic(__dirname, '/public/html', { extensions: ['html'] }));
/* app.use('/aaa', (ctx, next) => {
  next();
  ctx.body = 123;
}); */
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
      console.log('超时定时器清除!');
      resolve();
    })();
  }),
  ]);
});

app.use(async (ctx, next) => {
  // console.log(ctx.path, ctx.url, ctx.origin, ctx.originalUrl);
  console.log(ctx.origin + ctx.path);
  const reqPath = ctx.path;
  // console.log(path.substring(path.lastIndexOf('/') + 1));
  const fileExtname = extname(reqPath);
  // console.log(reqPath, fileExtname);
  if (fileExtname !== '' && fileExtname !== '.') {
    const fileStream = fs.createReadStream(join(__dirname, 'public/', reqPath));
    ctx.set('content-type', 'text/html');
    ctx.body = fileStream;
  } else {
    await next();
  }
});

// 加载路由
router.use(routers.routes());


if (!module.parent) {
  app.listen(3000);
}

