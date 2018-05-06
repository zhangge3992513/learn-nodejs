const router = require('koa-router')();

router.get('/timeout', async (ctx, next) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('/timeout');
      ctx.body = {
        data: [1, 2, 3, 4],
        msg: 'ok',
        errCode: 0,
      };
      resolve();
      // next();
    }, 5000);
  });
});

router.get('/users', (ctx, next) => {
  ctx.body = {
    data: [
      {

        id: 1,
        name: '张三',
      },
      {

        id: 2,
        name: '张三',
      },
      {

        id: 3,
        name: '张三',
      },
    ],
    msg: 'ok',
    errCode: 0,
  };
  next();
});

router.get('/user/:id', (ctx, next) => {
  ctx.body = {
    user: {
      id: 1,
      name: '张三',
    },
    msg: 'ok',
    errCode: 0,
  };
  console.log('1111');
  // next();
});

/**
 * !这个不会被触发
 * !由于上面已经有了同一个路由
 */
router.get('/user/:id', (ctx, next) => {
  ctx.body = {
    user: {
      id: 1,
      name: '张三2',
    },
    msg: 'ok',
    errCode: 0,
  };
  console.log('2222');
  // next();
});
router.post('/user/:id', (ctx, next) => {
  ctx.body = {
    user: {
      id: 1,
      name: '张三2',
    },
    msg: 'ok',
    mehtod: 'post',
    errCode: 0,
  };
  console.log('2222');
  // next();
});

module.exports = router;
