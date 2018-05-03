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
  // next();
});


module.exports = router;
